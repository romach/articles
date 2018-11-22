Examples of data insertion for PostgreSQL 10.

## Create database

```
psql -d template1 -c "CREATE DATABASE users;"
```

### Create database using sql script

```
psql -d template1 -a -f create_database.sql
```

## Drop database

```
psql -d template1 -c "DROP DATABASE users;"
```

## Create tables
```
psql -d users -a -f create_tables.sql
```