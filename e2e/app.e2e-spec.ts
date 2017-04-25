import { SuntravelClientPage } from './app.po';

describe('suntravel-client App', function() {
  let page: SuntravelClientPage;

  beforeEach(() => {
    page = new SuntravelClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
