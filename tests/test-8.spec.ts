import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata nivaadu velaavaka maava hambavenna enna puluvan nam godak vatinavaa');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata nivaadu velaavaka maava hambavenna enna puluvan nam godak vatinavaa');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('.flex.gap-1').click();
  await page.locator('.flex.gap-1').dblclick();
  await page.locator('div').filter({ hasText: /^Singlish$/ }).first().click();
  await page.getByRole('button', { name: 'Undo' }).dblclick();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oyaata nivaadu velaavaka maava hambavenna enna puluvan nam godak vatinavaa');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).first().click();
  await page.getByText('ඔයාට නිවාඩු වෙලාවක මාව හම්බවෙන්න එන්න පුලුවන් නම් ගොඩක් වටිනවා').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).nth(1).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).nth(1).click();
});