import { PolyAngularPage } from './app.po';

describe('poly-angular App', () => {
  let page: PolyAngularPage;

  beforeEach(() => {
    page = new PolyAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
