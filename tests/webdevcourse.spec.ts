import { test, expect } from '../utils/test-base';
import { HomePage } from '../pages/HomePage';
import { WebDevResultPage } from '../pages/WebDevResultPage';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

// Define type for CSV rows
interface SearchRecord {
    searchTerm: string;
}

// Path to your CSV file
const csvFilePath = 'data/testdata_search.csv';

// Read CSV content
const csvContent = fs.readFileSync(csvFilePath, 'utf-8');

// Parse CSV and cast to typed array
const records = parse(csvContent, { columns: true, skip_empty_lines: true }) as SearchRecord[];

test.describe('Coursera Web Development Courses', () => {

    // Loop through each search term in CSV
    for (const record of records) {
        const searchTerm = record.searchTerm;

        test(`Search, filter, and display top 2 course details for: ${searchTerm}`, async ({ pages }) => {
            const homePage = new HomePage(pages.page);
            const webDevPage = new WebDevResultPage(pages.page);

            // Go to Coursera homepage
            await pages.page.goto('https://www.coursera.org/');

            // Search for the term from CSV
            await homePage.searchForTerm(searchTerm);

            // Apply filters: Courses, Beginner, English
            await webDevPage.applyFilters();

            // Get top 2 course details (page object handles waits internally)
            const topCourses = await webDevPage.getTopCourseDetails();

            // Display course details in console
            console.log(`\nTop 2 Web Dev Courses Details for "${searchTerm}":`);
            topCourses.forEach((course, index) => {
                console.log(`Course ${index + 1}:`);
                console.log(`Title: ${course.title}`);
                console.log(`Duration: ${course.duration}`);
                console.log(`Rating: ${course.rating}`);
                console.log('--------------------------');
            });

            // Basic assertions
            expect(topCourses[0].title).not.toBeNull();
            expect(topCourses[1].title).not.toBeNull();
        });
    }
});
