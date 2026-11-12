import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO, FAQ_ITEMS } from '../data/happycleansData';

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#244B40]/80">
              Frequently Asked Questions
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl leading-[1.15] tracking-tight text-[#244B40] font-medium">
              Clear answers before you book.
            </h2>
            <p className="text-base leading-relaxed text-[#26332E]/80">
              Everything you need to know about scheduling, supplies, flat-rate pricing, partner
              preferences, and HappyCleans policies.
            </p>
            <div className="pt-2">
              <a
                href={BUSINESS_INFO.urls.faq}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#244B40] hover:underline"
              >
                <span>Read full FAQ on HappyCleans.com</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Accessible Accordion */}
          <div className="lg:col-span-8 divide-y divide-[#244B40]/12 border-y border-[#244B40]/12">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="py-5">
                  <button
                    type="button"
                    id={`faq-btn-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left flex items-start justify-between gap-4 py-1 cursor-pointer group"
                  >
                    <div>
                      <span className="block text-xs font-medium text-[#244B40]/65 mb-1">
                        {item.topic}
                      </span>
                      <span className="font-serif text-lg sm:text-xl font-medium text-[#244B40] group-hover:text-[#1b3a31]">
                        {item.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#244B40] shrink-0 mt-2 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${item.id}`}
                      className="mt-3 pr-8 text-sm sm:text-base leading-relaxed text-[#26332E]/85"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
