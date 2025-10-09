import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class HelpPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async clickPaymentsAndSubscriptions() {
    await this.page.locator(allLocators.HelpPage.paymentsAndSubscriptions).click();
  }
}
