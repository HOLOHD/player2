#!/bin/bash
# IMPORTANT: use $HOME as the base for everything
notify(){
    printf "\n"
    figlet -f digital -c $1
    printf "\n"
}

notify "Raspberry Specific Setup"

#non config.txt changes
echo "wifi power management off"
sudo sed -i '$ i iwconfig wlan0 power off' /etc/rc.local

# set swap size
sudo sed -i 's/.*CONF_SWAPSIZE=.*/CONF_SWAPSIZE=1024/' /etc/dphys-swapfile

#sudo sed -i 's/.*XKBLAYOUT=.*/XKBLAYOUT="us"/' /etc/default/keyboard         //set in the beginning during raspberry pi os setup, do not modify

#config.txt changes

# Make sure we have 32bit framebuffer depth; but alpha needs to go off
if grep -q framebuffer_depth /boot/config.txt; then
  sudo sed 's/^framebuffer_depth.*/framebuffer_depth=32/' -i /boot/config.txt
else
  echo 'framebuffer_depth=32' | sudo tee -a /boot/config.txt >/dev/null
fi

if grep -q framebuffer_ignore_alpha /boot/config.txt; then
  sudo sed 's/^framebuffer_ignore_alpha.*/framebuffer_ignore_alpha=1/' -i /boot/config.txt
else
  echo 'framebuffer_ignore_alpha=1' | sudo tee -a /boot/config.txt >/dev/null
fi

# disable overscan  for all layers
sudo sed 's/.*disable_overscan.*/disable_overscan=1/' -i /boot/config.txt
sudo sed -i '$a\overscan_scale=0' /boot/config.txt

# Force hotplug of HDMI and avoid switching to composite
sudo sed 's/.*hdmi_force_hotplug.*/hdmi_force_hotplug=1/' -i /boot/config.txt

#default it programs based on EDID values
#sudo sed 's/.*hdmi_group.*/hdmi_group=1/' -i /boot/config.txt
#sudo sed 's/.*hdmi_mode.*/hdmi_mode=4/' -i /boot/config.txt
#sudo sed 's/.*hdmi_drive.*/hdmi_drive=2/' -i /boot/config.txt

#chagne SDTV aspect to 16:9
sudo sed -i '/sdtv_mode/ a\sdtv_aspect=3' /boot/config.txt

#default it programs based on display dimension, overscan values keep as it is
#sudo sed -i -e 's/.*overscan_left.*/\#overscan_left=40/' -e 's/.*overscan_right.*/\#overscan_right=40/' -e 's/.*overscan_top.*/\#overscan_top=20/' -e 's/.*overscan_bottom.*/\#overscan_bottom=20/' -e 's/.*framebuffer_width.*/framebuffer_width=1280/' -e 's/.*framebuffer_height.*/framebuffer_height=720/'  /boot/config.txt

if grep -q display_rotate /boot/config.txt; then
  echo "line already present"
else
  echo 'display_rotate=0' | sudo tee -a /boot/config.txt >/dev/null
#  echo 'display_hdmi_rotate=0' | sudo tee -a /boot/config.txt > /dev/null
#  echo 'display_lcd_rotate=0' | sudo tee -a /boot/config.txt > /dev/null
fi

notify "Quiet boot and Turn off Screen Blanking"
sudo sed -i 's/splash/ /' /boot/cmdline.txt
sudo sed -i 's/quiet/ /' /boot/cmdline.txt
sudo sed -i 's/consoleblank=0/ /' /boot/cmdline.txt
#sudo sed -i '$ a\ quiet' /boot/cmdline.txt
sudo cp $HOME/player2/public/img/splash.png /usr/share/plymouth/themes/pix/splash.png
sudo sed -i '1 s_$_ quiet splash consoleblank=0_' /boot/cmdline.txt

notify "Add new memory allocation"
#instead of gpu_mem, use cma , https://forums.raspberrypi.com/viewtopic.php?t=316769#p1895683
sudo sed 's/.*vc4-kms-v3d.*/dtoverlay=vc4-kms-v3d,cma-512/' -i /boot/config.txt

#Load the V4L2 stateless video decoder driver for the HEVC block,disabling the memory mapped devices in the process.
if grep -q rpivid-v4l2 /boot/config.txt; then
  sudo sed 's/.*rpivid-v4l2.*/dtoverlay=rpivid-v4l2/' -i /boot/config.txt
else
  echo 'dtoverlay=rpivid-v4l2' | sudo tee -a /boot/config.txt >/dev/null
fi

