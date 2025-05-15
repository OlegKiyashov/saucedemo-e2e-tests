exports.InventoryPage = class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryContainer = page.locator('.inventory_list');
    this.firstAddToCartButton = page.locator('button.btn_inventory').first();
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addFirstItemToCart() {
    await this.firstAddToCartButton.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
};
