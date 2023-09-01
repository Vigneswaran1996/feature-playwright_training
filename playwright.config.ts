import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {

  testMatch : ["testrunner/Loginpage.spec.ts"],
  
  use:{
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
