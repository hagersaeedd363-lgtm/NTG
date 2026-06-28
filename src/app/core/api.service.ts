import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SiteItem } from './data.service';

export interface ContactInquiry {
  name: string;
  email: string;
  inquiry: string;
}

/**
 * REST integration layer.
 *
 *  - Content (portfolio items) is designed to come from a Strapi headless CMS.
 *  - Transactional endpoints (e.g. the contact form) target a Spring Boot / Java service.
 *
 * The app ships fully functional from the bundled dataset; flip `environment.useRemoteApi`
 * and provide base URLs to source content from the backends instead.
 */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  /** Strapi: fetch the portfolio collection (projects, products, services, clients). */
  fetchPortfolio(): Observable<SiteItem[]> {
    return this.http.get<SiteItem[]>(`${environment.strapiBaseUrl}/portfolio-items`);
  }

  /** Spring Boot: submit a contact / inquiry message. */
  submitContact(payload: ContactInquiry): Observable<{ ok: boolean }> {
    return this.http.post<{ ok: boolean }>(`${environment.springBootBaseUrl}/contact`, payload);
  }
}
