<<<<<<< HEAD

import { Page } from '@playwright/test';
=======
   import { Page } from '@playwright/test';
>>>>>>> a9cc077c14c004871b727eee82116a2c1d4ea223
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

<<<<<<< HEAD
export class HomePage extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async clickForUniversities() {
        // Use locator from locators.json (can be text or xpath)
        const uniLink = this.page.locator(allLocators.HomePage.forUniversities);
        await uniLink.waitFor({ state: 'visible', timeout: 60000 }); // wait up to 60s
        await uniLink.click();
    }

    async navigateToForEnterprise() {
    const forEnterprise = this.page.locator(allLocators.HomePage.forEnterprises);
    await forEnterprise.scrollIntoViewIfNeeded();
    await forEnterprise.click();
    // wait for something specific on the new page
    await this.page.locator(allLocators.EnterpriseResourcesPage.resources).waitFor({ state: 'visible', timeout: 30000 });
}
}
=======
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
<<<<<<< HEAD
    
}
=======



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
>>>>>>> 3c9148c480731868c503c6426cdc9372259338bc
>>>>>>> a9cc077c14c004871b727eee82116a2c1d4ea223
