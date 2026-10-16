import {test,expect,Locator}from "@playwright/test"
test("AutoSuggestion", async({page})=>{

    page.goto("https://www.flipkart.com/")
    page.locator("input[name='q']").fill("Smart")
    await page.waitForTimeout(5000)
    //Get all the suggested options -->Press ctrl+shift+p-->click emulate focused page
   const optionsofautosuggestion:Locator= page.locator("ul>li")
   const count=await optionsofautosuggestion.count
   console.log("Suggested dropdown", count)
   await page.waitForTimeout(3000)
})