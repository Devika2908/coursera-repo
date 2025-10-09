import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LanguagePage } from '../pages/LanguagePage';

test('Print levels and languages in Language Learning', async ({ page }) => {
  const homePage = new HomePage(page);
  const languagePage = new LanguagePage(page);
 
  await homePage.navigateToLanguageLearning();
 
  const languages = await languagePage.getLanguages();
  console.log(`Top four Languages found: ${languages.length}`);
  languages.forEach((lang, i) => console.log(`${i + 1}. ${lang}`));
 
  const levels = await languagePage.getLevels();
  console.log(`Total levels found: ${levels.length}`);
  levels.forEach((level, i) => console.log(`${i + 1}. ${level}`));
});

