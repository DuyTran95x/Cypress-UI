import HomepageArrayHrefs from '../../fixtures/navigation/homepage.json'
const { _ } = Cypress;
describe('Navigation - Check Home URL', () => {
    beforeEach(() => {
        cy.viewport('iphone-8');
        cy.login();
        cy.wait(5000)
        cy.get('body').invoke('show').click({force:true})
        cy.wait(5000)
    });

    _.each(HomepageArrayHrefs, (link, idx) => {
        it(`Should check game ${idx} in ${link} URL`, () => {
            cy.visit(`${Cypress.env('BASE_URL')}/${link}`);
            cy.wait(5000)
            cy.get('body').then(($body) => {
                if (cy.get($body).invoke('show').click({force: true})) {
                    cy.wait(10000)
                    cy.screenshot(
                        `${Cypress.env('SCREENSHOT_NAVIGATION_HOMEPAGE_PATH')}/game-${idx}`
                    );
                    cy.wait(5000);
                    return cy.get('iframe').should('be.visible');
                } else {
                    return cy.isPageAvailable();
                }
            })
        });
    });
});