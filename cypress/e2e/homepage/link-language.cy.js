const { _ } = Cypress;
import Languages from '../../fixtures/navigation/language.json';

describe('Navigation - Check Home Languages URL', () => {
    beforeEach(() => {
      cy.viewport('iphone-8');
      cy.login();
      cy.visit(Cypress.env('BASE_URL'));
      cy.get('body').invoke('show').click({force:true});
      cy.wait(5000);
    });
  
    _.each(Languages, (link) => {
      it(`Should check ${link} URL`, () => {
        const home_meta_description = {
          '/vi': 'Sòng bạc trực tuyến tốt nhất.',
          '/en':
            'The best online casino. Play live casino, slot games, sports betting and online 4D lottery with us! Register now!',
          '/zh-CN': '最好的在线赌场.',
          '/pt-BR': 'O melhor cassino online.',
          '/zh-TW': '最好的在線賭場.',
          '/es': 'El mejor casino en línea.',
          '/ru': 'Лучшее онлайн казино.',
          '/ar': 'أفضل كازينو على الإنترنت.',
          '/tr': 'En iyi çevrimiçi kumarhane.',
          '/th': 'คาสิโนออนไลน์ที่ดีที่สุด',
          '/ja': '最高のオンラインカジノ。',
          '/ko': '최고의 온라인 카지노.',
          '/bn': 'সেরা অনলাইন ক্যাসিনো.',
          '/bg': 'Най-доброто онлайн казино.',
          '/cs': 'Nejlepší online kasino.',
          '/de': 'Das beste Online-Casino.',
          '/el': 'Το καλύτερο online καζίνο.',
          '/fr': 'Le meilleur casino en ligne.',
          '/hu': 'A legjobb online kaszinó.',
          '/id': 'Kasino daring terbaik.',
          '/it': 'Il miglior casinò online.',
          '/nl': 'Het beste online casino.',
          '/pl': 'Najlepsze kasyno online.',
          '/pt': 'O melhor cassino online.',
          '/ro': 'Cel mai bun cazinou online.',
          '/sk': 'Najlepšie online kasíno.'
        };
        cy.visit(`${Cypress.env('BASE_URL')}${link}`);
        cy.get('body').invoke('show').click({force:true});
        cy.wait(5000);
        cy.url().should('include', link);
        cy.get('head meta[name="description"]')
          .invoke('attr', 'content')
          .should('include', home_meta_description[link]);
      });
    });
  });