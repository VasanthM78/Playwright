import {test,expect} from "@playwright/test"
import cred from '../test-data/hrm.json'

test("Verify Error Message",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    

    await page.locator('[name="username"]').fill(cred.username)
    await page.locator('[name="password"]').fill(cred.password)
    await page.locator('[type="submit"]').click()

    
})