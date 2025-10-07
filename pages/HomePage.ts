
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class HomePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async clickHelpLink() {
    await this.page.getByRole('link', { name: 'Help' }).click();
  }
}