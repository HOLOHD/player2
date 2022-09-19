#!/bin/sh

WIFI_SUPPLICANT="/etc/wpa_supplicant/wpa_supplicant.conf"
FILE_LOCATION="/boot/player-config.txt"
PLAYER_CONFIG="$HOME/player2/config/player-config.json"


Change_Wifi(){
    sed -i '/update_config=1/q0' $WIFI_SUPPLICANT

    [ -z "$COUNTRY" ] && COUNTRY=IN
    echo "country="$COUNTRY >> $WIFI_SUPPLICANT

    echo "network={" >> $WIFI_SUPPLICANT
    echo "  ssid=\"$WIFI_NAME\" " >> $WIFI_SUPPLICANT
    if [ -z "$WIFI_PASSWORD" ]; then
        echo "  key_mgmt=NONE " >>  $WIFI_SUPPLICANT
    else
        echo "  psk=\"$WIFI_PASSWORD\" " >>  $WIFI_SUPPLICANT
    fi

    if [ "$IS_WIFI_HIDDEN" -eq 1 ]; then
        echo "  scan_ssid=1 " >> $WIFI_SUPPLICANT
    fi
        
    echo "}" >>  $WIFI_SUPPLICANT
#    sudo wpa_cli -i wlan0 reconfigure
#    sleep 5
#    if grep -q "^iface eth0 inet" $CONFIG
#    then
#        sudo ifdown --force wlan0
#        sudo ifup wlan0
#    else
#        sudo ifconfig wlan0 down
#        sudo ifconfig wlan0 up
#    fi

}

Change_Server(){
    sed  -i 's/.*config_serv.*/    "config_server": "'$SERVER_NAME'",/' $HOME/player2/package.json
    sed -i 's/.*media_serv.*/    "media_server": "'$SERVER_NAME'",/' $HOME/player2/package.json
}

Write_Player_Config() {
# $1 - JSON field
# $2 - value of JSON field $1
# $3 - JSON file pathname
# $4 - whether JSON file already created
    created=$4
    if [ ! -z "$2" ]; then
        if [ "$4" = true ]; then
            echo "," >> "$3"
        else
            echo "{" > "$3"
            created=true
        fi
        printf "  \"$1\": \"%s\"" "$2" >> "$3"
    fi
    echo $created
}

Create_Player_Config() {
    INSTALLATION=$(cat $FILE_LOCATION | grep installation | cut -d '=' -f2 | tr -d '"' | awk '{$1=$1};1')
    GROUP_NAME=$(cat $FILE_LOCATION | grep group | cut -d '=' -f2 | tr -d '"' | awk '{$1=$1};1')
    TIMEZONE=$(cat $FILE_LOCATION | grep timezone | cut -d '=' -f2 | tr -d '"' | awk '{$1=$1};1')
    PLAYER_NAME=$(cat $FILE_LOCATION | grep player_name | cut -d '=' -f2 | tr -d '"' | awk '{$1=$1};1')
    USER_PIN=$(cat $FILE_LOCATION | grep user_pin | cut -d '=' -f2 | tr -d '"' | awk '{$1=$1};1')
    started=false
    started=$(Write_Player_Config "installation" "$INSTALLATION" "$PLAYER_CONFIG" "$started")
    started=$(Write_Player_Config "group" "$GROUP_NAME" "$PLAYER_CONFIG" "$started")
    started=$(Write_Player_Config "timezone" "$TIMEZONE" "$PLAYER_CONFIG" "$started")
    started=$(Write_Player_Config "name" "$PLAYER_NAME" "$PLAYER_CONFIG" "$started")
    started=$(Write_Player_Config "pin" "$USER_PIN" "$PLAYER_CONFIG" "$started")
    if [ "$started" = true ]; then
        printf "\n}" >> "$PLAYER_CONFIG"
    fi

}


Make_Player_Modification(){
    echo " make modification"
    SERVER_NAME=$(cat $FILE_LOCATION | grep server_name | cut -d '=' -f2 | tr -d '"' | awk '{$1=$1};1')
    COUNTRY=$(cat $FILE_LOCATION | grep country | cut -d '=' -f2 | tr -d '"' | awk '{$1=$1};1')
    WIFI_NAME=$(cat $FILE_LOCATION | grep wifi_name | cut -d '=' -f2 | tr -d '"' | awk '{$1=$1};1')
    WIFI_PASSWORD=$(cat $FILE_LOCATION | grep wifi_password | cut -d '=' -f2 | tr -d '"' | awk '{$1=$1};1')
    IS_WIFI_OPEN=$(cat $FILE_LOCATION | grep wifi_open | cut -d '=' -f2 | tr -d '"' | awk '{$1=$1};1')
    IS_WIFI_HIDDEN=$(cat $FILE_LOCATION | grep wifi_hidden | cut -d '=' -f2 | tr -d '"' | awk '{$1=$1};1')

    if [ ! -z "$SERVER_NAME" ];then
        Change_Server
    fi

    if [ ! -z "$WIFI_NAME" ];then
        sudo /bin/bash $HOME/player2/shell-scripts/system.sh --disable-access-point
        Change_Wifi
    else
        sudo /bin/bash $HOME/player2/shell-scripts/system.sh --enable-access-point
    fi
}

#sudo rfkill unblock wifi
sudo rfkill unblock wlan

if [ -f "$FILE_LOCATION" ];then
    Make_Player_Modification
    Create_Player_Config
else
    sudo /bin/bash $HOME/player2/shell-scripts/system.sh --enable-access-point
fi

sed -i  's/.*player-setup.*//g' $HOME/start.sh
sudo raspi-config --expand-rootfs
sudo rm -rf $HOME/player2/shell-scripts/player-setup.sh
sudo rm -rf "$FILE_LOCATION"

if [ -f "/boot/brand_pisignage_portrait.mp4" ];then
    sudo mv /boot/brand_pisignage_portrait.mp4 $HOME
fi
if [ -f "/boot/brand_pisignage_landscape.mp4" ];then
    sudo mv /boot/brand_pisignage_landscape.mp4 $HOME
fi

echo "Upgrade Raspberry OS if internet is available"
sudo apt update
#sudo apt -y full-upgrade takes too much time, so avoided

sudo systemctl reboot