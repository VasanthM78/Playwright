import {test,expect} from "@playwright/test"

test("multi select checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    // let locat=['//input[@id="monday"]','//input[@id="tuesday"]','//input[@id="sunday"]','//input[@id="friday"]']
  
    // for(let i of locat){

    //     await page.locator(i).check
    // }

    let day=["monday","sunday","friday","tuesday"]

    for(let i of day){
        await page.locator(`//input[@id="${i}"]`).check();
    }

    await page.pause();

})