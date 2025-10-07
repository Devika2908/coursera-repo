import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import allLocators from '../locators/locators.json';

export class WebDevResultPage extends BasePage{
    
    async applyFilters() {
        // Apply Course type filter
        const courseCheckbox = this.page.locator(allLocators.WebDevResultPage.courses);
        if (!(await courseCheckbox.isChecked())) {
            await courseCheckbox.check();
        }

        // Apply English language filter
        const englishCheckbox = this.page.locator(allLocators.WebDevResultPage.english);
        if (!(await englishCheckbox.isChecked())) {
            await englishCheckbox.check();
        }

        // Apply Beginner level filter
        const beginnerCheckbox = this.page.locator(allLocators.WebDevResultPage.beginner);
        if (!(await beginnerCheckbox.isChecked())) {
            await beginnerCheckbox.check();
        }

        // Wait for filters to apply
        await this.page.waitForLoadState('networkidle');
    }

    async getTopCourseDetails() {
        const courseDetails: { title: string | undefined; duration: string | undefined; rating: string | undefined }[] = [];

        for (const courseKey of ['topCourse1', 'topCourse2']) {
            const course = allLocators.WebDevResultPage[courseKey as keyof typeof allLocators.WebDevResultPage] as any;

            // Wait for the elements to be visible before extracting
            await this.page.waitForSelector(course.title);
            await this.page.waitForSelector(`xpath=${course.duration}`);
            await this.page.waitForSelector(`xpath=${course.rating}`);

            // Title uses CSS selector
            const title = await this.page.locator(course.title).textContent();

            // Duration and rating use XPath
            const duration = await this.page.locator(`xpath=${course.duration}`).textContent();
            const rating = await this.page.locator(`xpath=${course.rating}`).textContent();

            courseDetails.push({
                title: title?.trim(),
                duration: duration?.trim(),
                rating: rating?.trim()
            });
        }

        return courseDetails;
    }

}

