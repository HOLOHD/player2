echo "installing yt-dlp for Youtube streams on MPV player"
sudo curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
sudo chmod a+rx /usr/local/bin/yt-dlp

echo "installing youtube-dl"
sudo -H pip install --upgrade youtube-dl
