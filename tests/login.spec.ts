import {test, expect} from '@playwright/test';
import { loginPage } from './pages/loginPage';


test('Successful login', async ({page}) => {
   
   await page.goto('https://www.saucedemo.com/')

   const login = new loginPage(page) 
    await login.userName.fill("standard_user")
    await login.userPassword.fill("secret_sauce")
    await login.loginButton.click()
    //await page.screenshot({ path: 'screenshots/login.png', fullPage: true });
    //await page.locator('[data-test="username"]').fill("standard_user")
    //await page.locator('[data-test="password"]').fill("secret_sauce")
    //await page.locator('[data-test="login-button"]').click()
    expect(page.url()).toBe('https://www.saucedemo.com/inventory.html')

     //guardo todos los elementos en una variable
     const allItems = await page.locator('#inventory_container .inventory_item').all()
     //selecciono un item aleatorio utilizando el total de items
     const randomItem = Math.floor(Math.random() * allItems.length)
     const itemSelected = allItems[randomItem]
 
     const expectedName = await itemSelected.locator('.inventory_item_name').innerText()
     const expectedDesc = await itemSelected.locator('.inventory_item_desc').innerText()
     const expectedPrice = await itemSelected.locator('.inventory_item_price').innerText()
     console.log(`name: ${expectedName}, description: ${expectedDesc}, price: ${expectedPrice}`);
     
     await itemSelected.locator('[data-test^="add-to-cart-"]').click()
     await page.locator('[data-test="shopping-cart-link"]').click()
        expect (page.locator('[data-test="checkout"]') ).toBeVisible
     const nameCart = await page.locator('[data-test="inventory-item-name"]').innerText()
        expect(nameCart).toBe(expectedName)
     const descCart = await page.locator('[data-test="inventory-item-desc"]').innerText()
        expect(descCart).toBe(expectedDesc)
     const priceCart = await page.locator('[data-test="inventory-item-price"]').innerText()
        expect(priceCart).toBe(expectedPrice)
     await page.locator('[data-test="checkout"]').click()
     await page.locator('[data-test="firstName"]').fill("Carlos")
     await page.locator('[data-test="lastName"]').fill("Perez")   
     await page.locator('[data-test="postalCode"]').fill("1234")
     await page.locator('[data-test="continue"]').click()
     await page.locator('[data-test="finish"]').click()
     
     expect (page.locator('[data-test="complete-header"]') ).toBeVisible
     expect (page.locator('[data-test="complete-header"]') ).toHaveText('Thank you for your order!')
     await page.locator('[data-test="back-to-products"]').click()
       expect(page.url()).toBe('https://www.saucedemo.com/inventory.html')

    });
