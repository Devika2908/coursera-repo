import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';


export class PaymentsSubscriptionsPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  async clickAcceptedPaymentMethods() {
    await this.page.getByText('Accepted payment methods').click();
  }
}

