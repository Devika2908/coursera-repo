import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class EnterpriseResourcesPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
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

 async selectTopic(topic: string) {
    const dropdown = this.page.locator(allLocators.EnterpriseResourcesPage.topicDropdown);
    await dropdown.click();

    // pick the first matching element inside the dropdown
    const option = this.page.locator(`text=${topic}`);
    await option.click();
}


 
}
