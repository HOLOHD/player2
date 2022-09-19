#!/bin/bash
# IMPORTANT: use $HOME as the base for everything
notify(){
    printf "\n"
    figlet -f digital -c $1
    printf "\n"
}

notify "Setting up keybinds using xbindkeys for  Mutter"

cd $HOME
rm .xbindkeysrc
echo '"xterm"
  Control + Alt + t

"xterm"
  F2

"xterm -e 'sudo network-config'"
  Control + n
    
"xterm -e 'sudo network-config'"
  F6
    ' > $HOME/.xbindkeysrc

xbindkeys








