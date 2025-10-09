import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class LanguagePage extends BasePage {

  constructor(page: Page) {
    super(page);
  }


  async getLanguages(): Promise<string[]> {
    const languageElements = this.page.locator(allLocators.LanguagePage.languageItems);
    await languageElements.first().waitFor({ state: 'visible', timeout: 10000 });

    const count = await languageElements.count();
    for (let i = 0; i < count; i++) {
      await languageElements.nth(i).scrollIntoViewIfNeeded();
    }

    const languages = await languageElements.allTextContents();
    return languages.map((lang) => lang.trim().replace(/\s*\(.*?\)\s*/g, ''));
  }

  async getLevels(): Promise<string[]> {
    await this.page.waitForSelector(allLocators.LanguagePage.levelItems, { timeout: 10000 });

    const levels = await this.page.$$eval(allLocators.LanguagePage.levelItems, elements =>
      elements.map(el => {
        const testId = el.getAttribute('data-testid');
        return testId ? testId.replace('productDifficultyLevel:', '').replace(/-.*/, '') : '';
      })
    );

    return levels;
  }
}

