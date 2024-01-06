import { test, expect } from "@playwright/test";
import { LoginPage } from "../pom/login.page";
import { validUser } from "../fixtures/user";

test("Visit Twittah!", async ({ page }) => {
  await page.goto("https://twittah.web.app");

  await expect(page.getByTestId("app-name")).toBeVisible();
  await expect(page.getByTestId("app-name")).toHaveText("Twittah!");
});

test("User post successfully", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.visit();
  await loginPage.loginWith(validUser);
  await loginPage.postWithContent("hello!");
  await loginPage.logout();
});
