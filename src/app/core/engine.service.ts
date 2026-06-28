import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NavigationService } from './navigation.service';

type PendingFn = () => void;

/**
 * Boots and bridges the ported rendering engine (assets/engine.js, a classic script).
 *
 * Responsibilities:
 *  - install the window navigation shims BEFORE the engine loads so inline handlers
 *    (showPage / openProduct / ...) route through the Angular Router;
 *  - inject the engine script once the stable host DOM exists;
 *  - expose a ready-queue so route components can request a render even if they
 *    activate before the engine has finished loading.
 */
@Injectable({ providedIn: 'root' })
export class EngineService {
  private readonly doc = inject(DOCUMENT);
  private readonly nav = inject(NavigationService);

  private ready = false;
  private loading = false;
  private readonly queue: PendingFn[] = [];

  /** Install the global navigation shims. Safe to call before the engine loads. */
  installShims(): void {
    const w = this.doc.defaultView as (Window & typeof globalThis) | null;
    if (!w) return;
    w.showPage = (name: string) => this.nav.go(name);
    w.openProduct = (i: number) => this.nav.openDetail('product', i);
    w.openProject = (i: number) => this.nav.openDetail('project', i);
    w.openService = (i: number) => this.nav.openDetail('service', i);
  }

  /** Inject the engine script exactly once. Resolves the ready-queue when loaded. */
  load(): void {
    if (this.loading || this.ready) return;
    this.loading = true;
    const w = this.doc.defaultView as Window | null;
    if (w?.__ntgEngineReady) {
      this.markReady();
      return;
    }
    w?.addEventListener('ntg-engine-ready', () => this.markReady(), { once: true });
    const s = this.doc.createElement('script');
    s.src = 'assets/engine.js';
    s.async = false;
    s.onerror = () => console.error('[NTG] failed to load rendering engine');
    this.doc.body.appendChild(s);
  }

  private markReady(): void {
    this.ready = true;
    this.loading = false;
    let fn: PendingFn | undefined;
    while ((fn = this.queue.shift())) fn();
  }

  private run(fn: PendingFn): void {
    if (this.ready) fn();
    else this.queue.push(fn);
  }

  /** Run a callback once the engine has loaded (immediately if already ready). */
  whenReady(fn: PendingFn): void {
    this.run(fn);
  }

  private win(): (Window & typeof globalThis) | null {
    return this.doc.defaultView as (Window & typeof globalThis) | null;
  }

  /** Render a top-level page into its stable host container. */
  renderPage(name: string): void {
    this.run(() => this.win()?._renderPage?.(name));
  }

  /** Render the search results page (tokens already set by the engine/palette). */
  renderSearch(): void {
    this.run(() => {
      const w = this.win();
      w?.renderSearchResults?.();
      w?._renderPage?.('search');
    });
  }

  /** Open a detail page by DATA index. */
  openDetail(kind: 'product' | 'project' | 'service', index: number): void {
    this.run(() => {
      const w = this.win();
      if (kind === 'product') w?._openProduct?.(index);
      else if (kind === 'project') w?._openProject?.(index);
      else w?._openService?.(index);
    });
  }
}
