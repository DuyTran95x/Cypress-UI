import {uncaughtAllErrors} from '../exception/uncaughtErrorsCypress'

const login = () => {
    uncaughtAllErrors();
    cy.visit(Cypress.env('BASE_URL'), {
      onBeforeLoad: (win) => {
        win.localStorage.setItem('token', Cypress.env('AUTH_TOKEN'));
      }
    });
  };
  // Cypress commands add login
  Cypress.Commands.add('login', login);