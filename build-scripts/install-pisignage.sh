#!/bin/bash
# IMPORTANT: use $HOME as the base for everything
notify(){
    printf "\n"
    figlet -f digital -c $1
    printf "\n"
}

sudo apt-get -y install wmctrl dconf-editor

WINDOW_MANAGER=$(DISPLAY=:0.0 wmctrl -m | awk '/Name:/ {print $2}')
echo "Window Manager is $WINDOW_MANAGER"                                       # currently supported is GNOME Shell,Mutter, Openbox
DISPLAY_MANAGER=$(basename  $(cat /etc/X11/default-display-manager) )          #currently supported is lightdm,gdm3
echo "Display Manager is $DISPLAY_MANAGER"
echo "Windowing System is  $XDG_SESSION_TYPE"      #does not work from ssh       #x11
echo "Desktop Environment is  $XDG_CURRENT_DESKTOP"      #does not work from ssh  #LXDE,Ubuntu GNOME,GNOME
if grep -q Raspbian /etc/os-release; then
  echo "Hardware is Raspberry Pi"
fi

if [ -f "/etc/NetworkManager/NetworkManager.conf" ]             #restore the permanent MAC address allocation 
then
echo '[device]
wifi.scan-rand-mac-address=no' | sudo tee -a /etc/NetworkManager/NetworkManager.conf >/dev/null
fi

"$HOME/player2/build-scripts/install-packages-common.sh"

notify "adding user to input group to read mouseClicks for kiosk"
sudo usermod -a -G input $USER

# make sure there is swap
notify "Make sure there is swap"
sudo swapon --show

if grep -qvi 'openbox' <<< $WINDOW_MANAGER; then
    mkdir -p ~/.config/autostart
    cp $HOME/player2/build-scripts/components/pisignage.desktop ~/.config/autostart
fi

if grep -qi 'openbox' <<< $WINDOW_MANAGER; then
    "$HOME/player2/build-scripts/openbox-setup.sh"
fi

if grep -qi 'GNOME' <<< $WINDOW_MANAGER; then
    "$HOME/player2/build-scripts/gnome-keyboard-setup.sh"
fi

if grep -qi 'mutter\|metacity' <<< $WINDOW_MANAGER; then
    "$HOME/player2/build-scripts/mutter-setup.sh"
fi

if grep -qi 'lightdm' <<< $DISPLAY_MANAGER; then
    "$HOME/player2/build-scripts/lightdm-setup.sh"
fi

if grep -qi 'gdm' <<< $DISPLAY_MANAGER || grep -qi 'GNOME' <<< $WINDOW_MANAGER ; then
    "$HOME/player2/build-scripts/gdm-setup.sh"
fi

if grep -q Raspbian /etc/os-release; then
  "$HOME/player2/build-scripts/raspberrypi-setup.sh"
fi




