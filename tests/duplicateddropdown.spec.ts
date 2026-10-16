import {test, expect, Locator} from '@playwright/test';

test('Verify dropdown has duplicate', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    
  // const dropdownoption:Locator= page.locator("#animals>option") //-> Do not have duplicates
  
   const dropdownoption:Locator= page.locator("#colors>option") //-> Having Duplicate
   const optionlist:string[]=(await dropdownoption.allTextContents()).map(text=>text.trim())
  
   const myset= new Set<string> //-->Set - Duplicate not allowed
   const duplicate:string[]=[] //Array - Duplicate allowed

   for(const text of optionlist){
     if(myset.has(text)){
         duplicate.push(text)
     }
     else{
        myset.add(text)
     }
   }
   console.log("Duplicate values are-->", duplicate)
   expect(duplicate.length).toBe(0)
   if(duplicate.length>0){
    console.log("Duplicates are found...", duplicate)
   }
   else{
    console.log("No duplicates found...", duplicate)
   }
})