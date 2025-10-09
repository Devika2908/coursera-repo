import { test } from "../utils/test-base";
import { HomePage } from "../pages/HomePage";
import { LearningPage } from "../pages/LearningPage";
import { AgileCoursePage } from "../pages/AgileCoursePage";
import { readCSVData } from "../utils/readCSV";

type CourseRecord = {
  courseName: string;
};

const records = readCSVData("data/testdata_courses.csv") as CourseRecord[];
const record = records[0];

test.describe("Coursera Agile Development flow", () => {
  test(`Search and verify ${record.courseName}`, async ({ page }) => {
    const homePage = new HomePage(page);
    const learningPage = new LearningPage(page);
    const agilePage = new AgileCoursePage(page);

    await page.goto("https://www.coursera.org/");
    await homePage.searchCourse(record.courseName);
    await learningPage.selectAgileCourse();
    await agilePage.printAllDetails();
    await agilePage.verifyCourseDetails();
  });

});
