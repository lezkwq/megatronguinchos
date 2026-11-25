import { ExternalLink, Star } from "lucide-react";
import { COMPANY, REVIEWS } from "@/data/megatron";
import { Reveal } from "@/components/Reveal";

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className="bg-surface-light py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-foreground uppercase sm:text-3xl lg:text-4xl">
            O QUE DIZEM NOSSOS CLIENTES
          </h2>
          <div className="mx-auto mt-3.5 h-1 w-14 bg-primary" aria-hidden="true" />

          <div className="mt-6 inline-flex flex-col items-center gap-1.5 rounded-lg border border-border bg-card px-6 py-4 shadow-xs">
            <div className="flex items-center gap-1" aria-label="Nota 5 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" aria-hidden="true" />
              ))}
            </div>
            <p className="text-base font-extrabold tracking-wide text-foreground sm:text-lg">
              {COMPANY.rating} DE 5 ESTRELAS
            </p>
            <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
              {COMPANY.reviewCount} AVALIAÇÕES NO GOOGLE
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.author} delayMs={(index % 3) * 80}>
              <article className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div>
                  <div className="flex items-center justify-center gap-1" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-center text-sm leading-relaxed text-muted-foreground">
                    "{review.text}"
                  </blockquote>
                </div>

                <p className="mt-5 border-t border-border pt-3 text-center text-xs font-bold tracking-wide text-foreground">
                  {review.author}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={COMPANY.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brand px-7 py-3 text-xs uppercase sm:text-sm"
          >
            VER AVALIAÇÕES NO GOOGLE
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}