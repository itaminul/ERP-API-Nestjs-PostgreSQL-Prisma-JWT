# ERP Backend

This is a ERP backend repository using NestJS, PostgreSQL, Prisma and Docker.

## Run the App using Script Command

Prerequisites: You have to have installed Postgres in your machine.

- Create a `.env` file at the root and add essential environment variables from `.env.example` file
- Run `npm install` or `yarn`
- Now to run the app in the Dev Environment run `npm run start:dev` or `yarn start:dev`
- For production, first build using `npm run build` or `yarn build` and then run `npm start` or `yarn start`
- Now the server should listen on `http://localhost:8000` based on the port number you set in `.env`

## Run the App using Docker

Prerequisites: You have to have installed Docker and Docker-compose in your computer

- Create a `.env` file at the project root and add essential environment variables from `.env.example` file
- Open any command line tool in your computer like for Windows `Git Bash`, for Linux `Terminal` or `Terminator`, and for Mac `iTerm2`, and so on.
- Change directory to this project in which location you have for example `cd ~/www/ERP-API-nestjs-postgreSQL-prisma`
- Now run `docker compose up` or `docker-compose up` if you installed docker compose separately
- Now the server should listen on `http://localhost:8000` based on the port number you set in `.env`

## How to remove Docker Containers, Images, Volumes and Networks

- To delete all the Containers, Images and Volumes: `docker system prune --volumes -af`
- To delete all the Networks: `docker network prune -f`
- To delete all containers including its volumes: `docker rm -vf $(docker ps -aq)`
- To delete all the images: `docker rmi -f $(docker images -aq)`
- To delete specific Container: `docker rm container_id1, container_id2...`
- To delete specific Images: `docker rmi image_id1, image_id2...`
- To delete specific Networks: `docker network rm network_id1, network_id2...`
- To delete specific Volumes: `docker volume rm volume_id1, volume_id2...`

## List of Modules

- HR
- Inventory
- Online Exam
- Admission Management System
- E-commerce

## Module Wise Features

### HR Module

### Employee Information

- Create employee
- Update employee
- Get all employee

### Test

# unit tests
- npm run test

## Error Handling

- If you see the following error message while running `npm run migrate:dev` script command or `npx prisma migrate dev` command then create the shadow database manually by using command Line or a database query client like DBeaver, HeidiSQL, pgAdmin, and so on.
  `Error: Database "apierp_shadow_db" does not exist on the database server at "localhost:5432".`

  - Alternatively you can just run this command `sudo chmod +x init-multiple-dbs.sh` before running `docker compose up` to give the permission to the container for running the custom script so that it can create the shadow database for prisma.

- If you see this `Error: P1001: Can't reach database server at "postgres:5432"` error message while running `npm run migrate:dev` script command or `npx prisma generate` or `npx prisma migrate dev` command to perform Prisma migrations locally then you can replace the value of `POSTGRES_HOST` with `localhost` like `POSTGRES_HOST=localhost` in `.env` file.
  
  **N.B**: Please keep in mind, before running `docker compose up` first the value of the `POSTGRES_HOST` env variable should be `postgres` because, inside docker, services communicate with each other with their container name as the hostname like when we'll run `docker compose up`, our `nest-app` service will be connected with `postgres` service through `http://postgres:5432`.

  - Alternatively you can run the command from the container by using this command `docker exec -it nest-app bash`
