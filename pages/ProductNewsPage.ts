import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class ProductNewsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickTopStory() {
    const featuredLink = this.page.locator(allLocators.ProductNewsPage.topStory);
    await featuredLink.click();
  }

  async captureScreenshot() {
    await this.page.screenshot({ path: 'top-story-page.png', timeout: 90000 });
  }
}
