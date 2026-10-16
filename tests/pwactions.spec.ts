import{test,expect,Locator} from "@playwright/test";
test('Text input actions', async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//Text input box

const textinputbox:Locator=page.locator(".form-control[id='name']") 
//const textinputbox:Locator=page.locator('#name');
//await page.waitForTimeout(5000)
await expect(textinputbox).toBeVisible()
await expect(textinputbox).toBeEnabled()
const maxlength:string|null=await textinputbox.getAttribute("maxlength") //Returns max length of the attribute
expect(maxlength).toBe("15");

await textinputbox.fill("Kane")
const enteredValue:string=await textinputbox.inputValue();
console.log("input value of the first name: ", enteredValue)//-->Return the input value of the textbox
expect(enteredValue).toBe("Kane");
await page.waitForTimeout(3000);

})


//Radio buttons

test('Radio button actions', async({page})=>{ //--> only is annotation to use this particular test method alone
await page.goto("https://testautomationpractice.blogspot.com/")

const maleRadioButton:Locator=page.locator("#male") //Male Radio button
await expect(maleRadioButton).toBeVisible()
await expect(maleRadioButton).toBeEnabled()
expect(await maleRadioButton.isChecked()).toBe(false);

await maleRadioButton.check()
//expect(await maleRadioButton.isChecked()).toBe(true) //--> optional
await expect(maleRadioButton).toBeChecked() //--> Preferable
await page.waitForTimeout(3000);
})

//Checkboc buttons
test.only('Checkbox button actions', async({page})=>{ //--> only is annotation to use this particular test method alone
await page.goto("https://testautomationpractice.blogspot.com/")
//1.Select specif check box (sunday) using get by label and assert
const SundayCheckbox:Locator=page.getByLabel('Sunday')
//await SundayCheckbox.check()
//await expect(SundayCheckbox).toBeChecked()


//2.Select all the checkboxes and assert each is checked
               const days: string[]=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
               const Checkboxes:Locator[]=days.map(index=>page.getByLabel(index))
               expect(Checkboxes.length).toBe(7)

               /*
                 for(const checkbox of Checkboxes ){

                         await checkbox.check()
                         await expect(checkbox).toBeChecked()
                 }
                  await page.waitForTimeout(3000);
                  */
//3. Uncheck the last 3 checkboxes
/*
for(const checkbox of Checkboxes.slice(-3) ){

                         await checkbox.uncheck()
                         await expect(checkbox).not.toBeChecked()
                 }
                   await page.waitForTimeout(3000);
*/
//4. Toggle the checkbox - if uncheck, check or if check, then uncheck the checkboxes
/*
   for(const checkbox of Checkboxes)
   {
         if(await checkbox.isChecked())
         {
          await checkbox.uncheck()
          await expect(checkbox).not.toBeChecked()  
         }
         else{
                 await checkbox.check()
                 await expect(checkbox).toBeChecked()

         }

   }
 await page.waitForTimeout(3000); 
 */
 
 //5. Randomly select checkboxes --> 2,4,6 index positions 
 //create a new array
 /*
 const indexes:number[]=[2,4,6]
 for(const i of indexes){
    await Checkboxes[i].check()
    await expect(Checkboxes[i]).toBeChecked();
 }
 await page.waitForTimeout(3000); 
*/
 //6. Select the checkbox based on the label 

 const week:string="Friday"
 //using loop 
 /*
 for(const label of days)
 {
    if(label==week)
    {
     const checkbox:Locator=page.getByLabel(label)
     await checkbox.check()
     await expect(checkbox).toBeChecked()
    }
 }
    */
 //using simple method
 
const checkbox:Locator=page.getByLabel(week)
     await checkbox.check()
     await expect(checkbox).toBeChecked()
     await page.waitForTimeout(3000); 
})