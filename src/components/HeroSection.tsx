import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/happycleansData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onStartQuote: () => void;
}

const VALUE_HIGHLIGHTS = [
  { label: 'Flat-Rate Pricing', detail: 'Sized to your home' },
  { label: 'Vetted Cleaning Partners', detail: 'Background-checked' },
  { label: 'Online Booking', detail: 'Cashless checkout' },
  { label: 'Satisfaction Guarantee', detail: 'Back to make it right' },
];

export function HeroSection({ onStartQuote }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FFF9F2] pt-8 pb-16 md:pt-14 md:pb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Balanced 2-Column Editorial Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2 lg:py-8">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#244B40]/85 mb-4">
              Oklahoma City &amp; Surrounding Communities · Residential Cleaning
            </p>

            <h1 className="font-serif text-[clamp(2.5rem,4.4vw,4.25rem)] leading-[1.08] tracking-tight text-[#244B40] font-medium max-w-xl">
              Come Home to Happy.
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#26332E]/85 max-w-lg">
              Professional home cleaning made simple, so you can spend more time doing what you
              love. Less Cleaning. More Living.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onStartQuote}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#244B40] text-[#FFF9F2] text-sm sm:text-base font-semibold hover:bg-[#1b3a31] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Get My Cleaning Price</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-4 rounded-full border border-[#244B40]/25 text-[#244B40] text-sm sm:text-base font-semibold hover:bg-[#F7F7F2] transition-colors duration-200 whitespace-nowrap shrink-0"
              >
                Explore Cleaning Services
              </a>
            </div>
          </div>

          {/* Right Lifestyle Media Column */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-[2rem] overflow-hidden bg-[#F7F7F2] border border-[#244B40]/10 min-h-[280px] sm:min-h-[380px] lg:min-h-[460px]">
              <ResilientImage
                src={IMAGES.heroLivingRoom}
                alt="Sunlit modern Oklahoma City living room with linen sofa, oak coffee table, eucalyptus, and freshly cleaned hardwood floors"
                fallbackTitle="HappyCleans Oklahoma City"
                loading="eager"
                fetchPriority="high"
                width={1376}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Clean 4-column proposition strip placed below the split hero */}
        <div className="mt-12 pt-8 border-t border-[#244B40]/12 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {VALUE_HIGHLIGHTS.map((item) => (
            <div key={item.label} className="space-y-1">
              <p className="text-sm sm:text-base font-semibold text-[#244B40]">{item.label}</p>
              <p className="text-xs sm:text-sm text-[#26332E]/70">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
