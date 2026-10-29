/**
 * Prototype-only tooling: quick demo sign-in, the payment-cycle preview controls,
 * sample requests in every state and the simulated authority approval.
 * On in `npm run dev`; off in production builds unless VITE_DEMO_TOOLS=true.
 */
export const DEMO_TOOLS: boolean = import.meta.env.DEV || import.meta.env.VITE_DEMO_TOOLS === 'true';
