const playwright = require('playwright');

async function scraperDashboard() {
  const email = process.env.EMAIL_ROOT;
  const emailPass = process.env.PASS_EMAIL_ROOT;
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36'
  });
  const page = await context.newPage();

  await page.goto('https://admin.shopify.com/store/8472ad-2/dashboards');

  await page.fill('#account_email', email);
  await page.click('#account_lookup > div:nth-child(13) > button');

  await page.fill('#account_password', emailPass);

  await page.click(' #login_form > div.ui-form__group.login-buttons-group > div.footer-form-submit > button');

  await page.waitForTimeout(1000);

  await page.click('#AppFrameMain > div > div._OverviewDashboard_o2wc9_9 > div.Polaris-InlineGrid > div > div:nth-child(2) > div._HeaderActions_o2wc9_21 > div:nth-child(1) > div:nth-child(1) > div > button');
  await page.waitForTimeout(1000);
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');

  for (let i = 0; i < 22; i++) {
    await page.keyboard.press('Tab');
  }
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'data.png' });

  const element = page.locator('#total-sales > div > div > div > div > div._Content_1eaum_42 > div._PrimaryMetric_5oiso_1 > div > div > div._PrimaryMetricWrapper_5oiso_50 > p'); 
  const total_sales = await element.textContent();

  const element2 = page.locator('#total-orders > div > div > div > div > div._Content_1eaum_42 > div._PrimaryMetric_5oiso_1 > div > div > div._PrimaryMetricWrapper_5oiso_50 > p'); 
  const total_Orders = await element2.textContent();

  const element3 = page.locator('#average-order-value > div > div > div > div > div._Content_1eaum_42 > div._PrimaryMetric_5oiso_1 > div > div > div._PrimaryMetricWrapper_5oiso_50 > p'); 
  const average_order_value = await element3.textContent();

  await page.waitForTimeout(1000);

  for (let i = 0; i < 12; i++) {
    await page.keyboard.press('Tab');
  }
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  for (let i = 0; i < 29; i++) {
    await page.keyboard.press('Tab');
  }
  await page.keyboard.press('Enter');
  await page.waitForTimeout(1000);

  await page.click('#AppFrameMain > div > div.Polaris-Page.Polaris-Page--fullWidth > div:nth-child(2) > div > div.Polaris-BlockStack > div > div._PopoverPicker_ihr7a_1 > div > button');
  
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await page.keyboard.press('Enter');

  for (let i = 0; i < 22; i++) {
    await page.keyboard.press('Tab');
  }
  await page.keyboard.press('Enter');

  await page.waitForTimeout(1000);

  const element4 = page.locator('#AppFrameMain > div > div.Polaris-Page.Polaris-Page--fullWidth > div:nth-child(2) > div > div.Polaris-LegacyCard > div > div > div.Polaris-DataTable.Polaris-DataTable__ShowTotals > div.Polaris-DataTable__ScrollContainer > table > thead > tr:nth-child(2) > td:nth-child(4) > div'); 
  const net_sales = await element4.textContent();

  const data = {
    "total sales": total_sales,
    "total orders": total_Orders,
    "average order value": average_order_value,
    "Net Sales":net_sales
  };

  await browser.close();
  return data;
}


module.exports = scraperDashboard;