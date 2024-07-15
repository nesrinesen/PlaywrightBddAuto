import { Page } from "@playwright/test";

export class SecurePasswordCheckerPageObject {
  //declaration des variables de la classe
  page: Page;

  //constructeur de la classe
  //constructeur de la classe

  constructor(page: Page) {
    this.page = page;
  }

  //methodes de la classe

  async ouvrirUrl(url: string) {
    await this.page.goto(url);
  }

  async saisirPassword(password: string): Promise<void> {
    await this.page.waitForTimeout(1000);

    //page.type() envoie les caractères un par un, comme si un utilisateur les tapait au clavier.
    // Saisie du mot de passe caractère par caractère
    await this.page.type('input[name="password"]', password);
  }

  async getFirstMessageVisibility(): Promise<boolean> {
    const firstMessage = this.page.locator(".helper-text").first();

    return await firstMessage.isVisible();
  }

  async getFirstMessageText(): Promise<string> {
   /*  await this.page.waitForTimeout(1000);

    const isVisible = await this.getFirstMessageVisibility();

    if (!isVisible) {
      throw new Error("First error message is not visible");
    } */

    const firstMessage = this.page.locator(".helper-text").first();
    const firstMessageText = await firstMessage.innerText();

    return firstMessageText.trim();
  }
}
