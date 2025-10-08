// import { Page } from '@playwright/test';
// import { BasePage } from './BasePage';
// import allLocators from '../locators/locators.json';

// export class HelpPage extends BasePage {


//   constructor(page: Page) {
//     super(page);
//   }

//   async clickPaymentsAndSubscriptions() {
//     await this.page.getByText('Payments & subscriptions').click();
//   }
// }

import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import locators from '../locators/locators.json';

export class HelpPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickPaymentsAndSubscriptions() {
    await this.page.locator(locators.HelpPage.paymentsAndSubscriptions).click();
  }
}