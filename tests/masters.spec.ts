import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { OnlineDegreePage } from '../pages/OnlineDegreePage';
import { IITRoorkeePage } from '../pages/IITRoorkeePage';

test('Coursera Executive MBA flow', async ({ page }) => {
  const home = new HomePage(page);
  const onlineDegree = new OnlineDegreePage(page);
  const iitRoorkee = new IITRoorkeePage(page);

  await home.navigateToOnlineDegree();
  await onlineDegree.filterMastersBusiness();

//   const count = await onlineDegree.getResultCount();
//   console.log(`Number of results: ${count}`);

  await onlineDegree.selectIITRoorkee();
  // await iitRoorkee.verifyDetails();

  // expect(await iitRoorkee.creditInfo.isVisible()).toBeTruthy();
  // expect(await iitRoorkee.costInfo.isVisible()).toBeTruthy();
});


