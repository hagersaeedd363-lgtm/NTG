# اقتن زمزم — portal

React + Vite + TypeScript implementation of the اقتن زمزم site: the public pages and the B2B
portal (identification, registration, account approval, ordering, «طلباتي» and payment).
The public pages come from the Claude Design export `../project/Zamzam Portal B2B.dc.html`.
The portal journeys follow the UX brief described in `docs/portal-ux.md`.

```bash
npm install
npm run dev                    # http://localhost:5173 — demo tools on
npm run build                  # production build in dist/ — demo tools off
npm run typecheck
node e2e/scenarios.mjs         # 18 portal scenarios against the dev server
```

## Structure

| Path | What it is |
| --- | --- |
| `src/portal/types.ts` | Domain model. Account status and order status are separate. |
| `src/portal/rules.ts` | Pure business rules: who can order, when an order is payable, labels, timeline, next step. |
| `src/portal/store.ts` | Portal state and actions, including the simulated back office. |
| `src/portal/fixtures.ts` | Sample identities, companies and orders (all example data). |
| `src/portal/screens/` | Identification and sign-in, registration, existing-user summary, confirmation, account status, profile edit. |
| `src/portal/ui.tsx` | UI kit matching the design system (cards, fields, alerts, tags, pills, stepper). |
| `src/portal/vals.ts` | Feeds the design screens kept in `src/views/portal/` (products, review, orders, payment, password, profile). |
| `src/portal/PortalPage.tsx` | The «order» page: picks the screen and enforces access rules. |
| `src/logic/`, `src/views/site/`, `src/views/shell/` | Public site and shell (header, footer, modals). |
| `src/styles/` | Design tokens (light and dark), hover/focus states, portal alert colours. |

## Journeys

- **Order first (Home → «اقتن»):** verify with Nafath (or email + password for registered users).
  Approved users see a registered summary and only pick «غرض الطلب». New users see their Nafath
  data read-only, choose فرد or جهة, complete the company form if needed, and submit their
  registration together with the first order.
- **Register or sign in first (header):** sign-in by Nafath or email + password. Registration is
  Nafath only. Pending accounts get a status page with their data read-only and no ordering.
- **Approvals:** an account is approved once; every order is reviewed on its own. Payment opens
  only when the account is approved and the order is accepted.

## Demo tools

`src/config.ts` exposes `DEMO_TOOLS`. It is on in `npm run dev` and off in production builds,
unless you build with `VITE_DEMO_TOOLS=true`. When it is on, you get:

- demo identities on the sign-in screen (approved company or individual, pending, rejected,
  missing Nafath data, Nafath failure, new user) and an email/password sample;
- the «أدوات المعاينة» panel, which stands in for the back office: approve or reject the account,
  accept or reject orders, confirm transfers, advance fulfilment, choose the next payment result
  (success, failure, not confirmed), reset the demo data;
- sample orders in every state for the approved company account.

## Backend integration points

Everything runs on the client and is kept in `sessionStorage` (`zz-portal`). Nafath, email
sign-in, the commercial-register lookup, approvals and payment are simulated in
`src/portal/store.ts`; replace those methods with API calls when the services exist. Bank details,
transaction references and failure reasons are labelled in the UI as sample data.
