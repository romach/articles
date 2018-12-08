Tomcat installation script on Ubuntu.

## Prerequisites:

- [install Java](https://github.com/romach/examples/tree/master/java/install)

## How to use:

Save script to `install.sh` file.
```bash
# make file install.sh executable
chmod +x install.sh

# run install.sh script
./install.sh

# execute `~/.bashrc` file:
source ~/.bashrc

# run Tomcat
~/apache-tomcat-9.0.13/bin/startup.sh

# open Tomcat start page
xdg-open http://localhost:8080 </dev/null &>/dev/null &

# shutdown Tomcat
~/apache-tomcat-9.0.13/bin/shutdown.sh
```