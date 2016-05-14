export class ForiswebappPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('foriswebapp-app h1')).getText();
  }
}
