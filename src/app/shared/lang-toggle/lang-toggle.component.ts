import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { I18nService } from '../../core/i18n.service';

/** Floating EN ⇄ العربية switch. Toggles language + document direction (full RTL). */
@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      type="button"
      class="ntg-lang-toggle"
      (click)="i18n.toggle()"
      [attr.aria-label]="'Switch language to ' + i18n.t('switchLang')"
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
      </svg>
      <span>{{ i18n.t('switchLang') }}</span>
    </button>
  `,
  styles: [
    `
      .ntg-lang-toggle {
        position: fixed;
        z-index: 130;
        bottom: 22px;
        inset-inline-end: 22px;
        display: inline-flex;
        align-items: center;
        gap: 7px;
        height: 40px;
        padding: 0 16px;
        border-radius: 50px;
        border: 1px solid #f3cdcb;
        background: #fff;
        color: #c0221d;
        font-family: 'Poppins', sans-serif;
        font-size: 12.5px;
        font-weight: 700;
        letter-spacing: 0.02em;
        cursor: pointer;
        box-shadow: 0 6px 24px rgba(20, 16, 15, 0.12);
        transition: background 0.15s, border-color 0.15s, transform 0.15s;
      }
      .ntg-lang-toggle:hover {
        background: #fbe9e8;
        transform: translateY(-2px);
      }
      .ntg-lang-toggle svg {
        flex-shrink: 0;
      }
    `,
  ],
})
export class LangToggleComponent {
  readonly i18n = inject(I18nService);
}
