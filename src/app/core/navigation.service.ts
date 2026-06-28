import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Single source of truth for in-app navigation. The ported engine's inline handlers
 * call the window shims (installed by EngineService) which delegate here, so every
 * navigation flows through the Angular Router and updates the URL (path-based routing).
 */
@Injectable({ providedIn: 'root' })
export class NavigationService {
  private readonly router = inject(Router);

  /** Top-level page → path. `home` maps to the root. */
  go(name: string): void {
    const path = !name || name === 'home' ? '/' : `/${name}`;
    void this.router.navigateByUrl(path);
  }

  /** Detail pages are addressed by their DATA index, e.g. /product/12. */
  openDetail(kind: 'product' | 'project' | 'service', index: number): void {
    void this.router.navigate([`/${kind}`, index]);
  }
}
