Script for install NodeJS.

## How to use

### First method

Save script to `install.sh` file.
```bash
# make file install.sh executable
chmod +x install.sh

# run install.sh script
sudo ./install.sh
```

### Second method

Download script and run it:
```bash
sudo sh -c 'wget -O - https://raw.githubusercontent.com/romach/examples/master/nodejs/install/install.sh | sudo bash'
```

## Global packages

**Global packages** - packages that you cna run as command-line programs.

By default global packages are installed to `/usr/lib/node_modules` directory. To install them you need to use root
privileges.

If you will try to install package globally without root privileges, you will get error: 

```
WARN checkPermissions Missing write access to /usr/lib/node_modules
```