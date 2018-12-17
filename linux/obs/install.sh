#!/usr/bin/env bash

set +x

## Install OBS Studio
sudo add-apt-repository ppa:obsproject/obs-studio &&
sudo apt-get update &&
sudo apt-get install obs-studio