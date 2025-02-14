import {type Locator, type Page, expect } from '@playwright/test'

export class Space {

    readonly page:Page
    readonly userNameInput:Locator
    readonly passWordInput :Locator
    readonly loginButton :Locator
    readonly errorMessage:Locator
    readonly textMessage:Locator
    readonly userConnected:Locator
    readonly logoutButton:Locator
    readonly loginText:Locator




    constructor(page:Page){
        this.page=page
        this.userNameInput = page.locator('#login input').first()
        this.passWordInput = page.locator('#login input').nth(1)
        this.loginButton = page.getByText('Log in', {exact:true}).nth(1) ;
        this.errorMessage=  page.locator('#app span.theme__error___3ilni')
        this.userConnected= page.getByText('Hello, John', {exact:true})
        this.logoutButton= page.locator('#app ul').nth(1) 
        this.loginText = page.getByText('Log in', {exact:true})
    }

    async loginClick(){
       await this.loginButton.click()
    }

    async errorMessageVisible(){
       await expect(this.errorMessage).toBeVisible()
    }

    async errorNameText(){
        await expect(this.errorMessage).toHaveText('Name is a required field.')
     }
     async errorPasswordText(){
        await expect(this.errorMessage).toHaveText('Password is a required field.')
     }

     async checkURL(URL:string){
        expect(this.page).toHaveURL(URL)
     }

     async loginEnabled(){
        await this.loginButton.isEnabled()
     }

     async userConnectedClick(){
        await this.userConnected.click()
     }

     async logoutClick(){
        await this.logoutButton.click()
     }

     async checkLoginVisible(){
     expect((this.page).getByText('Log in', {exact:true})).toBeVisible()
     }

     async checkNotToHaveURL(URL:string){
        expect(this.page).not.toHaveURL(URL)
     }
}