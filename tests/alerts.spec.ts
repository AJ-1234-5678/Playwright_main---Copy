import {test, expect} from '@playwright/test'

test('DemoQA Simple Alert Example', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('You clicked a button');
    await dialog.accept(); // Clicks OK
  });

   await page.locator('#alertButton').click();
});

test('DemoQA Timer Alert Example', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async dialog => {
    console.log(`Timer Alert Message: ${dialog.message()}`);
    await dialog.accept();
  });

  // Trigger the alert that takes 5 seconds to show up
  await page.locator('#timerAlertButton').click();
 });

 //handling confirmation box 
test('DemoQA Confirmation Box - Dismiss Example', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('Do you confirm action?');
    await dialog.dismiss(); 
  });

  await page.locator('#confirmButton').click();

    await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
});

test('DemoQA Prompt Box Example', async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toBe('Please enter your name');
    
    // Type text into the prompt box and click OK
    await dialog.accept('Playwright Automation');
  });

  await page.locator('#promtButton').click();

   await expect(page.locator('#promptResult')).toHaveText('You entered Playwright Automation');
});

