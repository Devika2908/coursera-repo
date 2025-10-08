import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { HelpPage } from '../pages/HelpPage';
import { PaymentsSubscriptionsPage } from '../pages/PaymentsSubscriptionsPage';
import { AcceptedPaymentMethodsPage } from '../pages/AcceptedPaymentMethodsPage';

test('Print accepted payment methods', async ({ page }) => {
  const homePage = new HomePage(page);
  const helpPage = new HelpPage(page);
  const paymentsPage = new PaymentsSubscriptionsPage(page);
  const acceptedPage = new AcceptedPaymentMethodsPage(page);

  await homePage.navigateTo('https://www.coursera.org/');
  await homePage.clickHelpLink();
  await helpPage.clickPaymentsAndSubscriptions();
  await paymentsPage.clickAcceptedPaymentMethods();

  const methods = await acceptedPage.getPaymentMethods();
  console.log(`Total payment methods found: ${methods.length}`);
  methods.forEach((method, index) => {
    console.log(`${index + 1}. ${method}`);
  });
});