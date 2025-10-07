import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { HomePage } from '../pages/HomePage';
import { EnterpriseResourcesPage } from '../pages/EnterpriseResourcesPage';

interface EnterpriseArticle {
  topic: string;

}

// Load CSV test data
const csvPath = path.resolve('data/testdata_enterpriseresources.csv');
const fileContent = fs.readFileSync(csvPath);
const records: EnterpriseArticle[] = parse(fileContent, {
  columns: true,
  skip_empty_lines: true
}) as EnterpriseArticle[];

test.describe('Enterprise Resources Article Flow', () => {
  for (const record of records) {
    test(`Verify articles are displayed`, async ({ page, context }) => {
      const homePage = new HomePage(page);
      const enterprisePage = new EnterpriseResourcesPage(page);

      // Step 1: Go to Coursera
      await page.goto('https://www.coursera.org/');
      await page.waitForLoadState('domcontentloaded');

      // Step 2: Navigate to "For Enterprise"
      await homePage.navigateToForEnterprise();

      // Step 3: Click "Resources" → "Articles"
      await enterprisePage.clickResources();
      await enterprisePage.clickArticles();

      // Step 4: Apply Filters
      // await enterprisePage.selectTopic(record.topic);
     
    });
  }
});
