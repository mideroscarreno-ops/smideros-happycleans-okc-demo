import { IMAGES } from '../data/happycleansData';
import { ResilientImage } from './ResilientImage';

export function EmotionalValueSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F7F2] border-y border-[#244B40]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Editorial Bedroom Photography */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-[2rem] overflow-hidden border border-[#244B40]/10 bg-[#FFF9F2] aspect-[16/10]">
              <ResilientImage
                src={IMAGES.editorialBedroom}
                alt="Tranquil sunlit bedroom with crisp white linen bedding, warm peach knit throw, and oak bedside table"
                fallbackTitle="Peaceful Oklahoma City Home"
                loading="lazy"
                width={1376}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Editorial Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#244B40]/80">
              Less Cleaning · More Living
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.14] tracking-tight text-[#244B40] font-medium">
              Your Time Is Too Valuable to Spend Cleaning.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-[#26332E]/85 max-w-xl">
              Weekends across Oklahoma City shouldn’t disappear into scrubbing tubs, wiping
              baseboards, and catching up on floors. HappyCleans makes booking household help
              refreshingly straightforward—connecting you with vetted, background-checked
              cleaning partners at transparent flat-rate pricing.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#244B40]/12">
              <div className="pt-4">
                <h3 className="font-serif text-lg font-medium text-[#244B40]">
                  Scheduled around real life
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#26332E]/75">
                  Reserve online in minutes with clear service scopes and cashless checkout.
                </p>
              </div>
              <div className="pt-4">
                <h3 className="font-serif text-lg font-medium text-[#244B40]">
                  A calm, welcoming space
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#26332E]/75">
                  Step through your front door to gleaming floors, fresh kitchens, and open time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
