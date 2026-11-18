import {test,expect} from "@playwright/test"

test("dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//select[@id="country"]').selectOption("Canada");

    await page.locator('//select[@id="country"]').selectOption({label: "Canada"});

    await page.locator('//select[@id="country"]').selectOption({index: 5})

    // const text= await page.locator('//select[@id="country"]').textContent();

    // console.log(text);

    //textContent
    //alltextContent
    //innerText
    //allinnerText

    const text1= await page.locator('//select[@id="country"]/option').allTextContents()
    for (let i of text1){
        console.log(i.trim());
        
    }

    const dummy= await page.locator('//select[@id="country"]/option').count()
    console.log("count :",dummy);

    await expect(page.locator('//select[@id="country"]/option')).toHaveCount(10);

    await page.pause()
    
    

})

test ("multi select dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator('//select[@id="colors"]').selectOption(["Red","Blue","White"]);

    await page.pause()
})

/////////////////////////////////////////////////////Task

test("task multi select",async({page})=>{
    await page.goto("https://letcode.in/dropdowns#google_vignette");

    await page.locator('//select[@id="fruits"]').selectOption("Apple");
    await expect(page.locator('//p[contains(text(),"You have selected") and text()="Apple"]'))
    .toHaveText("You have selected Apple");
    await page.pause();

    await page.locator('//select[@id="superheros"]').selectOption("The Avengers");
    await expect(page.locator('//p[contains(text(),"You have selected") and text()="The Avengers"]'))
    .toHaveText("You have selected The Avengers");
    await page.pause();

    await page.locator('//select[@id="lang"]').selectOption("JavaScript");
    await expect(page.locator('//p[contains(text(),"You have selected") and text()="JavaScript"]'))
    .toHaveText("You have selected JavaScript");
    const litsoflang= await page.locator('//select[@id="lang"]').textContent();
    console.log(litsoflang);
    
    await page.pause();
    
    await page.locator('//select[@id="country"]').selectOption({value: "India"});
    await page.pause();

    const selectvalue= await page.locator('//select[@id="country"]').inputValue();
    console.log("Select value :", selectvalue);
})



////Interview question

test("google",async({page})=>{
    await page.goto("https://www.google.com/");
   const textgoogle= await page.locator('//div[@id="SIvCob"]/a').allTextContents()
    for (let i of textgoogle){

        console.log(i.trim());
    }

    const count1= await page.locator('//div[@id="SIvCob"]/a').count()
    console.log("Count :",count1);

    await expect(page.locator('//div[@id="SIvCob"]/a')).toHaveCount(9)
    
})