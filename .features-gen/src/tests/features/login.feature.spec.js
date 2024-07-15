/** Generated from: src\tests\features\login.feature */
import { test } from "playwright-bdd";

test.describe("verify login", () => {

  test("Verify user is able to login with valid credentials", { tag: ["@login", "@loginValide"] }, async ({ Given, When, And, Then }) => {
    await Given("I navigate to \"https://practice.expandtesting.com/login\"");
    await When("I enter my username \"practice\"");
    await And("I enter my password \"SuperSecretPassword!\"");
    await And("I click on the button login");
    await Then("I should verify url contains \"/secure\"");
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("src\\tests\\features\\login.feature"),
  $bddWorldFixtures: ({ page, context, browser, browserName, request }, use) => use({ page, context, browser, browserName, request }),
});

const testMetaMap = {
  "Verify user is able to login with valid credentials": {"pickleLocation":"6:3","tags":["@login","@loginValide"],"ownTags":["@loginValide"]},
};