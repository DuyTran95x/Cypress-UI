import {uncaughtAllErrors} from "../../support/exception/uncaughtErrorsCypress"
import { MenuPage } from "../../pages/menupage/elementsmenupage.cy";

let menuPage = new MenuPage()
describe('Guest User Join Site', () => {
    beforeEach(() => {
        cy.viewport('iphone-8');
        uncaughtAllErrors();
        cy.visit(`${Cypress.env('BASE_URL')}`);
        cy.wait(5000);
        cy.get('body').invoke('show').click({force:true});
        cy.wait(5000);
        menuPage.btnMenuPage.click();
        cy.wait(5000);
    })

    it('Verifies Banner is visible as guest', () => {
        menuPage.iconAvatar.should('not.exist');
        menuPage.totalBalance.should('not.exist');
        menuPage.totalWagered.should('not.exist');
        menuPage.bonusHistory.should('not.exist');
        menuPage.transactionHistory.should('not.exist');
        menuPage.betHistory.should('not.exist');
        
    })

    it('Redirects to login page upon click as guest',()=>{
        menuPage.topBanner.should('be.visible').click({force:true});
        cy.url().should('include','/en/login?redirect=/en/referrals');
        cy.wait(5000);
    })

    it('Refer and earn',()=>{
        menuPage.btnReferAndEarn.click();
        cy.url().should('include','/en/login?redirect=/en/referrals');
        cy.wait(5000);
    })
})