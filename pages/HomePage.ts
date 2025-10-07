   import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class HomePage extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async clickForUniversities() {
        // Use locator from locators.json (can be text or xpath)
        const uniLink = this.page.locator(allLocators.HomePage.forUniversities);
        await uniLink.waitFor({ state: 'visible', timeout: 60000 }); // wait up to 60s
        await uniLink.click();
    }

    async navigateToForEnterprise() {
    const forEnterprise = this.page.locator(allLocators.HomePage.forEnterprises);
    await forEnterprise.scrollIntoViewIfNeeded();
    await forEnterprise.click();
    // wait for something specific on the new page
    await this.page.locator(allLocators.EnterpriseResourcesPage.resources).waitFor({ state: 'visible', timeout: 30000 });
}
}
