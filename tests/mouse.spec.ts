import { test, expect } from '@playwright/test';

test('Right Click', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.locator('#rightClickBtn').click({ button: 'right' });
    await expect(page.locator('#rightClickMessage')).toContainText('You have done a right click');
});

test('Double Click', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.locator('#doubleClickBtn').dblclick();
    await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');
});

test('Basic Drag and Drop using dragTo on DemoQA', async ({ page }) => {
    await page.goto('https://qaplayground.com/practice/drag-drop');

    const source = page.getByTestId('dd-item');
    const target = page.getByTestId('dd-drop-zone');

    await source.dragTo(target);

    await expect(target).toContainText('Item dropped');

    await page.screenshot({ path: 'screenshots/title2.png' });
});

//scrollIntoViewIfNeeded()
//hover()
