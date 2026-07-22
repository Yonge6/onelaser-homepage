import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'

const require = createRequire(import.meta.url)
const { chromium } = require('/Users/yongyuan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright')
const browser = await chromium.launch({
  headless: true,
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
})
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 })
const consoleErrors = []
const failedResponses = []
page.on('console', (message) => {
  if (message.type() === 'error') {
    const location = message.location()
    consoleErrors.push(`${message.text()}${location.url ? ` @ ${location.url}` : ''}`)
  }
})
page.on('response', (response) => {
  if (response.status() >= 400) failedResponses.push(`${response.status()} ${response.url()}`)
})
await page.goto('http://127.0.0.1:5174/xrf-gen2-listing/?qa=generated-proof', { waitUntil: 'networkidle' })

const materialStates = []
for (const tab of await page.locator('#materials [role="tab"]').all()) {
  await tab.click()
  materialStates.push(await page.evaluate(() => ({
    label: document.querySelector('#materials .material-gallery__copy > span')?.textContent,
    image: document.querySelector('#materials .material-gallery__stage > img')?.getAttribute('src'),
    height: Math.round(document.querySelector('#materials .material-gallery')?.getBoundingClientRect().height || 0),
  })))
}

await page.locator('#materials [role="tab"]').first().click()
await page.locator('#power-guide .power-card').nth(1).click()
const powerSync = await page.evaluate(() => ({
  selectedGuide: document.querySelector('#power-guide .power-card[aria-pressed="true"] .power-card__top strong')?.textContent,
  selectedHero: document.querySelector('.purchase-power.is-selected strong')?.textContent,
  stickyPrice: document.querySelector('.sticky-buy__price strong')?.textContent,
}))
await page.locator('#power-guide .power-card').first().click()

const typeFloor = await page.evaluate(() => {
  const nodes = [...document.querySelectorAll('#materials *, #power-guide *')]
    .filter((node) => {
      const style = getComputedStyle(node)
      const rect = node.getBoundingClientRect()
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0 && node.textContent?.trim()
    })
    .map((node) => ({ text: node.textContent.trim().slice(0, 50), size: parseFloat(getComputedStyle(node).fontSize) }))
  return nodes.reduce((minimum, item) => item.size < minimum.size ? item : minimum, { text: '', size: Infinity })
})
await page.addStyleTag({ content: '.site-header,.feature-nav,.sticky-buy,.skip-link{display:none!important}' })

for (const [selector, name] of [
  ['#materials', 'generated-materials-desktop.png'],
  ['#power-guide', 'generated-power-desktop.png'],
  ['#performance', 'generated-stories-desktop.png'],
]) {
  const node = page.locator(selector)
  await node.scrollIntoViewIfNeeded()
  await page.waitForTimeout(250)
  await node.screenshot({ path: fileURLToPath(new URL(`../qa/${name}`, import.meta.url)) })
}

const desktopMetrics = await page.evaluate(() => ({
  documentWidth: document.documentElement.scrollWidth,
  viewportWidth: document.documentElement.clientWidth,
  materialsHeight: Math.round(document.querySelector('#materials').getBoundingClientRect().height),
  powerHeight: Math.round(document.querySelector('#power-guide').getBoundingClientRect().height),
}))

await page.setViewportSize({ width: 390, height: 844 })
await page.reload({ waitUntil: 'networkidle' })
await page.addStyleTag({ content: '.site-header,.feature-nav,.sticky-buy,.skip-link{display:none!important}' })
for (const [selector, name] of [
  ['#materials', 'generated-materials-mobile.png'],
  ['#power-guide', 'generated-power-mobile.png'],
]) {
  const node = page.locator(selector)
  await node.scrollIntoViewIfNeeded()
  await page.waitForTimeout(250)
  await node.screenshot({ path: fileURLToPath(new URL(`../qa/${name}`, import.meta.url)) })
}

const mobileMetrics = await page.evaluate(() => ({
  documentWidth: document.documentElement.scrollWidth,
  viewportWidth: document.documentElement.clientWidth,
}))

console.log(JSON.stringify({ desktopMetrics, mobileMetrics, materialStates, powerSync, typeFloor, consoleErrors, failedResponses }, null, 2))
await browser.close()
