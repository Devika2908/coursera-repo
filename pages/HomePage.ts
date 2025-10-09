import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    //Web Dev Course
    async searchForTerm(term: string) {
        await this.page.locator(allLocators.HomePage.searchBar).fill(term);
        await this.page.locator(allLocators.HomePage.searchBar).press('Enter');
    }

    //Front End Course
    async clickExplore() {
        await this.page.locator(allLocators.HomePage.exploreButton).click();
    }

    async clickExploreRolesViewAll() {
        await this.page.locator(allLocators.HomePage.exploreRolesViewAll).click();
    }

    //Grow in Role
    async selectGrowRole() {
        const btn = this.page.locator(allLocators.HomePage.growRoleOption);
        await btn.scrollIntoViewIfNeeded();
        await btn.click({ force: true });
    }

    //Agile Methodologies Course
    async searchCourse(courseName: string) {
        const searchBox = this.page.locator(allLocators.HomePage.whatDoYouWantToLearn);
        await searchBox.fill(courseName);
        await searchBox.press('Enter');
    }

    //Sales Form
    async clickForUniversities() {
        const uniLink = this.page.locator(allLocators.HomePage.forUniversities);
        await uniLink.waitFor({ state: 'visible', timeout: 60000 }); // wait up to 60s
        await uniLink.click();
    }

    //Enterprise Resources
    async navigateToForEnterprise() {
        const forEnterprise = this.page.locator(allLocators.HomePage.forEnterprises);
        await forEnterprise.scrollIntoViewIfNeeded();
        await forEnterprise.click();
        await this.page.locator(allLocators.EnterpriseResourcesPage.resources).waitFor({ state: 'visible', timeout: 30000 });
    }

    //Payment Methods
    async clickHelpLink() {
        await this.page.locator(allLocators.HomePage.helpLink).click();
    }

    //Language and Levels
    async navigateToLanguageLearning() {
        await this.page.goto('https://www.coursera.org/');
        await this.page.locator(allLocators.HomePage.exploreButton1).click();
        await this.page.locator(allLocators.HomePage.languageLearningLink).click();
    }

    //Blog Page
    async navigateToHome() {
        await this.page.goto('https://www.coursera.org/', { waitUntil: 'domcontentloaded' });
    }

    async clickBlogLink() {
        const popupPromise = this.page.waitForEvent('popup');
        await this.page.locator(allLocators.HomePage.blogLink).click();
        return await popupPromise;
    }

    //MBA Admission
    async goToHomePage() {
        await this.navigateTo('https://www.coursera.org/');
    }

    async clickExplore1() {
        await this.click(allLocators.HomePage.exploreButton1);
    }

    async clickMastersDegree() {
        await this.click(allLocators.HomePage.mastersDegreeLink);
    }

}
