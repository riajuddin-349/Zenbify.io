import { cta, trial } from "@/content/site";
import { Button } from "./Button";

export function CtaBand({ title = "You bring the ambition. We’ll bring the tools." }: { title?: string }) {
  return (
    <section className="cta-band" aria-labelledby="final-cta">
      <div className="container">
        <h2 className="h2" id="final-cta">{title}</h2>
        <div className="hero-actions">
          <Button href={cta.primary.href}>{cta.primary.label}</Button>
          <Button href="/pricing" variant="secondary">View pricing</Button>
        </div>
        <p className="hero-note"><span>{trial.note}</span>{trial.trialLength && <span>{trial.trialLength}</span>}</p>
      </div>
    </section>
  );
}
