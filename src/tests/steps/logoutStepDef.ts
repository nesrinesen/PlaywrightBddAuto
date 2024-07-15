import {When, Then} from '@cucumber/cucumber';
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
import { LogoutPageObject } from '../../pages/logoutPageObject';


let logoutPageObject: LogoutPageObject;


When('I click on the link Logout', async function ()  {

    logoutPageObject = new LogoutPageObject(pageFixture.page);
    await logoutPageObject.clickLogout();
    
  })

  Then('should see a message {string}', async function (msg) {
    const actualSuccMsg = await logoutPageObject.getMsg();
    expect(actualSuccMsg).toContain(msg);
  });