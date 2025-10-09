<<<<<<< HEAD
import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class AcceptedPaymentMethodsPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async getPaymentMethods(): Promise<string[]> {
    await this.page.waitForSelector(allLocators.AcceptedPaymentMethodsPage.paymentList, { state: 'visible', timeout: 90000 });
    const listLocator = this.page.locator(allLocators.AcceptedPaymentMethodsPage.paymentItems);
    const count = await listLocator.count();
    const texts: string[] = [];
    for (let i = 0; i < count; i++) {
      const text = await listLocator.nth(i).innerText();
      texts.push(text);
    }

    return texts;
  }
}
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> 27a6ffac8839950c8040da36045b933d8107ced2
>>>>>>> 32fc361abe1d520c274179652f4378094cc3cf2f
>>>>>>> 432261e4ec847629fc27ae82970ae5102b6fbd7a
>>>>>>> ef65d5758aa1686811639c81d5545946528a19e5
>>>>>>> a9514dc67273f7113fa67e8473bb85b0b1dd4852
>>>>>>> a2d63f00d951328835302770211154a2ba9e5746
>>>>>>> a7bc21ee8b4c5b493a8aaff5e382d1d65fe860e4
