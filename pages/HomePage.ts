import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class HomePage extends BasePage {
    
    //Web Dev Course
    async searchForTerm(term: string) {
        await this.page.fill(allLocators.HomePage.searchBar, term);
        await this.page.click(allLocators.HomePage.webDev);
    }

    //Front End Course
    async clickExplore() {
        await this.page.locator(allLocators.HomePage.exploreButton).click();
    }

    async clickExploreRolesViewAll() {
        await this.page.locator(allLocators.HomePage.exploreRolesViewAll).click();
    }

}

