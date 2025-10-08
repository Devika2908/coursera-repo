import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class HomePage extends BasePage{

  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async selectGrowRole() {
  const btn = this.page.locator(allLocators.HomePage.growRoleOption);
    await btn.scrollIntoViewIfNeeded();
    await btn.click({ force: true });

  }

  async searchCourse(courseName: string) {

        const searchBox = this.page.locator(allLocators.HomePage.whatDoYouWantToLearn);

        await searchBox.fill(courseName);

        await searchBox.press('Enter');

    }



    async clickBlog() {
      await this.page.locator(allLocators.HomePage.blogPage).click();
  }
}
