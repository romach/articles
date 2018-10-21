# Readme

- `java.sql.Driver` - main class of JDBC API
    - provides access to database connection

- application invokes `java.sql.DriverManager.getConnection()`
    - `DriverManager` - is physical connection factory
    - requests a new physical connection, uses `Driver` to get
    `java.sql.Connection`
        - `Driver` creates `java.sql.Connection`
            - `Connection` uses `java.net.SocketFactory` to create `java.net.Socket`

- application closes `Connection`

- `javax.sql.DataSource` - logical connection provider.
    - uses `DriverManager` to get `Connection`
    
## Connection pools
- reuses polls of connections
- does not closes connection, but releases it
- wrapper over `DataSource`
- http://brettwooldridge.github.io/HikariCP/