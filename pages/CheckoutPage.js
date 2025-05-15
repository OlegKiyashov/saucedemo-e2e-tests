exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.confirmation = page.locator('.complete-header');
  }

  async fillCheckoutInfo() {
    await this.firstName.fill('John');
    await this.lastName.fill('Doe');
    await this.postalCode.fill('12345');
    await this.continueButton.click();
  }

  async completeOrder() {
    await this.finishButton.click();
  }

  async isOrderComplete() {
    return this.confirmation.textContent();
  }
};
