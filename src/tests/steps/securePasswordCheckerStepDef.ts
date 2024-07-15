import { When, Then, Given } from "@cucumber/cucumber";
import { SecurePasswordCheckerPageObject } from "../../pages/securePasswordCheckerPageObject";
import { pageFixture } from "../../hooks/pageFixture";
import { expect, firefox } from "@playwright/test";

let securePasswordCheckerPageObject: SecurePasswordCheckerPageObject;




Given("I go to {string}", async function (url) {
  securePasswordCheckerPageObject = new SecurePasswordCheckerPageObject(pageFixture.page);
  await securePasswordCheckerPageObject.ouvrirUrl(url);


});

When("I enter a password {string}", async function (password) {
  await securePasswordCheckerPageObject.saisirPassword(password);
 
});

 Then("I should not see any messages", async function () {
  const isVisible = await securePasswordCheckerPageObject.getFirstMessageVisibility();
  expect(isVisible).toBe(false);

}); 

Then('I should see an error message {string}', async function (expectedMessage) {

  
 
  
    const errorMessage = await securePasswordCheckerPageObject.getFirstMessageText();
    expect(errorMessage).toContain(expectedMessage);
    

  

  
})