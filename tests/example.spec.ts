import {test,expect} from "@playwright/test";

//1st test case 
//LaunchBrowser

test("Verify the title", async({page})=>{
await page.goto("https://playwright.dev");
let title:string =await page.title();
console.log("Title:", title);
await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
}
);