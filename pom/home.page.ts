import { Page, expect } from "@playwright/test";
import { ICredential } from "../interfaces/user";

export class HomePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async shouldDisplayUserProfileOf(user: ICredential) {
    await this.page.getByTestId("menu-profile").click({ delay: 300 });
    await expect(
      this.page.getByTestId("user-profile-display-name")
    ).toBeVisible();
    await expect(this.page.getByTestId("user-profile-display-name")).toHaveText(
      user.username
    );
  }

  async shouldBeDisplayed() {
    await expect(this.page.getByTestId("current-user-profile")).toBeVisible();
  }

  async logout() {
    await this.page.getByTestId("menu-signout").click({ delay: 300 });
  }
}
