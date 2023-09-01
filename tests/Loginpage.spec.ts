import { test, expect } from '@playwright/test';


let username = 'vignesh19';
let password = 'Vignesh@19'

test('Login to bookcart application', async ({ page }) => {
  
    await page.goto('https://bookcart.azurewebsites.net/login');

    const titleNew = await page.title();
    console.log(titleNew);

    await expect(page).toHaveTitle(titleNew);
});