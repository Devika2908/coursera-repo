import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class ExploreRolesPage extends BasePage{

    async showMoreRoles() {
        await this.page.locator(allLocators.ExploreRolesPage.showMore).click();
    }

    async selectFrontendDev() {
        await this.page.locator(allLocators.ExploreRolesPage.frontendDev).click();
    }

}
