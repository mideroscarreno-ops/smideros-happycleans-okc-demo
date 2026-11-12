import { ShieldCheck } from 'lucide-react';
import { TRUST_BENEFITS } from '../data/happycleansData';

export function WhyHappyCleansSection() {
  return (
    <section id="why-happycleans" className="py-20 md:py-28 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Sticky Editorial Header Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#244B40]/80">
              Why HappyCleans
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl leading-[1.15] tracking-tight text-[#244B40] font-medium">
              Built around trust, clarity, and peace of mind.
            </h2>
            <p className="text-base leading-relaxed text-[#26332E]/80">
              HappyCleans connects Oklahoma City households with vetted professional cleaning
              partners—combining straightforward flat-rate booking with accountable customer care.
            </p>
            <div className="pt-2 flex items-center gap-2.5 text-sm font-medium text-[#244B40]">
              <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Published platform commitments</span>
            </div>
          </div>

          {/* 6 Published Trust Claims */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 border-t border-[#244B40]/12 pt-8 lg:border-t-0 lg:pt-0">
            {TRUST_BENEFITS.map((benefit, index) => (
              <div
                key={benefit.title}
                className="pb-8 border-b border-[#244B40]/12 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-medium text-[#244B40]/65 tabular-nums">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-medium text-[#244B40]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#26332E]/80">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
