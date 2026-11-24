import{test, expect} from '@playwright/test'

test('title1', async ({ page }) => {
await page.goto('https://demoqa.com/dynamic-properties');
const dynamicText = page.getByText('This text has random Id');
await expect(dynamicText).toBeVisible();
});

test('title2', async ({ page }) => {
    await page.goto('https://demoqa.com/dynamic-properties');
const enableAfterButton = page.locator('#enableAfter');
await expect(enableAfterButton).toBeEnabled({ timeout: 10000 });
//await expect(enableAfterButton).toBeEnabled();
await enableAfterButton.click();
});

test('title3', {tag: '@smoke'}, async ({ page }) => {
    await page.goto('https://demoqa.com/dynamic-properties');
const visibleAfterButton = page.locator("#visibleAfter");
await expect(visibleAfterButton).toBeVisible({ timeout: 10000 });
await visibleAfterButton.click();
});

//beforeach
//aftereach
//beforeall
//afterall

//1. test.describe (3 test)
//2. test.describe(4 test)
//3. test.describe.only (5 test)