import { uncaughtAllErrors } from "../../support/exception/uncaughtErrorsCypress"
import { Header } from "../../pages/headerandfooter/elementsheader.cy";
import tokenGuestUser from "../../fixtures/navigation/token.json"
import tokenLoginUser from "../../fixtures/navigation/tokenuser.json"
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
})