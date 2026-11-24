//user facing

import { test, expect } from '@playwright/test';

//Built in locators

/*page.getByRole()
page.getByText()
page.getByLabel()
page.getByPlaceholder()
page.getByAltText()
page.getByTitle()
page.getByTestId() */

//page.getByRole()
test('getByRole example', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('button', { name: 'Submit' }).click();
});

//page.getByText()
test('getByText example', async ({ page }) => {
  await page.goto('https://demoqa.com/elements');
  await page.getByText('Text Box', { exact: true }).click();  //exact matching
});

//Locating Elements by Label
test('getByLabel example', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByLabel('Male', { exact: true }).check();
});

//Locating Elements By Placeholder
test('getByPlaceholder example', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').fill('Jimi');
  await page.getByPlaceholder('name@example.com').fill('jimi@example.com');
});

//getBy AltText
test('Locating Elements By Alt Text', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  const logo = page.getByAltText('Selenium Online Training');
  await expect(logo).toBeVisible();
  await logo.click();
});

//page.getByTitle()
//<button title="Add to cart">Add</button>`
//await page.getByTitle('Add to cart').click();


//get by test id --to locate an element based on its data-testid attribute.
//<button data-testid="directions">Itinéraire</button>
//await page.getByTestId('directions').click();


//Locator chaining -- creating a locator from another locator to narrow the search scope.
//first locate a parent element and then locate child elements inside it.

// Chaining using getByPlaceholder
test('Fill user details using placeholder locators', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  const form = page.locator('#userForm');

  await form.getByPlaceholder('Full Name').fill('Jimi');
  await form.getByPlaceholder('name@example.com').fill('jimi@test.com');

  await expect(page.locator('#userName')).toHaveValue('Jimi');
  await expect(page.locator('#userEmail')).toHaveValue('jimi@test.com');
});

// Chaining using filter
test('Chaining using filter', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');
  const button = page.locator('button').filter({ hasText: 'Double Click Me' });
  await button.dblclick();
  await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');
});


// Using first()
test('Click the first item from Elements menu', async ({ page }) => {
  await page.goto('https://demoqa.com/elements');

  //const menuItems = page.locator('.menu-list li');
  // const allTexts = await menuItems.allInnerTexts();
  //console.log(allTexts);

  const firstMenuItem = page.locator('.menu-list li').first();
  console.log(await firstMenuItem.innerText());
  //console.log(await firstMenuItem.textContent());

  await firstMenuItem.click();
  await expect(firstMenuItem).toHaveText('Text Box'); //case sensitive, exact match
});

// Using first() with Web Tables
test('Verify first row contains Cierra in Web Tables', async ({ page }) => {
  await page.goto('https://demoqa.com/webtables');
  const rows = page.locator('tbody tr');
  console.log(await rows.first().textContent());
  await expect(rows.first()).toContainText('Cierra');
  // console.log(await rows.nth(0).textContent());
  // await expect(rows.nth(0)).toContainText('Cierra');
});

// Using last()
test('Verify Dynamic Properties is the last visible menu item', async ({ page }) => {
  await page.goto('https://demoqa.com/elements');

  const lastItem = page.locator('.element-list li:visible').last();
  //const lastItem = page.locator('.element-list li').last(); //Book store API
  await expect(lastItem).toHaveText('Dynamic Properties');
  await lastItem.click();
});

// Using nth()
test('Click Radio Button menu using nth locator', async ({ page }) => {
  await page.goto('https://demoqa.com/elements');

  const thirdMenuItem = page.locator('.menu-list li').nth(2);
  await thirdMenuItem.click();
  await expect(thirdMenuItem).toHaveText('Radio Button');
});


// Using and()
test('Fill name and email using combined locators with and()', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  const fullName = page
    .getByPlaceholder('Full Name')
    .and(page.locator('#userName'));

  const emailTextbox = page
    .getByPlaceholder('name@example.com')
    .and(page.locator('#userEmail'));

  await fullName.fill('Jimi');
  await emailTextbox.fill('jimi@test.com');

  await expect(fullName).toHaveValue('Jimi');
  await expect(emailTextbox).toHaveValue('jimi@test.com');
});

// Using or()
test('Verify either Name or Email textbox is visible using or()', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  const fullName = page.locator('#userName');
  const email = page.locator('#userEmail');

  await expect(fullName.or(email).first()).toBeVisible();
  await expect(fullName).toBeVisible();
});



