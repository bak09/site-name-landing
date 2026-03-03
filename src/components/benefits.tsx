import Container from "./ui/container";
import { Card } from "./ui/card";
import { benefits } from "@/data/benefits";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-black py-16 sm:py-20">
      <Container>
        <header className="max-w-2xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Benefits</h2>
          <p className="mt-2 text-sm text-white/65">
            3–6 product advantages with consistent visual style.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <Card key={b.title}>
              <div className="p-6">
                <div className="mb-4 h-10 w-10 rounded-xl bg-white/10" />
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-white/70">{b.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
