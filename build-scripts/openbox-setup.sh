#!/bin/bash
# IMPORTANT: use $HOME as the base for everything
notify(){
    printf "\n"
    figlet -f digital -c $1
    printf "\n"
}

modifyLxdeRcXml(){
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

openboxKeySetup (){
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
}

notify "Setting up keybinds for Openbox"
openboxKeySetup








