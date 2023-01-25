# etl-mssql-to-postgresql

## Objective

You have in this repository two main components
  1. MSSQL database file with pre-configured relationships, does relationships are not configured well
  2. Nest.js server with prisma schemes you can find the structure in prisma/prisma.schema
  
The server is already built with schemas, relations etc. 

Your mission is to take the data as is from the MSSQL and create ETL pipline that will 
repair the weak relationships from the MSSQL and than load the tables into the postgreSQL database.  

Rules:
 1. You can use any tool you want.
 2. Do not change or modifie anything from the prisma schemas or any configuration of the Nest server, just convert the old data to match the new database.
 3. Make your solution as scalable as you can, imagine you are about to do the process for "n" databases.
