import {
  After,
  AfterAll,
  Before,
  BeforeAll,
  Status,
  setDefaultTimeout,
} from "@cucumber/cucumber";
import {
  Browser,
  BrowserContext,
  Page,
  chromium,
  firefox,
} from "@playwright/test";
import { pageFixture } from "./pageFixture";
import config from "../../playwright.config";

//configuration explicit wait
export const globalTimeout: number = config.expect?.timeout || 5000;
setDefaultTimeout(globalTimeout);

//declaration des variables
let browser: Browser;
let page: Page;
let browserContext: BrowserContext;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
  
});

Before(async function () {
  browserContext = await browser.newContext();
  page = await browserContext.newPage();
  pageFixture.page = page;
});

/* After(async function ({ pickle, result }) {
  //screenshots
  console.log(result?.status);
  if (result?.status == Status.PASSED) {
    const img = await pageFixture.page.screenshot({
      path: `./test-result/screenshots/${pickle.name}.png`,
      type: "png",
    });
    await this.attach(img, "image/png");
  }
  await pageFixture.page.close();
  await browserContext.close();
});

AfterAll(async function () {
  await browser.close();
}); 
 */