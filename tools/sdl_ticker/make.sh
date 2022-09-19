#!/usr/bin/env bash
cd $HOME/player2/tools/sdl_ticker
sudo apt-get -y install libsdl2-2.0-0  libsdl2-dev
sudo apt-get -y install libcairo2 libcairo2-dev
sudo apt-get -y install libpango1.0-dev
make
sudo mkdir -p /usr/local/bin
sudo rm -f /usr/local/bin/ticker
sudo cp  $HOME/player2/tools/sdl_ticker/ticker /usr/local/bin/ticker
sudo chmod +x /usr/local/bin/ticker
