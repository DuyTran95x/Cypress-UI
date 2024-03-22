const HOT_GAMES = '//a[normalize-space()="Hot Games"]'
const SLOTS = '//a[normalize-space()="Slots"]'
const BACCARAT = '//a[normalize-space()="Baccarat"]'
const CRYPTO_GAMES ='//a[normalize-space()="Crypto Games"]'
const LIVE_CASINO = '//a[normalize-space()="Live Casino"]'
const TABLE_GAMES = '//a[normalize-space()="Table Games"]'
const BLACKJACK = '//a[normalize-space()="Blackjack"]'
const ROULETTE = '//a[normalize-space()="Roulette"]'

export class Footer{
    get itemHotGames(){
        return cy.xpath(HOT_GAMES)
    }

    get itemSlots(){
        return cy.xpath(SLOTS)
    }

    get itemBaccarat(){
        return cy.xpath(BACCARAT)
    }

    get itemCryptoGames(){
        return cy.xpath(CRYPTO_GAMES)
    }

    get itemLiveCasino(){
        return cy.xpath(LIVE_CASINO)
    }

    get itemTableGames(){
        return cy.xpath(TABLE_GAMES)
    }

    get itemBlackjack(){
        return cy.xpath(BLACKJACK)
    }

    get itemRoulette(){
        return cy.xpath(ROULETTE)
    }





}