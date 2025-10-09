import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ExploreRolesPage } from '../pages/ExploreRolesPage';
import { FrontEndDevPage } from '../pages/FrontEndDevPage';

test.describe('Coursera Frontend Development Role', () => {
  test('Navigate and fetch Frontend Dev course details', async ({ page }) => {
    const homePage = new HomePage(page);
    const rolesPage = new ExploreRolesPage(page);
    const frontendPage = new FrontEndDevPage(page);

    await page.goto('https://www.coursera.org/');

    await homePage.clickExplore();
    await homePage.clickExploreRolesViewAll();

    await rolesPage.showMoreRoles();
    await rolesPage.selectFrontendDev();

    const title = await frontendPage.getTitle();
    console.log('Title:', title);
    expect(title?.toLowerCase()).toContain('front end');

    const skills = await frontendPage.getSkills();
    console.log('Skills:', skills);
    expect(skills.length).toBeGreaterThan(0);

    const medianSalary = await frontendPage.getMedianSalary();
    console.log('Median Salary:', medianSalary);
    expect(medianSalary).not.toBeNull();

    const jobsAvailable = await frontendPage.getJobsAvailable();
    console.log('Jobs Available:', jobsAvailable);
    expect(jobsAvailable).not.toBeNull();
  });
});
