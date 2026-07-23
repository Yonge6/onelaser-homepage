# XRF Gen2 页面交接记录

更新时间：2026-07-23（Asia/Shanghai）

## 新任务直接执行

继续完成 XRF Gen2 侧边卖点导航改造，验收后发布 GitHub Pages。不要读取旧任务 `019f7ed4-396d-7ca3-8081-503b6c7b852b`；该日志超过 8.6 GB。

## 用户目标

- 参考 xTool P3 的侧面卖点导航与内容层级，但使用 OneLaser 白底视觉体系。
- 按卖点表组织内容：重要卖点用大图/16:9 媒体，中等卖点用中图，小卖点用小卡或图标，次要参数只轻量带过。
- 全页卖点不得重复；可以删除、改造或增加旧模块。
- 桌面使用左侧纵向导航，移动端使用可横向滑动的导航。
- 最终必须完成本地浏览器验收、提交、推送并验证现有 GitHub Pages。

## 设计与数据源

必须先读：

1. `AGENTS.md`
2. `UI-SPEC.md`
3. `/Users/yongyuan/Downloads/XRF Gen2 卖点参数发布汇总.xlsx`
   - 使用 `XRF Gen2 卖点` 与 `XRF Gen2 Specs-1`
   - 禁止使用 `参数作废`
4. `/Users/yongyuan/Downloads/OneLaser Web UI Guideline.pdf`

当前页面数据规则：

- 性能统一使用 `1,300 mm/s` 与 `True 3.5G`；它们覆盖工作簿中的旧 `1,200 mm/s` / `3G`。
- 38W 与 70W 是不同工作需求的平等选择。
- Smart Air、Riser Base、Conveyor、Rotary、Fume Extractor 和可选镜片必须明确标为 optional。
- 不得向顾客显示 P0/P1/P2/P3 内部标签。

## 当前代码状态

分支：`main`，远端：`origin/main`。

线上最后提交仍为：`b9791a9 Refine XRF proof media and overview video`。

当前未提交改动：

- `src/App.jsx`
  - 新增 `capabilityChapters` 数据结构。
  - 新增 `CapabilityBrowser` 组件。
  - 五个章节：RF Precision、Speed & Motion、Smart Workflow、Business Expansion、Reliability & Safety。
  - 章节内部按“大媒体 → 两张中型解释卡 → 四张小型证明卡 → 一行细节”呈现。
  - 已从实际页面 JSX 中移除旧的 StickyStory、Workflow、Reliability、Engineering Proof、Safety、Micro Features 重复模块。
  - 顶部导航已改为 Results / Why XRF / Specs。
- `src/styles.css`
  - 新增侧边能力浏览器完整桌面/移动样式、选中态、16:9 媒体、响应式横向导航、动效和 reduced-motion。
  - 移动端锚点已校正到 56 px 固定头部下方。

注意：旧 `scrollStories` 数据和 `StickyStory` 函数仍是未调用的死代码，下一步应删除；相关旧 CSS 可以暂留，避免扩大风险，也可在发布前做最小清理。

## 已完成验证

- `npm run build`：通过。
- `git diff --check`：通过。
- 本地预览：`http://localhost:5173/xrf-gen2-listing/`。
- 桌面 1440 × 1000：侧栏、主媒体、章节切换正常。
- 移动 390 × 844：横向导航、章节切换、锚点对齐正常。
- Smart Workflow 内部主故事切换正常。
- 媒体预览弹窗打开/关闭正常。
- 浏览器控制台：无 error / warning。

## 下一步完成门

1. 删除 `src/App.jsx` 中未使用的 `scrollStories` 和 `StickyStory`。
2. 重新运行 `npm run build`、`git diff --check`，搜索旧 `1,200 mm/s`、`3G` 和顾客可见 P0–P3。
3. 再做一次桌面与移动视觉检查，重点检查五个章节、横向导航、媒体弹窗和 sticky purchase bar。
4. 只提交 `src/App.jsx`、`src/styles.css`、本交接文件；不要擅自提交当前大量未跟踪的 `qa/*.png`。
5. 提交并推送 `main` 到 `Yonge6/xrf-gen2-listing`。
6. 验证线上页面：`https://yonge6.github.io/xrf-gen2-listing/`，确认新侧边导航已出现、资源返回正常、移动端可用。

## 工作区保护

- 当前大量未跟踪 `qa/*.png` 是既有 QA 资产，不删除、不覆盖、不默认提交。
- 不要再次读取旧任务日志或旧任务完整历史；本文件是唯一交接入口。
