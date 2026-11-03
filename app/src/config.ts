/**
 * Prototype-only tooling: quick demo sign-in, the payment-cycle preview controls,
 * sample requests in every state and the simulated authority approval.
 * On in `npm run dev`; off in production builds unless VITE_DEMO_TOOLS=true.
 */
export const DEMO_TOOLS: boolean = import.meta.env.DEV || import.meta.env.VITE_DEMO_TOOLS === 'true';

/**
 * Sign-in model. Default: Nafath (plus optional email password).
 * VITE_AUTH=email builds the email-only version: register with email + password, confirm the
 * email with a code, no Nafath, no national ID and no account mobile.
 */
export const EMAIL_AUTH: boolean = import.meta.env.VITE_AUTH === 'email';
