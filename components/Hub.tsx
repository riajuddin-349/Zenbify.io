import { integrations } from "@/content/site";
import { LogoMark } from "./Logo";

const left = ["Store platforms", "Social channels"];
const right = ["Payments", "Couriers", "Tracking"];

function Group({ g }: { g: (typeof integrations)[number] }) {
  return (
    <div className="group">
      <p className="label">{g.group}</p>
      <ul className="chips">
        {g.items.map((i) => (
          <li key={i.name}>{i.name}{i.status && <em>{i.status}</em>}</li>
        ))}
      </ul>
    </div>
  );
}

/** Integration diagram: sources on the left, Zenbify in the middle, delivery and measurement on the right. */
export function Hub() {
  const by = (names: string[]) => names.map((n) => integrations.find((g) => g.group === n)!).filter(Boolean);
  return (
    <div className="hubwrap">
      <div className="hcol l">{by(left).map((g) => <Group key={g.group} g={g} />)}</div>
      <div className="core"><div className="core-box"><span style={{ justifySelf: "center" }}><LogoMark size={34} /></span><b>Zenbify</b><small>One dashboard</small></div></div>
      <div className="hcol r">{by(right).map((g) => <Group key={g.group} g={g} />)}</div>
    </div>
  );
}
