import { Routes } from '@angular/router';
import { PageHostComponent } from './pages/page-host.component';

/**
 * Path-based routing. Every route renders the same PageHostComponent, which dispatches
 * to the engine for the corresponding page. Detail pages carry the DATA index as :id.
 * A wildcard route falls back to home (pair with the server SPA rewrite in /server).
 */
export const routes: Routes = [
  { path: '', component: PageHostComponent, data: { page: 'home' }, title: 'NTG Clarity Networks' },
  { path: 'products', component: PageHostComponent, data: { page: 'products' }, title: 'Products · NTG Clarity' },
  { path: 'services', component: PageHostComponent, data: { page: 'services' }, title: 'Services · NTG Clarity' },
  { path: 'projects', component: PageHostComponent, data: { page: 'projects' }, title: 'Projects · NTG Clarity' },
  { path: 'clients', component: PageHostComponent, data: { page: 'clients' }, title: 'Clients · NTG Clarity' },
  { path: 'about', component: PageHostComponent, data: { page: 'about' }, title: 'About · NTG Clarity' },
  { path: 'search', component: PageHostComponent, data: { page: 'search' }, title: 'Search · NTG Clarity' },
  { path: 'product/:id', component: PageHostComponent, data: { page: 'product' } },
  { path: 'project/:id', component: PageHostComponent, data: { page: 'project' } },
  { path: 'service/:id', component: PageHostComponent, data: { page: 'service' } },
  { path: '**', redirectTo: '' },
];
