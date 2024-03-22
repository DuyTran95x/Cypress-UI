import { uncaughtAllErrors } from "../../support/exception/uncaughtErrorsCypress"
import { Footer } from "../../pages/headerandfooter/elementsfooter.cy";

let footer = new Footer();
describe('Verify Footer', () => {
    
    beforeEach(() => {
        cy.viewport('iphone-8');
        uncaughtAllErrors();
        cy.visit(`${Cypress.env('BASE_URL')}`);
        cy.wait(5000);
        cy.get('body').invoke('show').click({ force: true });
        cy.wait(5000);
        cy.get('footer').scrollIntoView();
    })

    it('Footer -> Casino Section', () => {
        footer.itemHotGames.click()
        cy.url().should('include','/en/play/top-game');
        footer.itemSlots.scrollIntoView().click();
        cy.url().should('include','/en/play/slots');
        footer.itemBaccarat.scrollIntoView().click();
        cy.url().should('include','/en/play/baccarat');
        footer.itemCryptoGames.scrollIntoView().click();
        cy.url().should('include','/en/play/crypto-game');
        footer.itemLiveCasino.scrollIntoView().click();
        cy.url().should('include','/en/play/live-casino');
        footer.itemTableGames.scrollIntoView().click();
        cy.url().should('include','/en/play/board-game');
        footer.itemBlackjack.scrollIntoView().click();
        cy.url().should('include','/en/play/blackjack');
        footer.itemRoulette.scrollIntoView().click();
        cy.url().should('include','/en/play/roulette');
    })

})