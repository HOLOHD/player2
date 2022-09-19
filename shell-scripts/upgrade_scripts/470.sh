echo "Installing new SDL based ticker"
cd $HOME/player2/tools/sdl_ticker
chmod +x make.sh
./make.sh

if grep -q Raspbian /etc/os-release; then

  notify "Add new memory allocation"
  #instead of gpu_mem, use cma , https://forums.raspberrypi.com/viewtopic.php?t=316769#p1895683
  sudo sed 's/.*vc4-kms-v3d.*/dtoverlay=vc4-kms-v3d,cma-512/' -i /boot/config.txt
  sudo sed 's/gpu_mem/#gpu_mem/g' -i /boot/config.txt

  #Load the V4L2 stateless video decoder driver for the HEVC block,disabling the memory mapped devices in the process.
  if grep -q rpivid-v4l2 /boot/config.txt; then
    sudo sed 's/.*rpivid-v4l2.*/dtoverlay=rpivid-v4l2/' -i /boot/config.txt
  else
    echo 'dtoverlay=rpivid-v4l2' | sudo tee -a /boot/config.txt >/dev/null
  fi


  cd $HOME
  sudo cp $HOME/player2/public/img/splash.png /usr/share/plymouth/themes/pix/splash.png

fi

sudo apt update
sudo apt -y full-upgrade
sudo apt update --fix-missing

