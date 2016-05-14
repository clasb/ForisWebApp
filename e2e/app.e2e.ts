import { ForiswebappPage } from './app.po';

describe('foriswebapp App', function() {
  let page: ForiswebappPage;

  beforeEach(() => {
    page = new ForiswebappPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('foriswebapp works!');
  });
});
