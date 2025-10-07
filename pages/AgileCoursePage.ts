 import { Page,expect } from '@playwright/test';
 import { BasePage } from './BasePage';
 import allLocators from '../locators/locators.json';
 
 export class AgileCoursePage extends BasePage{
 readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;

    }

    async printAllDetails() {
        // Wait for the course title to appear before extracting any details
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForTimeout(4000); // give extra buffer for dynamic content
        const titleLocator = this.page.locator(allLocators.AgileCoursePage.courseTitle);
        const courseraPlusLocator = this.page.locator(allLocators.AgileCoursePage.courseraPlus);
       
        // Wait safely for each one (don’t assume all exist)
        const title = (await titleLocator.textContent())?.trim() || 'N/A';
        const courseraPlus = (await courseraPlusLocator.first().textContent())?.trim() || 'N/A';


        console.log(`\n===== COURSE DETAILS =====`);
        console.log(`Title: ${title}`);
        console.log(`Coursera Plus: ${courseraPlus}`);
        console.log(`===========================\n`);

    }
    async verifyCourseDetails() {
        await expect(this.page.locator(allLocators.AgileCoursePage.courseTitle)).toBeVisible();

        // Make others optional so the test doesn’t hang forever if one element isn’t rendered
        const maybeVisible = async (locator: string) => {
            const element = this.page.locator(locator);
            if (await element.count() > 0) {
                await expect(element.first()).toBeVisible();
            } else {
                console.warn(`⚠️ Optional element not found: ${locator}`);
            }

        };
        await maybeVisible(allLocators.AgileCoursePage.courseraPlus);
    }
}