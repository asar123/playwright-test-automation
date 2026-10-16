import{test,expect,Locator}from "@playwright/test"
test("dynamicelements", async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//loop to click 5 times
for(let i=1;i<=5;i++){

   const button:Locator= page.locator('//button[@name="start" or @name="stop"]')

   await button.click();
   await page.waitForTimeout(2000);
}


})