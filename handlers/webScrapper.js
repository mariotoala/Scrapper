/*const playwright = require('playwright');



async function scrapeTitles() {
  const email = process.env.EMAIL_ROOT;
  const emailPass = process.env.PASS_EMAIL_ROOT;
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  await page.goto('https://admin.shopify.com/store/8472ad-2');
  await page.screenshot({ path: 'screenshot.png' });

  await page.fill('#account_email', email);
  await page.click('#account_lookup > div:nth-child(13) > button');
  await page.screenshot({ path: 'email_click.png' });
  //await page.waitForTimeout(1000);

  await page.screenshot({ path: 'before_login.png' });
  await page.fill('#account_password', emailPass);
  await page.screenshot({ path: 'after_login.png' });

  await page.click(' #login_form > div.ui-form__group.login-buttons-group > div.footer-form-submit > button');

  await page.waitForTimeout(3000);
  await page.screenshot({ path: 'logeado.png' });

  await page.click('#AppFrameMain > div > div.Polaris-Page > div:nth-child(2) > div._analyticsContainer_ql3ja_3 > div > div:nth-child(1) > div > div.Polaris-LegacyStack__Item.Polaris-LegacyStack__Item--fill > div > div:nth-child(2) > div > button > span.Polaris-Button__Icon > span > svg');
  //await page.click('#\:r2u\:-0 > li:nth-child(4)');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'logeado2.png' });
  await page.waitForTimeout(2000);

  const buttonElement = await page.waitForSelector(':r6b button[aria-pressed="true"]');
  await buttonElement.click();

  /*
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');
  await page.waitForTimeout(3000);

  await page.screenshot({ path: 'logeado3.png' });

  await browser.close();
  return "hola";
}


module.exports = scrapeTitles;*/


const { Builder, By,expectedConditions } = require('selenium-webdriver');

async function scrapeTitles() {
  const email = process.env.EMAIL_ROOT;
  const emailPass = process.env.PASS_EMAIL_ROOT;

  const driver = await new Builder().forBrowser('chrome').build();

  await driver.get('https://admin.shopify.com/store/8472ad-2');
  await driver.takeScreenshot('screenshot.png');

  await driver.findElement(By.id('account_email')).sendKeys(email);
  await driver.sleep(3000); // Espera 3 segundos
  await driver.takeScreenshot('screenshot2.png');

  await driver.findElement(By.css('#account_lookup > div:nth-child(13) > button')).click();
  await driver.sleep(3000); // Espera 3 segundos
  await driver.takeScreenshot('screenshot2.png');

  await driver.findElement(By.id('account_password')).sendKeys(emailPass);
  /*
      await driver.takeScreenshot('screenshot2.png');
      await driver.sleep(3000); // Espera 3 segundos
      await driver.findElement(By.id('account_password')).sendKeys(emailPass);
      await driver.takeScreenshot('screenshot2.png');*/

  /*
  
      await driver.takeScreenshot('screenshot2.png');
      await driver.sleep(3000); // Espera 3 segundos
      await driver.findElement(By.id('account_password')).sendKeys(emailPass);*/
  await driver.findElement(By.css('#login_form > div.ui-form__group.login-buttons-group > div.footer-form-submit > button')).click();
  const buttonElement = await driver.findElement(By.xpath('//*[@id="AppFrameMain"]/div/div[1]/div[2]/div[1]/div/div[1]/div/div[1]/div/div[2]/div/button'));
  await buttonElement.click();
  await driver.takeScreenshot('screenshot2.png');

  await driver.sleep(10000); // Espera 3 segundos
  await buttonElement.click();
  await driver.takeScreenshot('screenshot2.png');

  await driver.quit();

}
module.exports = scrapeTitles;