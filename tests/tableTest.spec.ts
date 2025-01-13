import {test,expect} from '@playwright/test';

test('table test', async ({ page }) => {  
    await page.goto('https://cosmocode.io/automation-practice-webtable/');  
    const containerTable = await page.locator('#countries')
    const rows =  await containerTable.locator('tr').all()
    console.log(rows.length)
    /*for(let row of rows){
        console.log(await row.innerText())
    }*/
    const countries: Country[] = []

    for(let row of rows){
        let country: Country ={
            countryName: await row.locator('td:nth-child(2)').innerText(),
            capital: await row.locator('td:nth-child(3)').innerText(),
            currency: await row.locator('td:nth-child(4)').innerText(),
            primaryLanguage: await row.locator('td:nth-child(5)').innerText()
        }
     countries.push(country)
     console.log(countries)
    }
   

    interface Country{
        countryName: string;
        capital: string;
        currency: string;
        primaryLanguage: string
    }

    const row1= rows.at(1)
    const countryName= await row1?.locator('td:nth-child(2)').innerText()
    console.log(countryName)
    expect(countryName).toBe('Afghanistan')
    const capital = await row1?.locator('td:nth-child(3)').innerText()
    console.log(capital)
    expect(capital).toBe('Kabul')
    const currency = await row1?.locator('td:nth-child(4)').innerText()
    console.log(currency)
    expect(currency).toBe('Afghani')
    const primaryLanguage = await row1?.locator('td:nth-Child(5)').innerText()
    console.log(primaryLanguage)
    expect(primaryLanguage).toBe('Dari Persian; Pashto')

    const englishLanguageCountries = countries.filter(country => country.primaryLanguage.includes('English'))
    console.log(englishLanguageCountries)
    expect(englishLanguageCountries.length).toBe(57)

});

 test('English language countries', async ({ page }) => {
    
    })
