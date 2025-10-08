import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SalesFormPage } from '../pages/SalesFormPage';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parse/sync';

type SalesFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institutionName: string;
};

const csvFilePath = path.resolve(__dirname, '../data/testdata_salesform.csv');
const fileContent = fs.readFileSync(csvFilePath, 'utf-8');

const records: SalesFormData[] = csv.parse(fileContent, {
  columns: true,
  skip_empty_lines: true
}) as SalesFormData[];

test.describe('Sales Form Validation', () => {
  records.forEach((data: SalesFormData) => {
    test(`Submit form with invalid email: ${data.email}`, async ({ page }) => {
      const homePage = new HomePage(page);
      const salesFormPage = new SalesFormPage(page);

      // Go to home page
      await page.goto('https://www.coursera.org/');

      // Click on "For Universities"
      await homePage.clickForUniversities();

      // Wait for page to load
      await salesFormPage.waitForPageLoad();

      // Fill the form from CSV
      await salesFormPage.fillFirstName(data.firstName);
      await salesFormPage.fillLastName(data.lastName);
      await salesFormPage.fillEmail(data.email);
      await salesFormPage.fillPhone(data.phone);
      await salesFormPage.selectInstitutionType();
      await salesFormPage.fillInstitutionName(data.institutionName);
      await salesFormPage.selectJobRole();
      await salesFormPage.selectDepartment();
      await salesFormPage.selectNeeds();
      await salesFormPage.selectCountry();

      // Submit the form
      await salesFormPage.clickSubmit();

      // Verify error message
      const isError = await salesFormPage.isErrorVisible();
      expect(isError).toBeTruthy();
    });
  });
});