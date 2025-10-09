import { test, expect } from '../utils/test-base';
import { HomePage } from '../pages/HomePage';
import { WebDevResultPage } from '../pages/WebDevResultPage';
import { readCSVData } from '../utils/readCSV';

type SearchRecord = {
  searchTerm: string;
};

const records = readCSVData('data/testdata_search.csv') as SearchRecord[];
const record = records[0];

test.describe('Coursera Web Development Courses', () => {
  test(`Search, filter, and display top 2 course details for: ${record.searchTerm}`, async ({ pages }) => {
    const homePage = new HomePage(pages.page);
    const webDevPage = new WebDevResultPage(pages.page);

    await pages.page.goto('https://www.coursera.org/');

    await homePage.searchForTerm(record.searchTerm);

    await webDevPage.applyFilters();

    const topCourses = await webDevPage.getTopCourseDetails();

    console.log(`\nTop 2 Web Dev Courses Details for "${record.searchTerm}":`);
    topCourses.forEach((course, index) => {
      console.log(`Course ${index + 1}:`);
      console.log(`Title: ${course.title}`);
      console.log(`Duration: ${course.duration}`);
      console.log(`Rating: ${course.rating}`);
      console.log('--------------------------');
    });

    expect(topCourses[0].title).not.toBeNull();
    expect(topCourses[1].title).not.toBeNull();
  });
});
