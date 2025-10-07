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

  constructor(page: Page) {
    super(page);
    this.page = page;
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
