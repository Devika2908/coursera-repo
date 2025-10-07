import { test } from "../utils/test-base";
import { HomePage } from "../pages/HomePage";
import { LearningPage } from "../pages/LearningPage";
import { AgileCoursePage } from "../pages/AgileCoursePage";
import fs from "fs";
import path from "path";
import { readCSVData } from "../utils/readCSV"; // ✅ Import from utils

  type CourseRecord = {
  courseName: string;
};
const records = readCSVData("data/testdata_courses.csv")as CourseRecord[];
const record=records[0];

test.describe("Coursera Agile Development flow", () => {
    test(`Search and verify ${record.courseName}`, async ({ page }) => {
      const homePage = new HomePage(page);
      const learningPage = new LearningPage(page);
      const agilePage = new AgileCoursePage(page);
  
      // Step 1: Visit Coursera homepage
      await page.goto("https://www.coursera.org/");

      // Step 2: Search for Agile Methodology
      await homePage.searchCourse(record.courseName);

      // Step 3: Select the course from results page
      await learningPage.selectAgileCourse();

      // Step 4: Print and verify details
      await agilePage.printAllDetails();
      await agilePage.verifyCourseDetails();
    });
  
});
