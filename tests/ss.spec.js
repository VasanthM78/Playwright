import{test,expect} from "@playwright/test"
import path from "node:path";

test("screenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    
    await page.screenshot({path:"C:/playwright/tests/files/"+"automation.png"});
    await page.screenshot({path:"C:/playwright/tests/files/"+"fullpage.png",fullPage: true});
    await page.locator('//div[@id="HTML8"]').screenshot({path:"C:/playwright/tests/files/"+"table.png"})
})