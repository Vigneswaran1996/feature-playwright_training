import { chromium, Browser, Page,test } from '@playwright/test';
import { FileUploadPage } from '../pageobject/FileUploadPage';

let browser: Browser;
let page: Page;

const fileToUploadPath = 'uploadItems/company.png'




test("test file for upload",async({page}) => {

    const file = new FileUploadPage(page);

    await page.goto('https://demoqa.com/upload-download');

    await file.uploadFile(fileToUploadPath);
    
    
})


test("test file for Download",async({page}) => {

    const filedown = new FileUploadPage(page);

    await page.goto('https://demoqa.com/upload-download');


    if(filedown){


        await filedown.downloadFile("//a[@id='downloadButton']");

        console.log('Downloaded file successfully');

    }else{

        console.log('please check the file correctly');
    }
   
    
    
})