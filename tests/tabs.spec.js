import {test,expect,chromium} from "@playwright/test"

test ("tabs",async()=>{

    const browser=await chromium.launch();
    const context= await browser.newContext(); //used for tabs
    const pageone= await context.newPage(); // create the new page

    await pageone.goto("https://testautomationpractice.blogspot.com/");

    console.log(await pageone.title());
    await pageone.waitForTimeout(5000);

    const pagetwo=await context.newPage();
    await pagetwo.goto("https://www.flipkart.com/");

    console.log(await pagetwo.title());
    await pagetwo.waitForTimeout(5000)
    
})


test("multiple tabs",async({browser})=>{

    const context= await browser.newContext();
    const page=await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    console.log(await page.title());

    await page.locator('//input[@name="username"]').fill("admin");

    const [newTabe]=await Promise.all([
        context.waitForEvent('page'),//new page open ahurathuku
        page.locator('//a[text()="OrangeHRM, Inc"]').click()

    ])
    
    await newTabe.waitForLoadState(); //open ahi wait pandrathuku

    console.log(await newTabe.title());
    await newTabe.locator('//button[text()="Book a Free Demo"]').click();

    
    

})


test("flipkart multitab",async({browser})=>{

    const context= await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://www.flipkart.com/");
    await page.locator('//span[@role="button"]').click();
    await page.waitForTimeout(5000);
    console.log(await page.title());

    await page.locator('//div[text()="Fashion"]').click();
    await page.locator('//div[text()="Shirts,tees "]').click();
    await page.locator('//div[@data-id="SHTHMYZXBJHHHP3V"]').click();


    const [newTab]=await Promise.all([
        context.waitForEvent('page'), 
        page.locator('//div[@data-id="SHTHMYZXBJHHHP3V"]/descendant::a/preceding-sibling::a').click()
    ])
    
    await newTab.waitForLoadState();

    const price=await newTab.locator('//div[@class="v1zwn21n v1zwn20 _1psv1zeb9 _1psv1ze0"]').textContent();
    console.log("Price for the Shirt",price);
    
})

