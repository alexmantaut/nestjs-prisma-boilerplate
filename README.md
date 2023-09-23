[![build](https://github.com/alexmantaut/nestjs-prisma-boilerplate/actions/workflows/node.js.yml/badge.svg)](https://github.com/alexmantaut/nestjs-prisma-boilerplate/actions/workflows/node.js.yml)
![Statements](./badges/coverage-statements.svg)
## Description

Boilerplate code for a Rest API, implemented with Prisma and NestJS.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# starting the DB
$ docker-compose up --build

# migrating the DB
$ npm run prisma:migrate

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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
