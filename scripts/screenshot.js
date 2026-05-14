const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const keyword = process.argv[2] || 'card';
  const tempDir = process.env.TEMP || '/tmp';
  const htmlFile = path.join(tempDir, `card-maker-${keyword}.html`);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1120, height: 3100 } });
  await page.goto('file:///' + htmlFile.replace(/\\/g, '/'), { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(3000);

  const cards = await page.$$('.export-card');
  if (cards.length === 0) {
    await page.screenshot({ path: path.join(tempDir, `card-${keyword}-full.png`), fullPage: true });
    console.log('Full page screenshot saved');
  } else {
    for (let i = 0; i < cards.length; i++) {
      await cards[i].screenshot({ path: path.join(tempDir, `card-${keyword}-${i + 1}.png`) });
    }
    console.log(`Done: ${cards.length} cards saved`);
  }

  await browser.close();
})();
