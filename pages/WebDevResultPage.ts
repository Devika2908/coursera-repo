import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class WebDevResultPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async applyFilters() {
    const courseCheckbox = this.page.locator(allLocators.WebDevResultPage.courses);
    if (!(await courseCheckbox.isChecked())) {
      await courseCheckbox.click();
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