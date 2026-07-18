const {test, expect} = require('@playwright/test');

test.only('Browser Playwright test',async ({browser})=> {// to open the browser first and then load the page
    const context=  await browser.newContext();
    const page=await context.newPage();
    const username= page.locator('input#username');
    const password = page.locator('#password');
    const signIn = page.locator('[type=submit]');
    const CardItems=  page.locator('.card-body a')
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     await username.fill('rahulshettyacademy');
     await password.fill('Learning@830$3mK24');
     await signIn.click();
     let incorrectText=await page.locator('[style*=block]').textContent();
     console.log(incorrectText)
    expect(incorrectText).toContain('Incorrect username/password.');
     await username.fill('rahulshettyacademy');
     await password.fill('Learning@830$3mK2');
     await signIn.click();


    // let Cardname=await CardItems.first().textContent();
    // console.log("First Cardname="+Cardname)
     //let Last_CardName=await CardItems.last().textContent();
     //console.log("Last CardName="+Last_CardName)
     //let Nth_Cardname= await CardItems.nth(1).textContent();
     //console.log("Nth Cardname="+Nth_Cardname)
     await page.waitForLoadState('networkidle');
     await CardItems.first().waitFor() 
     let Alltitlles= await CardItems.allTextContents();
     console.log("All Items:")
     console.log(Alltitlles)

     await page.pause();

});


test('Page context Playwright test',async ({page})=> {  //to load the page and open the browser simultaneously/ Also test.only to run only one test in a file
    await page.goto("https://google.com");
    //get title and put assertion
     let PageTitle= await page.title();
     console.log(PageTitle)
     await expect(page).toHaveTitle(PageTitle);

});