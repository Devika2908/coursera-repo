import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';
export class HomePage extends BasePage {
  readonly page: Page;
  readonly joinForFreeBtn: string;
  readonly nameInput: string;
  readonly emailInput: string;
  readonly passwordInput: string;
  readonly continueBtn: string;
  readonly submitBtn: string;
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

  constructor(page: Page) {
    super(page);
    this.page = page;
<<<<<<< HEAD
    this.joinForFreeBtn = allLocators.HomePage.joinForFreeBtn;
    this.nameInput = allLocators.HomePage.nameInput;
    this.emailInput = allLocators.HomePage.emailInput;
    this.passwordInput = allLocators.HomePage.passwordInput;
    this.continueBtn = allLocators.HomePage.continueBtn;
    this.submitBtn = allLocators.HomePage.submitBtn;
  }

  async clickJoinForFree() {
    await this.page.locator(this.joinForFreeBtn).waitFor({ state: 'visible', timeout: 20000 });
    await this.page.click(this.joinForFreeBtn);
  }

  async detectUIVersion(): Promise<'emailFirst' | 'fullForm'> {
    const emailLocator = this.page.locator(this.emailInput);
    const nameLocator = this.page.locator(this.nameInput);

    if (await emailLocator.isVisible({ timeout: 5000 })) {
      return 'emailFirst';
    } else if (await nameLocator.isVisible({ timeout: 5000 })) {
      return 'fullForm';
    } else {
      throw new Error('Unable to detect UI version');
    }
  }

  async fillEmail(email: string) {
    await this.page.locator(this.emailInput).waitFor({ state: 'visible', timeout: 20000 });
    await this.page.fill(this.emailInput, email);
  }

  async clickContinue() {
    await this.page.locator(this.continueBtn).waitFor({ state: 'visible', timeout: 20000 });
    await this.page.click(this.continueBtn);
  }

  async fillNameAndPassword(name: string, password: string) {
    await this.page.locator(this.nameInput).waitFor({ state: 'visible', timeout: 20000 });
    await this.page.fill(this.nameInput, name);

    await this.page.locator(this.passwordInput).waitFor({ state: 'visible', timeout: 20000 });
    await this.page.fill(this.passwordInput, password);
  }

  async fillRegistrationForm(name: string, email: string, password: string) {
    await this.page.locator(this.nameInput).waitFor({ state: 'visible', timeout: 20000 });
    await this.page.fill(this.nameInput, name);

    await this.page.locator(this.emailInput).waitFor({ state: 'visible', timeout: 20000 });
    await this.page.fill(this.emailInput, email);

    await this.page.locator(this.passwordInput).waitFor({ state: 'visible', timeout: 20000 });
    await this.page.fill(this.passwordInput, password);
  }

  async submitForm() {
    await this.page.locator(this.submitBtn).waitFor({ state: 'visible', timeout: 20000 });
    await this.page.click(this.submitBtn);
  }
}
=======
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
>>>>>>> 397cb4360fd3f17a73b7ee1f7d166d1c5dbec010
>>>>>>> 3c9148c480731868c503c6426cdc9372259338bc
>>>>>>> a9cc077c14c004871b727eee82116a2c1d4ea223
>>>>>>> 93c17beb5f1f341bc73e7b79e7896324796c9bb6
