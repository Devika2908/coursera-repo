import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class BlogPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickProductNews() {
    const link = this.page.locator(allLocators.BlogPage.productNewsLink);
    await link.waitFor({ state: 'visible' });
    await link.click();
  }
}

