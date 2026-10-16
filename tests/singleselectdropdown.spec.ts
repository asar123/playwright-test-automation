import {test, expect, Locator} from '@playwright/test';

test('Single select dropdown actions', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //1.select country from different ways -4 ways;
   //await page.locator("#country").selectOption("Canada"); //-->visible text
   await page.locator("#country").selectOption({value:'usa'}); //--> by value attribute
   //await page.locator("#country").selectOption({label:'France'}); //--> by label 
   //await page.locator("#country").selectOption({index:3}); //--> by index 

   //2.To check number of options in dropdown (count)
   const dropdowncount:Locator=page.locator('#country>option');
   await expect(dropdowncount).toHaveCount(10);
   //3.Check an option is present or not in the dropdown 
   const dropdown:Locator=page.locator('#country>option');
   //const optionsdropdown:string[]=await dropdown.allTextContents(); // return everything present in the element like extra space, /n etc
   const optionsdropdown:string[]=(await dropdown.allTextContents()).map(text=>text.trim()); // return only texts in the array
   console.log(optionsdropdown);
   expect(optionsdropdown).toContain('China')
   await page.waitForTimeout(2000);
  //4.Printing options from the dropdown 
  for(const option of optionsdropdown){
           console.log(option)
  }

})