export const uncaughtAllErrors = () => {
    Cypress.on('uncaught:exception', () => {
        return false;
    });
};