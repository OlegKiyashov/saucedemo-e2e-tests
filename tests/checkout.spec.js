const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('Checkout and finish order', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await inventory.addFirstItemToCart();
  await inventory.goToCart();
  await cart.startCheckout();
  await checkout.fillCheckoutInfo();
  await checkout.completeOrder();
  const confirmationText = await checkout.isOrderComplete();
  expect(confirmationText).toContain('Thank you for your order');
});
