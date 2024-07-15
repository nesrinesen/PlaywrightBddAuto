import {Page} from '@playwright/test'



export class LogoutPageObject {

    //declaration des variables de la classe
    page: Page;
    

    //constructeur de la classe

    constructor(page: Page){
        this.page = page;
    };


//methode

async clickLogout (){
    await this.page.locator('[class="icon-2x icon-signout"]').click();
};

async getMsg(): Promise<string>{
    const succMsg =  await this.page.locator('#flash').textContent();
    // Assurez-vous de retourner une chaîne vide si textContent est null
     return succMsg || '';
 };

}