#!/bin/sh
# IMPORTANT: use $HOME as the base for everything
notify(){
    printf "\n"
    figlet -f digital -c $1
    printf "\n"
}

makeAutoLogin(){
    sudo sed -i "s/^\#autologin-user=.*/autologin-user=$USER/" /etc/lightdm/lightdm.conf
    sudo sed -i "s/^\#autologin-user-timeout.*/autologin-user-timeout=0/" /etc/lightdm/lightdm.conf
}

modifyEtcEnvironment(){
  ADDVARS=$(cat <<- END
export LC_ALL=C
export LANG=en_US.UTF-8
export DISPLAY=:0
\n

END
)

  (printf "${ADDVARS}" && sudo cat /etc/environment) > $HOME/temp_env && sudo mv $HOME/temp_env /etc/environment
}

modifyAutostart(){
  ADDLINES=$(cat <<- END

xset s off          # Don't activate screensaver
xset -dpms          # Disable DPMS (Energy Star) features
xset s noblank      # Don't blank the video device
export NOREFRESH=1  # Fix white flickering in omxplayer
@sh $HOME/start.sh

END
)

    sudo sed  -i 's/^/#/' $1
    printf "${ADDLINES}" | sudo tee -a  $1
}

modifyLxdeRcXml(){

#DISABLEDESKTOPSWITCHING=$(cat <<- END
#
#    <keybind key="C-A-Left">\n \
#    <action name="DesktopLeft">\n \
#    <dialog>no</dialog>\n \
#    <wrap>no</wrap>\n \
#    </action>\n \
#    </keybind>\n \
#    <keybind key="C-A-Right">\n \
#    <action name="DesktopRight">\n \
#    <dialog>no</dialog>\n \
#    <wrap>no</wrap>\n \
#    </action>\n \
#    </keybind>\n \
#    <keybind key="C-A-Up">\n \
#    <action name="DesktopUp">\n \
#    <dialog>no</dialog>\n \
#    <wrap>no</wrap>\n \
#    </action>\n \
#    </keybind>\n \
#    <keybind key="C-A-Down">\n \
#    <action name="DesktopDown">\n \
#    <dialog>no</dialog>\n \
#    <wrap>no</wrap>\n \
#    </action>\n \
#    </keybind>
#END
#)
#CTRLNF6=$(cat <<- END
#
#      <keybind key="C-n">\n \
#      <action name="Execute">\n \
#      <command>lxterminal --command sudo network-config</command>\n \
#      </action>\n \
#       <action name="Maximize"/>\n \
#      </keybind>\n \
#      <keybind key="F6">\n \
#      <action name="Execute">\n \
#      <command>lxterminal --command sudo network-config</command>\n \
#      </action>\n \
#      <action name="Maximize"/>\n \
#      </keybind>
#END
#)
#NODECOR=$(cat <<- END
#
#      <application name="lxterminal">\n \
#          <maximized>yes</maximized>\n \
#      </application>\n \
#      <application name="x-terminal-emulator">\n \
#          <maximized>yes</maximized>\n \
#      </application>\n \
#      <application class="*">\n \
#          <decor>no</decor>\n \
#      </application>
#
#END
#)
  sudo sed -i '/<\/keyboard>/i     <keybind key="C-A-Left">\n \
    <action name="DesktopLeft">\n \
    <dialog>no</dialog>\n \
    <wrap>no</wrap>\n \
    </action>\n \
    </keybind>\n \
    <keybind key="C-A-Right">\n \
    <action name="DesktopRight">\n \
    <dialog>no</dialog>\n \
    <wrap>no</wrap>\n \
    </action>\n \
    </keybind>\n \
    <keybind key="C-A-Up">\n \
    <action name="DesktopUp">\n \
    <dialog>no</dialog>\n \
    <wrap>no</wrap>\n \
    </action>\n \
    </keybind>\n \
    <keybind key="C-A-Down">\n \
    <action name="DesktopDown">\n \
    <dialog>no</dialog>\n \
    <wrap>no</wrap>\n \
    </action>\n \
    </keybind>' $1

  sudo sed -i '/<\/keyboard>/i       <keybind key="C-n">\n \
    <action name="Execute">\n \
    <command>lxterminal --command sudo network-config</command>\n \
    </action>\n \
     <action name="Maximize"/>\n \
    </keybind>\n \
    <keybind key="F6">\n \
    <action name="Execute">\n \
    <command>lxterminal --command sudo network-config</command>\n \
    </action>\n \
    <action name="Maximize"/>\n \
    </keybind>\n \
    <keybind key="C-A-T">\n \
    <action name="Execute">\n \
    <command>lxterminal</command>\n \
    </action>\n \
    </keybind>\n \
    <keybind key="0xC9">\n \
    <action name="Execute">\n \
    <command>lxterminal</command>\n \
    </action>\n \
    </keybind>' $1

  sudo sed -i '/<\/applications>/i       <application name="lxterminal">\n \
          <maximized>yes</maximized>\n \
      </application>\n \
      <application name="x-terminal-emulator">\n \
          <maximized>yes</maximized>\n \
      </application>\n \
      <application class="*">\n \
          <decor>no</decor>\n \
      </application>' $1
}

debianSetup(){
    notify "Auto startup script"
    cp $HOME/player2/shell-scripts/start.sh $HOME/
    sudo chmod 777 $HOME/start.sh

    notify "modify lxde-rc.xml"
    if [ -f "$HOME/.config/openbox/lxde-rc.xml" ]
    then
        cp $HOME/.config/openbox/lxde-rc.xml $HOME/.config/openbox/lxde-rc.xml.bak
        modifyLxdeRcXml $HOME/.config/openbox/lxde-rc.xml
    fi
    if [ -f "/etc/xdg/openbox/lxde-pi-rc.xml" ]
    then
        sudo cp /etc/xdg/openbox/lxde-pi-rc.xml /etc/xdg/openbox/lxde-pi-rc.xml.bak
        modifyLxdeRcXml /etc/xdg/openbox/lxde-pi-rc.xml
    fi
    [ -f $HOME/.config/lxpanel/LXDE/panels/panel ] && mv $HOME/.config/lxpanel/LXDE/panels/panel $HOME/panel.bak
    #Disable screen saver
    sudo sed -e 's/^#xserver-command=X$/xserver-command=X -s 0 dpms/g' -i /etc/lightdm/lightdm.conf

    notify "Autostart in LXDE settings"
    if [ -f "/etc/xdg/lxsession/LXDE/autostart" ]
    then
        sudo cp /etc/xdg/lxsession/LXDE/autostart /etc/xdg/lxsession/LXDE/autostart.bak
        modifyAutostart /etc/xdg/lxsession/LXDE/autostart
    fi

    notify "Autostart in LXDE-pi settings"
    if [ -f "/etc/xdg/lxsession/LXDE-pi/autostart" ]
    then
        sudo cp /etc/xdg/lxsession/LXDE-pi/autostart /etc/xdg/lxsession/LXDE-pi/autostart.bak
        modifyAutostart /etc/xdg/lxsession/LXDE-pi/autostart
    fi

    notify "Autostart in ~/.config"
    if [ -f "$HOME/.config/lxsession/LXDE/autostart" ]
    then
        sudo cp $HOME/.config/lxsession/LXDE/autostart $HOME/.config/lxsession/LXDE/autostart.bak
        modifyAutostart $HOME/.config/lxsession/LXDE/autostart
    fi

    notify "Autostart in ~/.config"
    if [ -f "$HOME/.config/lxsession/LXDE-pi/autostart" ]
    then
        sudo cp $HOME/.config/lxsession/LXDE-pi/autostart $HOME/.config/lxsession/LXDE-pi/autostart.bak
        modifyAutostart $HOME/.config/lxsession/LXDE-pi/autostart
    fi

    # make sure there is swap
    notify "Make sure there is swap"
    sudo swapon --show

# Commented as video players are not available during boot except omxplayer
#    #copy unit file and restart daemon
#    notify "Welcome Video"
#    sudo cp $HOME/player2/shell-scripts/welcome.service /etc/systemd/system
#    sudo /home/pi
#    sudo sed -i "s|/home/pi|$HOME|" /etc/systemd/system/welcome.service
#    sudo systemctl daemon-reload
#    sudo systemctl enable welcome.service

    #modify /etc/environment
    modifyEtcEnvironment

    makeAutoLogin

    # version name will of the form :    ps3_7.8_admin_2015-05-21
    echo "writing version number to package.json"
    PACKAGE_JSON=$HOME/player2/package.json
    PI_VERSION=$(sed -n -e 's/^.*"version": //p' -e 's/[^0-9]*//g' $PACKAGE_JSON | sed 's/[^0-9]*//g')
    VERSION=$(sed -n -e 's/^.*VERSION_ID=//p' -e 's/[^0-9]*//g' /etc/os-release | sed 's/[^0-9]*//g')
    TODAY=`date +"%F"`
    ME='script'
    VERSION_NAME=${PI_VERSION}_${VERSION}_${ME}_${TODAY}

    if grep -q platform_version $PACKAGE_JSON;then
        echo "line present"
        sed -i "s/.*platform_version.*/    \"platform_version\":  \"$VERSION_NAME\",/" $PACKAGE_JSON
    else
        echo "line not present"
        sed -i "/.*version.*/a \    \"platform_version\":  \"$VERSION_NAME\", " $PACKAGE_JSON
    fi

    echo "platform_version: ${VERSION_NAME}" | sudo tee  $HOME/pisignage_version.txt

    notify "adding user to input group to read mouseClicks for kiosk"
    sudo usermod -a -G input $USER

    #vlc media player is not installed on debian by default
    echo "installing vlc media player and pqiv for logo display"
    sudo apt install vlc -y

    sudo apt-get install -y pqiv

    sudo apt-get -y update --fix-missing
}

raspberrySetup() {
    notify "Raspberry Specific Setup"
    # Make sure we have 32bit framebuffer depth; but alpha needs to go off
    if grep -q framebuffer_depth /boot/config.txt; then
      sudo sed 's/^framebuffer_depth.*/framebuffer_depth=32/' -i /boot/config.txt
    else
      echo 'framebuffer_depth=32' | sudo tee -a /boot/config.txt >/dev/null
    fi

    if grep -q framebuffer_ignore_alpha /boot/config.txt; then
      sudo sed 's/^framebuffer_ignore_alpha.*/framebuffer_ignore_alpha=1/' -i /boot/config.txt
    else
      echo 'framebuffer_ignore_alpha=1' | sudo tee -a /boot/config.txt >/dev/null
    fi

    # disable overscan  for all layers
    sudo sed 's/.*disable_overscan.*/disable_overscan=1/' -i /boot/config.txt
    sudo sed -i '$a\overscan_scale=0' /boot/config.txt

    # Force hotplug of HDMI and avoid switching to composite
    sudo sed 's/.*hdmi_force_hotplug.*/hdmi_force_hotplug=1/' -i /boot/config.txt

    #default it programs based on EDID values
    #sudo sed 's/.*hdmi_group.*/hdmi_group=1/' -i /boot/config.txt
    #sudo sed 's/.*hdmi_mode.*/hdmi_mode=4/' -i /boot/config.txt
    #sudo sed 's/.*hdmi_drive.*/hdmi_drive=2/' -i /boot/config.txt

    #chagne SDTV aspect to 16:9
    sudo sed -i '/sdtv_mode/ a\sdtv_aspect=3' /boot/config.txt

    #default it programs based on display dimension, overscan values keep as it is
    #sudo sed -i -e 's/.*overscan_left.*/\#overscan_left=40/' -e 's/.*overscan_right.*/\#overscan_right=40/' -e 's/.*overscan_top.*/\#overscan_top=20/' -e 's/.*overscan_bottom.*/\#overscan_bottom=20/' -e 's/.*framebuffer_width.*/framebuffer_width=1280/' -e 's/.*framebuffer_height.*/framebuffer_height=720/'  /boot/config.txt

    sudo sed -i 's/.*XKBLAYOUT=.*/XKBLAYOUT="us"/' /etc/default/keyboard

    if grep -q display_rotate /boot/config.txt; then
      echo "line already present"
    else
      echo 'display_rotate=0' | sudo tee -a /boot/config.txt >/dev/null
    #  echo 'display_hdmi_rotate=0' | sudo tee -a /boot/config.txt > /dev/null
    #  echo 'display_lcd_rotate=0' | sudo tee -a /boot/config.txt > /dev/null
    fi

    # set gpu mem to depending upon RAM
    echo 'gpu_mem=256' | sudo tee -a /boot/config.txt >/dev/null
    echo 'gpu_mem_512=128' | sudo tee -a /boot/config.txt >/dev/null
    echo 'gpu_mem_1024=256' | sudo tee -a /boot/config.txt >/dev/null
    echo 'gpu_mem_2048=512' | sudo tee -a /boot/config.txt >/dev/null
    echo 'gpu_mem_4096=1024' | sudo tee -a /boot/config.txt >/dev/null

    echo "wifi power management off"
    sudo sed -i '$ i iwconfig wlan0 power off' /etc/rc.local

    # set swap size
    sudo sed -i 's/.*CONF_SWAPSIZE=.*/CONF_SWAPSIZE=1024/' /etc/dphys-swapfile

    notify "Quiet boot"
    sudo sed -i 's/splash/ /' /boot/cmdline.txt
    sudo sed -i '$ a\ loglevel=1 quiet' /boot/cmdline.txt

    notify "Turn off Screen Blanking"
    #Add consoleblank=0 to turn screen blanking off completely
    sudo sed -i '$ a\ consoleblank=0' /boot/cmdline.txt

    #copy unit file and restart daemon   , does not work as omxplayer is not available in newer versions
#    notify "Welcome Video"
#    cp $HOME/player2/shell-scripts/raspberry/omx.py $HOME
#    sudo cp $HOME/player2/shell-scripts/raspberry/welcome.service.raspberry /etc/systemd/system/welcome.service
#    sudo systemctl daemon-reload
#    sudo systemctl enable welcome.service
}



sudo apt-get update

#Remove screen lock program
sudo apt-get -y remove  light-locker

#Install essential programs
sudo apt-get -y install figlet build-essential git curl
sudo apt-get -y install unclutter watchdog

notify "Installing chromium browser, mpv video player,  fbi and feh image players"
sudo apt-get -y install chromium
sudo apt-get -y install chromium-browser
cd /usr/bin
sudo ln -s chromium chromium-browser
sudo apt-get install -y mpv fbi feh pqiv scrot

notify "Installing networking utilities"
sudo apt-get -y install ethtool nmap host dnsmasq hostapd

notify "Installing node-canvas libraries"
sudo apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

notify "Installing CEC utilities"
sudo apt-get -y install cec-utils libcec-dev

notify "Adding network-config symlink to /usr/bin"
sudo rm /usr/bin/network-config
sudo ln -s $HOME/player2/shell-scripts/network/network-config /usr/bin/network-config
sudo chmod +x  $HOME/player2/shell-scripts/network/network-config
sudo chmod +x  /usr/bin/network-config

notify "create directory for piSignage"
cd $HOME
mkdir -p $HOME/media
chmod -R 777 $HOME/media

mkdir -p $HOME/logs
chmod -R 777 $HOME/logs

mkdir -p $HOME/apps-data/.cache/chromium
mkdir -p $HOME/apps-data/.config/chromium
mkdir -p $HOME/apps-data/.config/chromium/weblink-0
mkdir -p $HOME/apps-data/.config/chromium/weblink-1
mkdir -p $HOME/apps-data/.config/chromium/weblink-2
mkdir -p $HOME/apps-data/.config/chromium/weblink-3
mkdir -p $HOME/apps-data/.config/chromium/weblink-4
chmod -R 777 $HOME/apps-data
mkdir $HOME/pisignage-data
echo '#!/usr/bin/env bash' > $HOME/pisignage-data/upgrade.sh

notify "SDL Ticker"
cd $HOME/player2/tools/sdl_ticker
chmod +x make.sh
./make.sh

notify "Adding evince, xdotool and wmctrl for PDF play"
sudo apt-get -y install evince xdotool wmctrl
sudo sed -i 's/^Exec=/# &/' /usr/share/thumbnailers/evince.thumbnailer                   #disable thumbnails

#sudo cp $HOME/player2/shell-scripts/usb-import/pisignage-import.service /etc/systemd/system/
#sudo systemctl enable pisignage-import.service
#
#sudo cp $HOME/player2/shell-scripts/usb-import/40-pisignage-import.rules /etc/udev/rules.d/
#sudo udevadm control --reload

chmod +x $HOME/player2/shell-scripts/usb-import/import-assets.sh

# for node-canvas installation
sudo apt install -y libgif-dev

# Installing nodejs and node modules
# [nodesource](https://github.com/nodesource/distributions/blob/master/README.md#installation-instructions)
notify "Setting up node 14.x"
curl -sL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo apt-get install -y nodejs
sudo npm i update npm -g
sudo npm install pm2 -g

cd $HOME/player2
npm install


notify "welcome video"
cd $HOME
wget https://s3.amazonaws.com/pisignage/assets/pisignage/boot_video.mov
wget https://s3.amazonaws.com/pisignage/assets/pisignage/update_video.mov
wget https://s3.amazonaws.com/pisignage/assets/pisignage/update.png

debianSetup

if grep -q Raspbian /etc/os-release; then
  raspberrySetup
fi








