import{test,expect} from "@playwright/test"
import LoginPage from '../pages/Saucelogin'
import cred from '../test-data/sauce.json'

test("login the saucedemo",async({page})=>{
     
    let sauce =new LoginPage(page)

    await sauce.navigation();
    await sauce.login(cred.username,cred.password);

    await page.pause();
})