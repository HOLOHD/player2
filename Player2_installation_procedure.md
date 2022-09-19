# piSignage Player2 Setup
Player2 is enhanced piSignage player targeted for more platforms based on Debian/other Linux platforms. 
**Make sure video play is supported in chromium browser or mpv using hardware acceleration before chosing the platform** 

### Tested platforms

1. Raspberry Pi Bullseye release (mutter Window manager, LXDE desktop environment)
2. Debian 10/11 with GNOME Shell/Openbox Window manager and LXDE/gdm desktop environment
3. Ordoid N2 Ubuntu 20.04 Mate desktop with **Ubuntu DE (GNOME shell Window manager and Ubuntu:GNOME desktop environment)**

### Installing on Raspberry OS (Only for Raspberry Pi)

1. Download latest Raspberry Pi OS with desktop (32-bit)   and prepare SD card
2. Configure the OS and wait for the latest upgrade completion
3. If needed, do sudo apt update and sudo apt full-upgrade -y
4. Under raspberry configuration -> interfaces -> enable ssh
5. **For hardware other than Pi 4**, issue the following command for chromium browser issue(courtesy: https://forums.raspberrypi.com/viewtopic.php?t=330711#p1990146)   
   
   ```echo 'export CHROMIUM_FLAGS="$CHROMIUM_FLAGS --use-gl=egl"' | sudo tee /etc/chromium.d/egl```

### Installing on Debian 10/Debian 11/Ubuntu 20(Skip this step for Raspberry Pi hardware)

1. Installing Debian
   1. Install debian 10/11 with graphic install and copy any missing firmware files to /lib/firmware/<company>
   2. username and password are set to pi
   3. Use entire disk for partition
   4. Software selection - GNOME, SSH server, Standard system utilities (**unselect other window managers**)
   5. On boot login and open terminal
       `su` 
       `sudo usermod -aG sudo pi`
   6. Logout and login as pi
2. For odroid, just boot Ubuntu mate 20.04  desktop
      1. Select Ubuntu(Default) instead of MATE desktop environment using cog wheel while login
      2. Configure wifi access
      3. sudo snap install chromium
3. sudo visudo and add the following **as last line**  
    `<username, for e.g. pi>     ALL=(ALL) NOPASSWD:ALL`
4. sudo apt update;sudo apt -y full-upgrade;
5. Check if chromium-browser exists 
   - which chromium-browser 
   - If not present, install using following steps
     - sudo apt-get -y install chromium-browser 
     - if chromium-browser package not found
       - sudo apt-get -y install chromium
       - cd /usr/bin
       - sudo ln -s chromium chromium-browser
6. sudo apt install openssh-server (enable ssh)
7. Check if there is a entry in /etc/hosts for hostname as follows, otherwise add the same. 
   you could get the hostname by cat /etc/hostname command
   `127.0.0.1  <hostname>`
8. Install wifi configuration and networking software
                                                        
   - copy missing firmware if any for wifi interface
   - sudo apt install -y dhcpcd5
   - sudo systemctl disable wicd.service (to use dhcpcd and wpa_supplicant as network config tools)
     - Ignore the error if it does not exist
   - sudo rm /etc/xdg/autostart/wicd-tray.desktop
     - Ignore the error if it does not exist
   - Note down wifi and ethernet interface names from sudo ip a command 
   - prepare a file /etc/wpa_supplicant/wpa_supplicant.conf
    ```    
        ctrl_interface=DIR=/run/wpa_supplicant GROUP=netdev
        update_config=1
        country=IN
        network={
            ssid="*********"
            psk="********"
        }
    ```
   - sudo wpa_supplicant -B -i ***wifi interface name for e.g. wlp0s2*** -c /etc/wpa_supplicant/wpa_supplicant.conf
   - sudo apt install rfkill
   - sudo rfkill unblock wlan
   - sudo ln -s /usr/share/dhcpcd/hooks/10-wpa_supplicant /usr/lib/dhcpcd/dhcpcd-hooks/
   - sudo systemctl restart dhcpcd 
   - sudo ip a, all interfaces should have dhcp address if connected
   - Make sure /etc/network/interfaces has no entry for ethernet interface or it is set as manual.
9. Using GUI (dconf-editor or gsettings command), disable
   - Scrren Lock, Screen Saver, Power management, Screen Dim, Notifications
10. Known issues to be fixed
    - Appearnace of taskbar for programs like webpage, mpv, vlc players
    
  
### Install piSignage software (for all platforms)

1. Copy the [piSignage software zip file](https://pisignage.com/releases/pi-image-p2-v14.zip) to home directory /home/pi
2. unzip -o pi-image-p2-v14.zip
3. cp player2/build-scripts/install-pisignage.sh .
4. chmod +x install-pisignage.sh
5. chmod +x -R player2/build-scripts
6. chmod +x -R player2/shell-scripts
7. ./install-pisignage.sh
8. Notice the log for any Errors
9. sudo apt update --fix-missing

[//]: # (### Additional Instructions for Raspberry Pi-3 users only &#40; Mandatory &#41;)

[//]: # ()
[//]: # (1. Once all the above mentioned steps are completed, follow the steps below to downgrade Chromium-Browser from latest version to 92.0.4515.98)

[//]: # (2. Install **pi-apps** using the command)

[//]: # (   - wget -qO- https://raw.githubusercontent.com/Botspot/pi-apps/master/install | bash)

[//]: # (3. Start pi-apps application by running )

[//]: # (   - pi-apps)

[//]: # (4. You will now see a GUI on your screen showing different menus. )

[//]: # (5. From the Menu screen, select **All Apps** -> **Downgrade Chromium**  -> **Install** -> Select the checkbox against **Chromium Version 92**)

[//]: # (6. This will take a few minutes to download and install. Once done, close the application using Close icon &#40;or&#41; Ctrl+C.)

[//]: # (7. To ensure you have chromium-browser v92 running on your pi, run)

[//]: # (   - chromium-browser --version)

[//]: # (8. References: https://github.com/Botspot/pi-apps/blob/master/README.md, https://forums.raspberrypi.com/viewtopic.php?t=308303)

### Upgrading software with new zip file  (Manual upgrade, not needed for auto upgrade)
1. Copy the pi-image-p2-v14.zip to home directory /home/pi
1. unzip -o pi-image-p2-v14.zip
1. chmod +x -R player2/shell-scripts







