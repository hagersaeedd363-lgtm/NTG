import type { CSSProperties } from 'react';

const cache = new Map<string, CSSProperties>();

/** Parse an inline CSS declaration string (with interpolated values) into a React style object. */
export function css(text: unknown): CSSProperties | undefined {
  if (text == null) return undefined;
  if (typeof text === 'object') return text as CSSProperties;
  const key = String(text);
  const hit = cache.get(key);
  if (hit) return hit;
  const out: Record<string, string> = {};
  for (const decl of key.split(';')) {
    const i = decl.indexOf(':');
    if (i < 0) continue;
    const prop = decl.slice(0, i).trim();
    if (!prop) continue;
    const name = prop.startsWith('--')
      ? prop
      : prop.replace(/^-(webkit|moz|ms)-/, (_, p: string) => p[0].toUpperCase() + p.slice(1) + '-').replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    out[name] = decl.slice(i + 1).trim();
  }
  if (cache.size > 2000) cache.clear();
  cache.set(key, out);
  return out;
}

/** Iterate only real arrays, like the prototype runtime did. */
export function list<T>(value: T[] | unknown): T[] {
  return Array.isArray(value) ? value : [];
}
