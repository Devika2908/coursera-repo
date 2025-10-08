import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class WebDevResultPage extends BasePage {
  readonly page: Page;

  constructor(page: Page) {
    super(page);
    this.page = page;
  }

<<<<<<< HEAD
  async applyFilters() {
    const courseCheckbox = this.page.locator(allLocators.WebDevResultPage.courses);
    if (!(await courseCheckbox.isChecked())) {
      await courseCheckbox.click();
=======
        // Apply Beginner level filter
        const beginnerCheckbox = this.page.locator(allLocators.WebDevResultPage.beginner);
        if (!(await beginnerCheckbox.isChecked())) {
            await beginnerCheckbox.check();
        }

        await this.page.waitForLoadState('networkidle');
>>>>>>> 456cc04c6a229a291895c1c4d6171a6dba94959a
    }

    const englishCheckbox = this.page.locator(allLocators.WebDevResultPage.english);
    if (!(await englishCheckbox.isChecked())) {
      await englishCheckbox.click();
    }

    const beginnerCheckbox = this.page.locator(allLocators.WebDevResultPage.beginner);
    if (!(await beginnerCheckbox.isChecked())) {
      await beginnerCheckbox.click();
    }

    await this.page.waitForLoadState('networkidle');
  }

async getTopCourseDetails(): Promise<{ title: string; duration: string; rating: string }[]> {
  const courseDetails: { title: string; duration: string; rating: string }[] = [];

  for (const courseKey of ['topCourse1', 'topCourse2']) {
    const course = allLocators.WebDevResultPage[courseKey as keyof typeof allLocators.WebDevResultPage] as {
      title: string;
      duration: string;
      rating: string;
    };

    // await this.page.waitForSelector(course.title, { timeout: 10000 });
    // await this.page.waitForSelector(`xpath=${course.duration}`, { timeout: 10000 });
    // await this.page.waitForSelector(`xpath=${course.rating}`, { timeout: 10000 });

    const title = await this.page.locator(course.title).textContent();
    const duration = await this.page.locator(`xpath=${course.duration}`).textContent();
    const rating = await this.page.locator(`xpath=${course.rating}`).textContent();

    courseDetails.push({
      title: title?.trim() || '',
      duration: duration?.trim() || '',
      rating: rating?.trim() || ''
    });
  }

  return courseDetails;
}

}
