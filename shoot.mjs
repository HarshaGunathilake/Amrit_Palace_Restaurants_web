import { chromium } from "playwright-core";
import fs from "node:fs";

const url = process.argv[2] || "http://localhost:3131";
const outDir = process.argv[3] || "lab";
fs.mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: "desktop", width: 1600, height: 1000 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium",
  args: ["--no-sandbox"],
});

for (const vp of viewports) {
  const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(1200);

  // Full page screenshot
  await page.screenshot({ path: `${outDir}/${vp.name}-full.png`, fullPage: true });

  // Step through key sections
  const sectionIds = ["home", "story", "menu", "gallery", "reviews", "reserve", "faq", "contact"];
  for (const id of sectionIds) {
    const el = await page.$(`#${id}`);
    if (el) {
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(700);
      await page.screenshot({ path: `${outDir}/${vp.name}-${id}.png` });
    }
  }

  await context.close();
}

await browser.close();
console.log("done");
