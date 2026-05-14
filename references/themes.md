# 主题配色方案

## 深色科技风（默认）

适合科技/互联网/AI 主题。

```
页面背景: #0B0D1A
卡片背景: linear-gradient(165deg, #131529, #1A1B35, #1E1440)
主高光:   #7C3AED → #06B6D4 (紫→青渐变)
主文字:   #FFFFFF
次文字:   #C4B5FD (浅紫)
辅助文字: #A78BFA (淡紫)
强调文字: #22D3EE (青)
边框:     rgba(124, 58, 237, 0.2)
标签背景: bg-gradient-to-r from-[#7C3AED] to-[#6D28D9]
代码块:   bg-[#0F1123] border-[#7C3AED]/15
模块卡片: bg-[#1E1440]/80 border-[#7C3AED]/20
金句背景: bg-gradient-to-r from-[#1E1440] to-[#0F1123] border-[#7C3AED]/20
页码/数字: text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#22D3EE]
```

Tailwind 示例：
```html
<div class="bg-gradient-to-br from-[#7C3AED] to-[#06B6D4]">Logo 方块</div>
<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#22D3EE]">强调文字</span>
<div class="bg-[#1E1440]/80 border border-[#7C3AED]/20 rounded-lg">模块卡片</div>
```

## 复古书卷风

适合文化/人文/历史 主题。

```
页面背景: #E6E2D8 (复古灰白)
卡片背景: #F4EFE6 (羊皮纸色)
主文字:   #2D2A26
次文字:   #6D6A61
强调红:   #B7332C
深绿:     #1E3027
烟熏咖:   #4A3B32
深驼色:   #C88851
赭石黄:   #D4A373
灰紫:     #6F5D6B
苍石灰:   #54504C
边框:     #D6D2C4
```

## 极简白

适合商务/数据报告 主题。

```
页面背景: #F8F9FA
卡片背景: #FFFFFF
主文字:   #111827
次文字:   #6B7280
强调蓝:   #2563EB
深灰:     #1F2937
边框:     #E5E7EB
```

## 自定义主题映射规则

从参考图片提取颜色时，按以下角色映射：

1. **主背景色**（图片中占比最大的色块）→ 卡片背景 + 页面背景（略暗）
2. **高光/强调色**（图片中亮眼的点缀色）→ 标签、按钮、分割线、标题关键词高亮
3. **文字色**（图片中文字或线条色）→ 正文颜色
4. **辅助色**（高光色的同色系浅色/暗色变体）→ 辅助文字、边框、次级模块

输出配色时，同时提供 HEX 值和 Tailwind 类名示例。
