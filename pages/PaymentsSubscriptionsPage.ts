// import { Page } from '@playwright/test';
// import { BasePage } from './BasePage';
// import allLocators from '../locators/locators.json';


// export class PaymentsSubscriptionsPage extends BasePage {

//   constructor(page: Page) {
//     super(page);
//   }

//   async clickAcceptedPaymentMethods() {
//     await this.page.getByText('Accepted payment methods').click();
//   }
// }

import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';
export class PaymentsSubscriptionsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
// async clickAcceptedPaymentMethods() {
//   const locator = this.page.locator(locators.PaymentsSubscriptionsPage.acceptedPaymentMethods);

//   await locator.waitFor({ state: 'visible', timeout: 90000 });
//   await locator.scrollIntoViewIfNeeded();
//   await locator.click();
// }
  //  async clickAcceptedPaymentMethods() {
  //    await this.page.locator(locators.PaymentsSubscriptionsPage.acceptedPaymentMethods).click();
  //  }
  async clickAcceptedPaymentMethods() {
  await this.page.getByRole('link', { name: 'Accepted payment methods' }).click();
  }
}

