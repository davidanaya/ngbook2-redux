import { Ngbook2ReduxPage } from './app.po';

describe('ngbook2-redux App', function() {
  let page: Ngbook2ReduxPage;

  beforeEach(() => {
    page = new Ngbook2ReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
