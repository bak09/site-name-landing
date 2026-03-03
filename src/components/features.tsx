import Container from "./ui/container";
import { Card } from "./ui/card";

const rows = [
  {
    id: "smart-contracts",
    title: "Smart Contracts",
    items: [
      { title: "Audited templates", desc: "Pre-built contracts with safe defaults and clear docs." },
      { title: "Upgradeable modules", desc: "Feature flags and versioning for fast iteration." },
      { title: "Dev tooling", desc: "Testing, deployment scripts, and monitoring hooks." },
    ],
  },
  {
    id: "services",
    title: "Services",
    items: [
      { title: "Integration", desc: "Connect wallets, analytics and KYC providers quickly." },
      { title: "Security review", desc: "Threat modeling + best practices checklist." },
      { title: "Support", desc: "Launch assistance and ongoing maintenance." },
    ],
  },
  {
    id: "solutions",
    title: "Solutions",
    items: [
      { title: "Payments", desc: "Fast settlement with predictable fees and tooling." },
      { title: "Community", desc: "Token-gated access, roles, and on-chain identity." },
      { title: "AI security", desc: "Anomaly detection and risk scoring for transactions." },
    ],
  },
  {
    id: "roadmap",
    title: "Roadmap",
    items: [
      { title: "Q2 — Mainnet", desc: "Core protocol release and validator onboarding." },
      { title: "Q3 — SDK", desc: "Dev kit, templates, and improved docs." },
      { title: "Q4 — Ecosystem", desc: "Partners, grants program, and community tools." },
    ],
  },
  {
    id: "whitepaper",
    title: "Whitepaper",
    items: [
      { title: "Consensus", desc: "Proof of Stake with scalable throughput targets." },
      { title: "Architecture", desc: "Modular design for performance and composability." },
      { title: "Tokenomics", desc: "Incentives aligned to long-term ecosystem health." },
    ],
  },
] as const;

export default function Features() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <Container>
        {rows.map((r) => (
          <section key={r.id} id={r.id} className="py-10 sm:py-14">
            <header className="max-w-2xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">{r.title}</h2>
              <p className="mt-2 text-sm text-white/65">
                Premium “glass” cards, responsive grid, semantic sections.
              </p>
            </header>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {r.items.map((it) => (
                <Card key={it.title}>
                  <div className="p-6">
                    <div className="mb-4 h-10 w-10 rounded-xl bg-white/10" />
                    <h3 className="text-lg font-semibold">{it.title}</h3>
                    <p className="mt-2 text-sm text-white/70">{it.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </section>
  );
}
