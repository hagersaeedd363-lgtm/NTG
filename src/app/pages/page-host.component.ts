import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, combineLatest } from 'rxjs';
import { EngineService } from '../core/engine.service';

/**
 * Invisible route component. The actual page content is rendered by the engine into the
 * stable host containers owned by AppComponent; this component simply translates the active
 * route into an engine render call. Using one component for every route keeps the host DOM
 * (overlays, palette, page divs) mounted once and never torn down between navigations.
 */
@Component({
  selector: 'app-page-host',
  standalone: true,
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHostComponent implements OnInit, OnDestroy {
  private readonly route = inject(ActivatedRoute);
  private readonly engine = inject(EngineService);
  private sub?: Subscription;

  ngOnInit(): void {
    this.sub = combineLatest([this.route.data, this.route.paramMap]).subscribe(([data, params]) => {
      const page = (data['page'] as string) ?? 'home';
      const id = Number(params.get('id'));
      switch (page) {
        case 'product':
        case 'project':
        case 'service':
          this.engine.openDetail(page, Number.isFinite(id) ? id : 0);
          break;
        case 'search':
          this.engine.renderSearch();
          break;
        default:
          this.engine.renderPage(page);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
