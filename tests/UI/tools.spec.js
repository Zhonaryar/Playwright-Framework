import {test, expect } from '@playwright/test'; 
test.use({ viewport: { width: 1900, height: 1000 } });

test.describe('Shopping', () => {

test.beforeEach(async ({page})=> {
await page.goto('https://practicesoftwaretesting.com/');
})

test('Bying pliers', async ({page}) => {

    await expect(page.locator('#Layer_1')).toBeVisible(); 
    await page.locator("img[alt='Thor Hammer']").scrollIntoViewIfNeeded(); 
    await page.click("img[alt='Thor Hammer']"); 
    await page.fill('#quantity-input', '5'); 
    await page.click('#btn-add-to-cart'); 
     await page.waitForTimeout(2000); 
    await page.click('text = Home'); 

    await page.locator("a[aria-label='Page-2']").scrollIntoViewIfNeeded();
    await page.click("a[aria-label='Page-2']"); 
    await page.waitForTimeout(2000); 
    await page.locator("img[alt='Adjustable Wrench']").scrollIntoViewIfNeeded(); 
    await page.click("img[alt='Adjustable Wrench']"); 
    await page.fill("#quantity-input", '10'); 
    await page.click('#btn-add-to-cart'); 
    await page.click("a[aria-label='cart'] fa-icon[class='ng-fa-icon px-1'] svg path"); 
    await expect(page.locator('text = Continue Shopping')).toBeVisible(); 
    await page.click("text = Proceed to checkout");

    await expect(page.locator("div[id='signin-tab'] h3")).toHaveText('Login'); 
    await page.click('text = Register your account'); 
    await expect(page.locator("div[class='col-lg-8 auth-form'] h3")).toHaveText("Customer registration"); 
    await page.fill("#first_name", 'Mahsaye'); 
    await page.fill("#last_name", 'Elahe'); 
    await page.fill('#dob', '2018-11-18'); 
    await page.fill('#street', '143 Guildford Str'); 
    await page.fill('#postal_code', '20143');
    await page.fill('#city', 'Merrylands'); 
    await page.locator('#state').fill('NSW');
    await page.locator('#country').selectOption('AU'); 
    await page.fill('#phone', '240-360-7879'); 
    await page.fill('#email', 'Jigar@gmail.com'); 
    await page.fill('#password', 'WeAreJigars@143'); 
    await page.click("button[type='submit']"); 

    await page.waitForTimeout(2000);    

    await page.close(); 
















});


})