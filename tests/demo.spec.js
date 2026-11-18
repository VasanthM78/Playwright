import { expect, test } from "@playwright/test";
import { reverse } from "node:dns";
import { wrap } from "node:module";

test("open the application", async ({ page }) => {
   await page.goto("http://www.facebook.com");
   const titilename= await page.title();
   console.log(titilename);
   await page.waitForTimeout(5000

   );
   

});


test("page navigate",async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   
   await expect (page.getByAltText("company-branding")).toBeVisible()

   await page.getByPlaceholder("Username").fill("Admin")
   await page.getByPlaceholder("Password").fill("admin123")

   await page.getByRole("button",{name: " Login "}).click()

   await page.pause();

})


//dropdown
test  ("Select option in dropdown",async({page})=>{
   await page.goto("https://www.amazon.in/");

   const dropdownlits= page.getByTitle("Search in");

   //dropdownlits.selectOption({index:5})
   //dropdownlits.selectOption({value: "search-alias=alexa-skills"})
   //dropdownlits.selectOption("search-alias=alexa-skills")
   await dropdownlits.selectOption({label:"Luggage & Bags"})

   await page.waitForTimeout(3000);

})


//Handling single and multi select list box

//multi select option

//await page.locator("#payment").selectOption([{index:1},{value:'chikako'},{label:'honw'}])

test ("single select list box",async({page})=>{
   await page.goto("https://senthilsmartqahub.blogspot.com/2026/02/online-store.html");
   await page.setViewportSize({width:1280,height:672})
   const litsbox= page.locator("#payment");
   litsbox.selectOption({index:4})

   await page.waitForTimeout(5000)

})

//Alert simple,confirm,prompt

test("Handling Alert",async({page})=>{
   
   await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

   
       page.on("dialog",async(d1)=>{

   
      console.log(d1.message());
      console.log(d1.type());
      await d1.accept();
      
   })

    await page.getByText("Click for JS Confirm").click;

})




let word1="listen";
let word2="slient";

let a=word1.split("").sort().join("");
let b=word2.split("").sort().join("");

console.log(a);
console.log(b);

if(a===b){
   console.log("Anagram");
   
}

else{
   console.log("not anagram");
   
}




