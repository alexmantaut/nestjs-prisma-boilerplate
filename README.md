[![build](https://github.com/alexmantaut/nestjs-prisma-boilerplate/actions/workflows/node.js.yml/badge.svg)](https://github.com/alexmantaut/nestjs-prisma-boilerplate/actions/workflows/node.js.yml)
![Statements](./badges/coverage-statements.svg)
## Description

Boilerplate code for a Rest API, implemented with Prisma and NestJS.

## Auth0

To do authentication, you need to have an auth0 account.

Steps
- Create an Auth0 account
- Create an M2M application with all permissions
- Set M2M application credentials
  - `$ export AUTH0_DOMAIN=<domain>`
  - `$ export AUTH0_CLIENT_ID=<client_id>`
  - `$ export AUTH0_CLIENT_SECRET=<client_secret>`
- `$ ./auth0-setup.sh`

## Installation

```bash
$ npm install
```

## Running the app locally

```bash
# starting the DB
$ docker-compose up --build db

# migrating the DB
$ npm run prisma:migrate

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app in docker

```bash
docker compose --env-file /dev/null up --build
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support
