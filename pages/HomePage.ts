import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

<<<<<<< HEAD
export class HomePage extends BasePage {
    
    //Web Dev Course
    async searchForTerm(term: string) {
        await this.page.fill(allLocators.HomePage.searchBar, term);
        await this.page.click(allLocators.HomePage.webDev);
    }

    //Front End Course
    async clickExplore() {
        await this.page.locator(allLocators.HomePage.exploreButton).click();
    }

    async clickExploreRolesViewAll() {
        await this.page.locator(allLocators.HomePage.exploreRolesViewAll).click();
    }

}

=======
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
}
>>>>>>> 397cb4360fd3f17a73b7ee1f7d166d1c5dbec010
