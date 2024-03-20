import { uncaughtAllErrors } from "../../support/exception/uncaughtErrorsCypress"
import { Header } from "../../pages/headerandfooter/elementsheader.cy";
let header = new Header();
let tokenGuest = [];
let tokenLogin = [];

describe('Verify Header', () => {
    
    beforeEach(() => {
        cy.viewport('iphone-8');
        uncaughtAllErrors();
        cy.visit(`${Cypress.env('BASE_URL')}`);
        cy.wait(5000);
        cy.get('body').invoke('show').click({ force: true });
        cy.wait(5000);
    })

    it('Guest user join site', () => {
        header.imgAvata.should('not.exist');
        header.selectToken.click();
        cy.get('div.shadow-md button')
            .each(($li) => tokenGuest.push($li.text().trim()))
            .then(() => {
                cy.log(JSON.stringify(tokenGuest))
                cy.writeFile(Cypress.env('TOKEN_PATH'), tokenGuest)
            }) 
    })

    it('Login user join site', () => {
        cy.login();
        cy.wait(5000);
        cy.get('body').invoke('show').click({ force: true });
        cy.wait(5000);
        header.imgAvata.should('be.visible');
        header.selectToken.click();
        cy.get('div.shadow-md button')
            .each(($li) => tokenLogin.push($li.text().trim()))
            .then(() => {
                cy.log(JSON.stringify(tokenLogin))
                cy.writeFile(Cypress.env('TOKEN_USER_PATH'), tokenLogin)
            }) 
    })

})