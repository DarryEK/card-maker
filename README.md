# Card Maker 🎴

AI Agent 信息卡片生成技能。将文本、数据、网页内容转化为精美 HTML 卡片并导出 PNG 图片。

## 特性

- **三种尺寸**：竖版（小红书 1080×1440）、横版（1280×自适应）、插图版（1280×720）
- **两步工作流**：先输出提炼大纲审核，确认后生成 HTML
- **主题配色自适应**：支持从参考图片提取配色，内置深色科技/复古书卷/极简白三套预设
- **品牌自定义**：Logo、名称、落款可参数化替换
- **自动截图**：内置 Playwright 脚本，HTML → PNG 一键导出
- **ECharts 图表**：支持静态复古风格数据可视化

## 安装

将本项目整个目录复制到你的 AI Agent 技能文件夹：

```bash
# OpenClaw
cp -r card-maker ~/AppData/Roaming/LobsterAI/SKILLs/

# Gemini CLI
cp -r card-maker ~/.gemini/skills/
```

## 使用

在对话中输入触发词：`生成卡片`、`排版`、`海报`、`信息图`、`card`、`infographic`

AI 会自动进入两步走工作流：
1. 输出提炼大纲，等你确认
2. 确认后生成 HTML 并截图导出

## 目录结构

```
card-maker/
├── SKILL.md                  # 主指令文件
├── assets/
│   └── template-dark.html    # 深色科技风 HTML 模板
├── references/
│   ├── themes.md             # 配色方案与自定义映射规则
│   └── screenshot.md         # Playwright 截图指南
└── scripts/
    └── screenshot.js         # 自动截图脚本
```

## 截图依赖

```bash
npx playwright install chromium
```

## License

MIT
