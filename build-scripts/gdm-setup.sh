#!/bin/bash
# IMPORTANT: use $HOME as the base for everything
notify(){
    printf "\n"
    figlet -f digital -c $1
    printf "\n"
}

notify "Setting up autostart for gdm"

cp $HOME/player2/shell-scripts/start.sh $HOME/
sudo chmod 777 $HOME/start.sh

sudo cp $HOME/player2/build-scripts/components/pisignage.desktop /etc/xdg/autostart
sudo chown root:root /etc/xdg/autostart/pisignage.desktop

if [ -f "/etc/gdm3/custom.conf" ]
then
    notify "modifying /etc/gdm3/custom.conf for auto login"
    sudo sed -i "s/^.*AutomaticLoginEnable.*/AutomaticLoginEnable=true/" /etc/gdm3/custom.conf
    sudo sed -i "s/^.*\bAutomaticLogin\b.*/AutomaticLogin=$USER/" /etc/gdm3/custom.conf  #word boundary
fi

if [ -f "/etc/gdm3/daemon.conf" ]
then
    notify "modifying /etc/gdm3/daemon.conf for auto login"
    sudo sed -i "s/^.*AutomaticLoginEnable.*/AutomaticLoginEnable=true/" /etc/gdm3/daemon.conf
    sudo sed -i "s/^.*\bAutomaticLogin\b.*/AutomaticLogin=$USER/" /etc/gdm3/daemon.conf  #word boundary
fi

#wallpaper
gsettings set org.gnome.desktop.background picture-uri $HOME/player2/public/img/pisignage-logo.png
#disable services not needed - TODO








