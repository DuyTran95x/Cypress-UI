import { MenuPage } from "../../pages/menupage/elementsmenupage.cy";

let menuPage = new MenuPage()
describe('Login User Join Site', () => {
    beforeEach(() => {
        cy.viewport('iphone-8');
        cy.wait(5000);
        cy.login();
        cy.visit(`${Cypress.env('BASE_URL')}`);
        cy.wait(5000);
        cy.get('body').invoke('show').click({force:true});
        cy.wait(5000);
        menuPage.btnMenuPage.click();
        cy.wait(5000);
    })

    it('Verify User Infor',()=>{
        menuPage.menuInfo.should('be.visible');
        menuPage.iconAvatar.should('be.visible');
        menuPage.topBanner.should('be.visible');
    })

    it('Redirects to Referrals page upon click as user',()=>{
        menuPage.topBanner.should('be.visible').click({force:true});
        cy.url().should('include','en/referrals');
        cy.wait(5000);
    })

    it('The options will display when a user log-in', () => {
        menuPage.btnWallet.should('be.visible').click();
        cy.url().should('include','en/wallet?tab=Deposit')
        menuPage.btnMenuPage.click();
        cy.wait(2000);
        menuPage.totalBalance.should('be.visible');
        menuPage.totalWagered.should('be.visible').click();
        cy.url().should('include','en/menu/extra/wagered')
        menuPage.btnMenuPage.click();
        cy.wait(2000);
        menuPage.bonusHistory.should('be.visible').click();
        cy.url().should('include','en/menu/extra/bonus')
        menuPage.btnMenuPage.click();
        cy.wait(2000);
        menuPage.transactionHistory.should('be.visible').click();
        cy.url().should('include','en/menu/extra/transaction')
        menuPage.btnMenuPage.click();
        cy.wait(2000);
        menuPage.betHistory.should('be.visible').click();
        cy.url().should('include','en/menu/extra/bet')
        menuPage.btnMenuPage.click();
        cy.wait(2000);
        menuPage.btnTGBWallet.should('be.visible').click();
        cy.url().should('include','en/menu/extra/locked-tgb-wallet')
        menuPage.btnMenuPage.click();
        cy.wait(2000);
        menuPage.btnLogOut.should('be.visible');
    })

    
})