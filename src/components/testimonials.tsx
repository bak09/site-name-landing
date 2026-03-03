import Container from "./ui/container";
import { Card } from "./ui/card";
import { testimonials } from "@/data/testimonials";

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-1 text-sm" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "text-yellow-300" : "text-white/20"}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-black py-16 sm:py-20">
      <Container>
        <header className="max-w-2xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Testimonials</h2>
          <p className="mt-2 text-sm text-white/65">
            Cards + schema.org JSON-LD (Product/Review).
          </p>
        </header>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <div className="p-6">
                <Stars n={t.rating} />
                <p className="mt-4 text-sm text-white/80">“{t.text}”</p>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-white/60">{t.role}</div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/10" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
