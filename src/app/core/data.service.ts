import { Injectable, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/** A portfolio item from the approved-design dataset. */
export interface SiteItem {
  type: 'project' | 'product' | 'service' | 'client';
  name: string;
  client?: string;
  sector?: string;
  techs?: string[];
  locations?: string[];
  duration?: number;
  scale?: string;
  cat?: string;
  tagline?: string;
  desc?: string;
  img?: string;
  logo?: string;
}

/**
 * Signals-based read model over the single canonical dataset owned by the engine
 * (window.DATA). Components can reactively read typed slices and counts without
 * duplicating the data. Populated once the engine script has executed.
 */
@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly doc = inject(DOCUMENT);

  private readonly _items = signal<SiteItem[]>([]);
  readonly items = this._items.asReadonly();

  readonly products = computed(() => this._items().filter((d) => d.type === 'product'));
  readonly services = computed(() => this._items().filter((d) => d.type === 'service'));
  readonly projects = computed(() => this._items().filter((d) => d.type === 'project'));
  readonly clients = computed(() => this._items().filter((d) => d.type === 'client'));

  readonly counts = computed(() => ({
    products: this.products().length,
    services: this.services().length,
    projects: this.projects().length,
    clients: this.clients().length,
  }));

  /** Hydrate from the engine's canonical dataset (called after the engine is ready). */
  hydrateFromEngine(): void {
    const data = (this.doc.defaultView as Window | null)?.DATA as SiteItem[] | undefined;
    if (Array.isArray(data)) this._items.set(data);
  }
}
