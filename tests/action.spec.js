import {test,expect} from "@playwright/test"

test("keyboard action",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('//input[@id="name"]').fill("hello");

    await page.keyboard.press("Control+A");
    await page.keyboard.press("Control+C");

    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V")

    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V")

    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+V")

    await page.pause();

})


test("drag and drop",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('//div[@id="draggable"]').dragTo(page.locator('//div[@id="droppable"]'));
    await page.pause();

})


test("hover",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//button[@class="dropbtn"]').hover();

    await page.pause();

});


test ("right click",async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    await page.locator('//span[text()="right click me"]').click({button:"right"})

    await page.pause();
})


test ("double click",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.fill('//input[@id="field1"]',"Playwright");
    await page.locator('//button[text()="Copy Text"]').dblclick();

    await expect(page.locator('//input[@id="field2"]')).toHaveValue("Playwright") //verify the input value

    await page.pause();
})


test("date picker",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="datepicker"]').pressSequentially("10/05/2026");
    await page.locator('//table[@class="ui-datepicker-calendar"]/tbody/tr/td/a[@class="ui-state-default ui-state-active"]').click();

    await page.pause();
})


test("hover date picker2",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="txtDate"]').click();
    const year= await page.locator('//select[@class="ui-datepicker-year"]');
    await year.hover();
    await year.selectOption("2025");

    const month= await page.locator('//select[@class="ui-datepicker-month"]');
    await month.hover();
    await month.selectOption("Oct");

    const date = await page.locator('//table[@class="ui-datepicker-calendar"]/tbody/tr/td/a[text()="15"]');
    await date.hover();
    await date.click();

    await page.pause();
       
})


test("date picker loop", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('//input[@id="datepicker"]').click();

    const dateframe = page.locator('//div[@id="ui-datepicker-div"]');
    await dateframe.hover();

    while (true) {
        let month = await dateframe.locator('//span[@class="ui-datepicker-month" and text()="March"]').isVisible();
        let year = await dateframe.locator('//span[@class="ui-datepicker-year" and text()="2026"]').isVisible();

        if (month && year) {
            console.log("March 2026 is available");
            break;
        }

        await page.locator('//span[text()="Prev"]').click();
    }
    const date = await page.locator('//table[@class="ui-datepicker-calendar"]/tbody/tr/td/a[text()="15"]');
    await date.hover();
    await date.click();
    await page.pause();

});





test("scroll",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.mouse.wheel(0,2000);
    await page.pause();

    await page.mouse.wheel(0,-2000)
    await page.pause();

    await page.locator('//div[@id="footer-3"]/descendant::div[@class="widget-content"]').scrollIntoViewIfNeeded();
    await page.pause();

})
