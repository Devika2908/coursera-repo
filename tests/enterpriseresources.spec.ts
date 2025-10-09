import { test, expect } from '@playwright/test';
import { readCSVData } from '../utils/readCSV'; // Adjust path if needed
import { HomePage } from '../pages/HomePage';
import { EnterpriseResourcesPage } from '../pages/EnterpriseResourcesPage';

interface EnterpriseArticle {
  topic: string;
}

const records: EnterpriseArticle[] = readCSVData('data/testdata_enterpriseresources.csv') as EnterpriseArticle[];

test.describe('Enterprise Resources Article Flow', () => {
  for (const record of records) {
    test(`Verify articles are displayed for topic: ${record.topic}`, async ({ page }) => {
      const homePage = new HomePage(page);
      const enterprisePage = new EnterpriseResourcesPage(page);

      await page.goto('https://www.coursera.org/');
      await page.waitForLoadState('domcontentloaded');

      await homePage.navigateToForEnterprise();
      await enterprisePage.clickResources();
      await enterprisePage.clickArticles();
    });
  }
});
