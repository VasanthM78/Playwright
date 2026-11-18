import {test,expect} from "@playwright/test"

test ("simple alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

        page.on("dialog",async alert=>{ //event name and menthod name
        console.log(alert.type());
        console.log(alert.message());

        expect(alert.message()).toBe("I am an alert box!")
        await alert.accept()

    })

    await page.locator('//button[@id="alertBtn"]').click();
    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")

    await page.waitForTimeout(5000)


})


test ("confirm alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

        page.on("dialog",async alert=>{ //event name and menthod name
        console.log(alert.type());
        console.log(alert.message());

        expect(alert.message()).toBe("Press a button!")
        // await alert.accept()
        await alert.dismiss()

    })

    await page.locator('//button[@id="confirmBtn"]').click();

    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")

    await page.waitForTimeout(5000)


})



test("promt alert",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('');
})

