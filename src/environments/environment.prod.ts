/**
 * Production environment.
 * Replace the base URLs at deploy time (or inject via your CI/CD secrets).
 */
export const environment = {
  production: true,
  useRemoteApi: false,
  strapiBaseUrl: '/api/strapi',
  springBootBaseUrl: '/api',
};
