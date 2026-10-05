# 个人作品集网站 · 使用说明

## 文件结构

```
portfolio/
├── index.html      页面骨架（一般不用改）
├── css/style.css   样式；最上面 :root 里是全部颜色和字体
├── js/data.js      ★ 所有内容：名字、作品、案例、经历、链接（主要改这个）
├── js/flora.js     繁花拼贴生成器（占位图）
├── js/main.js      页面逻辑（一般不用改）
├── images/         放作品图片
└── files/          放简历 resume.pdf
```

## 常见修改

| 想做的事 | 改哪里 |
|---|---|
| 改名字、简介、邮箱、照片 | `js/data.js` → `profile`（照片填 `photo`） |
| 教育、实习、技能 | `js/data.js` → `education` / `experience` / `skills` |
| 作品的独立网页（点击查看） | 把网页整个文件夹放进 `projects/`，在作品里填 `view: { url: "projects/文件夹名/index.html" }`；也可以填完整网址 |
| 作品分类标签 | `categories` 里改名字；每个作品填 `category` |
| 原型 / 网站预览 | 作品里的 `website.url` |
| PDF 预览 | 作品里的 `pdf.src`（例如 `files/report.pdf`） |
| 加一个作品 | `js/data.js` → `projects` 里复制一整段 `{ ... }`，改 `id` 和内容 |
| 用真实图片 | 图片放进 `images/`，把 `image: ""` 改成 `image: "images/文件名.jpg"` |
| 过程图片（可点击放大） | `process` 每一步的 `images` |
| 不要某个段落 | 直接删掉 `process` 里那一步，页面会自动跳过 |
| 简历 PDF | 把你的简历命名为 `resume.pdf` 放进 `files/` 文件夹。首页、关于我的“下载简历”按钮和联系页的“简历 · 下载 PDF”卡片都会指向它 |
| 多语言 | 写成 `{ zh, zht, en, ja, fr, ko }`；缺的语言会自动退回英文或简体 |
| 换颜色 | `css/style.css` 顶部 `:root` |

## 页面和链接

导航有四个页面，网址可以直接分享：

| 页面 | 网址 | 内容 |
|---|---|---|
| 首页 | `index.html` 或 `#home` | 一页看完：开场、精选作品、关于我、简历、联系 |
| 作品集 | `#works` | 全部作品 + 分类筛选 |
| 关于我 | `#about` | 关于我、我的方向、简历（`#resume`） |
| 联系 | `#contact` | 邮箱和联系方式 |
| 作品详情 | `#case-作品id` | 每个作品的完整介绍和流程 |

顶部滚动文字在 `profile.ticker` 里改。

首页大图想换成插画：把图放进 `images/`，在 `profile.heroImage` 填路径（请用你有使用权的图片）。
所有“← 填你的真实链接”的地方都留空了，填上之后按钮才会出现，这样不会有打不开的链接。

## 放到网上（GitHub Pages，免费）

1. 在 GitHub 新建仓库，名字叫 `你的用户名.github.io`
2. 把 `portfolio` 文件夹里的**所有文件**上传到仓库根目录（index.html 要在最外层）
3. 几分钟后打开 `https://你的用户名.github.io` 就能看到

也可以直接拖进 Netlify Drop（app.netlify.com/drop）。

## 本地预览

直接双击 `index.html` 就能打开。

## 添加更多作品（至少还能加 4 个）

1. 在 `js/data.js` 的 `projects` 里复制一整段 `{ ... }`，改 `id`、`title`、`intro` 等
2. 已经准备好 3 个草稿（`draft: true`）：老年人数字融入研究、情绪日记、智能家居面板。删掉 `draft: true` 那一行就会出现在网站上
3. 作品网格会自动排版，每一行都会铺满

## 图片 / 视频规范（符合网页标准）

| 类型 | 建议 |
|---|---|
| 作品封面 | WebP 或 JPG，宽 1600px，单张 < 300 KB |
| 流程图片 | WebP，宽 1200–1600px，单张 < 250 KB；可以填 `width` / `height` 避免加载时跳动 |
| 手机界面截图 | WebP，宽 750px 左右 |
| 视频 | MP4（H.264），1080p 以内，< 10 MB；填 `poster` 封面图，页面不会预先下载视频 |
| 压缩工具 | squoosh.app（免费，浏览器里就能用） |

每张图都要写 `alt`（给看不见图片的人读的文字说明）。

## 这版对应的作业要求

- **两个作品 + 简短介绍**：`intro` 字段，显示在首页卡片和详情页顶部
- **设计理念**：`profile.philosophy`，首页“设计理念”区
- **长流程大纲**：智慧校园 App 的 `outline`（问题 → 研究 → 发想 → 迭代 → 测试 → 成果），含图片、视频和 6 种图表
- **语义化 HTML**：一个页面一个 `h1`，区块用 `h2`，小节用 `h3`；图片和图表放在 `figure` + `figcaption` 里；筛选和切换都是 `button`
- **对比度**：所有文字颜色和背景的对比度 ≥ 4.5:1（WCAG AA）
- **可变字体**：正文用 Newsreader（光学尺寸 opsz + 字重 wght），中文用 Noto Serif SC（可变字重）；手机上字重稍重、大屏稍轻（见 `css/style.css` 的 `--w-body`）

## 背景纹理图

放在 `images/bg/`，全部是压缩过的 WebP：

| 文件 | 用在哪里 |
|---|---|
| `damask.webp` | 统一背景：整页（作品集以下）、各页面页头 |
| `lace-brown.webp` | 所有分隔用的棕色刺绣蕾丝（首页中间配蝴蝶结 `bow.webp`，关于我中间配常春藤） |
| `ivy-h.webp` | 蕾丝分隔中间的常春藤 |
| `plaid.webp` | 首页开场和联系区背景（橄榄格纹） |
| `lilies-paint.webp` / `lilies-paint-flip.webp` | 首页开场和联系区左右两侧的百合油画 |
| `linen.webp` | 页脚上方、作品集和关于我页头底边的棕色亚麻条 |
| `cat-flowers.webp` | 首页开场和作品集页头右侧中间的小猫 |
| `cat-black.webp` | 联系区右侧、在百合前面的小黑猫 |
| `button-star.webp` | 所有“固定”用的星星纽扣 |
| `tartan.webp` | 页脚和最上方滚动条 |
| `ivy-flip.webp` | 关于我页头的常春藤 |
| `lace-white.webp` | 开场名字卡片、联系信纸、教育与经历卡片左侧的白蕾丝 |

想换图：替换同名文件，或改 `css/style.css` 顶部的 `--bg-*` 变量。底纹深浅调 `--veil`（现在 0.62，数字越大越淡）。

## 课程：IXD: Media, Motion & Body（DESN 22848）

每个作品有两种网页按钮：
- **过程网站**：每周形态探索的记录网站（MM&B Module 1/2/3 Web Template），三个作品都有
- **体验成品**：做出来的成品网页，只有 Project 2 和 Project 3 有

| 作品 | 分类 | ★ 过程网站文件夹 | ★ 成品网页文件夹 | PDF |
|---|---|---|---|---|
| Project 1: Circuits and Interaction | 实体与交互 | `projects/MM&B Module 1 Web Template/` | —（实体作品，没有） | `files/MMB-Project1-Circuits-and-Interaction.pdf` |
| Project 2: Time and Data | UX 与网页 | `projects/MM&B Module 2 Web Template/` | `projects/Sound_Header_Template/` | `files/MMB-Project2-Time-and-Data.pdf` |
| Project 3: Design for Living Systems | 游戏与工具 | `projects/MM&B Module 3 Web Template/` | `projects/P3.Final_Project_3_Design/` | `files/MMB-Project3-Design-for-Living-Systems.pdf` |

★ **你要做的**：把网站的全部文件（index.html、css、js、图片、音频）放进对应文件夹，覆盖里面的占位 `index.html`。
首页必须叫 `index.html`，直接放在文件夹这一层，不要再套一层文件夹。

- 每个作品页开头有“项目要求”（来自老师的项目说明），结尾有“项目学习成果”（课程的 Learning Outcomes）
- 作品图片在 `images/projects/p1、p2、p3/`（从 PDF 里提取，已压缩成 WebP）
- PDF 已压缩成网页版（原来共 48 MB → 约 13 MB）；想换回原文件，用同名文件覆盖即可
- Project 2 的 YouTube 演示视频链接在作品的 `links` 里

## 课程：Interaction Design: Methods（DESN 19428）

| 作品 | 分类 | 成品网站文件夹 | PDF |
|---|---|---|---|
| Art Discovery Club | UX 与网页 | `projects/Art-Discovery-Club/`（已放好：index.html、styles.css、script.js、images/） | `files/Art-Discovery-Club-Website-Documentation.pdf` |

网站里的图片已经按原来的代号重新命名（例如 `WA` → `images/WA.jpg`）并压缩。

## 课程：Design and Visual Language（VDES 19798）

| 作品 | 分类 | 标志展示网页 | PDF |
|---|---|---|---|
| Panda Café 品牌标识 | 品牌与标识（新增分类） | `projects/Panda-Logo-Sizing/`（已放好） | `files/Panda-Identity-Specification.pdf` |

- 网页里 logo-01 ~ logo-07 已按 index.html 的标题对应好：01–03 单色标志大中小，04–05 渐变竖向组合，06–07 横向组合（虚线稿）。
- 老师模板的样式放在外部服务器（http 链接），网站用 https 打开时会被浏览器拦截，所以我加了 `css/fallback.css` 作为备用样式；你自己的 index.html 其他部分没有改。

## 课程：Design and Typography（VDES 15738）

| 作品 | 分类 | 设计师网站文件夹 | PDF |
|---|---|---|---|
| Adrian Frutiger 设计师网站 | 字体排版 | ★ `projects/Typography on the Web-Designer’s Website/`（**待你放入**） | `files/Adrian-Frutiger-Designer-Research.pdf` |

- ★ 把设计师网站的全部文件（index.html、css、js、fonts、images）放进这个文件夹，覆盖占位的 `index.html`；@font-face 用到的 .woff / .woff2 字体文件也要一起放。
- 文件夹名字（包括弯引号 ’）不要改，否则“浏览网站”按钮会失效。
- 研究 PDF 本身没有图片，作品页里的封面、时间线和字体结构图是根据研究内容另做的示意图（`images/projects/p6/`）。

## 关于我 / 简历内容（来自简历 PDF）

- 自我介绍、教育背景（GPA、相关课程）、经历与活动（CSSA 社交媒体运营、Hult Prize 2025）、证书（ProtoPie 101、TCPS 2: CORE 2022）、技能和语言，都在 `js/data.js` 的 `profile`、`education`、`experience`、`certifications`、`skills` 里修改。
- 简历下载文件是 `files/resume.pdf`；以后更新简历，用同名文件覆盖即可。

## 课程：Usability for Interaction Design（DESN 29907）

| 作品 | 分类 | PDF |
|---|---|---|
| Legacy System Usability Study: Windows 3.1 | 用户研究与可用性（新增分类） | `files/Legacy-System-Usability-Study.pdf`（已压缩成网页版） |

## 课程：Design Strategy & Computation（DESN 24427）

| 作品 | 分类 | 原型 | PDF |
|---|---|---|---|
| Barrier-Free Haptic Navigation | 无障碍与包容性设计（新增分类） | Figma 原型链接（在 data.js 的 demo 里） | `files/Barrier-Free-Haptic-Navigation.pdf`（Project 1 + Project 2 合并） |
