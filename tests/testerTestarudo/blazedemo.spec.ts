import { test } from '@playwright/test';
import { BasePage } from "../../pages/testerTesta/basePage.ts";
import { BookingPage } from "../../pages/testerTesta/bookingsPage.ts";



test('test blazedemo', async ({ page }) => {

    const bookingPage = new BookingPage(page);
    const basePage = new BasePage(page);
    
    await basePage.loadWeb('https://blazedemo.com/index.php');
    await bookingPage.seleccionarOrigenyDestino('Philadelphia','New York');
    await bookingPage.seleccionarVuelo();
    await bookingPage.fillForm('Novarese Virginia','123 ciudad','Albacete','Spain','02415','565241233651022','2026','Virginia Novarese');
    await page.getByRole('button', { name: 'Purchase Flight' }).click();
    

  
});

test('test blazedemo 2', async ({ page }) => {

    await page.goto('https://blazedemo.com/index.php');
    await page.locator('select[name="fromPort"]').selectOption('Philadelphia');
    await page.locator('select[name="toPort"]').selectOption('New York');
    await page.locator('input[type="submit"]').click();
    await page.locator('table tr:nth-of-type(2) td input[type="submit"]').click();
    await page.locator('#inputName').fill('Novarese Virginia');
    await page.locator('#address').fill('123 ciudad');
    await page.locator('#city').fill('Albacete');  
    await page.locator('#state').fill('Spain');
    await page.locator('#zipCode').fill('02415');
    await page.locator('#creditCardNumber').fill('565241233651022');
    await page.locator('#creditCardYear').fill('2026');
    await page.locator('#nameOnCard').fill('Virginia Novarese');
    await page.locator('#rememberMe').check();
    await page.getByRole('button', { name: 'Purchase Flight' }).click();
  });