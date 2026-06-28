import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationService } from '../../core/navigation.service';
import { I18nService } from '../../core/i18n.service';

/**
 * Fixed top navigation. Reproduces the approved design's markup and the exact element ids
 * the engine drives (#mainNavV1, #navlinks, a[data-pg]) so engine-managed states
 * (active link, nav-dark on scroll/inner pages) continue to apply. Clicks route via the
 * Router; labels are translated (EN/AR).
 */
@Component({
  selector: 'app-nav',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav
      id="mainNavV1"
      style="position:fixed;top:0;width:100%;z-index:100;background:rgba(255,255,255,.98);border-bottom:1px solid #e9e9ec;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);transition:box-shadow .25s;"
    >
      <div
        style="max-width:1200px;margin:0 auto;padding:0 26px;height:88px;display:flex;align-items:center;justify-content:space-between;box-sizing:border-box;"
      >
        <div (click)="go('home')" style="cursor:pointer;flex-shrink:0;display:flex;align-items:center;" aria-label="NTG Clarity Networks — home">
          @if (!logoFailed) {
            <img
              src="assets/ntg-logo-main.png"
              alt="NTG Clarity Networks"
              style="height:58px;width:auto;display:block;"
              (error)="logoFailed = true"
            />
          } @else {
            <span style="display:flex;align-items:baseline;font-family:'Poppins',sans-serif;font-weight:900;font-size:26px;color:#c0221d;letter-spacing:-.04em;">
              NTG<span style="font-weight:600;font-size:10px;color:#9a9aa0;letter-spacing:.12em;margin-left:6px;text-transform:uppercase;">Clarity Networks</span>
            </span>
          }
        </div>

        <div id="navlinks" style="display:flex;align-items:center;gap:40px;">
          @for (link of links; track link.id) {
            <a
              [attr.data-pg]="link.id"
              (click)="go(link.id)"
              style="font-family:'Poppins',sans-serif;font-size:13px;font-weight:600;letter-spacing:.03em;color:#3d3d3f;cursor:pointer;transition:color .15s;position:relative;padding-bottom:4px;text-decoration:none;"
              >{{ i18n.t(link.id) }}</a
            >
          }
        </div>
      </div>
    </nav>
  `,
})
export class NavComponent {
  private readonly nav = inject(NavigationService);
  readonly i18n = inject(I18nService);

  logoFailed = false;
  readonly links = [
    { id: 'home' },
    { id: 'products' },
    { id: 'services' },
    { id: 'projects' },
    { id: 'clients' },
    { id: 'about' },
  ];

  go(name: string): void {
    this.nav.go(name);
  }
}
