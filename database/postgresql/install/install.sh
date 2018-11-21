#!/usr/bin/env bash
# print executing commands
set -x

# use PostgreSQL Apt Repository
install -Dv /dev/null /etc/apt/sources.list.d/pgdg.list
echo "deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main" | tee --append /etc/apt/sources.list.d/pgdg.list

# Import the repository signing key, and update the package lists
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
apt-get update

# install Postgresql and pgAdmin 3
apt-get install -y postgresql-10 pgadmin3

# check status: service postgresql status
# check version: sudo -u postgres psql -c 'SELECT version();'
# change password for user postgres: sudo -u postgres psql -c "alter user postgres with password 'postgres';"
# check directory with postgres files: ls /var/lib/postgresql/10/
# run pgAdmin 3: pgadmin3

# Links:
# https://www.postgresql.org/download/linux/ubuntu/