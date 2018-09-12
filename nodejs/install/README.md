Script for install NodeJS.

## How to use

```
./install.sh
```

## For global packages

**Global packages** - packages that you cna run as command-line programs.

By default global packages are installed to `/usr/lib/node_modules` directory. To install them you need to use root
privileges.

If you will try to install package globally without root privileges, you will get error: 

```
WARN checkPermissions Missing write access to /usr/lib/node_modules
```