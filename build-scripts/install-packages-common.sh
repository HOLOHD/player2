#!/bin/bash
# IMPORTANT: use $HOME as the base for everything
notify(){
    printf "\n"
    figlet -f digital -c $1
    printf "\n"
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

#modify /etc/environment
modifyEtcEnvironment

sudo apt-get update

#Install essential programs
sudo apt-get -y install figlet build-essential git curl
sudo apt-get -y install unclutter watchdog

notify "Installing  mpv video player,  fbi,feh, pqiv image players and scrot screenshot tool"
sudo apt-get install -y mpv fbi feh pqiv scrot                        

notify "Installing networking utilities"
sudo apt-get -y install ethtool nmap host dnsmasq hostapd

notify "Get a list of WiFi devices in player-UI using iwlist cmd"
sudo apt-get -y install wireless-tools

notify "Installing node-canvas libraries"
sudo apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

notify "Installing CEC utilities"
sudo apt-get -y install cec-utils libcec-dev

notify "Installing xterm terminal application"
sudo apt-get install -y xterm xbindkeys

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
mkdir -p $HOME/apps-data/.config/chromium/Default-1
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

cd $HOME/player2/public/kiosk-ui
npm install


notify "welcome video"
cd $HOME
wget https://s3.amazonaws.com/pisignage/assets/pisignage/boot_video.mov
wget https://s3.amazonaws.com/pisignage/assets/pisignage/update_video.mov
wget https://s3.amazonaws.com/pisignage/assets/pisignage/update.png

# version name will of the form :    460_11_admin_2015-05-21
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

#vlc media player is not installed on debian by default
echo "installing vlc media player and pqiv for logo display"
sudo apt install vlc -y

sudo apt-get install -y pqiv

notify "installing yt-dlp for Youtube streams on MPV player"
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp

notify "youtube-dl"
sudo -H pip install --upgrade youtube-dl

sudo apt-get -y update --fix-missing








