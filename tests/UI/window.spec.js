import{test, expect} from '@playwright/test'; 

test('Window Handling', async ({browser}) => {

const context = await browser.newContext(); 
const page = await context.newPage(); 

await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html"); 
await expect(page.locator(".post-title.entry-title")).toBeVisible(); 


const [newPage] = await Promise.all([
 page.waitForEvent("popup"),
 page.click("#newTabBtn"), 

])

await newPage.waitForLoadState(); 
console.log('new tab url: '+newPage.url()); 

newPage.once('dialog', async dialog => { 
  console.log('Alert message:', dialog.message());
  await dialog.accept(); // or dialog.dismiss() if needed
});

 await newPage.click('#alertBox');

newPage.once('dialog', async dialog => {
    console.log('Alert msg: ', dialog.message()); 
    await dialog.accept('Hello'); 
})
await newPage.click('promptBox');
//
await expect(newPage).toHaveURL("https://www.hyrtutorials.com/p/alertsdemo.html"); 







});