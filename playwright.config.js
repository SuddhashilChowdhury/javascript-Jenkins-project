// @ts-check
import { defineConfig, devices } from '@playwright/test';
/**
  @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig ({
  testDir: './tests',
  //maximum time test will run for
    timeout: 40*1000,
    expect :{
      timeout : 5000,
    },  
    reporter : 'html',
  use: {
    browserName : 'webkit' ,
    headless : true, 
  },


});


