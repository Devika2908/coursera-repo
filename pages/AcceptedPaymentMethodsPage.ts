import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';
import { TIMEOUT } from 'dns';


export class AcceptedPaymentMethodsPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

 async getPaymentMethods(): Promise<string[]> {
  await this.page.waitForSelector("//article[contains(@class,'content')]//ul[1]", { state: 'visible', timeout: 90000 });

  const listLocator = this.page.locator("//article[contains(@class,'content')]//ul[1]/li");
  const count = await listLocator.count();
 const texts: string[] = [];

  for (let i = 0; i < count; i++) {
    const text = await listLocator.nth(i).innerText();
    texts.push(text);
  }

  return texts;
 }
}
