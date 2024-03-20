const AVATA_LOGIN = 'a.overflow-hidden img'
const TOKEN_DROPDOWN = 'div.gap-2 div.justify-center div.DropdownOnClick '

export class Header{
    get imgAvata(){
        return cy.get(AVATA_LOGIN)
    }

    get selectToken(){
        return cy.get(TOKEN_DROPDOWN)
    }
}