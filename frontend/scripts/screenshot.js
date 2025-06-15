// scripts/screenshot.js
import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  await page.screenshot({
    path: path.resolve(__dirname, '../dist/thumbnail.png'),
    type: 'png',
    fullPage: false,
  });
  await browser.close();
  console.log('✅ thumbnail.png generated');
})();
