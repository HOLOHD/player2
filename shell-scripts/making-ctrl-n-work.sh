#sudo apt install -y dhcpcd5
#sudo systemctl disable wicd.service
#sudo rm /etc/xdg/autostart/wicd-tray.desktop
#
#prepare a file /etc/wpa_supplicant/wpa_supplicant.conf
#    ctrl_interface=DIR=/run/wpa_supplicant GROUP=netdev
#    update_config=1
#    country=IN
#    network={
#    ssid="*********"
#    psk="********"
#    }
#
#sudo wpa_supplicant -B -i <wifi interfacename ---->wlp0s20f3 -c /etc/wpa_supplicant/wpa_supplicant.conf
#sudo ln -s /usr/share/dhcpcd/hooks/10-wpa_supplicant /usr/lib/dhcpcd/dhcpcd-hooks/
#sudo systemctl retsart dhcpcd
