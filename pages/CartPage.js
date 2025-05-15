exports.CartPage = class CartPage {
  constructor(page) {
    this.page = page;
    this.removeButton = page.locator('button[data-test^="remove"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async removeItem() {
    await this.removeButton.click();
  }

  async startCheckout() {
    await this.checkoutButton.click();
  }
};
