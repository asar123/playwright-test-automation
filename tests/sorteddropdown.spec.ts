import {test, expect, Locator} from '@playwright/test';

test('Sorted dropdown', async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //1. Orginal and sorted array will be same
   const dropdownoption:Locator= page.locator("#animals>option")
  // console.log(await dropdownoption.allTextContents())
  const optiontext:string[]=(await dropdownoption.allTextContents()).map(text=>text.trim())
  const originalList:string[]=optiontext
  const sortedList:string[]=optiontext.sort()
  console.log("OriginalList", originalList)
  console.log("SortedList", sortedList)
  expect(originalList).toEqual(sortedList)
  //2. Original and sorted array will be different
/*
 const dropdownoption:Locator= page.locator("#colors>option")
  // console.log(await dropdownoption.allTextContents())
  const optiontext:string[]=(await dropdownoption.allTextContents()).map(text=>text.trim())
  const originalList:string[]=[...optiontext] //--> 3 dots using for prevent original list affecting while sorting since it is mutable
  const sortedList:string[]=[...optiontext.sort()]
  console.log("OriginalList", originalList)
  console.log("SortedList", sortedList)
  expect(originalList).toEqual(sortedList)
  */
})