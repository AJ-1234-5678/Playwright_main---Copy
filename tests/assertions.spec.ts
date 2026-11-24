import{test,expect} from '@playwright/test'

test('Page Assertions Example', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
     await expect(page).toHaveTitle('Swag Labs');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

 await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
//await expect(page).toHaveURL(/inventory/); //case sensitive(Inventory or INVENTORY cause fail)
//await expect(page).toHaveURL(/inventory/i); //case-insensitive
});

test('Locator State Assertions Example', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  const usernameInput = page.locator('#user-name');
  const loginButton = page.locator('#login-button');

  await expect(usernameInput).toBeVisible();
  await expect(usernameInput).toBeEditable();
  await expect(usernameInput).toBeEmpty();
  await expect(loginButton).toBeEnabled();
 // await expect(loginButton).not.toBeEnabled();
});

//locator content & text assertions
test('Locator Content & Text Assertions Example', async ({ page }) => {

     await page.goto('https://www.saucedemo.com/');
   await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  const titleHeader = page.locator('.title');
  
  await expect(titleHeader).toHaveText('Products'); //case sensitive
  await expect(titleHeader).toContainText('Prod'); //case sensitive
// await expect(titleHeader).toContainText('Prod', {ignoreCase: true}); 

 const searchOrFilter = page.locator('.product_sort_container');
  await searchOrFilter.selectOption('hilo'); // High to Low price
 //await searchOrFilter.selectOption({index:2});
 //await searchOrFilter.selectOption({label: 'Price (high to low)'});
  await expect(searchOrFilter).toHaveValue('hilo');
});

test('DemoQA Radio Button Selection Assertions', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');

  const yesRadioButton = page.locator('#yesRadio');
  const impressiveRadioButton = page.locator('#impressiveRadio');
  const outputResult = page.locator('.text-success');

  await expect(yesRadioButton).not.toBeChecked();
  await expect(impressiveRadioButton).not.toBeChecked();
  await page.pause();
   await page.locator('label[for="yesRadio"]').click();

   await expect(yesRadioButton).toBeChecked();
  
   await expect(outputResult).toHaveText('Yes');

   await page.locator('label[for="impressiveRadio"]').click();
 await page.pause();
   await expect(impressiveRadioButton).toBeChecked();
  await expect(yesRadioButton).not.toBeChecked(); 
  await expect(outputResult).toHaveText('Impressive');
});

test('DemoQA Practice Form Checkbox Assertions', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  const sportsCheckbox = page.locator('#hobbies-checkbox-1'); // Sports
  const readingCheckbox = page.locator('#hobbies-checkbox-2'); // Reading

   await expect(sportsCheckbox).not.toBeChecked();
  await expect(readingCheckbox).not.toBeChecked();

   await page.locator('label[for="hobbies-checkbox-1"]').click();

   await expect(sportsCheckbox).toBeChecked();
  await expect(readingCheckbox).not.toBeChecked();

   await page.locator('label[for="hobbies-checkbox-2"]').click();
  await expect(readingCheckbox).toBeChecked();
});

//generic assertions
test('Generic Value Assertions Example', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page.locator('.inventory_item')).toHaveCount(6);

  const itemCount = await page.locator('.inventory_item').count();
  expect(itemCount).toBe(6);
  expect(itemCount).toBeGreaterThan(0);
  expect(itemCount).toBeTruthy();
  //toBeTruthy, toBeFalsy
});

test('Soft Assertions Example', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // Soft Assertions
  await expect.soft(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect.soft(page.locator('.title')).toHaveText('Products');
  const itemCount = await page.locator('.inventory_item').count();

  expect.soft(itemCount).toBe(6);
  expect.soft(itemCount).toBeGreaterThan(0);

  console.log('Item Count:', itemCount);
 });

