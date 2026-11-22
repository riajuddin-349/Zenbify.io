import { integrations } from "@/content/site";

const badge = { live: "badge-good", beta: "badge-warn", planned: "badge-neutral" } as const;

export function IntegrationMatrix() {
  return (
    <div>
      {integrations.map((g) => (
        <div className="int-group" key={g.group}>
          <div>
            <h3>{g.group}</h3>
            <p>{g.note}</p>
          </div>
          <ul className="chip-list">
            {g.items.map((i) => (
              <li key={i.name} className="chip">
                {i.name}
                {i.status && <span className={`badge ${badge[i.status]}`} style={{ marginLeft: 8 }}>{i.status}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
