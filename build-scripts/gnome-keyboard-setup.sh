#!/bin/bash
# IMPORTANT: use $HOME as the base for everything
notify(){
    printf "\n"
    figlet -f digital -c $1
    printf "\n"
}

notify "Setting up custom keybinds for Gnome"

BEGINNING="gsettings set org.gnome.settings-daemon.plugins.media-keys.custom-keybinding:/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings"

KEY_PATH="/org/gnome/settings-daemon/plugins/media-keys/custom-keybindings"

gsettings set org.gnome.settings-daemon.plugins.media-keys custom-keybindings \
"['$KEY_PATH/custom0/', '$KEY_PATH/custom1/', '$KEY_PATH/custom2/', '$KEY_PATH/custom3/']"

$BEGINNING/custom0/ name "open-xterm-option1"
$BEGINNING/custom0/ command "xterm"
$BEGINNING/custom0/ binding "<Ctrl><Alt>t"

$BEGINNING/custom1/ name "open-xterm-option2"
$BEGINNING/custom1/ command "xterm"
$BEGINNING/custom1/ binding "F2"

$BEGINNING/custom2/ name "network-config-option1"
$BEGINNING/custom2/ command 'xterm -e "sudo network-config"'
$BEGINNING/custom2/ binding "<Ctrl>n"

$BEGINNING/custom3/ name "network-config-option2"
$BEGINNING/custom3/ command 'xterm -e "sudo network-config"'
$BEGINNING/custom3/ binding "F6"

