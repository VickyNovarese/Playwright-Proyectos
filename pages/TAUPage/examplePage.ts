import {page,locator} from '@playwright/test'

export class ExamplePage {
    page:page
    constructor(driver:page){
        
        this.page=driver
        this.inputUsername= locator('#login input').nth(1)

    }
}