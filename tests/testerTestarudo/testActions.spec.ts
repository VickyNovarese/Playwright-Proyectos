import {test,expect} from '@playwright/test';   

 test('Go to sandbox-testarudo page',async({page})=>{
    await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/')
    expect(page.url()).toBe('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/')
})

test('Registry', async({page})=>{
    await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/')
    const nameRegister = page.locator('input#name')
    await nameRegister.fill("Veronica Suarez")
    const email = page.locator('input#email')
    await email.fill("veronicasuarez@gmail.com")
    const ageSlider = page.locator('input#ageSlider')
    await ageSlider.fill("35") 
    const buttonSubmit = page.locator('[type="submit"]')
    await buttonSubmit.click() 
    const buttonReject = page.locator('.cky-btn.cky-btn-reject').first()
    await buttonReject.click()     
    const message = page.locator('#formMessage')   
    expect (await message).toBeVisible()
    expect (await message.textContent()).toBe('Form submitted!')
})

test('Titles', async({page})=>{
    await page.goto('https://testertestarudo.com/sandbox-para-pruebas-automatizadas/')
    const titles = await page.locator('h2').first()
    expect(titles).toBeVisible()  
    await expect(titles).toHaveText('Nómina de developers')   

})