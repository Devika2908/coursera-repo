import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SalesFormPage } from '../pages/SalesFormPage';
import { readCSVData } from '../utils/readCSV';

type SalesFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  institutionName: string;
};

const records: SalesFormData[] = readCSVData('data/testdata_salesform.csv') as SalesFormData[];

test.describe('Sales Form Validation', () => {
  records.forEach((data: SalesFormData) => {
    test(`Submit form with invalid email: ${data.email}`, async ({ page }) => {
      const homePage = new HomePage(page);
      const salesFormPage = new SalesFormPage(page);

      await page.goto('https://www.coursera.org/');
      await homePage.clickForUniversities();
      await salesFormPage.waitForPageLoad();

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

      await salesFormPage.clickSubmit();

      const isError = await salesFormPage.isErrorVisible();
      expect(isError).toBeTruthy();
    });
  });
});