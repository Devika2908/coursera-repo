import { test, expect } from '../utils/test-base';
import { HomePage } from '../pages/HomePage';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

interface RegistrationRecord {
  email: string;
  name: string;
  password: string;
}

const csvFilePath = 'data/testdata_registration.csv';
const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
const records = parse(csvContent, { columns: true, skip_empty_lines: true }) as RegistrationRecord[];

test.describe('Coursera Registration Tests', () => {
  for (const record of records) {
    const { email, name, password } = record;

    test(`Register user: ${name}`, async ({ page }) => {
      const homePage = new HomePage(page);

      await page.goto('https://www.coursera.org/');
      await homePage.clickJoinForFree();

      const uiVersion = await homePage.detectUIVersion();
      console.log(`Detected UI version: ${uiVersion}`);

      if (uiVersion === 'emailFirst') {
        await homePage.fillEmail(email);
        await homePage.clickContinue();
        await homePage.fillNameAndPassword(name, password);
      } else {
        await homePage.fillRegistrationForm(name, email, password);
        await homePage.clickContinue();
      }

      await homePage.submitForm();

      await page.waitForTimeout(5000);
      expect(await page.title()).toContain('Coursera');
    });
  }
});
