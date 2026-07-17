# Project Description
**Cypress-API — API testing practice with Cypress**

I put this together to practice testing REST APIs directly with Cypress, without a UI in the loop, using the free GoRest public API as the target.

## Problem
I wanted to get comfortable with `cy.request()` and see how far I could push assertions on raw HTTP responses (status codes, body fields) instead of DOM elements. GoRest's public users endpoint is a decent sandbox for this since it's free, has predictable data, and lets me hit both valid and invalid routes without setting up my own backend.

## Approach
- Used `cy.request()` to hit `https://gorest.co.in/public/v2/users/` for a plain GET on the collection
- Fetched a single user by ID and asserted the returned `id` matches what was requested
- Tested an invalid endpoint path and an invalid/non-existent user ID, both with `failOnStatusCode: false` so Cypress doesn't fail the test before the assertion runs, then asserted on the 404
- Logged the full response body with `cy.log(JSON.stringify(response))` for debugging while writing the tests
- Kept the default Cypress scaffold (`cypress.config.js`, `support/e2e.js`, `support/commands.js`) mostly untouched since this was focused on the request/assertion side, not custom commands

## Tech Stack
Cypress 12.17.3, JavaScript, GoRest public API (https://gorest.co.in)

## Status
Personal practice project, not production code. Tests run against GoRest's live public API rather than a mocked/local server, so results depend on that service being up. No CI wired in yet.
