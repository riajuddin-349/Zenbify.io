import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="phero on-dark" style={{ minHeight: "60vh" }}>
      <div className="wrap">
        <span className="label"><b>404</b> Not found</span>
        <h1 className="display">That page <span className="serif" style={{ color: "var(--lime)" }}>doesn’t exist.</span></h1>
        <div className="btn-row"><Button href="/" arrow>Back to home</Button><Button href="/features" variant="line">See features</Button></div>
      </div>
    </section>
  );
}
