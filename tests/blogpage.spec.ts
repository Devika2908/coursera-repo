import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { BlogPage } from '../pages/BlogPage';
import { ProductNewsPage } from '../pages/ProductNewsPage';

test('Coursera Blog Navigation Test', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHome();

  const blogPopup = await homePage.clickBlogLink();
  const blogPage = new BlogPage(blogPopup);
  await blogPage.clickProductNews();

  const productNewsPage = new ProductNewsPage(blogPopup);
  await productNewsPage.clickTopStory();
  await productNewsPage.captureScreenshot();
});
