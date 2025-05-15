const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test.describe('Cart tests', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
  });

  test('Add item to cart', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addFirstItemToCart();
    await inventory.goToCart();
    await expect(page).toHaveURL(/cart/);
    await expect(page.locator('.cart_item')).toHaveCount(1);
  });

  test('Remove item from cart', async ({ page }) => {
    const inventory = new InventoryPage(page);
    const cart = new CartPage(page);

    await inventory.addFirstItemToCart();
    await inventory.goToCart();
    await cart.removeItem();
    await expect(page.locator('.cart_item')).toHaveCount(0);
  });
});
