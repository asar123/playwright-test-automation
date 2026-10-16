/*
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import{test, expect, Locator} from "@playwright/test" 
test("playwright locators", async({page})=>{
//page.getByAltText() to locate an element, usually image, by its text alternative.
//alt text is used when such image as img or area elements

   await page.goto("https://demo.nopcommerce.com/", {
    waitUntil: "domcontentloaded",
  });
   
   await expect(page.getByAltText("nopCommerce demo store")).toBeVisible();

   // 2. page.getByText() to locate by text content.
           //locate visible text
           //use this locator to find non interactive elements like div, span, p etc
           // for interactive elements like button, a, input etc.. use role locators

           
           await expect(page.getByText("Welcome to our store")).toBeVisible();

/*
    // 3. page.getByRole() to locate by explicit and implicit accessibility attributes.
         //It is not an attribute
         // it includes checkboxes, radio buttons, headings, links, lists, tables etc
          await page.getByRole("link",{name:"Register"}).click();
          await expect (page.getByRole("heading",{name:"Register"})).toBeVisible();

      // 4.page.getByLabel() to locate a form control by associated label's text.
      //page.getByLabel("First name:").type("john"); type is deprecated
          await page.getByLabel("First name").fill("Azar");
        //    await page.getByLabel("Last name:").fill("A");
        //5. 
       await page.getByPlaceholder("Search store").fill("samsung");
*/
//await page.goto("https://demo.playwright.dev/todomvc/#/")
//await expect(page.getByTestId("todo-title")).toHaveText("Learn playwright");

})