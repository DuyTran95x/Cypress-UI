const MENU_PAGE = '[href="/en/menu"] > .menu-bar__text'
const AVATAR = 'div.avatar'
const TOP_BANNER_INFOR = '(//div[@class="top-banner__info"])[2]'
const TOTAL_BALANCE = '//span[normalize-space()="Total Balance"]'
const TOTAL_WAGERED = '(//span[normalize-space()="Total Wagered"])[2]'
const BONUS_HISTORY = '(//span[normalize-space()="Bonus History"])[2]'
const TRANSACTION_HISTORY = '(//span[normalize-space()="Transaction History"])[2]'
const BET_HISTORY = '(//span[normalize-space()="Bet History"])[2]'
const REFER_AND_EARN = '(//span[normalize-space()="Refer and Earn"])[2]'
const LIVE_SUPPORT = '//span[normalize-space()="Live Support"]'
const WALLET = '(//span[normalize-space()="Wallet"])[2]'

// Elements Login User
const MENU_INFO = 'div.menu__userinfo'
const BUTTON_LOGOUT = '//span[normalize-space()="Logout"]'
const TGB_WALLET = '(//span[normalize-space()="Lucked TGB Wallet"])[2]'

export class MenuPage {
    get btnMenuPage(){
        return cy.get(MENU_PAGE)
    }

    get iconAvatar(){
        return cy.get(AVATAR)
    }

    get topBanner(){
        return cy.xpath(TOP_BANNER_INFOR)
    }

    get totalBalance(){
        return cy.xpath(TOTAL_BALANCE)
    }

    get totalWagered(){
        return cy.xpath(TOTAL_WAGERED)
    }

    get bonusHistory(){
        return cy.xpath(BONUS_HISTORY)
    }

    get transactionHistory(){
        return cy.xpath(TRANSACTION_HISTORY)
    }

    get betHistory(){
        return cy.xpath(BET_HISTORY)
    }

    get btnReferAndEarn(){
        return cy.xpath(REFER_AND_EARN)
    }

    get btnLiveSupport(){
        return cy.xpath(LIVE_SUPPORT)
    }

    get btnWallet(){
        return cy.xpath(WALLET)
    }

    get btnTGBWallet(){
        return cy.xpath(TGB_WALLET)
    }

    // Elements Login User
    get menuInfo(){
        return cy.get(MENU_INFO)
    }

    get btnLogOut(){
        return cy.xpath(BUTTON_LOGOUT)
    }
}