import { ArrowRight, CalendarClock, Check } from 'lucide-react';
import {
  CLEANING_SERVICES,
  FrequencyId,
  RECURRING_FREQUENCIES,
  ServiceId,
} from '../data/happycleansData';
import { ResilientImage } from './ResilientImage';

interface ServicesShowcaseProps {
  onSelectService: (serviceId: ServiceId, frequencyId: FrequencyId) => void;
}

export function ServicesShowcase({ onSelectService }: ServicesShowcaseProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Intro */}
        <div className="max-w-2xl mb-14 md:mb-18">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#244B40]/80 mb-3">
            Cleaning Services · Tailored to Your Home
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight text-[#244B40] font-medium">
            Thoughtful care for every kind of clean.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#26332E]/80">
            Whether you need steady weekly upkeep or a detailed seasonal reset, HappyCleans pairs
            your home with vetted cleaning partners equipped for the job.
          </p>
        </div>

        {/* Editorial Asymmetric Service Showcase */}
        <div className="space-y-12 md:space-y-16">
          {CLEANING_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch rounded-[2rem] bg-[#F7F7F2] border border-[#244B40]/10 overflow-hidden"
              >
                {/* Media Column */}
                <div
                  className={`lg:col-span-6 min-h-[260px] sm:min-h-[340px] ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <ResilientImage
                    src={service.image}
                    alt={service.imageAlt}
                    fallbackTitle={service.title}
                    loading="lazy"
                    width={service.id === 'one-time' ? 1376 : 1200}
                    height={service.id === 'one-time' ? 768 : 896}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-between ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-medium text-[#244B40]/75 mb-3">
                      <span className="tabular-nums">{service.number}</span>
                      <span aria-hidden="true">·</span>
                      <span>{service.subtitle}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#244B40] tracking-tight">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-base leading-relaxed text-[#26332E]/85">
                      {service.description}
                    </p>

                    <ul className="mt-6 space-y-2.5 border-t border-[#244B40]/10 pt-5">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#26332E]/80"
                        >
                          <Check
                            className="w-4 h-4 text-[#244B40] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <button
                      type="button"
                      onClick={() => onSelectService(service.id, service.recommendedFrequency)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#244B40] text-[#FFF9F2] text-sm font-semibold hover:bg-[#1b3a31] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>{service.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Recurring Cleaning Rhythm Band (connects naturally with Regular Cleaning without duplicating it as an unrelated product) */}
        <div className="mt-14 md:mt-20 rounded-[2rem] bg-[#244B40] text-[#FFF9F2] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-[#A9C7B2] mb-3">
                <CalendarClock className="w-4 h-4" aria-hidden="true" />
                <span>05 · Recurring Cleaning Schedules</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#FFF9F2]">
                Flexible frequencies built around Regular Cleaning.
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#FFF9F2]/80">
                Recurring service pairs routine house cleaning with the cadence that works best for
                your home—weekly, every other week, or monthly—with no long-term lock-in.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RECURRING_FREQUENCIES.filter((f) => f.id !== 'one-time').map((freq) => (
                <button
                  key={freq.id}
                  type="button"
                  onClick={() => onSelectService('regular', freq.id)}
                  className="text-left p-5 rounded-2xl bg-[#FFF9F2]/8 border border-[#FFF9F2]/15 hover:bg-[#FFF9F2]/14 transition-colors duration-200 cursor-pointer group"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-serif text-lg font-medium text-[#FFF9F2]">
                      {freq.label}
                    </span>
                    <ArrowRight
                      className="w-4 h-4 text-[#A9C7B2] group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#FFF9F2]/75 leading-relaxed">
                    {freq.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
