# Install Ansible.

- install on control host (host, from Ansible is executed):

  ```bash
  sudo ./install-on-control-host.sh
  ```

- install Python on remote host:

  ```bash
  sudo apt-get install -y python-minimal
  ```
- add actual data to `inventory.ini` file

- test, that Ansible is installed properly (show free space on remote node):

  ```bash
  ansible host_name -i inventory.ini -m shell -a 'df -h'
  ```