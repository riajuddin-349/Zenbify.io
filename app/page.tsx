import Link from "next/link";
import { Button } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Faq, faqJsonLd } from "@/components/Faq";
import { Hub } from "@/components/Hub";
import { Pricing } from "@/components/Pricing";
import { LiveHero } from "@/components/LiveHero";
import { Icon } from "@/components/Icon";
import { Laptop, Phone } from "@/components/Device";
import { Brand } from "@/components/Brand";
import { ProcessFlow } from "@/components/ProcessFlow";
import { ScrollWords } from "@/components/ScrollWords";
import { WorkflowStory } from "@/components/WorkflowStory";
import {
  Chaos, CampaignPane, ConfirmPane, CourierPane, OneRecord, OrdersApp, OrdersTable, ProfitApp, Recovery, StoreBuilder, AppWin,
} from "@/components/mocks";
import { HOTLINE, LEARN_URL, cta, legalLinks, merchantStories, themes, trial, workflow } from "@/content/site";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />

      {/* 1 · Hero: product-led composition */}
      <section className="hero on-dark" aria-labelledby="hero-title">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <span className="label"><b>●</b> Your all-in-one AI commerce platform</span>
            <h1 className="display" id="hero-title">
              Confirm orders faster, cut fake ones, and <span className="serif">see what you actually earn.</span>
            </h1>
            <p className="lead">Your store, AI order confirmation, courier booking and profit tracking in one dashboard. Built for sellers in Bangladesh.</p>
            <div className="btn-row">
              <Button href={cta.primary.href} arrow>{cta.primary.label}</Button>
              <Button href={cta.secondary.href} variant="line">{cta.secondary.label}</Button>
            </div>
            <p className="fine"><span>{trial.note}</span><span>No coding required</span>{trial.trialLength && <span>{trial.trialLength}</span>}</p>
          </div>
          <LiveHero />
        </div>
      </section>

      <div className="strip">
        <div className="strip-in">
          <span className="label">Works with</span>
          <ul>{["bKash", "Pathao", "REDX", "Steadfast", "Shopify", "WooCommerce", "BigCommerce"].map((n) => <li key={n}><i /><Brand name={n} /></li>)}</ul>
        </div>
      </div>

      {/* Product showcase: devices + order-to-courier flow */}
      <section className="sec on-paper-2 showcase" aria-labelledby="show-title">
        <div className="wrap">
          <div className="sec-head two reveal">
            <div style={{ display: "grid", gap: 22 }}>
              <span className="label"><b>●</b> Inside the product</span>
              <h2 className="h2" id="show-title">One order, from the first message <span className="serif-acc">to the doorstep.</span></h2>
            </div>
            <p className="lead">Orders, AI confirmation calls and courier booking sit in the same dashboard. Customers follow delivery on a tracking page.</p>
          </div>
          <div className="island stagebig reveal">
            <ol className="miniflow" aria-label="Order flow">
              <li><b>1</b>Order arrives</li><li><b>2</b>AI confirms</li><li><b>3</b>Courier booked</li><li><b>4</b>Customer tracks</li>
            </ol>
            <div className="devs">
              <Laptop src="/img/dashboard-orders.webp" w={2880} h={1800} alt="Zenbify orders dashboard showing sample orders with confirmed, calling, duplicate and high-risk statuses, an AI call and courier booking" />
              <Phone className="p-a" src="/img/phone-tracking.webp" w={780} h={1688} alt="Customer tracking page on a phone with a delivery map and timeline, using sample data" />
              <Phone className="p-b" src="/img/phone-orders.webp" w={780} h={1688} alt="Orders list on a phone with confirmed and flagged orders, using sample data" />
            </div>
            <p className="gv-note">Interface illustration · sample data</p>
          </div>
        </div>
      </section>

      {/* 2 · Old way → one record */}
      <section className="sec on-paper" aria-labelledby="diff-title">
        <div className="wrap">
          <div className="sec-head two reveal">
            <div style={{ display: "grid", gap: 22 }}>
              <span className="label"><b>01</b> The Zenbify difference</span>
              <h2 className="h2" id="diff-title">One order shouldn’t live in <span className="serif-acc">six places.</span></h2>
            </div>
            <p className="lead">Chats, inboxes, sheets, courier slips and payment messages become a single order record that moves from received to profit.</p>
          </div>
          <div className="c2o reveal">
            <Chaos />
            <div className="joiner" aria-hidden="true" />
            <OneRecord />
          </div>
        </div>
      </section>

      {/* 3 · Interactive workflow */}
      <section className="sec on-paper-2" id="workflow" aria-labelledby="wf-title">
        <div className="wrap">
          <div className="sec-head two reveal">
            <div style={{ display: "grid", gap: 22 }}>
              <span className="label"><b>02</b> How it works</span>
              <h2 className="h2" id="wf-title">From store to profit, <span className="serif-acc">in one flow.</span></h2>
            </div>
            <p className="lead">Pick a step to see what you work with inside Zenbify.</p>
          </div>
          <ProcessFlow />
          <WorkflowStory
            steps={workflow}
            panes={[<StoreBuilder key="s" />, <CampaignPane key="c" />, <div key="o"><OrdersApp label="Orders dashboard collecting every order in one place, using sample data" /></div>, <ConfirmPane key="f" />, <CourierPane key="d" />, <ProfitApp key="p" />]}
          />
          <div className="btn-row" style={{ marginTop: 44 }}>
            <Button href={cta.primary.href} variant="ink" arrow>{cta.primary.label}</Button>
            <Button href="/features" variant="line">Explore all features</Button>
          </div>
        </div>
      </section>

      {/* 4 · Fraud protection */}
      <section className="sec on-dark" id="confirm" aria-labelledby="guard-title">
        <div className="wrap guard">
          <div>
            <span className="label"><b>03</b> Order confirmation and fake-order protection</span>
            <h2 className="h2" id="guard-title" style={{ margin: "22px 0 0" }}>Know which orders are real <span className="serif-acc">before you ship.</span></h2>
            <ul className="ticks">
              <li><span><Icon name="shield" /></span>Risky and duplicate orders are flagged as they arrive</li>
              <li><span><Icon name="phone" /></span>AI calling confirms the order with the customer</li>
              <li><span><Icon name="refresh" /></span>Failed or cancelled orders are followed up for recovery</li>
              <li><span><Icon name="truck" /></span>Confirmed orders go straight to courier booking</li>
            </ul>
            <Button href={cta.primary.href} arrow>{cta.primary.label}</Button>
          </div>
          <div className="guard-vis reveal d2">
            <AppWin title="zenbify / orders · flagged" label="Orders needing review with high risk, duplicate and call-in-progress statuses, using sample data" className="">
              <div className="a-title"><strong>Needs a look</strong><div className="a-tabs"><span className="on">Flagged<small>3</small></span><span>Calling<small>1</small></span></div></div>
              <OrdersTable n={4} riskOnly />
            </AppWin>
            <Recovery className="recover" />
            <p className="gv-note">Interface illustration · sample data</p>
          </div>
        </div>
      </section>

      {/* 5 · Profit */}
      <section className="sec on-paper" aria-labelledby="profit-title">
        <div className="wrap profit">
          <div className="reveal"><ProfitApp /></div>
          <div className="reveal d2">
            <span className="label"><b>04</b> Profit view</span>
            <h2 className="h2" id="profit-title" style={{ margin: "22px 0 34px" }}>See what you <span className="serif-acc">actually earn.</span></h2>
            <ul className="defs">
              <li><b>Revenue</b><span>What came in from confirmed orders.</span></li>
              <li><b>Costs</b><span>Product, delivery and the rest, in the same view.</span></li>
              <li><b>Net profit</b><span>The number that decides what to reorder, promote or drop.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6 · Storefront themes */}
      <section className="sec on-dark-2" id="themes" aria-labelledby="themes-title">
        <div className="wrap themes">
          <div>
            <span className="label"><b>05</b> Store and themes</span>
            <h2 className="h2" id="themes-title" style={{ margin: "22px 0 18px" }}>Launch a store <span className="serif-acc">without a developer.</span></h2>
            <p className="lead">Pick a theme for your kind of business. Every theme is mobile ready.</p>
            <ul className="theme-list">{themes.map((t) => <li key={t.name}>{t.name}<span>{t.vertical}</span></li>)}</ul>
            <div style={{ marginTop: 30 }}><Button href={cta.primary.href} arrow>Start your store</Button></div>
          </div>
          <div className="reveal d2"><Laptop src="/img/storefront.webp" w={2880} h={1800} alt="Sample storefront built with a Zenbify theme, with a hero banner and product grid" /></div>
        </div>
      </section>

      {/* 7 · Integrations diagram */}
      <section className="sec on-paper-2" aria-labelledby="int-title">
        <div className="wrap">
          <div className="sec-head two reveal">
            <div style={{ display: "grid", gap: 22 }}>
              <span className="label"><b>06</b> Integrations</span>
              <h2 className="h2" id="int-title">Plugs into what you <span className="serif-acc">already use.</span></h2>
            </div>
            <p className="lead">Store platforms and social channels feed one dashboard. Local payments, couriers and tracking connect on the other side.</p>
          </div>
          <div className="island reveal"><Hub /></div>
        </div>
      </section>

      {merchantStories.length > 0 && (
        <section className="sec on-paper" aria-labelledby="stories-title">
          <div className="wrap">
            <h2 className="h2" id="stories-title" style={{ marginBottom: 40 }}>Sellers using Zenbify</h2>
            <div className="merch">
              {merchantStories.map((s) => (
                <figure key={s.name}>
                  <blockquote><p>“{s.quote}”</p></blockquote>
                  <figcaption><b>{s.name}</b>, {s.storeUrl ? <a href={s.storeUrl} rel="noopener">{s.store}</a> : s.store}{s.result && <span className="mut" style={{ display: "block" }}>{s.result}</span>}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Manifesto: typography-led */}
      <section className="sec on-dark manifesto" aria-label="Our focus">
        <div className="wrap">
          <ScrollWords text="Zenbify is an AI-powered commerce platform for the people building something of their own." accentFrom={9} />
          <div className="peek reveal" aria-hidden="false">
            <Phone src="/img/phone-orders.webp" w={780} h={1688} alt="Orders list on a phone, using sample data" />
            <div className="pk-wide"><img src="/img/dashboard-profit.webp" width={2880} height={1800} loading="lazy" decoding="async" alt="Profit dashboard, using sample data" /></div>
            <Phone src="/img/phone-tracking.webp" w={780} h={1688} alt="Customer tracking page on a phone, using sample data" />
          </div>
        </div>
      </section>

      {/* 8 · Pricing */}
      <section className="sec on-paper" id="pricing" aria-labelledby="pricing-title">
        <div className="wrap">
          <div className="sec-head">
            <span className="label"><b>07</b> Pricing</span>
            <h2 className="h2" id="pricing-title">Big ambitions. <span className="serif-acc">A plan that fits.</span></h2>
          </div>
          <Pricing />
        </div>
      </section>

      {/* 9 · Trust and support */}
      <section className="sec on-dark" aria-labelledby="trust-title">
        <div className="wrap">
          <div className="trustbar">
            <div>
              <span className="label"><b>08</b> Trust and support</span>
              <h2 className="h2" id="trust-title" style={{ marginTop: 22 }}>Support you can <span className="serif-acc">actually reach.</span></h2>
            </div>
            <div>
              <p className="mut">Support hotline</p>
              <a className="hot" href={`tel:${HOTLINE}`}>{HOTLINE}</a>
              <p className="mut">Live chat is on the site too.</p>
            </div>
          </div>
          <div className="trust3">
            <div><b>Published policies</b><span>Terms, privacy, refund, cookie and acceptable-use policies.</span><div className="linklist">{legalLinks.slice(0, 3).map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}<Link href="/trust">All</Link></div></div>
            <div><b>Learn at your pace</b><span>Step-by-step guides for your store, orders and delivery.</span><div className="linklist"><a href={LEARN_URL}>Zenbify Institute</a></div></div>
            <div><b>Talk to a person</b><span>Ask about storefronts, payments, automation or plans.</span><div className="linklist"><Link href="/contact-us">Contact us</Link></div></div>
          </div>
        </div>
      </section>

      {/* 10 · FAQ */}
      <section className="sec on-paper-2" id="faq" aria-labelledby="faq-title">
        <div className="wrap faqgrid">
          <div className="sticky">
            <span className="label"><b>09</b> FAQ</span>
            <h2 className="h2" id="faq-title" style={{ marginTop: 22 }}>Before you <span className="serif-acc">start.</span></h2>
          </div>
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
