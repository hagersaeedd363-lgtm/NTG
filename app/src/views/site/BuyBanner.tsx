import {
  Airplane01Icon,
  DiscountIcon,
  Location01Icon,
  Money03Icon,
  PackageIcon,
  SmartPhone01Icon,
  Store01Icon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import { PRODUCTS } from "../../data/portal";
import { portal } from "../../portal/store";
import type { V } from "../../types";
import { list } from "../../lib/dc";
import {
  DsButton,
  DsTag,
  FeaturedIcon,
  Hi,
  Section,
  dsCard,
  type IconSvgElement,
} from "../ds";

type Product = {
  id: string;
  t: string;
  pack: string;
  bottles: number;
  price: number;
  img: string;
};
const ITEMS = PRODUCTS as Product[];
const AR = (n: number) => n.toLocaleString("ar-EG");
const FROM = Math.min(...ITEMS.map((p) => p.price));
/** «عبوة مياه زمزم ٣٣٠ مل» → «٣٣٠ مل»: the size is what a buyer compares. */
const SIZE = (t: string) => t.replace(/^عبوة مياه زمزم\s*/, "");

/** DS Service Card — info row: label (Text md bold) + value (Text md), 24px icon at the start. */
function InfoRow({
  icon,
  label,
  children,
}: {
  icon: IconSvgElement;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
      <span style={{ color: "var(--gold)", display: "flex", flexShrink: 0 }}>
        <Hi icon={icon} />
      </span>
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          fontSize: 16,
          lineHeight: "24px",
          color: "var(--ink)",
        }}
      >
        <span style={{ fontWeight: 700 }}>{label}</span>
        <span>{children}</span>
      </span>
    </div>
  );
}

/**
 * Home «اقتن ماء زمزم» — the DGA Service Page (Figma 24341:302514): main column (title + primary action, tags,
 * description, horizontal tab list with the tab content) beside the 416px Service Card (service info, divider,
 * mobile apps, action). The products tab is the default so the packs and prices are the first thing seen.
 */
export function BuyBanner({ v }: { v: V }) {
  const steps: string[] = list(v.orderSteps).map((s: any) => s?.ar);
  const STEP_ICONS = [SmartPhone01Icon, Airplane01Icon, Store01Icon];
  return (
    <div id="buy-pack">
      <Section label="اقتن عبوة زمزم">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            gap: 32,
          }}
        >
          {/* Service (main column) */}
          <div
            style={{
              flex: "1 1 640px",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16,
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: 30,
                    lineHeight: "38px",
                    fontWeight: 700,
                    color: "var(--ink)",
                  }}
                >
                  اقتن ماء زمزم
                </h2>
                <DsButton primary onClick={() => portal.startOrder()}>
                  اطلب الآن
                </DsButton>
              </div>
              <span style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                <DsTag tone="brand">للأفراد</DsTag>
                <DsTag tone="info">للجهات</DsTag>
                <DsTag>تطبيق نسك</DsTag>
              </span>
              <p
                style={{
                  margin: 0,
                  maxWidth: 720,
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "var(--ink)",
                }}
              >
                زمزم... معجزة جعلها الله لأمة محمد ﷺ، الآن على بعد نقرة زر. اطلب
                عبوات ماء زمزم عبر القنوات الرسمية المعتمدة، واستلمها من المطار
                أو من نقاط البيع.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div>
                {
                  /* DS cards: image, title + text, price, one action */
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit,minmax(min(100%,136px),1fr))",
                      gap: 12,
                    }}
                  >
                    {ITEMS.map((p) => (
                      <div
                        key={p.id}
                        className="dga-card-link"
                        style={{ ...dsCard, padding: 12, gap: 12 }}
                      >
                        <span
                          style={{
                            height: 120,
                            borderRadius: "var(--r-md)",
                            background: "var(--bg-alt)",
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "center",
                            overflow: "hidden",
                            padding: "12px 12px 0",
                          }}
                        >
                          <img
                            src={p.img}
                            alt={p.t}
                            style={{
                              maxWidth: "100%",
                              maxHeight: 108,
                              objectFit: "contain",
                              objectPosition: "bottom",
                            }}
                          />
                        </span>
                        <span
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                            color: "var(--ink)",
                          }}
                        >
                          <span
                            style={{
                              fontSize: 18,
                              lineHeight: "28px",
                              fontWeight: 700,
                            }}
                          >
                            {SIZE(p.t)}
                          </span>
                          <span
                            style={{
                              fontSize: 14,
                              lineHeight: "20px",
                              color: "var(--ink-2)",
                            }}
                          >
                            {p.pack.replace("كرتون يحتوي على ", "كرتون · ")}
                          </span>
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            gap: 4,
                          }}
                        >
                          <span
                            style={{
                              fontSize: 24,
                              lineHeight: "32px",
                              fontWeight: 700,
                              color: "var(--gold)",
                            }}
                          >
                            {AR(p.price)}
                          </span>
                          <span
                            style={{
                              fontSize: 14,
                              lineHeight: "20px",
                              color: "var(--ink-2)",
                            }}
                          >
                            ر.س
                          </span>
                        </span>
                        <span style={{ marginTop: "auto", display: "grid" }}>
                          <DsButton
                            onClick={() => portal.startOrder()}
                            ariaLabel={"اطلب " + p.t}
                          >
                            اطلب
                          </DsButton>
                        </span>
                      </div>
                    ))}
                  </div>
                }
              </div>
              {/* DS Steps: ordered list, one featured icon per step */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 20,
                    lineHeight: "30px",
                    fontWeight: 700,
                    color: "var(--ink)",
                  }}
                >
                  خطوات الطلب
                </h3>
                <ol
                  style={{
                    margin: 0,
                    padding: 0,
                    listStyle: "none",
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit,minmax(min(100%,220px),1fr))",
                    gap: 12,
                  }}
                >
                  {steps.map((s, k) => (
                    <li key={k} style={{ ...dsCard, padding: 16, gap: 12 }}>
                      <FeaturedIcon hi={STEP_ICONS[k] ?? Store01Icon} />
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 4,
                          color: "var(--ink)",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 14,
                            lineHeight: "20px",
                            color: "var(--ink-2)",
                          }}
                        >
                          الخطوة {AR(k + 1)}
                        </span>
                        <span
                          style={{
                            fontSize: 16,
                            lineHeight: "24px",
                            fontWeight: 700,
                          }}
                        >
                          {s}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* DS Service Card (side) */}
          <aside
            aria-label="معلومات الخدمة"
            style={{
              flex: "0 1 416px",
              minWidth: 280,
              boxSizing: "border-box",
              padding: 40,
              background: "var(--card)",
              border: "1px solid var(--line)",
              borderRadius: "var(--r-lg)",
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <InfoRow icon={UserGroupIcon} label="الفئة المستفيدة">
                الأفراد والجهات الحكومية والخاصة وغير الربحية
              </InfoRow>
              <InfoRow icon={SmartPhone01Icon} label="قنوات الخدمة">
                تطبيق نسك، المطار، نقاط البيع المعتمدة
              </InfoRow>
              <InfoRow icon={Money03Icon} label="تكلفة الخدمة">
                تبدأ من {AR(FROM)} ر.س للكرتون
              </InfoRow>
              <InfoRow icon={PackageIcon} label="المنتجات">
                {AR(ITEMS.length)} أحجام من ٣٣٠ مل إلى ٥ لتر
              </InfoRow>
              <InfoRow icon={Location01Icon} label="الاستلام">
                صالات المغادرة أو أقرب نقطة بيع
              </InfoRow>
              <InfoRow icon={DiscountIcon} label="الجهات غير الربحية">
                خصم ٥٠٪ على الطلبات
              </InfoRow>
            </div>
            <div style={{ height: 1, background: "var(--line)" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  fontSize: 18,
                  lineHeight: "28px",
                  fontWeight: 700,
                  color: "var(--ink)",
                }}
              >
                تطبيقات الجوال
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {[
                  ["assets/app-store.svg", "App Store"],
                  ["assets/google-play.svg", "Google Play"],
                  ["assets/app-gallery.svg", "AppGallery"],
                ].map(([src, alt]) => (
                  <button
                    key={alt}
                    type="button"
                    onClick={v.storeToast}
                    aria-label={alt}
                    className="dga-btn dga-btn-neutral"
                    style={{
                      height: 40,
                      padding: "0 12px",
                      border: 0,
                      borderRadius: "var(--r-sm)",
                      background: "var(--ink)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={src}
                      alt=""
                      style={{
                        height: 16,
                        display: "block",
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>
            <DsButton onClick={v.go?.buyMap}>أقرب نقطة بيع</DsButton>
          </aside>
        </div>
      </Section>
    </div>
  );
}
