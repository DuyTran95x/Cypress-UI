This is the cypress for e2e testing project.

## Project setup

- `Nodejs version`: v20.11.1
- `NPM version`: v10.5.0
- `Yarn version`: v1.22.22

```bash
yarn install
```

### Libraries

- [Cypress](https://www.cypress.io/)


## Compiles and hot-reloads for development

```bash
yarn open
```

Open [http://localhost:62706/\_\_/#/specs](http://localhost:62706/__/#/specs) with your browser to see the result.

##  runs all browsers `--headless`

```bash
yarn test-chrome
yarn test-firefox
```

### TEST CASE

E2E:
- `/cypress.config.js`: file configturations
- `/cypress.env.js`: file environment variable

- `/e2e`
  - `/<folder-name>`: folder contain test cases
  - `/<name>/_init`: file will Craw data for fixtures

- `cypress/support/commands.js`: Global constant method support testing


<!-- cypress run --spec 'path/to/files/*.spec.js' -->

#### Navigation

#### Network connect the all paths
