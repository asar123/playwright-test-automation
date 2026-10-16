import{test,expect,Locator}from"@playwright/test"
test("xpathaxis", async({page})=>{
await page.goto("https://www.w3schools.com/html/html_tables.asp")
//1.self axis
const germanycell:Locator=await page.locator("//td[text()='Germany']/self::td")
await expect(germanycell).toHaveText("Germany");
}
)