# Zamzam portal: journeys, states and open rules

This document covers the two entry points, the account and order state models, the scenario
checklist (automated in `e2e/scenarios.mjs`), and the business rules that still need confirmation.

## 1. User-flow map

```mermaid
flowchart TD
  H[Home «اقتن»] --> ID[ابدأ طلبك<br/>Nafath ID or email + password]
  N[Header «تسجيل الدخول»] --> L[تسجيل الدخول<br/>Nafath or email + password]
  L -- «إنشاء حساب جديد» --> R[إنشاء حساب<br/>Nafath only]
  ID --> V{Nafath result}
  L --> V
  R --> V
  V -- failed / timed out --> VF[تعذّر التحقق · retry]
  V -- data missing --> VM[بيانات الهوية غير مكتملة · stop]
  V -- account exists --> A{Account status}
  V -- no account, from Home --> REG1[التسجيل step<br/>Nafath data read-only · فرد/جهة · company form · غرض الطلب]
  V -- no account, from header --> REG2[استكمال بيانات الحساب<br/>read-only Nafath data · فرد/جهة · company form]
  A -- approved, from Home --> SUM[بياناتك<br/>registered summary · details on demand · غرض الطلب]
  A -- from header --> HM[Home page<br/>«حسابي» in the header opens the account]
  HM -- approved --> P[حسابي]
  HM -- pending / rejected --> ST[Account status page<br/>restrictions · read-only data · existing orders]
  A -- pending / rejected, from Home order --> BL[لا يمكنك إنشاء طلب جديد الآن<br/>reason · approval steps · متابعة طلبي / عرض بيانات حسابي]
  BL -- «عرض بيانات حسابي» --> ST
  P -- «طلب جديد» --> SUM
  SUM --> PR[المنتجات] --> RV[المراجعة<br/>delivery · recipient · notes · totals]
  REG1 --> PR
  RV -- approved user --> D1[تم إرسال طلبك<br/>order قيد المراجعة]
  RV -- new user --> D2[تم إرسال طلبك وبيانات تسجيلك<br/>account + order قيد المراجعة]
  REG2 --> HM
  D1 --> O[طلباتي]
  D2 --> O
  O -- payable only --> PAY[الدفع<br/>مدى · Apple Pay · تحويل بنكي]
```

Rules applied on every route:

- `#order` and every portal action go through one guard (`PortalStore.guardView`). Signed-out users
  see identification; pending and rejected accounts see only the status page, «طلباتي» read-only and
  password settings; approved accounts see everything.
- Nafath data (name, ID, phone, email) is read-only everywhere and never asked for again.
- Back buttons move between steps without losing entered data (it is kept in session storage).

## 2. Status model

Account and order are separate decisions.

```mermaid
stateDiagram-v2
  direction LR
  state "Account" as Acc {
    [*] --> pending: registration submitted
    pending --> approved: authority approves
    pending --> rejected: authority rejects
  }
```

```mermaid
stateDiagram-v2
  direction LR
  [*] --> review: order submitted
  review --> rejected: authority rejects order
  review --> accepted: authority accepts order
  accepted --> accepted: payment failed / not confirmed / transfer awaiting verification
  accepted --> preparing: payment confirmed
  preparing --> ready
  ready --> completed
```

| Account | Order | What the customer sees | Pay button |
| --- | --- | --- | --- |
| pending | review | حسابك وطلبك قيد المراجعة | no |
| pending | accepted | تم قبول الطلب — بانتظار اعتماد حسابك | no |
| approved | review | طلبك قيد المراجعة | no |
| approved | accepted, unpaid | تمت الموافقة — الدفع مطلوب (or transfer details) | yes |
| approved | accepted, payment failed | لم تكتمل عملية الدفع · إعادة المحاولة | yes |
| approved | accepted, not confirmed | لم يتأكد الدفع بعد · تحديث حالة الدفع | no (refresh only) |
| approved | accepted, transfer proof sent | بانتظار التحقق من التحويل | no |
| rejected | any | لا يمكن متابعة الطلب | no |
| any | rejected | تعذّر قبول الطلب + reason | no |

Payable = account `approved` AND order `accepted` AND payment `none` or `failed` (`rules.isPayable`).
New orders = account `approved` only (`rules.canCreateOrder`).

## 3. Scenario checklist

All 19 run automatically: `node e2e/scenarios.mjs` (demo build). Demo IDs are listed in
`src/portal/fixtures.ts`.

| # | Scenario | Start | Actions | Expected | Final state |
| --- | --- | --- | --- | --- | --- |
| 1 | Approved user orders from Home | Signed out | «اقتن» → Nafath `1012345678` → expand details → purpose → products → review → send | Registered summary, Nafath fields locked; purpose required | Order قيد المراجعة; no pay button |
| 2 | New user, individual | Signed out | «اقتن» → Nafath new ID → فرد → products → review → send | «أنت غير مسجّل بعد»; read-only identity; type required; no order purpose for individuals | Account pending + order in review, shown separately |
| 3 | New user, company | Signed out | جهة → «بيانات الجهة» card: نوع الجهة, غرض الطلب, company lookup (found) → rep ID type → send | Registry fields locked; rep fields prefilled from Nafath, editable; 50% discount | Account pending + order in review |
| 4 | New user submits while pending | After #2 | Open the order | «حسابك وطلبك قيد المراجعة» | No pay action |
| 5 | Pending user tries another order | Pending with order | «اقتن», `#order` | Short blocked screen (reason, approval steps, «متابعة طلبي», «عرض بيانات حسابي»); no account data | No order created |
| 6 | Login by Nafath | Signed out | Header → Nafath `1023456789` → «حسابي» | Lands on home; profile with «طلب جديد» | Can start orders |
| 7 | Login by email | Signed out | Email tab → `a.alharbi@example.com` / `123456` → «حسابي» | Lands on home; profile | Signed in |
| 8 | Register from header | Signed out | «إنشاء حساب جديد» (Nafath only, notice shown first) → type → send | Type required | Lands on home; «حسابي» shows the pending status |
| 9 | Pending user opens portal | Pending, no orders | Header → «طلباتي» | Read-only list with restriction; no «طلب جديد» | Unchanged |
| 10 | Account approved, order pending | Pending with order | Demo: approve account | Profile; order still قيد المراجعة | No pay button |
| 11 | Order accepted, account pending | Pending with order | Demo: accept order | «تم قبول الطلب — بانتظار اعتماد حسابك» | No pay button |
| 12 | Pay before acceptance | Approved | Open an order under review | Next-step panel explains review | No pay button |
| 13 | Nafath missing data / failure | Signed out | `1067890123`; `1078901234` | Stop with explanation; retry for failure | Nothing saved |
| 14 | Invalid ID / credentials | Signed out | ID `123`; wrong password | Field error; generic credential error with recovery hint | Signed out |
| 15 | Company with missing fields | New user | جهة → continue; lookup not found → continue | Each missing field flagged | Stays on step |
| 16 | Back navigation | New company user | Company data + purpose → products (+1) → back → forward | Company data, purpose and quantities kept | — |
| 17 | Rejections | Rejected account; rejected order | Sign in; open rejected order | Reason + «تواصل معنا»; order reason + «تقديم طلب جديد» | No ordering for rejected account |
| 19 | Company data change | Approved company | «تحديث البيانات» → send unchanged (error) → edit name/region/city → send → demo approve | Pending notice lists changed fields; data unchanged until approval | New data applied |
| 18 | Payment failure / unconfirmed | Approved, accepted order | Demo outcome فشل → pay; لم تتأكد → retry; نجاح → refresh | Failed keeps order unpaid; unconfirmed blocks a second charge | Paid → قيد التجهيز |

## 4. Decisions that changed earlier behaviour

- Approved users no longer pay at submission. Every order is reviewed first, per the brief
  («approved user must still follow the order-review and payment process»).
- Registration is Nafath only. Email + password remains for signing in to accounts that set a password.
- New users who register from the header cannot create orders until approved. Users who start from
  Home submit their first order with the registration and cannot create another until approved.
- «نوع الجهة» moved from each order to the company account (it drives the non-profit discount).
- The 8-second automatic approval was replaced by explicit back-office controls in the demo panel.
- «غرض الطلب» is asked only from companies. For a new company it sits in the «بيانات الجهة» card,
  under «نوع الجهة» and above the company lookup; individuals never see it.
- Pending or rejected users who press «اقتن» see a short screen explaining why they cannot order and
  what happens next; their full data stays on the status page under «حسابي».
- Every visit to the portal starts on the home page, whatever page or link was used last.
- Signing in or registering from the navbar lands on the home page; «حسابي» in the header opens
  the profile (or the status page for pending and rejected accounts).

## 5. Unresolved business rules

1. **Entity type ownership.** Is «نوع الجهة» fixed per company account (current build) or chosen per
   order? It changes who can claim the non-profit discount.
2. **Review order.** Can the authority accept an order before approving the account? The build
   supports both, and payment waits for both decisions.
3. **Missing Nafath data.** What is the official recovery path when Nafath returns no phone or email?
   The build stops and suggests trying later or contacting support.
4. **Account rejection policy.** Appeal, resubmission with corrected data, and timelines are not
   defined. The build shows the reason and a contact link only.
5. **Password recovery when signed out.** No reset flow exists. The build tells users to sign in
   with Nafath and set a password from «حسابي».
6. **Profile changes after approval.** Which fields can change, and does the account stay approved
   while a change is reviewed? The build allows company-representative changes and keeps the
   account approved.
7. **Company representative default.** The build assumes the registrant is the representative and
   prefills from Nafath (editable). Confirm, and whether a representative needs a delegation letter.
8. **Commercial-register lookup.** Search by name (as designed) or by CR number? Which registry
   fields are authoritative and locked?
9. **Unconfirmed payments.** Provider status-query endpoint, retry window and timeout for the
    «لم يتأكد الدفع بعد» state.
10. **Payment deadline.** The orders screen shows «مستحق قبل» seven days after the order date, as in
    the design. Is there a real deadline, and what happens after it?
11. **Notification channels.** How account and order decisions reach the customer (SMS, email, in-app).
12. **Default payment method.** The build defaults companies to bank transfer and individuals to مدى,
    as in the design.
13. **Delivery map.** The design's map picker was unreachable; the build keeps automatic location
    plus manual national address. Confirm whether the map picker is needed.
