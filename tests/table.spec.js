import {test,expect} from "@playwright/test"

test ("tables",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const column= await page.locator('//table[@id="productTable"]/descendant::th')
    const row=await page.locator('//table[@id="productTable"]/tbody/tr')

    console.log("Column :",await column.count());
    console.log("Row :",await row.count());

    //method 1
    //await page.locator('//table[@id="productTable"]/descendant::td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]');

    //method 2
    //await row.locator('//td[text()="Smartphone"]/following-sibling::td/child::input[@type="checkbox"]');

    //method 3

    const phone= await row.filter({
        has:page.locator('td'),
        hasText:"Smartphone"
    })

    await phone.locator('//input[@type="checkbox"]').check();


    await page.pause();
    
})



test("handling multiple table(multiple checkboxes)",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const row=await page.locator('//table[@id="productTable"]/tbody/tr')

    // method 1

    // const product=["Smartphone","Smartwatch","Laptop"]

    // for(let i of product){
    //     await row.locator(`//td[text()="${i}"]/following-sibling::td/child::input[@type="checkbox"]`).check();
    // }

    // await page.pause();

    //method 2

    const phone=await row.filter({
        has:page.locator("td"),
        hasText:/Smartphone|Smartwatch|Laptop/
    })

    const product=await phone.all()

    for(let i of product){
        await i.locator('//input[@type="checkbox"]').check()
    }

    await page.pause();

})




test ("button tables",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const column= await page.locator('//table[@id="productTable"]/descendant::th')
    const row=await page.locator('//table[@id="productTable"]/tbody/tr')

    console.log("Column :",await column.count());
    console.log("Row :",await row.count());

    const button = page.locator('//ul[@id="pagination"]//a');

    console.log("Button :", await button.count());

     for (let i = await button.count() - 1; i >= 0; i--) {

        await button.nth(i).click();

        console.log("Page :", i + 1);
        console.log("Row :", await row.count());
        console.log("Column :", await column.count());
    }
    
})





test("verify the word and click the checkbox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const pages= await page.locator('//ul[@id="pagination"]/li');
    const pageno= await pages.allTextContents(); //[1,2,3,4]

    for (let i of pageno){
        await pages.locator(`//a[text()='${i}']`).click();
        const namec=await page.locator('//table[@id="productTable"]/tbody/tr/td[2]').allTextContents();
        console.log(namec);
        await page.pause()

        if(namec.includes("Gaming Console")){

            const box= await page.locator(`//table[@id="productTable"]/tbody/tr/td[text()="Gaming Console"]/parent::tr/descendant::td/input`);
            await box.click();
            await page.pause();
            break;

        }
        
    }

})