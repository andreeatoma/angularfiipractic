import { HistoryshellPage } from './app.po';

describe('historyshell App', () => {
  let page: HistoryshellPage;

  beforeEach(() => {
    page = new HistoryshellPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('his works!');
  });
});
