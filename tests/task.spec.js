import {test,expect} from "@playwright/test"

test("page navigate",async({page})=>{
    await page.goto("https://demoqa.com/login")

    // const browser_width= page.viewportSize().width;
    // const browswe_height=page.viewportSize().height;

    // console.log(browser_width,browswe_height);

    await page.setViewportSize({width:1280,height:672})


    

    await expect(page.locator('//h1[contains(@class,"text-center")]')).toBeVisible()

    await page.getByText("New User").click()
    
    await page.getByPlaceholder("First Name").fill("Vasanth")
    await page.getByPlaceholder("Last Name").fill("M")
    await page.getByPlaceholder("UserName").fill("Vasanth")
    await page.getByPlaceholder("Password").fill("vasanth123")

    await page.getByRole("button", {name: "Register"}).click()

    await page.getByRole("button", {name: "Back to Login"}).click()

})