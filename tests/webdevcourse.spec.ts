import { test, expect } from '../utils/test-base';
import { HomePage } from '../pages/HomePage';
import { WebDevResultPage } from '../pages/WebDevResultPage';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

// Inline type for course details
type CourseDetail = {
  title: string;
  duration: string;
  rating: string;
};

// Type for CSV rows
interface SearchRecord {
  searchTerm: string;
}

// Load and parse CSV
const csvFilePath = 'data/testdata_search.csv';
const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
const records = parse(csvContent, { columns: true, skip_empty_lines: true }) as SearchRecord[];

test.describe('Coursera Web Development Courses', () => {
  for (const record of records) {
    const searchTerm = record.searchTerm || '<<MISSING_SEARCH_TERM>>';

<<<<<<< HEAD
    test(`Search, filter, and display top 2 course details for: ${searchTerm}`, async ({ pages }) => {
      const homePage = new HomePage(pages.page);
      const webDevPage = new WebDevResultPage(pages.page);
=======
    for (const record of records) {
        const searchTerm = record.searchTerm;
>>>>>>> 456cc04c6a229a291895c1c4d6171a6dba94959a

      await pages.page.goto('https://www.coursera.org/');
      await homePage.searchForTerm(searchTerm);
      await webDevPage.applyFilters();

      const topCourses: CourseDetail[] = await webDevPage.getTopCourseDetails();

      console.log(`\nTop 2 Web Dev Courses Details for "${searchTerm}":`);
      topCourses.forEach((course, index) => {
        console.log(`Course ${index + 1}:`);
        console.log(`Title: ${course.title}`);
        console.log(`Duration: ${course.duration}`);
        console.log(`Rating: ${course.rating}`);
        console.log('--------------------------');
      });

      expect(topCourses[0].title).not.toBe('');
      expect(topCourses[1].title).not.toBe('');
    });
  }
});
