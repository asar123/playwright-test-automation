import{test,expect,Locator}from"@playwright/test"
test("Comparing method", async({page}) =>{
await page.goto("https://demowebshop.tricentis.com/")
const product:Locator=await page.locator('.product-item')
//inner text vs textcontent
//console.log( await product.nth(1).innerText())
//console.log( await product.nth(1).textContent())
/*
   const count = await product.count();
   for(let i=0;i<count;i++){
    //  const productname:string=await product.nth(i).innerText() // Extract plain text, reduce white space
    //  console.log(productname)
    //  const productName:string|null=await product.nth(i).textContent() //Extract hidden elements as well
    //   console.log(productName)
        const productName: string | null=await product.nth(i).innerText() //Extract hidden elements as well
      console.log(productName?.trim());

   }
 */
  //Comparing all inner text and all text content
    const productNames:string[]=await product.allInnerTexts();
    //const productNames:string[]=await product.allTextContents();
     console.log("Products captured by all inner texts", productNames)
     const productNamesTrimmed:string[]=productNames.map(text=>text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim())
     console.log("Products name trimmed", productNamesTrimmed)
})