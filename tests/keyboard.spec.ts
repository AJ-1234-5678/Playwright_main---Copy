import { test, expect } from '@playwright/test';

test('keyboard actions', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.locator('#userName').fill('Playwright');
  await page.keyboard.press('Tab')

  await page.keyboard.insertText('playwright@test.com')
  await page.keyboard.press('Control+A')
  await page.keyboard.press('Control+C')
  await page.keyboard.press('Tab')
  await page.keyboard.press('Tab')

  await page.keyboard.press('Control+V')
});

//to move upward - shift +tab