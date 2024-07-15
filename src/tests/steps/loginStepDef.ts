import { Given, Then, When } from "@cucumber/cucumber";
import { LoginPageObject } from "../../pages/loginPageObject";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

//declaration de la classe de la page object
let loginPageObject: LoginPageObject;

Given("I navigate to {string}", async function (url) {
  loginPageObject = new LoginPageObject(pageFixture.page);
  await loginPageObject.ouvrirUrl(url);
});

When("I enter my username {string}", async function (username) {
  await loginPageObject.saisirUsername(username);
});

When("I enter my password {string}", async function (password) {
  await loginPageObject.saisirPassword(password);
});

When("I click on the button login", async function () {
  await loginPageObject.clickBtnLogin();
});

Then("I should see a message {string}", async function (msg) {
  const actualerrorMsg = await loginPageObject.getMsg();
  switch (msg) {
    case "You logged into a secure area!":
      expect(actualerrorMsg).toContain(msg);
      break;
    case "Your password is invalid!":
      expect(actualerrorMsg).toContain(msg);
      break;

    case "Your username is invalid!":
      expect(actualerrorMsg).toContain(msg);
      break;
  }
});


