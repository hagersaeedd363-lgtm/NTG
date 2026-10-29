// Replace every assets/… reference in dist-single/index.html with an inline data URI.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { extname, join } from 'node:path';

const file = 'dist-single/index.html';
const types = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml' };
// ASSET_DIR may point to optimised copies (same names); WebP content is detected by its header.
const dir = process.env.ASSET_DIR || 'public';
const mime = (p, buf) => (buf.subarray(8, 12).toString() === 'WEBP' ? 'image/webp' : types[extname(p)]);
let html = readFileSync(file, 'utf8');
const cache = new Map();
html = html.replace(/(?:\.\/)?assets\/[\w./-]+\.(?:png|jpe?g|svg)/g, (ref) => {
  const rel = ref.replace(/^\.\//, '');
  if (!cache.has(rel)) {
    const p = join(dir, rel);
    const buf = existsSync(p) ? readFileSync(p) : null;
    cache.set(rel, buf ? `data:${mime(p, buf)};base64,${buf.toString('base64')}` : ref);
  }
  return cache.get(rel);
});
writeFileSync(file, html);
console.log(`embedded ${cache.size} images, ${(html.length / 1048576).toFixed(1)} MB`);
