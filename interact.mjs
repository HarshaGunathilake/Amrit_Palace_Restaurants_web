import { chromium } from "playwright-core";

const browser = await chromium.launch({
  executablePath: "/opt/pw-browsers/chromium",
  args: ["--no-sandbox"],
});

// Mobile menu overlay test
{
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto("http://localhost:3131", { waitUntil: "networkidle" });
  await page.click('button[aria-label="Open menu"]');
  await page.waitForTimeout(700);
  await page.screenshot({ path: "lab/mobile-menu-overlay.png" });
  await context.close();
}

// Gallery lightbox test (desktop)
{
  const context = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
  const page = await context.newPage();
  await page.goto("http://localhost:3131", { waitUntil: "networkidle" });
  await page.$eval("#gallery", (el) => el.scrollIntoView());
  await page.waitForTimeout(500);
  const firstImage = await page.$("#gallery button");
  await firstImage.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: "lab/lightbox-open.png" });
  await page.keyboard.press("ArrowRight");
  await page.waitForTimeout(500);
  await page.screenshot({ path: "lab/lightbox-next.png" });
  await page.keyboard.press("Escape");
  await page.waitForTimeout(400);
  await page.screenshot({ path: "lab/lightbox-closed.png" });
  await context.close();
}

// FAQ accordion test
{
  const context = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
  const page = await context.newPage();
  await page.goto("http://localhost:3131", { waitUntil: "networkidle" });
  await page.$eval("#faq", (el) => el.scrollIntoView());
  await page.waitForTimeout(500);
  await page.screenshot({ path: "lab/faq-before.png" });
  const questions = await page.$$("#faq button");
  await questions[2].click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: "lab/faq-after.png" });
  await context.close();
}

// Reservation flow test
{
  const context = await browser.newContext({ viewport: { width: 1600, height: 1000 } });
  const page = await context.newPage();
  await page.goto("http://localhost:3131", { waitUntil: "networkidle" });
  await page.$eval("#reserve", (el) => el.scrollIntoView());
  await page.waitForTimeout(500);
  await page.fill('#reserve input[type="date"]', "2026-10-12");
  await page.click('#reserve button[type="submit"]');
  await page.waitForTimeout(600);
  await page.screenshot({ path: "lab/reserve-times.png" });
  const times = await page.$$('#reserve button');
  for (const t of times) {
    const text = await t.textContent();
    if (text && text.includes("7:00")) {
      await t.click();
      break;
    }
  }
  await page.waitForTimeout(400);
  await page.screenshot({ path: "lab/reserve-time-selected.png" });
  await context.close();
}

// Reduced motion test
{
  const context = await browser.newContext({
    viewport: { width: 1600, height: 1000 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto("http://localhost:3131", { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  await page.screenshot({ path: "lab/reduced-motion-home.png" });
  await context.close();
}

await browser.close();
console.log("done");
