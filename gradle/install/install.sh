#!/usr/bin/env bash
# print executing commands
set -x

# download Gradle from official website to user home directory:
wget -O ~/gradle-4.2.1-bin.zip https://services.gradle.org/distributions/gradle-4.2.1-bin.zip

# install unzip - tool for extracting compressed files from ZIP archive:
apt-get install -y unzip

# unzip Gradle archive:
sudo mkdir /opt/gradle
sudo unzip -d /opt/gradle ~/gradle-4.2.1-bin.zip

# delete Gradle archive:
rm ~/gradle-4.2.1-bin.zip

# add Gradle to `PATH` environment variable:
echo "export PATH=\$PATH:/opt/gradle/gradle-4.2.1/bin" >> ~/.bashrc

# execute `~/.bashrc` file:
source ~/.bashrc

#check Gradle version:
gradle -v