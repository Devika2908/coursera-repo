import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MasterDegreePage } from '../pages/MasterDegreePage';
import { ExecutiveMBAPage } from '../pages/ExecutiveMBAPage';
 
test('Verify Executive MBA admission notice', async ({ page }) => {
    const homePage = new HomePage(page);
    const masterDegreePage = new MasterDegreePage(page);
    
    await homePage.goToHomePage();
    await homePage.clickExplore1();
    await homePage.clickMastersDegree();
    
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        masterDegreePage.clickExecutiveMBA()
    ]);
    const executiveMBAPage = new ExecutiveMBAPage(newPage);
    await executiveMBAPage.waitForLoad();

    const admissionText = await executiveMBAPage.getAdmissionText();
    console.log('Admission Text:', admissionText);
    expect(admissionText).not.toBeNull();
  
});