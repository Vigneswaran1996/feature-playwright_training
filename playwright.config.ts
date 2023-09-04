import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

  // testMatch : ["Loginpage.spec.ts"],
  testMatch : ["alerts.test.ts"],
  
  use:{
    baseURL: 'https://bookcart.azurewebsites.net/login',
    headless: false,
    screenshot:"on",
    video:"off"
  },

  reporter:[["dot"],["json",{

    outputFile:"jsonFileReport/jsonReport.json"

  }], ["html",{

      open: "never"
  }]]

};
export default config;
