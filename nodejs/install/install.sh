#!/usr/bin/env bash

# install curl
sudo apt-get update
sudo apt-get install curl

# install nodejs
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

# For global packages
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo "export PATH=~/.npm-global/bin:$PATH" >> ~/.profile
source ~/.profile

# Check versions
node -v
npm -v