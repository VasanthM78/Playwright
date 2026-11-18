import {test,expect} from "@playwright/test"
import * as xlsx from 'xlsx'

const workbook= xlsx.readFile("C:/Users/pavit/Downloads/saucedemo_cred.xlsx"); //verify the xls path
const sheet= workbook.Sheets["LOGIN"]; //verify the xls sheetname
const JsonData= xlsx.utils.sheet_to_json(sheet); //convert xls to json

for(let cred of JsonData){

    test (`login swaglabs using excel credentials user ${cred.USERNAME}`,async({page})=>{
    await page.goto("https://www.saucedemo.com/");

    await page.locator('//input[@id="user-name"]').fill(cred.USERNAME.trim());
    await page.locator('//input[@id="password"]').fill(cred.PASSWORD.trim());
    await page.locator('//input[@id="login-button"]').click();

    await page.pause();

})

}


