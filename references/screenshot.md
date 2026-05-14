# 截图导出指南

## 方法：Playwright Node.js 脚本

使用 Playwright 对 HTML 卡片逐个截图，导出为 PNG。

### 脚本模板

```javascript
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
    // fallback: full page screenshot
    await page.screenshot({ path: path.join(tempDir, `card-${keyword}-full.png`), fullPage: true });
  } else {
    for (let i = 0; i < cards.length; i++) {
      await cards[i].screenshot({ path: path.join(tempDir, `card-${keyword}-${i + 1}.png`) });
    }
  }

  await browser.close();
})();
```

### 使用方式

1. 将 HTML 写入 `%TEMP%/card-maker-<keyword>.html`
2. 运行脚本：`node screenshot.js <keyword>`
3. 截图输出至 `%TEMP%/card-<keyword>-1.png` 等
4. 用 `Start-Process` 在浏览器中打开 HTML 预览

### 注意事项

- Playwright 需要先安装：`npx playwright install chromium`
- `waitUntil: 'networkidle'` + 额外 3 秒等待确保字体和 CDN 资源加载完毕
- 如有 ECharts 图表，等待时间可能需要 5 秒以上
- 截图时 viewport 宽度设为比卡片宽度略宽（如 1120px），避免横向裁切
