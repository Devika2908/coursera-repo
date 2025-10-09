import { test, expect } from '../utils/test-base';
import { HomePage } from '../pages/HomePage';
import { CurrentRolePage } from '../pages/CurrentRolePage';
import { SkillSelectPage } from '../pages/SkillSelectPage';
import { readCSVData } from '../utils/readCSV';

const rolesData = readCSVData('data/testdata_searchbar.csv');
const roles = rolesData.map((r: any) => r.role);

for (const role of roles) {
  test(`Coursera Growth Role flow for role: ${role}`, async ({ pages }) => {
    const homePage = new HomePage(pages.page);
    const currentRolePage = new CurrentRolePage(pages.page);
    const skillSelectPage = new SkillSelectPage(pages.page);

    await pages.page.goto('https://www.coursera.org/');

    await homePage.selectGrowRole();

    await currentRolePage.selectRole(role);

    await skillSelectPage.selectSkillsAndFinish();

    await expect(pages.page).toHaveURL(/LEARNING_GOAL_IMPROVE_SKILLS/);
  });
}
