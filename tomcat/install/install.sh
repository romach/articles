#!/usr/bin/env bash
# run this file with sudo ./install.sh

# output executing commands
set -x

# update packages
apt-get update

# download Tomcat distribution
wget http://apache.cp.if.ua/tomcat/tomcat-9/v9.0.13/bin/apache-tomcat-9.0.13.tar.gz
tar -xvzf apache-tomcat-9.0.13.tar.gz

# add Tomcat to `PATH` environment variable:
echo "export PATH=\$PATH:~/apache-tomcat-9.0.13" >> ~/.bashrc