import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: "50vh" }}>
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="h1">That page does not exist.</h1>
        <div className="hero-actions"><Button href="/">Back to home</Button><Button href="/features" variant="secondary">See features</Button></div>
      </div>
    </section>
  );
}
