import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://blazedemo.com/index.php');
  await page.locator('select[name="fromPort"]').selectOption('Philadelphia');
  await page.locator('select[name="toPort"]').selectOption('New York');
  await page.getByRole('button', { name: 'Find Flights' }).click();
  await page.getByRole('row', { name: 'Choose This Flight 43 Virgin' }).getByRole('button').click();
  await page.getByPlaceholder('First Last').fill('Novarese Virginia');
  
  await page.getByPlaceholder('Main St.').fill('spain');
  await page.getByPlaceholder('Anytown').fill('Albacete');
  await page.getByPlaceholder('Main St.').fill('123 ciudad');
  await page.getByPlaceholder('State').fill('Spain');
  await page.getByPlaceholder('12345').fill('02415');
  await page.getByPlaceholder('Credit Card Number').fill('565241233651022');
  await page.getByPlaceholder('Year').fill('2026');
  await page.getByPlaceholder('John Smith').fill('Virginia Novarese');
  await page.getByLabel('Remember me').check();
  await page.getByRole('button', { name: 'Purchase Flight' }).click();
});