// Shared Playwright harness for the portal e2e scenarios (Nafath and email-only versions).
import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const BASE = process.argv[2] || 'http://localhost:5173/';
const SHOTS = process.argv[3] || '';
if (SHOTS) mkdirSync(SHOTS, { recursive: true });

export class Ctx {
  constructor(page, name) {
    this.p = page;
    this.name = name;
    this.n = 0;
  }
  async tick(ms = 600) {
    await this.p.clock.runFor(ms);
    await this.p.waitForTimeout(60);
  }
  async goto(hash) {
    // The site keeps portal screens out of the URL, so «home» is reached through the header logo.
    if (hash === '#home') await this.p.locator('header button[aria-label="الرئيسية"]').first().click();
    else await this.p.evaluate((h) => (location.hash = h), hash);
    await this.tick(400);
  }
  async click(name, opts = {}) {
    const loc = this.p.getByRole(opts.role || 'button', typeof name === 'string' ? { name, exact: opts.exact ?? opts.role === 'radio' } : { name }).nth(opts.nth || 0);
    await loc.scrollIntoViewIfNeeded();
    await loc.click();
    await this.tick(opts.wait ?? 400);
  }
  async fill(label, value) {
    const loc = this.p.getByLabel(label, { exact: false }).first();
    await loc.fill(value);
    await this.tick(100);
  }
  async select(id, value) {
    await this.p.locator('#' + id).selectOption(value);
    await this.tick(100);
  }
  async see(text) {
    const n = await this.p.getByText(text, { exact: false }).count();
    if (!n) throw new Error('expected to see: ' + text);
  }
  async notSee(text) {
    const vis = await this.p.getByText(text, { exact: false }).filter({ visible: true }).count();
    if (vis) throw new Error('expected NOT to see: ' + text);
  }
  async noButton(name) {
    const n = await this.p.getByRole('button', { name, exact: true }).filter({ visible: true }).count();
    if (n) throw new Error('expected no enabled button: ' + name);
  }
  async shot(label) {
    if (!SHOTS) return;
    this.n += 1;
    await this.p.screenshot({ path: `${SHOTS}/${this.name}-${String(this.n).padStart(2, '0')}-${label}.png`, fullPage: true });
  }
  // ---- composite steps
  async startOrderFromHome() {
    await this.goto('#home');
    await this.p.locator('#buy-pack').getByRole('button', { name: /اقتن|اطلب/ }).first().click();
    await this.tick(500);
  }
  async nafath(id) {
    await this.fill('رقم الهوية الوطنية / الإقامة', id);
    await this.click('التحقق عبر نفاذ', { wait: 200 });
    await this.tick(4500);
  }
  /** Navbar sign-in lands on the home page; «حسابي» is then opened from the header menu. */
  async login(id) {
    await this.openLogin();
    await this.nafath(id);
    await this.landedHomeThenAccount();
  }
  async landedHomeThenAccount() {
    await this.see('قلب البئر');
    await this.p.locator('.zz-header-account').click();
    await this.tick();
    await this.click('حسابي', { role: 'menuitem', exact: true });
  }
  async openOrdersMenu() {
    await this.p.locator('.zz-header-account').click();
    await this.tick();
    await this.click('طلباتي', { role: 'menuitem', exact: true });
  }
  async openLogin() {
    await this.p.locator('.zz-header-account').click();
    await this.tick(400);
  }
  async submitLogin() {
    await this.p.getByLabel('كلمة المرور').press('Enter');
    await this.tick(1200);
  }
  async products() {
    await this.click('متابعة', { exact: true });
  }
  async review() {
    for (const id of ['of-recvName', 'of-recvPhone', 'of-recvEmail']) {
      if (!(await this.p.locator('#' + id).inputValue()).trim()) throw new Error('receiver field not prefilled: ' + id);
    }
    await this.select('of-region', 'مكة المكرمة');
    await this.select('of-city', 'مكة المكرمة');
    await this.select('of-warehouse', 'مستودع كدي — مكة المكرمة');
  }
}

export async function runScenarios(scenarios) {
  const only = process.env.ONLY ? process.env.ONLY.split(',').map(Number) : null;
  const browser = await chromium.launch();
  const results = [];
  for (const sc of scenarios) {
    if (only && !only.includes(sc.id)) continue;
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    await page.clock.install({ time: new Date('2026-10-29T10:00:00+03:00') });
    await page.route(/nominatim|openstreetmap|fonts\.(googleapis|gstatic)/, (r) => r.abort());
    const errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    await page.goto(BASE, { waitUntil: 'domcontentloaded' });
    await page.clock.runFor(2500);
    const c = new Ctx(page, 's' + String(sc.id).padStart(2, '0'));
    try {
      const note = await sc.run(c);
      if (errors.length) throw new Error('page error: ' + errors[0]);
      results.push({ id: sc.id, title: sc.title, ok: true, note });
    } catch (e) {
      await c.shot('FAIL');
      results.push({ id: sc.id, title: sc.title, ok: false, note: e.message.split('\n')[0] });
    }
    await ctx.close();
  }
  await browser.close();
  for (const r of results) console.log(`${r.ok ? 'PASS' : 'FAIL'}  #${String(r.id).padStart(2)}  ${r.title} — ${r.note}`);
  const failed = results.filter((r) => !r.ok).length;
  console.log(`\n${results.length - failed}/${results.length} scenarios passed`);
  process.exit(failed ? 1 : 0);
}
