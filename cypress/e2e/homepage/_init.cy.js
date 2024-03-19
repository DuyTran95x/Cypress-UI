describe('Navigation - Craw all the URL in HOME PAGE', () => {
    before(() => {
        cy.viewport('iphone-8');
        cy.wait(5000);
        cy.login();
        cy.wait(5000);
        cy.get('body').invoke('show').click({force:true})
        cy.wait(5000);
        cy.get('div.scrollbar-background2 div div.home-list-v3__item').find('a').as('links');
    })

    it('get All links and save', () => {
        cy.get('@links').then(($links) => {
            const arrHrefs = $links.map((_, link) => {
                return Cypress.$(link).attr('href');
            });
            if (Object.hasOwn(arrHrefs, 'prevObject')) {
                delete arrHrefs.prevObject;
            }
            cy.writeFile(Cypress.env('FIXTURE_NAVIGATION_HOMEPAGE_PATH'), arrHrefs);
        });
    });
})