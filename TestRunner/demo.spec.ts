

import { test,chromium, Browser, Page } from '@playwright/test';

test("Test upload a file",async ()=>{


  const filePath0 = 'D:/Playwright_Training/uploadItems/company.png'

  const filePath1 = 'D:/Playwright_Training/uploadItems/secondcompany.png'

  const browser: Browser = await chromium.launch();


  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/upload");

  page.on("filechooser",async(filechooser) => {
    
    await filechooser.setFiles([filePath0,filePath1])

  })
await page.click(".example + div#drag-drop-upload",{force : true})

await page.waitForTimeout(5000);

})

