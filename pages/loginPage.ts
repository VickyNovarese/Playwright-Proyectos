import {Page, Locator} from '@playwright/test';


export class loginPage {
    page: Page;
    userName:Locator;
    userPassword:Locator;
    loginButton: Locator;
    
    constructor(driver:Page){
        this.page = driver;
        this.userName = this.page.locator('[data-test="username"]');
        this.userPassword = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');

    }
    async fillUserName(){
        await this.userName.fill("standard_user")
    }
    async fillUserPassword(){
        await this.userPassword.fill("secret_sauce")
    }
    async clickLoginButton(){
        await this.loginButton.click()
    }

}