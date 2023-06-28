# Description

This take home test for a Software engineer position at Inato.

# Requirements

The minimal requirements to run the api server and the cli tool are:

* npm
* yarn

# Technical stack

For the API server this are the libraries I chose for this challenge:

* Apollo/server
* Graphql
* Nexus
* Typescript 5

And for the CLI tool:

* Commander
* Figler
* Typescript 5

For both applications we use `jest` as unit testing library.
The stack choose here was inspired from the one used at Inato according to this [blog](https://stackshare.io/inato/marketplace). I am not familiar with this stack but I found it pretty straightforward to build the assignment.
  
# Download the source code

1. `git clone https://github.com/ESegundoRolon/senior-take-home-test`
2. `cd senior-take-home-test`

# How to run the api server

1. After downloading the source code, run `yarn` in the root `senior-take-home-test` folder to install dependencies.
2. Run `yarn api`
3. Go to `http://localhost:4000`

# How to run the CLI tool

1. After downloading the source code, run `yarn` in the root `senior-take-home-test` folder to install dependencies.
2. Run `yarn cli -h` to see the available commands
3. For example to query clinical trials with France as country, run `yarn cli -c fr`

# Architecture

## Code base
Either the `api`, `cli` or the `common` folders respect the same layers inside of each context:

* Services: Define the public entry-points to our contexts, They perform orchestration and responsible for reflecting the business scenario.
* Commands: Are responsible for representation of a single step in our business process. This is where our implementation details will live and they can be shared across multiple services of the same context.
* Models: They hold information that will be passed between commands. This information can be data, identity and/or state.

The project contains the source code for the API server and the CLI tool inside `packages` folder to facilitate the sharing of `clinicalTrial` context, which lives in the `common` folder as it's a shared context within both applications. I considered that even if both applications do not use the same `services`, splitting the same context will lead to be harder to maintain.

As the `clinicalTrial` context define a common business language and encapsulates business logic exposed through the public interfaces in the `services`, which are needed for our applications (in this case the API server and the CLI tool), it may be good idea to separate this from the main repository and share it as an internal library.

The `Country` context lives only inside `cli` application as it's not re-used anywhere for now, but eventually can be separated to be shared with other applications as an internal library.

## Tests

All unit tests and integration tests lives in the `__test__` folder which is the default folder set by `jest`. 
This is not ideal as we may want to run batteries of tests by application or the test time will increase if the tests for all aplications live inside the same repository.
I did not manage to configure `jest` to run the tests from the application directly as described on [this guide](https://swizec.com/blog/how-to-configure-jest-with-typescript/).
The configuration proposed in that guide was not compatible with my `tsconfig.json` configuration for the `resolveJsonModule` attribute.
I started with the default `jest` configuration to build the solution but at the end I wanted to refactor this to have for example `./packages/api/src/__tests__/`, but I ran out of time.

## Time spent
As I mentioned earlier, I am not familiar with the stack and that make me a lit slower than usual as I was reading lots of documentations while building the solution. I got delayed a bunch of times for the following reasons:

1. Adding date scalar, I tried to use the `graphql-iso-date` which it's referenced in some graphql doc, but this lib seems not maintained anymore and it's [not compatible with graphql v16](https://github.com/excitement-engineer/graphql-iso-date/issues/150).
2. Understand `tsconfig.json` and their attributes to be able to parse a json file directly using the `resolveJsonModule`.
3. Migrating from `apollo-server` to `@apollo/server`, in [GraphQL Nexus docs](https://nexusjs.org/docs/getting-started/tutorial/chapter-setup-and-first-query) the tutorials refer to `apollo-server` which is deprecated so I first did the set-up with the deprecated library to finally need to migrate and figure out how to integrate `nexus` with `@apollo/server`.
4. Using `@apollo/server` v4 uses the `await` keyword at a top level file which it's not a module in their [examples when setting up the server](https://www.apollographql.com/docs/apollo-server/migration), this leads a compilation error so I tried to target `es2022` or changing the `module` to a compatible one but I broke all imports so I finally refactor that to use standar promises notation.
5. Tried to remove the `data` and the `clinicalTrials` attributes from the JSON structure response of the server to match the exact expected result but I did not find out any configuration override on `@apollo/server` for modifying the response structure. It should be doable though.

The total time spend in the assignment it's **about 6 total hours**.

* Setup environment and working tests: 2 hours.
* Solution implementation 3 hours.
* Documenting and refactoring: 1 hour.

