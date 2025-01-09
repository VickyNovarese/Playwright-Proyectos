import { test, expect } from '@playwright/test';
test('Look for an Ephone', async ({ page }) => {
    await page.goto('https://www.mercadolibre.com.co/')
    await page.locator('.nav-area.nav-top-area.nav-center-area input#cb1-edit').fill("Iphone")
    await page.keyboard.press('Enter')
    await expect (page.locator('ol.ui-search-layout.ui-search-layout--stack.shops__layout')).toBeVisible()
    //save al the titles in a variable
    const titles= await page.locator('ol.ui-search-layout.ui-search-layout--stack.shops__layout li h2').allInnerTexts()
    // .then((items)=>{
    //     console.log(items)
    // })
    console.log(titles.length)
    for(let title of titles){
        console.log(title)
    }
});
test('Utilizar getByRole', async ({ page }) => {
    await page.goto('https://www.mercadolibre.com.co/')
    await page.getByRole('link',{name:"Mis compras"}).click()
    await page.goto('https://www.mercadolibre.com.co/')
    await page.getByRole('combobox',{name:"Ingresa lo que quieras encontrar"}).fill("Iphone")
    
   
});