import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class MasterDegreePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async clickExecutiveMBA() {
        return await this.page.locator(allLocators.MasterDegreePage.executiveMBALink).click();
    }
}
