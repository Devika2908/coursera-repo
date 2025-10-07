import { test, expect } from '../utils/test-base';
import { HomePage } from '../pages/HomePage';
import { CurrentRolePage } from '../pages/CurrentRolePage';
import { SkillSelectPage } from '../pages/SkillSelectPage';
import { readCSVData } from '../utils/readCSV';

const rolesData = readCSVData('data/testdata_search.csv');
const roles = rolesData.map((r: any) => r.role);

for (const role of roles) {
  test(`Coursera Growth Role flow for role: ${role}`, async ({ pages }) => {
    const homePage = new HomePage(pages.page);
    const currentRolePage = new CurrentRolePage(pages.page);
    const skillSelectPage = new SkillSelectPage(pages.page);

    // Navigate to Coursera
    await pages.page.goto('https://www.coursera.org/');

    // Home Page: select "Grow in my current role"
    await homePage.selectGrowRole();

    // Current Role Page: select role from CSV
    await currentRolePage.selectRole(role);

    // Skill Select Page: select skills and finish
    await skillSelectPage.selectSkillsAndFinish();

    // Final assertion to ensure the flow completed
    await expect(pages.page).toHaveURL(/LEARNING_GOAL_IMPROVE_SKILLS/);
  });
}
