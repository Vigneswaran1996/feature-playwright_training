import { test, expect } from '@playwright/test';


let username = 'vignesh19';
let password = 'Vignesh@19';

test.describe("bookcart website",async() => {


test('Login to bookcart application', async ({ page,baseURL}) => {
  
    await page.goto(`${baseURL}`);

    

    const titleNew = await page.title();
    console.log(titleNew);

    await expect(page).toHaveTitle(titleNew);
});

});