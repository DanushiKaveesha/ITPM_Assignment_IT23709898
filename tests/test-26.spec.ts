import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).dblclick();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('labana avurudhdhe 2027/04/18 vana dhina paevathviimata niyamitha avurudhu uthsavaya gaena dhaenuvath kiriimayi. vividha tharaga raashiyak paevathviimata thiiranaya kara aetha. dhiviimee tharaga sadhahaa register viimata ooni. ee sadhahaa 079876543 mee number ekata call ekak ganna. giyapaara avurudhu uthsavaya lassanata karanna puluvan unaa. mee pararth\navurudhu uthsavaya lassanata karamuu. oyaalaa mokadha hithanne ee gaena. api thaeegith lasthi karanna ooni. eekata kattiyagen Rs. 1000 gane ekathu karamuu. kaemathii needha ee yojanavata. api ehenam meeting ekak dhaalaa mee gana kathaa karamuu.');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).first().click();
  await page.getByText('ලබන අවුරුද්දෙ 2027/04/18').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Copy' }).nth(1).click();
});