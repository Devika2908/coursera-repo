import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class CurrentRolePage extends BasePage{
     readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async selectRole(role: string) {
 const input = this.page.locator(allLocators.CurrentRolePage.roleInput);
    await input.scrollIntoViewIfNeeded();
    await input.click({ force: true });
    await input.fill(role);
    await this.page.locator(`text=${role}`).click({ force: true }); // dynamic role selection
    const nextBtn = this.page.locator(allLocators.CurrentRolePage.nextButton);
    await nextBtn.scrollIntoViewIfNeeded();
    await nextBtn.click({ force: true });
  }

}
