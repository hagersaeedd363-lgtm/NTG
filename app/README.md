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
node e2e/scenarios.mjs         # 20 portal scenarios against the dev server (Nafath version)
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
| `src/portal/vals.ts` | Feeds the design screens kept in `src/views/portal/` (products, review, orders, password, profile). |
| `src/portal/PortalPage.tsx` | The «order» page: picks the screen and enforces access rules. |
| `src/logic/`, `src/views/site/`, `src/views/shell/` | Public site and shell (header, footer, modals). |
| `src/styles/` | Design tokens (light and dark), hover/focus states, portal alert colours. |

## Journeys

- **Order first (Home → «اقتن»):** verify with Nafath (or email + password for registered users).
  Approved users see a registered summary (companies also pick «غرض الطلب»). New users see their
  Nafath data read-only and choose فرد or جهة; companies fill one «بيانات الجهة» card (نوع الجهة,
  غرض الطلب, company lookup) and the company details, then submit the registration with the first order.
- **Register or sign in first (header):** sign-in by Nafath or email + password. Registration is
  Nafath only. Pending accounts get a status page with their data read-only and no ordering.
- **Approvals:** an account is approved once; every order is reviewed on its own. Payment opens
  only when the account is approved and the order is accepted.
- **Payment:** happens outside the portal. The customer uploads a receipt (JPG, PNG or PDF up to
  5 MB); once the authority verifies it the order moves to «قيد التجهيز» with the receive date and place.

## Demo tools

`src/config.ts` exposes `DEMO_TOOLS`. It is on in `npm run dev` and off in production builds,
unless you build with `VITE_DEMO_TOOLS=true`. When it is on, you get:

- demo identities on the sign-in screen (approved company or individual, pending, rejected,
  missing Nafath data, Nafath failure, new user) and an email/password sample;
- the «أدوات المعاينة» panel, which stands in for the back office: approve or reject the account,
  accept or reject orders, confirm uploaded receipts, advance fulfilment, reset the demo data;
- sample orders in every state for the approved company account.

## Backend integration points

Everything runs on the client and is kept in `sessionStorage` (`zz-portal`). Nafath, email
sign-in, the commercial-register lookup, approvals and payment are simulated in
`src/portal/store.ts`; replace those methods with API calls when the services exist. Bank details,
transaction references and failure reasons are labelled in the UI as sample data.

## Email-only version

`VITE_AUTH=email` builds a second version without Nafath (see `EMAIL_AUTH` in `src/config.ts`):

- Register: email + password → 4-digit code sent to the email → account details (full name, account type,
  company data) → review. No national ID and no account mobile; the company representative has name and email only.
- Sign in: email + password only. «نسيت كلمة المرور» sends the code to the email.
- New users from «اطلب الآن» choose «حساب جديد» or «لدي حساب» inside the order.
- The receiver's mobile on each order is still required.

```
VITE_AUTH=email VITE_DEMO_TOOLS=true npx vite --port 5174
node e2e/email-scenarios.mjs http://localhost:5174/
```

Demo accounts sign in with their sample email and the password `123456`; the demo email code is `1234`.
