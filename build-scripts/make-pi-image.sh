#!/usr/bin/env bash

notify(){
    printf "\n"
    figlet -f digital -c $1
    printf "\n"
}

create_base_image() {
  sed -i 's/.*player-setup.*//g' $HOME/start.sh
  history -c # clear all command history
}

clean_update_notifiers() {
  notify "Remove dist-upgrade alert "
  if [ -f "$HOME/.config/autostart/pi-conf-backup.desktop" ]; then
    sudo rm $HOME/.config/autostart/pi-conf-backup.desktop
  fi
}

accessPointSetup() {
  notify "Install Access Point Setup"
  sudo apt-get -y install hostapd dnsmasq

  if grep -q "denyinterfaces wlan0" /etc/dhcpcd.conf; then
    echo "Line present "
  else
    echo "#denyinterfaces wlan0 " | sudo tee -a /etc/dhcpcd.conf
  fi

  if [ -f /etc/hostapd/hostapd.conf ]; then
    sudo rm -rf /etc/hostapd/hostapd.conf
  fi

  sudo cp $HOME/player2/shell-scripts/network/hostapd.conf /etc/hostapd/
  sudo chmod 755 /etc/hostapd/hostapd.conf

  sudo sed -i 's|.*#DAEMON_CONF=""*.|DAEMON_CONF="/etc/hostapd/hostapd.conf"|' /etc/default/hostapd

  sudo mv /etc/dnsmasq.conf /etc/dnsmasq.conf.orig
  sudo cp $HOME/player2/shell-scripts/network/dnsmasq.conf /etc/dnsmasq.conf
  sudo chmod 755 /etc/dnsmasq.conf

  sudo systemctl stop hostapd.service
  sudo systemctl stop dnsmasq.service
  sudo systemctl disable hostapd.service
  sudo systemctl disable dnsmasq.service
  sudo systemctl daemon-reload

  # sudo systemctl enable hostapd.service
  # sudo systemctl enable dnsmasq.service
}

Install_node_armv6l(){
    notify "node-v14.16.0-linux-armv6l"
    cd $HOME

    wget https://unofficial-builds.nodejs.org/download/release/v14.16.0/node-v14.16.0-linux-armv6l.tar.xz
    tar xvf node-v14.16.0-linux-armv6l.tar.xz
    cd node-v14.16.0-linux-armv6l
    sudo cp -R bin/* /usr/bin/
    sudo cp -R lib/* /usr/lib/

    sudo apt-get update

    cd $HOME/player2
    rm package-lock.json
    rm -rf node_modules/
    npm install
}

clean_image(){
	node -v
	if [ $? -eq 0 ]
	then
		echo "Node version compatible with Pi"
	else
		Install_node_armv6l
	fi
	# remove all media and settings related to pisignage.com
	notify "clean previous record"
	rm -rf $HOME/pi-image-p2-v14.zip
	rm -rf $HOME/media/*
	rm -rf $HOME/install-packages.sh
	rm -rf $HOME/player2/config/_device-settings.json
	rm -rf $HOME/player2/config/_media-settings.json
	rm -rf $HOME/license_*

	cd $HOME
	rm build*.sh
  rm install*.sh
  rm install*.log
  rm pi*.zip
  rm *.tar.xz

	sudo rm -r -f /usr/share/doc/*
	sudo rm -r -f /usr/share/man/*

	sudo sed -i '/update_config=1/q0' /etc/wpa_supplicant/wpa_supplicant.conf
  #set wifi country
  sudo iw reg set IN
  echo "country=IN " | sudo tee -a /etc/wpa_supplicant/wpa_supplicant.conf

	echo "" > $HOME/forever_out.log
	echo "" > $HOME/forever_err.log
	rm $HOME/logs/*
	cat $HOME/player2/package.json
	sudo fdisk -l

	notify "fill zero"
	sudo dd if=/dev/zero of=$HOME/dummy.img

	sync

	notify "delete image"
	sudo rm -rf $HOME/dummy.img

	notify "home directory"
	ls -l $HOME/

	notify "player2 directory "
	ls -l $HOME/player2/

	notify "config directory"
	ls -l $HOME/player2/config/

	notify "media directory"
	ls -l $HOME/media/

	notify "Show wifi entry"
	sudo cat /etc/wpa_supplicant/wpa_supplicant.conf

	rm $HOME/player2/build-scripts/make-pi-image.sh
	rm $HOME/make-pi-image.sh

  sync
  sync
  history -c # clear all command history
	notify "Setup Complete"
}

pm2 stop pisignage
pkill chromium-browser
pkill chromium
pkill feh
pkill pqiv
pkill ticker

cd $HOME
#add the following line to start.sh after cd $HOME/player2
sed -i '/cd $HOME\/player2/a sudo -E bash $HOME\/player2\/shell-scripts\/player-setup.sh' $HOME/start.sh

accessPointSetup

clean_update_notifiers

sudo apt-get clean
printf " **************************************************************************** \n\n"
sudo fdisk -l
printf " **************************************************************************** \n\n"
echo " command to be used: sudo dd if=/dev/rdisk1 of=~/Desktop/player2.img bs=512 count=5785600 endblock no +1"

#create backups of critical files
sudo cp /etc/dhcpcd.conf /etc/dhcpcd.conf.orig
sudo cp /etc/network/interfaces /etc/network/interfaces.orig
sudo cp /boot/config.txt /boot/config.txt.orig

chmod -R +x $HOME/player2/shell-scripts/*

notify "Cleaning scripts and directories"

clean_image

history -c # clear all command history




