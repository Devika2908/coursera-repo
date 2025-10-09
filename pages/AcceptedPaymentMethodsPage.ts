import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class AcceptedPaymentMethodsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getPaymentMethods(): Promise<string[]> {
    await this.page.waitForSelector(allLocators.AcceptedPaymentMethodsPage.paymentList, { state: 'visible', timeout: 90000 });
    const listLocator = this.page.locator(allLocators.AcceptedPaymentMethodsPage.paymentItems);
    const count = await listLocator.count();
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      const text = await listLocator.nth(i).innerText();
      texts.push(text);
    }

    return texts;
  }
}
