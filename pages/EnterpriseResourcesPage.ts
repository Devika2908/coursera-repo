import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class EnterpriseResourcesPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickResources() {
    const res = this.page.locator(allLocators.EnterpriseResourcesPage.resources);
    await res.waitFor({ state: 'visible' });
    await res.click();
  }

  async clickArticles() {
    const art = this.page.locator(allLocators.EnterpriseResourcesPage.articles).first();;
    await art.waitFor({ state: 'visible' });
    await art.click();
  }

}
