import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class SalesFormPage extends BasePage {
    readonly page: Page;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    // Wait for page to load after clicking "For Universities"
    public async waitForPageLoad() {
        await this.page.waitForLoadState('domcontentloaded', { timeout: 60000 });
    }

    public async fillFirstName(firstName: string) {
        await this.page.fill(allLocators.SalesFormPage.firstName, firstName);
    }

    public async fillLastName(lastName: string) {
        await this.page.fill(allLocators.SalesFormPage.lastName, lastName);
    }

    public async fillEmail(email: string) {
        await this.page.fill(allLocators.SalesFormPage.email, email);
    }

    public async fillPhone(phone: string) {
        await this.page.fill(allLocators.SalesFormPage.phone, phone);
    }

    public async selectInstitutionType() {
        await this.page.selectOption(
            allLocators.SalesFormPage.institutionType,
            'University/4 Year College'
        );
    }

    public async fillInstitutionName(name: string) {
        await this.page.fill(allLocators.SalesFormPage.institutionName, name);
    }

    public async selectJobRole() {
        await this.page.selectOption(allLocators.SalesFormPage.jobRole, 'Student');
    }

    public async selectDepartment() {
        await this.page.selectOption(
            allLocators.SalesFormPage.department,
            'Continuing Education'
        );
    }

    public async selectNeeds() {
        await this.page.selectOption(
            allLocators.SalesFormPage.needs,
            'Courses for myself'
        );
    }

    public async selectCountry() {
        await this.page.selectOption(allLocators.SalesFormPage.country, 'India');
    }

    public async clickSubmit() {
        await this.page.click(allLocators.SalesFormPage.submitButton);
    }

 public async isErrorVisible() {
    try {
        const errorLocator = this.page.locator(allLocators.SalesFormPage.errorMessage);
        await errorLocator.waitFor({ state: 'visible', timeout: 5000 });
        return await errorLocator.isVisible();
    } catch {
        return false;
    }
}
}