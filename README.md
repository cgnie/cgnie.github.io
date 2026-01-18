# cg Nie - 个人 GitHub Pages 网站

一个简约优雅的个人 GitHub Pages 网站，展示对数学、计算机科学和 AI 编程的兴趣。

## 功能特性

### 🎨 设计特点
- **简约优雅的设计**：采用现代化的配色方案和排版
- **响应式布局**：完美适配各种屏幕尺寸（桌面、平板、手机）
- **流畅动画**：页面加载、卡片进入、按钮交互等动画效果
- **可访问性**：支持高对比度模式和减少动画模式

### 📱 响应式设计
- 桌面端（> 1024px）：完整布局
- 平板端（768px - 1024px）：优化布局
- 手机端（< 768px）：单列布局
- 超小屏幕（< 480px）：紧凑布局

### 📧 联系功能
- **邮箱链接**：点击打开默认邮件客户端
- **剪贴板复制**：备用复制邮箱地址功能
- **浏览器兼容性**：支持现代 Clipboard API 和传统方法
- **用户反馈**：显示成功/错误通知消息

### ⚡ 性能优化
- **GZIP 压缩**：减少文件传输大小
- **缓存策略**：优化资源加载时间
- **图片优化**：使用 `object-fit` 和 `loading` 属性
- **硬件加速**：使用 `will-change` 和 `transform` 优化动画
- **首次内容绘制 < 2 秒**

## 项目结构

```
.
├── index.html              # 主页面
├── styles/
│   └── style.css          # 主样式文件
├── scripts/
│   └── main.js            # 主交互脚本
├── images/
│   └── a.jpg              # 个人照片
├── tests/
│   └── basic.test.js      # 基础功能测试
├── .htaccess              # Apache 服务器配置
├── _config.yml            # Jekyll 配置
├── package.json           # NPM 配置
└── README.md              # 项目说明
```

## 技术栈

- **前端**：HTML5 + CSS3 + 原生 JavaScript
- **托管**：GitHub Pages
- **测试**：Jest + JSDOM
- **构建**：Jekyll（GitHub Pages 默认）

## 快速开始

### 本地开发

1. 克隆仓库
```bash
git clone https://github.com/cgnie/cgnie.github.io.git
cd cgnie.github.io
```

2. 安装依赖
```bash
npm install
```

3. 运行测试
```bash
npm test
```

4. 本地预览
- 使用 Python：`python -m http.server 8000`
- 使用 Node.js：`npx http-server`
- 访问：`http://localhost:8000`

### 部署到 GitHub Pages

1. 推送到 GitHub
```bash
git add .
git commit -m "Update website"
git push origin main
```

2. 在 GitHub 仓库设置中启用 GitHub Pages
3. 选择 `main` 分支作为源
4. 网站将在 `https://cgnie.github.io` 上线

## 功能说明

### 首页布局
- **导航栏**：固定在顶部，包含网站名称
- **Hero 区域**：展示个人照片和欢迎信息
- **兴趣展示**：三个卡片展示主要兴趣领域
- **联系信息**：邮箱联系方式和复制功能
- **页脚**：版权信息和构建说明

### 交互功能
- **邮箱链接**：点击打开邮件客户端
- **复制按钮**：一键复制邮箱地址到剪贴板
- **通知消息**：显示操作结果反馈
- **平滑滚动**：锚点链接平滑滚动

### 动画效果
- **页面加载**：淡入动画（0.6s）
- **卡片进入**：从下向上滑入（0.6s，带延迟）
- **悬停效果**：卡片向上移动，链接颜色变化
- **点击反馈**：按钮缩放和脉冲动画

## 浏览器支持

- Chrome/Edge：最新版本
- Firefox：最新版本
- Safari：最新版本
- 移动浏览器：iOS Safari、Chrome Mobile

## 性能指标

- **首次内容绘制（FCP）**：< 1 秒
- **最大内容绘制（LCP）**：< 2 秒
- **累积布局偏移（CLS）**：< 0.1
- **页面加载时间**：< 2 秒

## 测试

### 运行所有测试
```bash
npm test
```

### 运行测试并生成覆盖率报告
```bash
npm run test:coverage
```

### 监听模式运行测试
```bash
npm run test:watch
```

## 可访问性

- ✅ 语义化 HTML 标签
- ✅ 适当的 alt 文本
- ✅ 颜色对比度符合 WCAG 2.1 AA 标准
- ✅ 支持键盘导航
- ✅ 支持屏幕阅读器
- ✅ 支持高对比度模式
- ✅ 支持减少动画模式

## SEO 优化

- ✅ 正确的 meta 标签
- ✅ Open Graph 标签支持社交分享
- ✅ Twitter 卡片标签
- ✅ 结构化数据
- ✅ 移动友好设计

## 许可证

MIT License - 详见 LICENSE 文件

## 联系方式

- 📧 邮箱：piecivalnie@gmail.com
- 🔗 GitHub：https://github.com/cgnie

## 更新日志

### v1.0.0 (2024-01-08)
- ✨ 初始版本发布
- 🎨 完整的响应式设计
- 📧 邮箱联系功能
- ⚡ 性能优化
- 🧪 基础功能测试
