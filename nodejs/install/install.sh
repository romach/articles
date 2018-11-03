#!/usr/bin/env bash
# run this file with sudo ./install.sh

# output executing commands
set -x

# install curl
apt-get update
apt-get install -y curl

# install nodejs
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get install -y nodejs

# For global packages
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo "export PATH=~/.npm-global/bin:\$PATH" >> ~/.profile
source ~/.profile

# Check versions
node -v
npm -v