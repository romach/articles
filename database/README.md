# Readme

## Transaction time

- connection acquisition time;
- send database statements;
- execution time for statements;
- sending the result sets back;
- transaction idle time;

**Universal Scalability Law** - approximates the maximum relative throughput (system capacity) in relation to the number
 of database connections.
 
## Scaling
 
- vertically (up) - adding resources to a single machine;
- horizontal (out) - increasing the number of available machines;
 
## Replication
 
- Master-Slave
    - Master - accepts writes
        - all changes are replayed onto Slaves
            - binary replication - uses WAL (Write Ahead Log)
            - statement-based replication - replays Master statements to Slave
            - asynchronous replication (warm standby) - might be behind the Master
            - synchronous replication (hot standby) - Master waits for Slave update
    - Slave - get replication from Master
    
- Multi-Master
    - all nodes are equal
    - two-phase commit protocol

## Sharding

- each node has only one part of the data