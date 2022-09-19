#!/bin/sh
####################################################################
# this script will take care of restoring the old image in case of issue with new one
#move the previous image
#reboot
#####################################################################

pm2 stop piSignage
killall -s 9 chromium
killall -s 9 feh
killall -s 9 chromium-browser

cd $HOME

echo "rolling back to previous release"

if [ -d "$HOME/player2.prev"  ]
then
    sudo rm -rf  $HOME/player2.problem
    mv  $HOME/player2  $HOME/player2.problem
    cp -a  $HOME/player2.prev/  $HOME/player2
    sync
    sudo systemctl reboot
fi

