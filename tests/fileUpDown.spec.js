import {test,expect} from "@playwright/test"

test("single file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Vasanth Resume/New folder/Resume_Vasanthakumar M.pdf")
    await page.click('//input[@id="singleFileInput"]/following-sibling::button')
    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText('Single file selected: Resume_Vasanthakumar M.pdf, Size: 42699 bytes, Type: application/pdf')
    await page.pause()

})


test("multiple file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["C:/playwright/tests/files/automation.png","C:/playwright/tests/files/fullpage.png"])
    await page.click('//input[@id="multipleFilesInput"]/following-sibling::button')
    await page.pause()
})