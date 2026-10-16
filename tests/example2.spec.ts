import {test,expect} from "@playwright/test";

//1st test case 
//LaunchBrowser

test("Verify the title", async({page})=>{
await page.goto("https://playwright.dev");
let url:string =await page.url();
console.log("Title:", url);
await expect(page).toHaveURL("https://playwright.dev");
}
);