import { Page } from '@playwright/test';

export class CartPage {

  readonly page: Page;

  readonly productNames;
  readonly checkoutButton;

  constructor(page: Page) {
    this.page = page;

    this.productNames = page.locator('.inventory_item_name');
    this.checkoutButton = page.locator('#checkout');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}