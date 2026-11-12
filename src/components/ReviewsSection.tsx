import { ArrowUpRight, Quote } from 'lucide-react';
import { AUTHENTIC_TESTIMONIALS, BUSINESS_INFO } from '../data/happycleansData';

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#F7F7F2] border-y border-[#244B40]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#244B40]/80 mb-3">
              Customer Voices
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight text-[#244B40] font-medium">
              Stories from Oklahoma City homes.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#26332E]/80">
              Verified customer feedback published by HappyCleans, highlighting easy booking,
              responsive communication, and attentive cleaning partners.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.urls.okc}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#244B40] hover:underline whitespace-nowrap shrink-0"
          >
            <span>View original source on HappyCleans.com</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {AUTHENTIC_TESTIMONIALS.map((review) => (
            <article
              key={review.name}
              className="rounded-[1.75rem] bg-[#FFF9F2] border border-[#244B40]/10 p-8 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#A9C7B2] mb-5" aria-hidden="true" />
                <p className="text-base leading-relaxed text-[#26332E]/90">{review.quote}</p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#244B40]/10">
                <p className="font-serif text-lg font-medium text-[#244B40]">{review.name}</p>
                <p className="text-xs text-[#26332E]/65 mt-0.5">{review.context}</p>
                <a
                  href={review.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#244B40] hover:underline"
                >
                  <span>{review.sourceLabel}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
