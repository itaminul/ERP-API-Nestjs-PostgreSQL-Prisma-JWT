# ERP back-end using NestJS, postgreSQL and prisma

## Installation

### installation processes

```bash
 npm install
```

## Modules

- HR
- Inventory
- Quiz Test

## Module wise features

### HR Module

### Employee Information

- Create employee
- Update employee
- Get all employee

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_URI` = Your postgreSQL URL

`JWT_SECRET` = Your custom JWT_SECREAT key

`expired` = Token expred time

## Error Handling

- If you see the following error message while running `npm run migrate:dev` script command or `npx prisma migrate dev` command then create the shadow database manually by using command Line or a database query client like DBeaver, HeidiSQL, pgAdmin, and so on.
  `Database "apierp_shadow_db" does not exist on the database server at "localhost:5432".`
  Alternatively you can just run this command `sudo chmod +x init-multiple-dbs.sh` to give permission to the custom script so that it creates the shadow database for us while running `docker compose up`.
