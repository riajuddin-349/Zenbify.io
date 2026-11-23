import Link from "next/link";
import { HOTLINE, LEARN_URL, LOGIN_URL, SIGNUP_URL, company, legalLinks } from "@/content/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <Logo />
            <p style={{ marginTop: 16, maxWidth: 340 }}>An AI-powered commerce platform for the people building something of their own.</p>
            <p style={{ marginTop: 20 }}>Support hotline<br /><a href={`tel:${HOTLINE}`} className="mono" style={{ color: "#fff", fontSize: 20 }}>{HOTLINE}</a></p>
            {company.supportEmail && <p style={{ marginTop: 10 }}><a href={`mailto:${company.supportEmail}`}>{company.supportEmail}</a></p>}
            {company.supportHours && <p style={{ marginTop: 4 }}>{company.supportHours}</p>}
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
              <li><Link href="/about-us">About</Link></li>
              <li><Link href="/trust">Trust and support</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
              <li><a href={LEARN_URL}>Learn (Zenbify Institute)</a></li>
            </ul>
          </div>
          <div>
            <h4>Get started</h4>
            <ul>
              <li><a href={SIGNUP_URL}>Start free trial</a></li>
              <li><a href={LOGIN_URL}>Merchant login</a></li>
            </ul>
          </div>
        </div>
        <div className="fbig" aria-hidden="true">zenbify</div>
        <div className="fbot">
          <span>© {new Date().getFullYear()} {company.legalName ?? "Zenbify"}. All rights reserved.</span>
          <ul>{legalLinks.map((l) => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}</ul>
        </div>
      </div>
    </footer>
  );
}
