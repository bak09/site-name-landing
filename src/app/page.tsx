import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Benefits from "@/components/benefits";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import { ReviewsJsonLd } from "./(seo)/jsonld";

export default function Page() {
  return (
    <>
      <ReviewsJsonLd />
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
