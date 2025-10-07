import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class SkillSelectPage extends BasePage{
     readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

  async selectSkillsAndFinish() {
const skills = [
      allLocators.SkillSelectPage.skill1,
      allLocators.SkillSelectPage.skill2,
   
    ];

    for (const skill of skills) {
      const skillLocator = this.page.locator(skill);
    
      await skillLocator.click({ force: true });
    }

    const finishBtn = this.page.locator(allLocators.SkillSelectPage.finishButton);
    
    await finishBtn.click({ force: true });
  }

}