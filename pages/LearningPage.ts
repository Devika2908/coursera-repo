import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class LearningPage extends BasePage{
    readonly page:Page;
    constructor(page:Page){
        super(page);
        this.page=page;
    }
    async selectAgileCourse() {
        const courseLocator = this.page.locator(allLocators.LearningPage.courseResult);
        await courseLocator.waitFor({ state: 'visible', timeout: 30000 });
        await courseLocator.click();
    }
}