import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class ExecutiveMBAPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async waitForLoad() {
        await this.page.waitForURL('**/degrees/emba-iitr', { timeout: 10000, waitUntil: 'commit' });
    }

    async getAdmissionText() {
        return await this.page.locator(allLocators.ExecutiveMBAPage.admissionNotice).textContent();
    }
}