#!/usr/bin/env bash
# run this file with sudo ./install.sh

# output executing commands
set -x

# update packages
apt-get update

# add package to use add-apt-repository command
apt-get install -y software-properties-common

# add ppa:webupd8team/java repository
add-apt-repository -y ppa:webupd8team/java

# update packages
apt-get update

# accept Oracle license
echo debconf shared/accepted-oracle-license-v1-1 select true | debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | debconf-set-selections

# install java 8
apt-get install -y oracle-java8-installer

# show JVM version
java -version

# show Java compiler version
javaс -version