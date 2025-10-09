import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class AgileCoursePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async printAllDetails() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(4000); 
        const titleLocator = this.page.locator(allLocators.AgileCoursePage.courseTitle);
        const courseraPlusLocator = this.page.locator(allLocators.AgileCoursePage.courseraPlus);

        const title = (await titleLocator.textContent())?.trim() || 'N/A';
        const courseraPlus = (await courseraPlusLocator.first().textContent())?.trim() || 'N/A';

        console.log(`\n===== COURSE DETAILS =====`);
        console.log(`Title: ${title}`);
        console.log(`Coursera Plus: ${courseraPlus}`);
        console.log(`===========================\n`);

    }
    async verifyCourseDetails() {
        await expect(this.page.locator(allLocators.AgileCoursePage.courseTitle)).toBeVisible();

        const maybeVisible = async (locator: string) => {
            const element = this.page.locator(locator);
            if (await element.count() > 0) {
                await expect(element.first()).toBeVisible();
            } else {
                console.warn(`Optional element not found: ${locator}`);
            }

        };
        await maybeVisible(allLocators.AgileCoursePage.courseraPlus);
    }
}
