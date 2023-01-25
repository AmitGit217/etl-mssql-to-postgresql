# etl-mssql-to-postgresql

## Objective

Your main mission is to convert MSSQL database to PostgreSQL while transforming the data such that
it can fit in perfectly into the new Prisma schemas.

You have your source database in the root folder in a file called `mssql-db.bacpac`
You will need to configure your target database in the .env file as the following:

    DATABASE_URL="postgresql://postgres:<password>@localhost:5432/test-etl?schema=public"

You will have three tables in the old database with some records, and a Prisma schemas in the `prisma/prisma.schema` file
to understand the relationships between tables.

In the old database (MSSQL) the relationships aren't good and they need massive transformation, how you that this is on you.

Rules:

1.Do not change anything from the prisma schema. This is you structure you need to fit in.
2.You can use any tool you need, we are not going to block you from solving the problem for specific technologies.

**Please make sure your solution is scalable as much as you can**

I suggest you to read prisma docs to understand the wanted result more clearly
