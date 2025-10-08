

import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class LanguagePage extends BasePage {


  constructor(page: Page) {
    super(page);
  }

  async expandLanguageFilter() {
    const expandButton = this.page.locator('[data-testid="search-filter-group-Language"] [data-testid="expand-filter-items-button"]');
    await expandButton.waitFor({ state: 'visible', timeout: 10000 });
    await expandButton.scrollIntoViewIfNeeded();
    await expandButton.click();
  }

  async getLanguages(): Promise<string[]> {
    const languageElements = await this.page.locator('div[data-testid^="language:"]');
    const languages = await languageElements.allTextContents();
    return languages.map((lang) => lang.trim().replace(/\s*\(.*?\)\s*/g, ''));
  }

  async getLevels(): Promise<string[]> {
    await this.page.waitForSelector('[data-testid^="productDifficultyLevel:"]', { timeout: 10000 });
    const levels = await this.page.$$eval('[data-testid^="productDifficultyLevel:"]', elements =>
      elements.map(el => {
        const testId = el.getAttribute('data-testid');
        return testId ? testId.replace('productDifficultyLevel:', '').replace(/-.*/, '') : '';
      })
    );
    return levels;
  }
}


