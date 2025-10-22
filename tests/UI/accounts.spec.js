const {test, expect } = require ('@playwright/test'); 
const {readExcel } = require ('../../utilities/readExcel'); 

const testData = readExcel('input.slxl'); 

for(const{ name, 'email address': email} of testData){

    test(`Create Multiple Accounts for ${name}`, async ({page}) => {

        await page.goto("https://www.automationexercise.com/login"); 

        await page.getByPlaceholder('Name').fill(name); 
        await page.getByPlaceholder('Email Address').fill(email); 
        await page.getByText('Signup').click(); 





    });
}
