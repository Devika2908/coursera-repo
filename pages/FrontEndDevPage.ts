import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class FrontEndDevPage extends BasePage{
    
    async getTitle(): Promise<string | null> {
        return await this.page.locator(allLocators.FrontEndDevPage.title).textContent();
    }

    async getSkills(): Promise<string[]> {
        const skillsText = await this.page.locator(allLocators.FrontEndDevPage.skills).textContent();
        if (!skillsText) return [];
        return skillsText.split(',').map(s => s.trim());
    }

    async getMedianSalary(): Promise<string | null> {
        return await this.page.locator(allLocators.FrontEndDevPage.medianSalary).textContent();
    }

    async getJobsAvailable(): Promise<string | null> {
        return await this.page.locator(allLocators.FrontEndDevPage.jobsAvailable).textContent();
    }

}
