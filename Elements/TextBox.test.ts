import { chromium, Browser, Page,test,expect } from '@playwright/test';


let browser: Browser;
let page: Page;

test("Text box test case",async({page}) => {


    await page.goto('https://demoqa.com/text-box');

    await page.waitForLoadState('load');

    let name = await page.type("//input[@id='userName']","Vigneswaran");
    let emailId = await page.type("//input[@id='userEmail']","vigneswaranrababu19@gmail.com");
    let address = await page.type("//textarea[@id='currentAddress']","Manikonda, Hyderabad - 600508");
    let perAddress = await page.type("//textarea[@id='permanentAddress']","Hyderabad - 600508");
    await page.click("//button[@id='submit']");

    expect(page.locator("id=name")).toContainText("Vigneswaran"); 
    expect(page.locator("id=email")).toContainText("vigneswaranrababu19@gmail.com"); 
    await page.waitForTimeout(5000);
    expect(page.locator("text=Current Address :")).toContainText("Manikonda, Hyderabad - 600508"); 
    expect(page.locator("text=Permananet Address :")).toContainText("Hyderabad - 600508"); 
    


})