echo "Create user-data-dir for Secondary(Default-1) browsers for 2 display functionality"
mkdir -p $HOME/apps-data/.config/chromium/Default-1

echo "Installing new SDL based ticker"
cd $HOME/player2/tools/sdl_ticker
chmod +x make.sh
./make.sh

sudo apt update
sudo apt -y full-upgrade
sudo apt update --fix-missing
