import{test,expect,Locator} from "@playwright/test"
test("Xpath", async({page})=>{

await page.goto("https://demowebshop.tricentis.com")
//1.Abosulte path
const absoluteLogo:Locator=page.locator("xpath=/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
await expect(absoluteLogo).toBeVisible();

//2.Relative xpath
const relativeLogo:Locator=page.locator("//img[@alt='Tricentis Demo Web Shop']");
await expect(relativeLogo).toBeVisible();

//3.contains
const product:Locator=page.locator("//h2/a[contains(@href,'computer')]");
const productCount:number= await product.count();
console.log("No of count",productCount)
expect (productCount).toBeGreaterThan(0)
//console.log(await product.textContent());//strict mode violation
console.log("firstElement: ", await product.first().textContent());

//4.start-with 
const swp:Locator=page.locator("//h2/a[starts-with(@href,'/build')]") //returns multiple elements
          const count:number=await swp.count()
          console.log("No of products starts with build:", count)
          expect(count).toBeGreaterThan(0);

//5.texts() or .
const regLink:Locator=page.locator("//a[text()='Register']")
const text:string=await regLink.innerText();
console.log("Visible text: ",text)
await expect(regLink).toBeVisible();

//6.last()
const lastElement:Locator=page.locator("//div[@class='column follow-us']//li[last()]")
await expect(lastElement).toBeVisible();
console.log("LastItem: ", await lastElement.textContent())

//7.position()
const position:Locator=page.locator("//div[@class='column follow-us']//li[position()=2]")
await expect(position).toBeVisible();
console.log("Position number 2nd item is: ", await position.textContent())

})

