<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

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

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## API Documents

[https://restful-nest.onrender.com/api](https://restful-nest.onrender.com/api)

## .env example

```.env
// .env
PSQL_USER=your-database-username
PSQL_PASSWORD=your-database-password
PSQL_DATABASE=your-database-name
JWT_SECRET_KEY=your-secret-key
```

### Chinook database

A sample database for a digital media store, including tables for artists, albums, media tracks, invoices, customers, and more.

1. Create a `chinook` database:

   ```sql
   CREATE DATABASE chinook;
   ```

2. Download the source file:

   <CodeBlock shouldWrap>

   ```bash
   wget https://raw.githubusercontent.com/neondatabase/postgres-sample-dbs/main/chinook.sql
   ```

   </CodeBlock>

3. Navigate to the directory where you downloaded the source file, and run the following command:

   <CodeBlock shouldWrap>

   ```bash
   psql -d "postgres://<user>:<password>@<hostname>/chinook" -f chinook.sql
   ```

   </CodeBlock>

4. Connect to the `chinook` database:

   ```bash
   psql postgres://<user>:<password>@<hostname>/chinook
   ```

5. Find out the most sold item by track title:

   ```sql
   SELECT
   T."Name" AS "Track Title",
   SUM(IL."Quantity") AS "Total Sold"
   FROM
       "Track" T
   JOIN
       "InvoiceLine" IL ON T."TrackId" = IL."TrackId"
   GROUP BY
       T."Name"
   ORDER BY
       "Total Sold" DESC
   LIMIT 1;
   ```

- Source: [https://github.com/lerocha/chinook-database](https://github.com/lerocha/chinook-database)
- License: [LICENSE.md](https://github.com/lerocha/chinook-database/blob/master/LICENSE.md)
- `Copyright (c) 2008-2017 Luis Rocha`
