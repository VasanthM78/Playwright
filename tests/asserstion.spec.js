import {test,expect} from "@playwright/test"

test("asserstion",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/"); //hard asserstion
    await expect(page).toHaveTitle("Automation Testing Practice");
    await expect(page.locator('//img[@class="wikipedia-icon"]')).toBeVisible();

    await expect(page.locator('//h1[@class="title"]')).toHaveText("Automation Testing Practice");
    await expect(page.locator('//h1[@class="title"]')).toContainText("Automation Testing");

       const name='//input[@id="name"]';
       await expect(page.locator(name)).toBeEmpty();
       await page.locator(name).fill("Playwright");

       await expect(page.locator(name)).toHaveValue("Playwright");
       await expect(page.locator(name)).toBeEditable();

       await expect(page.locator(name)).toBeEmpty();



     await page.locator('//input[@id="male"]').check();
     await expect(page.locator('//input[@id="male"]')).toBeChecked();

     await page.locator('//input[@id="male"]').uncheck();
})


test("taskcheckbox",async({page})=>{

    await page.goto("https://letcode.in/radio/");

     await page.locator('//input[@id="no"]').check();

    const yesbutton1 = await page.locator('//input[@id="nobug"]');
    const nobutton1 = await expect(page.locator('//input[@id="bug"]'));

     await yesbutton1.check();
    await expect(yesbutton1).toBeChecked();

    await page.pause();

    await nobutton1.check();
    await expect(yesbutton1).not.toBeChecked();

    await page.pause();

    const yesbutton =  page.locator('//input[@id="nobug"]');
    const nobutton =   page.locator('//input[@id="bug"]');

    await yesbutton.check();
    await expect(yesbutton).toBeChecked();

    await nobutton.check();
    await expect(yesbutton).not.toBeChecked();

    const foobutton = page.locator('//input[@id="foo"]');
    const barbutton = page.locator('//input[@id="notfoo"]');

    if(await foobutton.isChecked){

        console.log("Foo is selected");

    }else if(await barbutton.isChecked){

       console.log("bar is selected");

    }else{
        console.log("No radio button is selected'");
        
    }

    await expect(barbutton).toBeChecked();

    await expect(page.locator('//input[@id="maybe"]')).toBeDisabled();

    await expect(page.locator('//span[text()="Remember me"]/preceding-sibling::input[@type="checkbox"]')).toBeChecked();
    



})