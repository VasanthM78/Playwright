import {test,expect} from "@playwright/test"
import cred from '../test-data/sauce.json'

test("login",async({page})=>{
    await page.goto("https://www.saucedemo.com/")

    await expect(page.locator('//div[text()="Swag Labs"]')).toHaveText("Swag Labs");
    await page.locator('//input[@id="user-name"]').fill(cred.username);
    await page.locator('//input[@id="password"]').fill(cred.password);
    await page.locator('//input[@id="login-button"]').click();

    await expect(page.locator('//span[text()="Products"]')).toHaveText("Products");

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    const product= await page.locator('//div[@class="inventory_list"]/descendant::div[@class="inventory_item_name "]').allTextContents();

    console.log("Product is visible :", product);

    const selectop= await page.locator('//select[@class="product_sort_container"]');
    await selectop.selectOption("Price (low to high)");

    let products=["Sauce Labs Backpack","Sauce Labs Bolt T-Shirt"]; //store the data value in variable

    for (let productName of products){

        let product= await page.locator('//div[@class="inventory_item"]').filter({hasText:productName});

        let name = await product.locator('//div[@class="inventory_item_name "]').innerText();//get the text value assiocated with xpath

        console.log("Product Name :",name);
        
        await product.getByRole("button",{name: "Add to cart"}).click();


    }

    let cart= await page.locator('//a[@class="shopping_cart_link"]');
    let count= await cart.innerText();
    console.log("No of cart :",count);
    await cart.click();


    //Cart page
    await expect(page).toHaveURL("https://www.saucedemo.com/cart.html");

    let cartpage= await page.locator('//span[text()="Your Cart"]').innerText();
    console.log("Cart page :",cartpage);

    //verify the cart products
    let product1 = await page.locator('//div[@class="inventory_item_name"]').allTextContents();
    console.log("Product Names:", product1);
    await expect(page.locator('//div[@class="inventory_item_name"]')).toHaveText(["Sauce Labs Backpack","Sauce Labs Bolt T-Shirt"]);

    //verify the cart products price
    let price = await page.locator('//div[@class="inventory_item_price"]').allTextContents();
    console.log("Product Prices:", price);
    await expect(page.locator('//div[@class="inventory_item_price"]')).toHaveText(["$29.99","$15.99"]);

    await page.locator('//button[@id="checkout"]').click();

    //Checkout: Your Information

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    let checkout = await page.locator('//span[text()="Checkout: Your Information"]').innerText();
    console.log("Checkout screen :", checkout);
    await expect(page.locator('//span[text()="Checkout: Your Information"]')).toHaveText("Checkout: Your Information");
    
    await page.locator('//input[@id="first-name"]').fill(cred.firstname);
    await page.locator('//input[@id="last-name"]').fill(cred.lastname);
    await page.locator('//input[@id="postal-code"]').fill(cred.zipcoe);

    await page.locator('//input[@id="continue"]').click();

    //checkout:overvirw
    let Overview = await page.locator('//span[text()="Checkout: Overview"]').innerText();
    console.log("Checkout screen :", Overview);
    await expect(page.locator('//span[text()="Checkout: Overview"]')).toHaveText("Checkout: Overview");
   
    

     //verify the Payment Information:

    let payment = await page.locator('//div[text()="SauceCard #31337"]').innerText();
    console.log("Payment Information :", payment);
    await expect(page.locator('//div[text()="SauceCard #31337"]')).toHaveText(["SauceCard #31337"]);

    
    //verify the Shipping Information::
    let shipping = await page.locator('//div[text()="Free Pony Express Delivery!"]').innerText();
    console.log("Shipping Information :", shipping);
    await expect(page.locator('//div[text()="Free Pony Express Delivery!"]')).toHaveText(["Free Pony Express Delivery!"]);

    //verify the Price total:
    let pricetotal = await page.locator('//div[text()="49.66"]').innerText();
    console.log("Total :", pricetotal);
    await expect(page.locator('//div[text()="49.66"]')).toContainText(["49.66"]);

    await page.locator('//button[@id="finish"]').click();

    //Checkout: complete

    await expect(page).toHaveURL("https://www.saucedemo.com/checkout-complete.html");

    let Complete = await page.locator('//span[text()="Checkout: Complete!"]').innerText();
    console.log("Checkout :", Complete);
    await expect(page.locator('//span[text()="Checkout: Complete!"]')).toContainText("Checkout: Complete!");
    
    //Verify order confirmation

    await expect(page.locator('//h2[text()="Thank you for your order!"]')).toContainText("Thank you for your order!");

    await page.screenshot({path:"C:/playwright/tests/files/"+"saucedemo.png"});

    await page.locator('//button[text()="Back Home"]').click();

    await page.pause();



})