import { Page, Locator } from '@playwright/test';

export class FileUploadPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async uploadFile(filePath: string) {

        const input = await this.page.locator("//input[@id='uploadFile']");
        await input.setInputFiles(filePath);
    }
    async downloadFile(linkSelector: string): Promise<void> {
        const downloadLink = await this.page.locator(linkSelector);
        const downloadurl = await downloadLink.getAttribute('href');

        if (downloadurl) {

            await this.page.goto(downloadurl, { waitUntil: 'domcontentloaded' });
        }

        else {

        }
    }
}
