# XRF Gen2 页面交接记录

更新时间：2026-07-26（Asia/Shanghai）

## 唯一历史入口

后续任务只从本文件、`AGENTS.md` 和当前仓库状态继续。不要读取或引用旧任务
`019f7ed4-396d-7ca3-8081-503b6c7b852b`。

线上页面：

- `https://yonge6.github.io/xrf-gen2-listing/`

仓库与分支：

- GitHub：`Yonge6/xrf-gen2-listing`
- 分支：`main`

## 当前页面状态

页面已经完成从单一购买页向完整 XRF Gen2 商业落地页的扩展，保留 OneLaser
白色 / `#F5F5F7` 视觉体系、Certia 字体、真实产品资产、38W / 70W 平等选择和
唯一 Hero 配置流程。

当前主要模块：

1. Hero 产品图库、价格、功率、套装、可选配件和持续可见购买条。
2. 免费现场演示、免费 30 分钟工程师咨询和 XRF Gen2 资料 / 样品线索表单。
3. XRF Trade-Up 入口。
4. Finished Products、Product Opportunities、Materials、Why RF、38W / 70W、
   Gen 2 / Gen 1、卖点章节、MakerBoost、Software、Specs、Reviews、Support、FAQ。
5. 滚过首屏后出现的 12 章节浮动导航，显示当前位置并可直接跳转。
6. 向上滚动时显示、向下滚动时弱化的 TOP 悬浮按钮。
7. 七种低饱和占位色与轻量图片加载动画。

## 2026-07-26 转化改造

### 购买路径

- 删除假的 `Added to configuration` 状态。
- 删除不具备真实 Shop Pay 结账能力的 `Buy with SHOP` 按钮。
- 38W 使用 `Continue to purchase`，记录 AddToCart / InitiateCheckout 后进入
  OneLaser 官方 XRF 商品页。
- 70W 使用 `Talk to an engineer about 70W`，进入官方销售咨询页。
- Hero 与 sticky CTA 下均显示：
  `30-Day Money-Back · 3-2-1 Warranty · Ships from California`。

### 中段线索出口

- `Book a live demo` → OneLaser 官方 Demo Host 页面。
- `Talk to an engineer` → OneLaser 官方免费 30 分钟销售咨询。
- 邮件捕获使用 Shopify contact form，可选择完整参数书、上市优惠或免费雕刻样品。
- Trade-Up 横幅使用官方 XRF `up to $300` 与 24 小时内邮件回复信息。

### 站内证明

- `45 reviews` 不再把访客带离当前页面，改为跳到站内 Reviews。
- Reviews 增加三条带名字与身份的咨询反馈。
- xTool P2 对比改成硬参数表，覆盖光源、速度、加速度、细节、冷却 / 寿命、
  质保和起售价。
- FAQ 增加标准 110V 插座、运费 / 发货时间和 70W 加 $500 三个高频问题。

### 埋点

- 新增 `src/analytics.js`。
- 支持 GA4 与 Meta Pixel；通过 `VITE_GA4_ID`、`VITE_META_PIXEL_ID` 配置。
- 已埋 ViewContent、功率选择、套装选择、配件选择、章节导航、Lead、
  AddToCart 和 InitiateCheckout。
- `.env.example` 只保留变量名，不在仓库中虚构或泄漏真实 ID。

## 文件

- `src/App.jsx`：转化路径、浮动章节导航、真实出口、表单、Trade-Up、评论、
  硬参数对比、FAQ 和事件触发。
- `src/analytics.js`：GA4 / Meta Pixel 初始化与统一事件层。
- `src/styles.css`：导航、线索卡、Trade-Up、评论、对比表与响应式样式。
- `.env.example`：分析平台环境变量示例。
- `AGENTS.md`：已记录本轮长期设计与转化规则。

## 验证

- `npm run build`：通过。
- `git diff --check`：通过。
- Certia 字体在本地预览返回 HTTP 200；Vite 的字体路径提示为已有运行时解析提示。
- 本地预览：`http://127.0.0.1:5173/xrf-gen2-listing/`。
- 桌面浏览器已检查 Hero、章节导航、三条线索路径、Trade-Up、参数对比、
  评论和 sticky purchase bar。
- 章节导航跳转后 active 状态与章节计数正确。
- 真实链接、Shopify contact form 字段和购买保障微文案已做 DOM 验证。
- 浏览器控制台没有本轮新增 error / warning。

## 后续规则

- Hero 后续使用正方形图片；主舞台必须 1:1 满版、零内边距、无留白且不做 hover 放大裁切。手机与平板可直接在主舞台左右滑动切图，缩略图轨道继续支持横向滑动。
- 没有稳定的 38W / 70W Shopify variant 直达结账链接前，不伪装成已加入购物车。
- 获得真实 GA4 Measurement ID 与 Meta Pixel ID 后，通过部署环境配置，不写死在源码。
- 如果接入 Calendly，直接替换现有官方咨询 / Demo URL，不改变卡片结构。
- 如果接入 Judge.me，替换当前三条站内反馈，但保留 Reviews 页内闭环。
- 不提交、删除或覆盖现有未跟踪 `qa/*.png`。
