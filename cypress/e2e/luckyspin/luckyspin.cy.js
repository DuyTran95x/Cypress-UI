describe('MiniGame Luckspin', () => {
    beforeEach(() => {
        cy.viewport('iphone-8');
        cy.wait(5000);
        cy.login();
        cy.visit(`${Cypress.env('BASE_URL')}`);
        cy.wait(5000);
        cy.get('body').invoke('show').click({ force: true });
        cy.wait(5000);
    })

    it('Verify Luckspin', () => {
        cy.get('.bonus-and-reward-slides__lucky-spin__cta > .bonus-and-reward-slides__item__content__cta__btn')
        .should('be.visible').click({ force: true });
        cy.wait(5000);
        cy.get('.z-30 > .w-8').click();

        // Verify button check rewards
        cy.get('div.flex div.grid button.undefined').eq(0).should('be.visible').click();
        cy.get('.z-30 > .py-3').should('be.visible')
        cy.get('.z-30 > .w-8').click();

        // Verify button invite friends
        cy.get('div.flex div.grid button.undefined').eq(1).should('be.visible').click();
        cy.get('.mb-4 > .grid').should('be.visible');
        cy.get('button.text-text-gray svg').click();

        // Verify button check my account
        cy.get('div.justify-start div div img').eq(1).click();
        cy.get('.z-30 > .py-3').should('be.visible')
        cy.get('.z-30 > .w-8').click();

        // Verify button total rewards
        cy.get('div.items-start').click();
        cy.xpath('//span[normalize-space()="Winner"]').should('be.visible');
    })


})