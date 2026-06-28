import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/nav/nav.component';
import { LangToggleComponent } from './shared/lang-toggle/lang-toggle.component';
import { EngineService } from './core/engine.service';
import { DataService } from './core/data.service';
import { SHELL_HTML } from './core/shell-html';

/**
 * Application shell. Renders the navigation, mounts the stable engine host (overlays,
 * command palette and the page containers) once, boots the rendering engine, then lets the
 * Router drive which page the engine paints. The router-outlet hosts the invisible
 * PageHostComponent that performs that dispatch.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, LangToggleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-nav />
    <!-- Engine host: native innerHTML so the design's inline handlers stay live -->
    <div #engineHost></div>
    <router-outlet />
    <app-lang-toggle />
  `,
})
export class AppComponent implements AfterViewInit {
  @ViewChild('engineHost', { static: true }) engineHost!: ElementRef<HTMLDivElement>;

  private readonly engine = inject(EngineService);
  private readonly data = inject(DataService);

  ngAfterViewInit(): void {
    // 1) mount the stable host DOM (page containers + overlays + palette) as native markup
    this.engineHost.nativeElement.innerHTML = SHELL_HTML;
    // 2) install navigation shims before the engine executes (so inline handlers route)
    this.engine.installShims();
    // 3) inject the engine; hydrate the typed signals store once it is ready
    this.engine.load();
    this.engine.whenReady(() => this.data.hydrateFromEngine());
  }
}
