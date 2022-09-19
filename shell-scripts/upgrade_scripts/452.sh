echo "Create user-data-dir for puppeteer weblinks"
mkdir -p $HOME/apps-data/.config/chromium/weblink-0
mkdir -p $HOME/apps-data/.config/chromium/weblink-1
mkdir -p $HOME/apps-data/.config/chromium/weblink-2
mkdir -p $HOME/apps-data/.config/chromium/weblink-3
mkdir -p $HOME/apps-data/.config/chromium/weblink-4
chmod -R 777 $HOME/apps-data

#vlc media player is not installed on debian by default
echo "installing vlc media player and pqiv"
sudo apt install vlc -y

#for logo program
sudo apt-get install -y pqiv
