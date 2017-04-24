import { browser, element, by } from 'protractor';

export class HistoryshellPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('his-root h1')).getText();
  }
}
