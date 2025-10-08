
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

  async navigateToLanguageLearning() {
    await this.page.goto('https://www.coursera.org/');
    await this.page.getByTestId('megamenu-explore-button').click();
    await this.page.getByTestId('megamenu-item~Language Learning')
      .getByRole('link', { name: 'Language Learning' }).click();
  }
}