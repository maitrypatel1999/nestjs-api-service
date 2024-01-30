# Nestjs Api Service

Uses [NestJS](https://docs.nestjs.com/)
Prod deploys use [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) for process management

## Installation

```bash
$ npm install
```

## Running the app

```bash
# setup env
$ npm config:local

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Swagger

Swagger available on path /swagger

## PM2 helper commands

```bash
# monitor service
./node_modules/pm2/bin/pm2 monit
```

## Development
Using nest cli to make development easier

```bash
# install cli
$ npm i -g @nestjs/cli

# generate a new module
$ nest generate mo [name]

# generate a new controller
$ nest generate co [name]
```
