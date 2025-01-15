import {test, expect} from '@playwright/test';
import { loginPage } from "../pages/loginPage";





test('Interceptor 1', async ({page}) => {
   await page.on('request',req=>{
    console.log(req.url())
   })
    // await page.route("https://www.saucedemo.com/static/media/bike-light-1200x1500.37c843b0.jpg",
    // route=>route.abort())
    // await page.route("https://www.saucedemo.com/static/media/bolt-shirt-1200x1500.c2599ac5.jpg",
    // route=>route.abort())
    await page.route("**/*.{png,jpg,jpeg,svg}",
    (route)=>route.abort())

   await page.goto('https://www.saucedemo.com/')

   const login = new loginPage(page) 
    await login.userName.fill("standard_user")
    await login.userPassword.fill("secret_sauce")
    await login.loginButton.click()

})


test('Interceptor 2', async ({page}) => {
    
 
     await page.route("https://demoqa.com/BookStore/v1/Books",
     (route)=>route.fulfill({
        status:304,
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            
                "books": [
                    {
                        "isbn": "9781449325862",
                        "title": "Git Pocket Guide",
                        "subTitle": "A Working Introduction",
                        "author": "Richard E. Silverman",
                        "publish_date": "2020-06-04T08:48:39.000Z",
                        "publisher": "O'Reilly Media",
                        "pages": 234,
                        "description": "This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp",
                        "website": "http://chimera.labs.oreilly.com/books/1230000000561/index.html"
                    }
                    
                ]
            
        })
     }))
 
    await page.goto('https://demoqa.com/books/')
    
 
 })
 