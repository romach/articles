#!/usr/bin/env bash
# print executing commands
set -x

# install Ansible
apt-get update
apt-get install -y software-properties-common
apt-add-repository --yes --update ppa:ansible/ansible
apt-get install -y ansible