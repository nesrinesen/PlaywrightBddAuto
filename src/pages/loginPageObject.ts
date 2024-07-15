import {Page} from '@playwright/test'

//selecteur
const selecteurs = {

    usernameXpath: '//input[@id="username"]',
    passwordXpath: '//input[@id="password"]',
    boutonLoginXpath: '//button[@type="submit"]',
    msg: '//*[@id="flash"]',
    

};

export class LoginPageObject {

    //declaration des variables de la classe
    page: Page;
    

    //constructeur de la classe

    constructor(page: Page){
        this.page = page;
    };

    //methodes de la classe

    async ouvrirUrl(url: string){
        await this.page.goto(url);
    };

    async saisirUsername(username: string): Promise <void>{

        await this.page.fill(selecteurs.usernameXpath, username);

    };

    async saisirPassword(password: string): Promise <void>{

        await this.page.fill(selecteurs.passwordXpath, password);

    };

    async clickBtnLogin(){
        await this.page.click(selecteurs.boutonLoginXpath);
    };

    async getMsg(): Promise<string>{
       const errorMsg =  await this.page.locator(selecteurs.msg).textContent();
       // Assurez-vous de retourner une chaîne vide si textContent est null
        return errorMsg || '';
    };

  
}