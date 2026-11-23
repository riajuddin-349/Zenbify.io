import { cta, trial } from "@/content/site";
import { Button } from "./Button";
import { OrdersApp } from "./mocks";

export function CtaBand({ withApp = true }: { withApp?: boolean }) {
  return (
    <section className="cta on-dark" aria-labelledby="final-cta">
      <div className="wrap cta-grid">
        <div className="cta-copy">
          <span className="label"><b>●</b> Start today</span>
          <h2 className="display" id="final-cta">You bring the ambition. <span className="serif">We’ll bring the tools.</span></h2>
          <div className="btn-row"><Button href={cta.primary.href} arrow>{cta.primary.label}</Button><Button href="/pricing" variant="line">View pricing</Button></div>
          <p className="fine"><span>{trial.note}</span>{trial.trialLength && <span>{trial.trialLength}</span>}</p>
        </div>
        {withApp && <OrdersApp className="main" />}
      </div>
    </section>
  );
}
