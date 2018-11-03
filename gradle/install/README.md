Gradle installation script on Ubuntu.

## How to use:

### First method

Save script to `install.sh` file.
```bash
# make file install.sh executable
chmod +x install.sh
# run install.sh script
sudo ./install.sh
# execute `~/.bashrc` file:
source ~/.bashrc
```

### Second method

Download script and run it:
```bash
sudo sh -c 'wget -O - https://raw.githubusercontent.com/romach/examples/master/gradle/install/install.sh | sudo bash'
# execute `~/.bashrc` file:
source ~/.bashrc
```