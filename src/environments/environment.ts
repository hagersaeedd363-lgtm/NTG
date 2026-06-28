/**
 * Development environment.
 * The site renders from the bundled approved-design dataset by default.
 * When a backend is available, point `useRemoteApi` to true and set the base URLs.
 */
export const environment = {
  production: false,
  /** When true, DataService hydrates content from the REST API instead of the bundled dataset. */
  useRemoteApi: false,
  /** Strapi headless CMS (content). */
  strapiBaseUrl: 'http://localhost:1337/api',
  /** Spring Boot / Java service (transactional endpoints, e.g. contact form). */
  springBootBaseUrl: 'http://localhost:8080/api',
};
