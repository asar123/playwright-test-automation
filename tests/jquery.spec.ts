import{test,expect,Locator}from"@playwright/test"
test("jquery",async({page})=>{

   await page.goto("https://testautomationpractice.blogspot.com/")
    const datePicker:Locator=page.locator('#datepicker')
    expect(datePicker).toBeVisible();
    await page.waitForTimeout(5000);
   // approach 1 -> using fill method 
   
   //await datePicker.fill("04/07/2026")
   //await page.waitForTimeout(5000)
    // Approach 2 - Using date picker 
   await datePicker.click(); 
   const month="May"
   const year="2026"
   const date="07"
   while(true){
   const currentmonth= await page.locator('.ui-datepicker-month').textContent()
   const currentyear= await page.locator('.ui-datepicker-year').textContent()
   if (currentmonth==month && currentyear==year){
    break;
   }
   //go to future
   const future=await page.locator('.ui-datepicker-next')
   await future.click();
   await page.waitForTimeout(5000)
   }
})