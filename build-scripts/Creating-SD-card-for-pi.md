A. Initial SetUP


- Use Raspberry Pi Imager to program the SD card with Raspberry Pi OS 32 bit  
- Re-attach the SD card and go to /boot partiation
- Find cmdline.txt file and remove  init=/usr/lib/raspi-config/init_resize.sh from cmdline.txt
- Eject SD card


B. Resize SD card

- Insert SD card to raspberry pi do the following steps
- changed ssh password to pi
- configure wifi
- Open terminal
- used raspi-config to enable ssh (OR Create a file ssh using sudo touch /boot/ssh) and select audio source as HDMI
- To change the partition table run , sudo fdisk /dev/mmcblk0
- Delete partition 2 and create new primary partition
- Select 532480 and  +5G (end sector 11018239) for buster  as start & end sector point for the partition. Did not remove ext4 signature
- Write the partition table to SD card 
- run, sudo resize2fs /dev/mmcblk0p2  and reboot.
- Run df -h , And check your space it should be expanded to 5GB.
- sudo apt-get update
- sudo apt-get update --fix-missing

C. run install pisignage software  
D. copy make-pi-image.sh and run  
E. sudo shutdown -h now  

F. copy the image to laptop  
- sudo dd if=/dev/disk5 of=pisignage_4.5.4.img   count=11018240