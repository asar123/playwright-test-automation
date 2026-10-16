/*
CSS (Cascading style sheet)
html+js+css
Two types of css selectors
1.Relative css
2.Absolute css

tag with id -->tag#id or #id
tag with class -->tag.class
tag with anyother attributes -->tag[attribute=value]
tag with class and attributes -->tag.class[attribute=value]

*/

import{test,expect,Locator} from "@playwright/test"
test("Verify css", async ({page})=>{
    await page.goto("https://demowebshop.tricentis.com/login");

    //tag#id
    /*
const searchbox:Locator=page.locator("input#small-searchterms") //-->tag#id
const searchbox:Locator=page.locator("#small-searchterms") //--> #id
await expect(searchbox).toBeVisible();
await searchbox.fill("Tshirt")
await page.waitForTimeout(5000)
*/

//tag.class
/*
const searchbox:Locator=page.locator("input.search-box-text")
await expect(searchbox).toBeVisible();
await searchbox.fill("Durex");
await page.waitForTimeout(3000);
const search:Locator=page.locator(".button-1.search-box-button")
await search.click();
await page.waitForTimeout(3000)
*/

//tag[attribute=value]
         /*const searchbox: Locator= page.locator("input[name=q]")
         await searchbox.fill("Jatti");
         await page.waitForTimeout(3000);
         const search:Locator=page.locator("input[value=Search]")
          await search.click()
          await page.waitForTimeout(3000)
          */

    //tag.class[attribute=value]
   const searchbox:Locator= page.locator("input.search-box-text[name='q']")
   await searchbox.fill("tshirt")
   await page.waitForTimeout(3000)
})