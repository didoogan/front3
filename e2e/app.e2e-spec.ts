import { Front3Page } from './app.po';

describe('front3 App', function() {
  let page: Front3Page;

  beforeEach(() => {
    page = new Front3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
