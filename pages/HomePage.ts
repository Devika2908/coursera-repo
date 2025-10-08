
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class HomePage extends BasePage {
<<<<<<< HEAD
=======
  readonly page: Page;
  readonly joinForFreeBtn: string;
  readonly nameInput: string;
  readonly emailInput: string;
  readonly passwordInput: string;
  readonly continueBtn: string;
  readonly submitBtn: string;
=======
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
>>>>>>> 93c17beb5f1f341bc73e7b79e7896324796c9bb6
>>>>>>> 472566a7c6c98159276fcc5f2571ae2429a8426b

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