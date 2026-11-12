import { CalendarCheck, Coffee, Home } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/happycleansData';

const STEP_ICONS = [CalendarCheck, Home, Coffee];

interface HowItWorksSectionProps {
  onStartBooking: () => void;
}

export function HowItWorksSection({ onStartBooking }: HowItWorksSectionProps) {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#F7F7F2] border-y border-[#244B40]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#244B40]/80 mb-3">
              How HappyCleans Works
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight text-[#244B40] font-medium">
              From booking to breathing easy in three simple steps.
            </h2>
          </div>

          <button
            type="button"
            onClick={onStartBooking}
            className="self-start md:self-auto px-6 py-3 rounded-full border border-[#244B40]/25 text-sm font-semibold text-[#244B40] hover:bg-[#244B40] hover:text-[#FFF9F2] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Preview Your Cleaning Setup
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {HOW_IT_WORKS_STEPS.map((item, idx) => {
            const Icon = STEP_ICONS[idx] ?? Home;
            return (
              <div
                key={item.step}
                className="rounded-[1.75rem] bg-[#FFF9F2] border border-[#244B40]/10 p-8 sm:p-9 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-serif text-xl font-medium text-[#244B40] tabular-nums">
                      {item.step} — {item.title}
                    </span>
                    <div className="w-11 h-11 rounded-full bg-[#A9C7B2]/30 flex items-center justify-center text-[#244B40]">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-[#26332E]/85">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
