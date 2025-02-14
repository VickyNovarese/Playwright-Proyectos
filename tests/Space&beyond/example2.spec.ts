import {test, expect} from '@playwright/test';
import data from '../../data/loginInfo.json' assert {type:'json'};
import {Space} from '../../pages/space&beyond/spacePage'


let space:Space
test.beforeEach(async({page})=>{
    space = new Space(page)
   await page.goto('https://demo.testim.io/login')
})

test('TC 1: Successful login', async ({page}) => {
  
    await space.userNameInput.fill(data[0].username)
    await space.passWordInput.fill(data[0].password)
    await space.loginClick()
})

test('TC 2: unsuccessful login with empty username', async ({page}) => {
    
    await space.passWordInput.fill(data[0].password)
    await space.loginClick()
    await space.errorMessageVisible()
    await space.errorNameText()

})

test('TC 3: unsuccessful login with empty password', async ({page}) => {

    await space.userNameInput.fill(data[0].username)
    await space.loginClick()
    await space.errorMessageVisible()
    await space.errorPasswordText()
})

test('TC 4: unsuccessful login with name with 2 characters', async ({page}) => {
    await space.userNameInput.fill(data[1].username)
    await space.passWordInput.fill(data[1].password)
    await space.loginClick() 
    await space.errorMessageVisible()
    await space.errorNameText()
})

test('TC 5: Successful login with name with 255 characters', async ({page}) => {
    await space.userNameInput.fill(data[2].username)
    await space.passWordInput.fill(data[2].password)
    await space.loginClick()
    await space.checkURL('https://demo.testim.io/')
})

test('TC 6: successful login with name with 3 characters', async ({page}) => {
    await space.userNameInput.fill(data[6].username)
    await space.passWordInput.fill(data[6].password)
    await space.loginClick() 
    await space.checkURL('https://demo.testim.io/')
})
test('TC 7: Validate login button is always able', async ({page}) => {
    await space.loginEnabled()

})

test('TC 8: Validate successfull logout', async ({page}) => {
    await space.userNameInput.fill(data[2].username)
    await space.passWordInput.fill(data[2].password)
    await space.loginClick()
    await space.userConnectedClick()
    await space.logoutClick()
    await space.checkLoginVisible()
})


// are ommited because they failed
test('TC 9: Validate unsuccessfull login with username with more than 255 caracteres',async({page})=>{

await space.userNameInput.fill(data[3].username)
await space.passWordInput.fill(data[3].password)
await space.loginClick()
await space.checkNotToHaveURL('https://demo.testim.io')
})

test ('TC 10: Validate unsuccessfull login with password with less than 5 caracteres',async({page})=>{

await space.userNameInput.fill(data[4].username)
await space.passWordInput.fill(data[4].password)
await space.loginClick()
await space.checkNotToHaveURL('https://demo.testim.io')
})

test ('TC 11: Validar unsuccessfull login con password mayor a 30 caracteres',async({page})=>{

await space.userNameInput.fill(data[5].username)
await space.passWordInput.fill(data[5].password)
await space.loginClick()
await space.checkNotToHaveURL('https://demo.testim.io')

})


