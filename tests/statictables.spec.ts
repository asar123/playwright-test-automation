import{expect,test,Locator} from  '@playwright/test'
test('statictables',async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/")
  const table:Locator= page.locator("table[name='BookTable'] tbody")
  await expect(table).toBeVisible();
  //1.count no of rows
 const rows:Locator= page.locator('table[name="BookTable"]>tbody>tr') //return all rows include header
 await expect(rows).toHaveCount(7);

 //apparocah - 2
 const rowscount:number=await rows.count()
 console.log("Rowcount", rowscount)
 expect(rowscount).toBe(7);
})