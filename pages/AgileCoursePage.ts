<<<<<<< HEAD
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
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 75059cad02bcdc44047401bbe5bc71517a254b93
>>>>>>> 27a6ffac8839950c8040da36045b933d8107ced2
>>>>>>> 32fc361abe1d520c274179652f4378094cc3cf2f
>>>>>>> 432261e4ec847629fc27ae82970ae5102b6fbd7a
>>>>>>> ef65d5758aa1686811639c81d5545946528a19e5
>>>>>>> a9514dc67273f7113fa67e8473bb85b0b1dd4852
>>>>>>> a2d63f00d951328835302770211154a2ba9e5746
>>>>>>> 571a836bcaf5f4780d8468f646b198c0768d6bec
>>>>>>> 9bbbcad7571da3690932c4b9533014cad9232ea8
>>>>>>> a7bc21ee8b4c5b493a8aaff5e382d1d65fe860e4
