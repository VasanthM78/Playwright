import {test,expect} from "@playwright/test"

test.use({viewport:{width:1280,height:720}})

// test ("page navigation",async({page})=>{   //page=tab
//     await page.goto("https://www.facebook.com/");

//     await page.locator('[name="email"]'). fill("vasanth123")
//     await page.locator('[name="pass"]'). fill("123444")

//     await page.getByText("Log in").click

//     await page.waitForTimeout(3000)

// })

// test ("orange page navigation",async({page})=>{
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//     await page.locator('[name="username"]').fill("Admin")
//     await page.locator('[name="password"]').fill("admin123")
//     await page.locator('[type="submit"]').click()

//     await page.waitForTimeout(5000)

//     await expect(page).toHaveURL(/dashboard/)

//     await page.locator(".oxd-userdropdown-img").click()

//     await page.getByText("Logout").click()
//     await expect(page).toHaveURL(/login/)
    
// })


test("Verify Error Message",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.viewportSize().width

    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill("admin124")
    await page.locator('[type="submit"]').click()

    const errormessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent() //verify the value
    console.log("Error Message :"+errormessage);

    expect(errormessage.includes("Invalid")).toBeTruthy();

    expect(errormessage==="Invalid credentials").toBeTruthy();

    
    



})

