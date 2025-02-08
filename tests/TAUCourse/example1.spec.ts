import { test, expect} from '@playwright/test';

test.only('Verify Java',async({page})=>{
    await page.goto('https://playwright.dev/')
    await expect(page).toHaveURL('https://playwright.dev/')
    await page.getByRole('button',{name:'Node.js'}).hover()
    await page.getByRole('link', { name: 'Java', exact: true }).nth(1).click()
    await expect(page).toHaveURL('https://playwright.dev/java/docs/intro')

})