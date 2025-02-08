import {test, expect} from '@playwright/test';
import data from '../../data/loginInfo.json' assert {type:'json'};


test.beforeEach(async({page})=>{
   await page.goto('https://demo.testim.io/login')
})

test('TC 1: Successful login', async ({page}) => {
  await page.locator('#login input').first().fill(data[0].username)
  await page.locator('#login input').nth(1).fill(data[0].password)
  await page.getByText('Log in', {exact:true}).nth(1).click()
// await page.locator('button form').click()
})

test('TC 2: unsuccessful login with empty username', async ({page}) => {
    
    await page.locator('#login input').nth(1).fill(data[0].password)
    await page.getByText('Log in', {exact:true}).nth(1).click()
    expect(page.locator('#app span.theme__error___3ilni')).toBeVisible()
    expect(page.locator('#app span.theme__error___3ilni')).toHaveText('Name is a required field.')

})

test('TC 3: unsuccessful login with empty password', async ({page}) => {

    await page.locator('#login input').first().fill(data[0].username)
    await page.getByText('Log in', {exact:true}).nth(1).click()
    expect(page.locator('#app span.theme__error___3ilni')).toBeVisible()
    expect(page.locator('#app span.theme__error___3ilni')).toHaveText('Password is a required field.')
})

test('TC 4: unsuccessful login with name with 2 characters', async ({page}) => {
    await page.locator('#login input').first().fill(data[1].username)
    await page.locator('#login input').nth(1).fill(data[1].password)
    await page.getByText('Log in', {exact:true}).nth(1).click() 
    expect(page.locator('#app span.theme__error___3ilni')).toBeVisible()
    expect(page.locator('#app span.theme__error___3ilni')).toHaveText('Name is a required field.')
})

test('TC 5: Successful login with name with 255 characters', async ({page}) => {
    await page.locator('#login input').first().fill(data[2].username)
    await page.locator('#login input').nth(1).fill(data[2].password)
    await page.getByText('Log in', {exact:true}).nth(1).click()
    expect(page).toHaveURL('https://demo.testim.io/')
})

test('TC 6: successful login with name with 3 characters', async ({page}) => {
    await page.locator('#login input').first().fill(data[6].username)
    await page.locator('#login input').nth(1).fill(data[6].password)
    await page.getByText('Log in', {exact:true}).nth(1).click() 
    expect(page).toHaveURL('https://demo.testim.io/')
})
test('TC 7: Validate login button is always able', async ({page}) => {
    expect(page.getByText('Log in', {exact:true}).nth(1)).toBeEnabled()

})

test('TC 8: Validate successfull logout', async ({page}) => {
    await page.locator('#login input').first().fill(data[2].username)
    await page.locator('#login input').nth(1).fill(data[2].password)
    await page.getByText('Log in', {exact:true}).nth(1).click()
    await page.getByText('Hello, John', {exact:true}).click()
    await page.locator('#app ul').nth(1).click()
    expect((page).getByText('Log in', {exact:true})).toBeVisible()
})


// are ommited because they failed
// test('TC 9: Validate unsuccessfull login with username with more than 255 caracteres',async({page})=>{
// //"Username
// await page.locator('#login input').first().fill(data[3].username)
// await page.locator('#login input').nth(1).fill(data[3].password)
// await page.getByText('Log in', {exact:true}).nth(1).click()
// expect(page).not.toHaveURL('https://demo.testim.io')
// })

// test ('TC 10: Validate login with password with less than 5 caracteres',async({page})=>{

// await page.locator('#login input').first().fill(data[4].username)
// await page.locator('#login input').nth(1).fill(data[4].password)
// await page.getByText('Log in', {exact:true}).nth(1).click()
// expect(page).not.toHaveURL('https://demo.testim.io')
// })

// test ('TC 11: Validar login con password mayor a 30 caracteres',async({page})=>{

// await page.locator('#login input').first().fill(data[5].username)
// await page.locator('#login input').nth(1).fill(data[5].password)
// await page.getByText('Log in', {exact:true}).nth(1).click()
// expect(page).not.toHaveURL('https://demo.testim.io')

// })


