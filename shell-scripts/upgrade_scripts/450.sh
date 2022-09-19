echo "adding user to input group so that mouse-clicks could be read for kiosk"
sudo usermod -a -G input $USER

echo "Installing SDL based ticker"
cd $HOME/player2/tools/sdl_ticker
chmod +x make.sh
./make.sh

echo "Disable startup video as omxplayer no longer available"
sudo systemctl disable welcome.service

echo "Copy new start.sh"
cd $HOME
cp player2/shell-scripts/start.sh .

echo "Delete old node_modules directory"
cd $HOME/player2/public/kiosk-ui
rm -rf node_modules
npm install




