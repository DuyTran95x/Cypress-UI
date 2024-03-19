Cypress.Commands.add('isPageAvailable', () => {
    cy.get('.ErrorView').should('not.exist');
    cy.get('[data-cy="Game not found"]').should('not.exist');
    cy.get('[data-cy="Page not found"]').should('not.exist');
});