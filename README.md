# Cypress-API

API automation practice with Cypress — testing REST endpoints directly with `cy.request()`, no UI involved. See [PROJECT_DESCRIPTION.md](./PROJECT_DESCRIPTION.md) for the why behind it.

## What's tested

`cypress/e2e/getUsers.cy.js` runs against the public [GoRest](https://gorest.co.in) users API:

- GET the users collection
- GET a single user by ID and assert the returned `id` matches
- GET an invalid endpoint path and assert a 404
- GET a non-existent user ID and assert a 404

## Setup

```
npm install
```

Set a GoRest API token as the `GOREST_TOKEN` environment variable before running (get one free at [gorest.co.in](https://gorest.co.in)):

```
export GOREST_TOKEN=your-token-here
```

## Running

```
npx cypress run --spec cypress/e2e/getUsers.cy.js
```

Or open the Cypress UI:

```
npx cypress open
```

## Tech Stack

Cypress 12.17.3, JavaScript, GoRest public API.
