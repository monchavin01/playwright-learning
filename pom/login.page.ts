import { Page, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;
  readonly baseUrl: string;
  constructor(page: Page) {
    this.page = page;
    this.baseUrl = "https://twittah.web.app/";
  }

  async visit() {
    await this.page.goto(this.baseUrl);
    await expect(this.page.getByTestId("login-field")).toBeVisible();
    await expect(this.page.getByTestId("password-field")).toBeVisible();
    await expect(this.page.getByTestId("login-button")).toBeVisible();
  }

  async loginWith(credential: { username: string; password: string }) {
    await expect(this.page.getByTestId("login-button")).toBeVisible();
    await this.page.getByTestId("login-field").fill(credential.username);
    await this.page.getByTestId("password-field").fill(credential.password);
    await this.page.getByTestId("login-button").click({ delay: 300 });
  }

  async postWithContent(message: string) {
    await this.page.getByTestId("message-field").fill(message);
    await this.page.getByTestId("post-button").click({ delay: 300 });
    await expect(this.page.getByText(message).first()).toBeVisible();
  }

  async logout() {
    await this.page.getByTestId("menu-signout").click();
    await expect(this.page.getByTestId("app-name")).toBeVisible();
    await expect(this.page.getByTestId("app-name")).toHaveText("Twittah!");
  }

  async shouldContainErrorMessage(errMsg: string) {
    await expect(this.page.getByTestId("error-message")).toHaveText(errMsg);
  }
}
