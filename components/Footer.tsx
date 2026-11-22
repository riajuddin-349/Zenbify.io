import Link from "next/link";
import { HOTLINE, LEARN_URL, LOGIN_URL, SIGNUP_URL, APP_URL, company, legalLinks } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <Logo />
            <p style={{ marginTop: 14, maxWidth: 340 }}>An AI-powered commerce platform for the people building something of their own.</p>
            <p style={{ marginTop: 18 }}>
              Support hotline: <a href={`tel:${HOTLINE}`}><strong>{HOTLINE}</strong></a>
            </p>
            {company.supportEmail && (
              <p style={{ marginTop: 6 }}>
                Email: <a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a>
              </p>
            )}
            {company.supportHours && <p style={{ marginTop: 6 }}>{company.supportHours}</p>}
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/#workflow">How it works</Link></li>
              <li><Link href="/#themes">Storefront themes</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about-us">About Zenbify</Link></li>
              <li><Link href="/trust">Trust and support</Link></li>
              <li><Link href="/contact-us">Contact us</Link></li>
              <li><a href={LEARN_URL}>Learn (Zenbify Institute)</a></li>
            </ul>
          </div>
          <div>
            <h4>Get started</h4>
            <ul>
              <li><a href={SIGNUP_URL}>Start free trial</a></li>
              <li><a href={LOGIN_URL}>Merchant login</a></li>
              <li><a href={APP_URL}>Merchant dashboard</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} {company.legalName ?? "Zenbify"}. All rights reserved.</span>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px" }}>
            {legalLinks.map((l) => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
