import { Po2Page } from './app.po';

describe('po2 App', () => {
  let page: Po2Page;

  beforeEach(() => {
    page = new Po2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
