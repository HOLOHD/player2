#!/bin/bash

FUNCTION=$1

CONFIG="/boot/config.txt"
HEIGHT=""
WIDTH=""
DNS_ENTRY_FILE="/etc/resolv.conf.head"
HOME_DIR=$(sudo find / -path "*/player2/package.json" 2> /dev/null | sed -e "s|/player2/package.json$||")

Change_Hostname() {
  DHCLIENT="/etc/dhcp/dhclient.conf"
  HOSTS="/etc/hosts"
  newname=$1

  echo " Change Host Name To :  $newname"

  sudo sed -i "s/.*127.0.1.1.*/127.0.1.1	$newname/" $HOSTS
  sudo sh -c "echo $newname > /etc/hostname"

  sudo hostname $newname

  #sudo sed -i "s/.*send host-name \".*/send host-name \"$newname\";/" $DHCLIENT
  #sudo sed -i "s/^send host-name =.*/#send host-name = gethostname();/" $DHCLIENT
}

downgrade() {
  ####################################################################
  # this script will take care of restoring the old image in case of issue with new one
  #move the previous image
  #reboot
  #####################################################################

  pm2 stop piSignage
  killall -s 9 chromium
  killall -s 9 feh
  killall -s 9 chromium-browser

  cd $HOME

  echo "rolling back to previous release"

  if [ -d "$HOME/player2.prev"  ]
  then
      sudo rm -rf  $HOME/player2.problem
      mv  $HOME/player2  $HOME/player2.problem
      cp -a  $HOME/player2.prev/  $HOME/player2
      sync
      sudo systemctl reboot
  fi


}

Change_Dns() {
  echo "*** Change DNS To : $1 $2"
  # sudo mv  /etc/resolv.conf  /etc/resolv.conf.bak
  # echo -e "nameserver $1 \nnameserver $2" >> ${HOME_DIR}/resolv.conf
  # sudo mv ${HOME_DIR}/resolv.conf /etc/resolv.conf
  if [ -z $1 ]; then
    return 0
  fi

  NAME_SERVER_STR=''

  # check first entry
  if [ ! -z "$1" ]; then
    NAME_SERVER_STR="nameserver $1"
  fi

  # append second entry if present
  if [ ! -z "$2" ]; then
    NAME_SERVER_STR="${NAME_SERVER_STR}\nnameserver $2"
  fi

  echo -e "${NAME_SERVER_STR}" | sudo tee "${DNS_ENTRY_FILE}"
  return 0
}

Factory_Reset() {
  HOSTNAME=$(id -un)

  #change dispaly settings
  echo "*** Reset Dispaly Settings ***"
  sudo sed 's/.*disable_overscan.*/disable_overscan=1/' -i /boot/config.txt
  sudo sed 's/.*overscan_scale.*/overscan_scale=0/' -i /boot/config.txt
  #sudo sed 's/.*hdmi_group.*/hdmi_group=1/' -i /boot/config.txt

  # make screen auto
  AutoEDID
  LandScape

  sudo sed 's/.*hdmi_force_hotplug.*/hdmi_force_hotplug=1/' -i /boot/config.txt
  #sudo sed -i -e 's/.*overscan_left.*/\#overscan_left=40/' -e 's/.*overscan_right.*/\#overscan_right=40/' -e 's/.*overscan_top.*/\#overscan_top=20/' -e 's/.*overscan_bottom.*/\#overscan_bottom=20/' -e 's/.*framebuffer_width.*/framebuffer_width=1280/' -e 's/.*framebuffer_height.*/framebuffer_height=720/'  /boot/config.txt

  sudo sed -i 's/.*XKBLAYOUT=.*/XKBLAYOUT="us"/' /etc/default/keyboard

  sudo sed -i 's/.*display_rotate.*/display_rotate=0/' /boot/config.txt

  # remove settings and config
  echo "*** Reset config/setting ***"
  sudo rm -rf ${HOME_DIR}/player2/config/_device-settings.json
  sudo rm -rf ${HOME_DIR}/player2/config/_media-settings.json

  # change ht passwd file
  echo 'pi:$apr1$G4yYdggH$aqJwlrg6yXYERl4DCZ2DT1' >${HOME_DIR}/player2/htpasswd

  # change hostname , do not use any command after this step
  if [ $HOSTNAME == "raspberrypi" ]; then
    echo "NO change to HOSTNAME"
  else
    HOSTNAME="raspberrypi"
    Change_Hostname $HOSTNAME
  fi
  echo "*** Changed name to  $HOSTNAME ***"

  #change DNS server to default
  Change_Dns "8.8.4.4" "8.8.8.8"
}

One_Time() {
  # script to add execute permission
  chmod -R +x shell-scripts/upgrade_scripts/*
  node pi-upgrade.js
}

Change_SSH_Password() {
  # Checked to work with player2
  echo "Changing SSH password"

  NEW_PASSWORD=$1
  if [ -z $NEW_PASSWORD ]; then
    echo "Password empty"
    exit 1
  fi

  USER_NAME=$(id -u -n)
  if [ -z $USER_NAME ]; then
    echo "USER NAME empty"
    exit 1
  fi

  sudo passwd ${USER_NAME} <<-EOF
		${NEW_PASSWORD}
		${NEW_PASSWORD}
	EOF
}
new_wifi_entry() {
  WIFI_SUPPLICANT=/etc/wpa_supplicant/wpa_supplicant.conf

  sudo sed -i '/update_config=1/q0' $WIFI_SUPPLICANT
  sudo echo "country=${2} " >>$WIFI_SUPPLICANT

  sudo echo "network={" >>$WIFI_SUPPLICANT
  sudo echo "  ssid=\"${4}\" " >>$WIFI_SUPPLICANT
  if [ -z ${5} ]; then
    sudo echo "  key_mgmt=NONE " >>$WIFI_SUPPLICANT
  else
    sudo echo "  psk=\"${5}\" " >>$WIFI_SUPPLICANT
  fi

  if [ $3 = true ]; then
    sudo echo "  scan_ssid=1 " >>$WIFI_SUPPLICANT
  fi

  sudo echo "}" >>$WIFI_SUPPLICANT

  sudo wpa_cli -i ${1} reconfigure

  return 0
}

do_ip_settings() {
  DHCPCD_FILE=/etc/dhcpcd.conf
  echo "Deleting static IP lines in $DHCPCD_FILE if present"
#  if grep -q "^interface ${1}" $DHCPCD_FILE; then
#    sed -i "/^interface ${1}/,+4d" ${DHCPCD_FILE}
#  fi
  sudo sed -i "/^interface ${1}/,+4d" ${DHCPCD_FILE}

  if [[ ! -z "${2}" ]] && [[ ! -z "${3}" ]] && [[ ! -z "${4}" ]]; then
    echo "interface ${1}" | sudo tee -a ${DHCPCD_FILE}
    echo "      static ip_address=${2}" | sudo tee -a ${DHCPCD_FILE}
    echo "      static routers=${3}" | sudo tee -a ${DHCPCD_FILE}
    echo "      static domain_name_servers=${4}" | sudo tee -a ${DHCPCD_FILE}
  fi
}

Enable_Access_Point() {
  # Don't change if current mode is same
  # WIFI_INTERFACE=$(sudo ifconfig -a | sed -e 's/[ \t].*//;/^$/d' -e 's/://' | grep wl)
  WIFI_INTERFACE=$(sudo iw dev | awk '$1=="Interface"{print $2}')
  if grep -q "^denyinterfaces ${WIFI_INTERFACE}" /etc/dhcpcd.conf; then
    echo "already in AP mode"
    return 0
  fi

  if [ ! -f "/etc/hostapd/hostapd.conf" ]; then
    echo " ============== copy setting hostapd.conf file ===================="
    sudo cp ${HOME_DIR}/player2/shell-scripts/network/hostapd.conf /etc/hostapd/
  fi

  sudo sed -i "s/wlan0/${WIFI_INTERFACE}/g" /etc/hostapd/hostapd.conf
  sudo chmod 755 /etc/hostapd/hostapd.conf
  CPUID=$(cat /sys/class/net/e[nt]*/address | sed -e "s/://g")
  ACCESS_POINT_NAME=$(echo "${CPUID: -4}")
  sudo sed -i 's/^ssid=.*/ssid=piplayer_'$ACCESS_POINT_NAME'/' /etc/hostapd/hostapd.conf
  sudo sed -i 's|.*#DAEMON_CONF=""*.|DAEMON_CONF="/etc/hostapd/hostapd.conf"|' /etc/default/hostapd

  #if [ ! -f  "/etc/dnsmasq.conf" ];then
  sudo cp ${HOME_DIR}/player2/shell-scripts/network/dnsmasq.conf /etc/dnsmasq.conf
  sudo sed -i "s/wlan0/${WIFI_INTERFACE}/g" /etc/dnsmasq.conf
  sudo chmod 755 /etc/dnsmasq.conf
  #fi

  if grep -q "denyinterfaces ${WIFI_INTERFACE}" /etc/dhcpcd.conf; then
    sudo sed -i "s/.*denyinterfaces ${WIFI_INTERFACE}*./denyinterfaces ${WIFI_INTERFACE}/" /etc/dhcpcd.conf
  else
    echo "denyinterfaces ${WIFI_INTERFACE}" | sudo tee -a /etc/dhcpcd.conf
  fi

  echo "Adding wifi static IP info /etc/dhcpcd.conf"
  sed -i "/^interface ${WIFI_INTERFACE}/d" /etc/dhcpcd.conf
  sed -i '/static ip_address=192.168.100.1/d' /etc/dhcpcd.conf
  sed -i '/nohook wpa_supplicant/d' /etc/dhcpcd.conf
  sudo sed -i "/denyinterfaces ${WIFI_INTERFACE}/iinterface ${WIFI_INTERFACE}\n\tstatic ip_address=192.168.100.1/24\n\tnohook wpa_supplicant\n" /etc/dhcpcd.conf

  #delete the network info if present
  sudo sed -i '/network={/,+4d' /etc/wpa_supplicant/wpa_supplicant.conf

  # Start And enable service
  sudo systemctl enable dnsmasq.service
  sudo systemctl start dnsmasq.service

  sudo systemctl unmask hostapd.service
  sudo systemctl enable hostapd.service
  sudo systemctl daemon-reload

  sudo systemctl start hostapd.service
  echo "Wi-fi in Access Point Mode"
}

Disable_Access_Point() {
  # WIFI_INTERFACE=$(sudo ifconfig -a | sed -e 's/[ \t].*//;/^$/d' -e 's/://' | grep wl)
  WIFI_INTERFACE=$(sudo iw dev | awk '$1=="Interface"{print $2}')
  # Don't change if current mode is same
  if grep -q "^\#denyinterfaces ${WIFI_INTERFACE}" /etc/dhcpcd.conf; then
    echo "already in  Wifi mode"
    return 0
  fi
  # Stop And Disable service
  sudo ifdown ${WIFI_INTERFACE}
  sudo systemctl stop hostapd.service
  sudo systemctl stop dnsmasq.service

  sudo systemctl disable hostapd.service
  sudo systemctl disable dnsmasq.service
  sudo systemctl daemon-reload

  # allow wifi interface
  sudo sed -i "s/.*denyinterfaces ${WIFI_INTERFACE}*./#denyinterfaces ${WIFI_INTERFACE}/" /etc/dhcpcd.conf

  echo "Deleting ${WIFI_INTERFACE} static IP info /etc/dhcpcd.conf"
  sudo sed -i "/^interface ${WIFI_INTERFACE}/d" /etc/dhcpcd.conf
  sudo sed -i '/static ip_address=192.168.100.1/d' /etc/dhcpcd.conf
  sed -i '/nohook wpa_supplicant/d' /etc/dhcpcd.conf
  echo "Access Point mode disabled"
}

Enable_4k() {
  #By default, when connected to a 4K monitor, the Raspberry Pi 4B, 400 and CM4 will select a 30Hz refresh rate.
  #Use this option to allow selection of 60Hz refresh rates.
  #Setting hdmi_enable_4kp60 will increase power consumption and the temperature of your Raspberry Pi.only 1 HDMI port can be used
  if grep -q hdmi_enable_4kp60 /boot/config.txt; then
    sudo sed 's/.*hdmi_enable_4kp60.*/hdmi_enable_4kp60=1/' -i /boot/config.txt
  else
    echo 'hdmi_enable_4kp60=1' | sudo tee -a /boot/config.txt >/dev/null
  fi
  #https://forums.raspberrypi.com/viewtopic.php?p=169726#p169726
  if grep -q force_turbo /boot/config.txt; then
    sudo sed 's/.*force_turbo.*/force_turbo=1/' -i /boot/config.txt
  else
    echo 'force_turbo=1' | sudo tee -a /boot/config.txt >/dev/null
  fi
}

Disable_4k() {
  if grep -q hdmi_enable_4kp60 /boot/config.txt; then
    sudo sed 's/.*hdmi_enable_4kp60.*/#hdmi_enable_4kp60=1/' -i /boot/config.txt
  else
    echo '#hdmi_enable_4kp60=1' | sudo tee -a /boot/config.txt >/dev/null
  fi
  if grep -q force_turbo /boot/config.txt; then
    sudo sed 's/.*force_turbo.*/#force_turbo=1/' -i /boot/config.txt
  else
    echo '#force_turbo=1' | sudo tee -a /boot/config.txt >/dev/null
  fi
}

show_help() {
  cat <<-EOF
    USAGE:  /bin/bash system.sh [OPTIONS=VALUE]

            Currently Multiple options are not allowed. You can use only single option
            Ex: /bin/bash system --resolution=720p portrait

    OPTIONS:

        --change-hostname
                        Used to change hostname of your raspberry pi
                        ex: /bin/bash system --change-hostname=mycomputer
        --factory-reset
                        Used to perform factory reset of raspberry pi
                        All the configuration will be set to default values, That is screen at 720p,
                        orientation at  Landscape
                        hostname changed to raspberrypi
                        ethernet set to DHCP mode
                        ex: /bin/bash system --factory-reset
        --enable-4k
                        Enable 4K
        --disable-4k
       	                Disable 4K
        --enable-access-point
                        Make raspberry pi as access point device
        --disable-access-point
       	                Disable access point feature in Raspberry Pi
        --change-dns
                        This option will change the dns entry.
                        ex: /bin/bash system --change-dns 8.8.4.4 8.8.8.8
        --setup-wifi
                        Set up wifi for the device
                        ex: /bin/bash system --setup-wifi <interface> <country> <hidden> <ssid> <psk> 
        --ipconfig
                        Configure Static IP or DHCP
                        ex: /bin/bash system --ipconfig <interface> for DHCP
                            /bin/bash system --ipconfig <interface> <ipadrres> <gateway> <dns> for Static IP

EOF

}

case "$FUNCTION" in
--change-hostname=*)
  NAME=$(echo $1 | sed 's/[-a-zA-Z0-9]*=//; s/ /-/g; s/^-//; s/[^-a-zA-Z0-9]//g')
  Change_Hostname $NAME
  ;;
--factory-reset)
  Factory_Reset
  ;;
--change-dns)
  Change_Dns $2 $3
  ;;
--one-time)
  One_Time
  ;;
--setup-wifi)
  new_wifi_entry $2 $3 $4 "$5" $6 
  ;;
--ipconfig)
  do_ip_settings $2 $3 $4 $5
  ;;
--enable-4k)
  Enable_4k
  ;;
--disable-4k)
  Disable_4k
  ;;
--enable-access-point)
  Enable_Access_Point
  ;;
--disable-access-point)
  Disable_Access_Point
  ;;
--change-ssh-password)
  Change_SSH_Password $2
  ;;
--clean-chrome-session)
  Clean_Chrome_Session
  ;;
--change-config-txt)
  Change_Config_Txt $2 $3
  ;;
*)
  echo "**** Check Your Command Line Options *** "
  echo ""
  echo ""
  show_help
  exit 1
  ;;
esac
