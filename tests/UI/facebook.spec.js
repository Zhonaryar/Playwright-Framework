import { test, expect } from '@playwright/test';
test.use({ viewport: { width: 1280, height: 720 } });


test.describe('Facebook Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.facebook.com/');
  });

  test('FB Account creation', async ({ page }) => {
    
    await page.click("text=Create new account");
    await expect(page.locator("//div[text() ='It’s quick and easy.']")).toBeVisible();

    await page.getByRole('textbox', { name: 'First name' }).fill('Mahsaye');
    await page.locator("//input[@name='lastname']").fill('Elahe');
    await page.locator('#month').selectOption('3'); 
    await page.locator('#day').selectOption('14');
    await page.locator('#year').selectOption('2020');
    await page.click("//label[text()='Female']"); 
    await page.fill("//input[@name='reg_email__']", 'Jigar@gmail.com');
    await page.locator("#password_step_input").fill("IamJigar@123")
    await page.click("//button[@name='websubmit']");

    await page.waitForTimeout(3000); 



    await page.close();
  });

});
