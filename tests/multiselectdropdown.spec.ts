import {test, expect, Locator} from '@playwright/test';

test('Single select dropdown actions', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //1.select country from different ways -4 ways;
  // await page.locator("#colors").selectOption(['Red','Blue','Green']) -->using visible text
    //await page.locator("#colors").selectOption(['red','blue','green']) -->using value attribute
    await page.locator("#colors").selectOption([{label:'Green'},{label:'Red'},{label:'Blue'}])


   //2.To check number of options in dropdown (count)
  
   //3.Check an option is present or not in the dropdown 
   
   //4.Printing options from the dropdown
   await page.waitForTimeout(3000)
})