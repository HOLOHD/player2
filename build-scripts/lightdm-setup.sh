#!/bin/bash
# IMPORTANT: use $HOME as the base for everything
notify(){
    printf "\n"
    figlet -f digital -c $1
    printf "\n"
}

makeAutoLogin(){
    if [ ! -f /etc/lightdm/lightdm.conf ]; then
        sudo echo "[Seat:*]
#autologin-user=$USER
#autologin-user-timeout=0" | sudo tee /etc/lightdm/lightdm.conf
    fi

    sudo sed -i "s/^\#autologin-user=.*/autologin-user=$USER/" /etc/lightdm/lightdm.conf
    sudo sed -i "s/^\#autologin-user-timeout.*/autologin-user-timeout=0/" /etc/lightdm/lightdm.conf
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
    if grep -qi 'mutter' <<< $WINDOW_MANAGER; then
        echo "Added xbindkeys to $1"
        printf "xbindkeys" | sudo tee -a  $1
    fi
    printf "${ADDLINES}" | sudo tee -a  $1
}

lightdmSetup(){
    notify "Auto startup script"
    cp $HOME/player2/shell-scripts/start.sh $HOME/
    sudo chmod 777 $HOME/start.sh

    [ -f $HOME/.config/lxpanel/LXDE/panels/panel ] && mv $HOME/.config/lxpanel/LXDE/panels/panel $HOME/panel.bak

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

    makeAutoLogin

    #Disable screen saver
    sudo sed -e 's/^#xserver-command=X$/xserver-command=X -s 0 dpms/g' -i /etc/lightdm/lightdm.conf

}

notify "Setting up autostart for lightdm"
WINDOW_MANAGER=$(DISPLAY=:0.0 wmctrl -m | awk '/Name:/ {print $2}')
lightdmSetup










