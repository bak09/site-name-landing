import { testimonials } from "@/data/testimonials";

export function ReviewsJsonLd() {
  const avg =
    testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length;

  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Serendale AI",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: Number(avg.toFixed(1)),
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: t.rating },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
