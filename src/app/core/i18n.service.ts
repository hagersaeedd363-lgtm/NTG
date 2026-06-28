import { Injectable, computed, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Lang = 'en' | 'ar';

const STORAGE_KEY = 'ntg-lang';

/** UI-chrome translations (nav + controls). Marketing copy stays in the source language. */
const DICT: Record<Lang, Record<string, string>> = {
  en: {
    home: 'Home',
    products: 'Products',
    services: 'Services',
    projects: 'Projects',
    clients: 'Clients',
    about: 'About NTG',
    switchLang: 'العربية',
    langLabel: 'EN',
  },
  ar: {
    home: 'الرئيسية',
    products: 'المنتجات',
    services: 'الخدمات',
    projects: 'المشاريع',
    clients: 'العملاء',
    about: 'عن NTG',
    switchLang: 'English',
    langLabel: 'ع',
  },
};

/** Language + direction state. Persists the choice and reflects it on <html>. */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly doc = inject(DOCUMENT);

  private readonly _lang = signal<Lang>(this.readInitial());
  readonly lang = this._lang.asReadonly();
  readonly dir = computed<'rtl' | 'ltr'>(() => (this._lang() === 'ar' ? 'rtl' : 'ltr'));

  constructor() {
    this.apply(this._lang());
  }

  t(key: string): string {
    return DICT[this._lang()][key] ?? key;
  }

  toggle(): void {
    this.set(this._lang() === 'en' ? 'ar' : 'en');
  }

  set(lang: Lang): void {
    this._lang.set(lang);
    try {
      this.doc.defaultView?.localStorage?.setItem(STORAGE_KEY, lang);
    } catch {
      /* storage unavailable — ignore */
    }
    this.apply(lang);
  }

  private apply(lang: Lang): void {
    const html = this.doc.documentElement;
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  }

  private readInitial(): Lang {
    try {
      const v = this.doc.defaultView?.localStorage?.getItem(STORAGE_KEY);
      if (v === 'ar' || v === 'en') return v;
    } catch {
      /* ignore */
    }
    return 'en';
  }
}
