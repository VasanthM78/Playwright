import { test,expect } from "@playwright/test"
import { count } from "node:console"
import { url } from "node:inspector"

test("handling frames",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/")

    await expect (page.locator('//h1[text()="Iframes"]')).toBeVisible()

    const automationframes= await page.frames() //verify frames count
    console.log("Count :",automationframes.length);

    for (let i of automationframes){ //verify the frames url
        console.log("URL :",i.url());//URL    
    }

    //frame => name , url
    //framelocator => locators

    const playwright=await page.frame({name:"top-iframe"})
    await playwright.locator('//a[text()="Docs"]').click()

    
    const selenium=await page.frame({url:"https://www.selenium.dev/"})

    await selenium.locator('//span[text()="Support"]').click()

    await page.pause();
        
})


test ("handling frame using framelocator",async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");

    await expect (page.locator('//p[text()="I’m an iframe"]')).toHaveText("I’m an iframe")

    const playwright= await page.frameLocator('//iframe[@id="iframe-1"]')
    await playwright.locator('//a[text()="MCP"]').click();

    const selenium= await page.frameLocator('//iframe[@id="iframe-2"]')
    await selenium.locator('//span[text()="Projects"]').click();

    await page.pause();


})


test ("nested frame using frame method",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette");

    await page.locator('//a[text()="Iframe with in an Iframe"]').click();

    const iFrame= await page.frame({url: "https://demo.automationtesting.in/MultipleFrames.html"})
    await expect(iFrame.locator('//h5[text()="Nested iFrames"]')).toBeVisible();

    const childFrame=await iFrame.childFrames()[0]

    await childFrame.locator('//input[@type="text"]').fill('playwright')

    await page.pause
})





test ("nested frame using framelocator method",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html#google_vignette");

    await page.locator('//a[text()="Iframe with in an Iframe"]').click();

    const iFrame= await page.frameLocator('//div[@id="Multiple"]/iframe');
    await expect(iFrame.locator('//h5[text()="Nested iFrames"]')).toBeVisible();

    const childFrame=await iFrame.frameLocator('//h5[text()="Nested iFrames"]/following-sibling::iframe')

    await childFrame.locator('//input[@type="text"]').fill('playwright')

    await page.pause();
})


test("task for nested iframe",async({page})=>{
    await page.goto("https://letcode.in/frame")
    const iFrame= await page.frameLocator('//label[contains(text(),"frame practice")]/following-sibling::div/child::iframe');
    await expect(iFrame.locator('//h1[text()="Enter Details"]')).toBeVisible();
    await iFrame.locator('//input[@placeholder="Enter name"]').fill("Vasanth");
    await iFrame.locator('//label[text()="Last Name"]/following-sibling::input[@placeholder="Enter email"]').fill("vasanth123@gamil.com");
    

    const iframe2= await iFrame.frameLocator('//h1[text()="Enter Details"]/following-sibling::div/child::iframe');
    await iframe2.locator('//label[text()="Email"]/following-sibling::input[@placeholder="Enter email"]').fill("vasanth123@gamil.com");

    await page.pause();
  
      
})




