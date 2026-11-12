import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../data/happycleansData';

interface FinalCtaAndContactProps {
  onStartQuote: () => void;
}

export function FinalCtaAndContact({ onStartQuote }: FinalCtaAndContactProps) {
  return (
    <>
      {/* Final Editorial CTA */}
      <section className="py-20 md:py-28 bg-[#244B40] text-[#FFF9F2]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#A9C7B2] mb-4">
            HappyCleans of Oklahoma City
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl leading-[1.12] tracking-tight font-medium text-[#FFF9F2] mx-auto max-w-3xl">
            A Beautifully Clean Home Is Just a Few Clicks Away.
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-[#FFF9F2]/80 max-w-xl mx-auto">
            Find the right cleaning service for your home and enjoy more time for everything else.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={onStartQuote}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#F5C8B0] text-[#26332E] text-sm sm:text-base font-semibold hover:bg-[#f1baa0] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Get My Cleaning Price</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href={BUSINESS_INFO.urls.book}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-[#FFF9F2]/30 text-[#FFF9F2] text-sm sm:text-base font-semibold hover:bg-[#FFF9F2]/10 transition-colors whitespace-nowrap shrink-0"
            >
              <span>Book on HappyCleans.com</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Verified Contact Experience */}
      <section id="contact" className="py-20 md:py-24 bg-[#FFF9F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[#244B40]/80">
                Contact &amp; Support
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl leading-[1.15] tracking-tight text-[#244B40] font-medium">
                {BUSINESS_INFO.name}
              </h2>
              <p className="text-base leading-relaxed text-[#26332E]/80">
                Have questions about a recurring schedule, specialty home notes, or coverage in the
                Oklahoma City metro? Reach HappyCleans directly by phone or email, or head straight
                to online booking.
              </p>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.urls.okc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#244B40] hover:underline"
                >
                  <span>Visit HappyCleans Oklahoma City Page</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Click to Call */}
              <a
                href={BUSINESS_INFO.phoneHref}
                className="rounded-[1.5rem] bg-[#F7F7F2] border border-[#244B40]/12 p-7 hover:border-[#244B40]/35 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#A9C7B2]/35 flex items-center justify-center text-[#244B40] mb-5">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                <p className="text-xs font-medium text-[#244B40]/70">Phone</p>
                <p className="mt-1 font-serif text-xl font-medium text-[#244B40] group-hover:underline">
                  {BUSINESS_INFO.phoneDisplay}
                </p>
                <p className="mt-2 text-xs text-[#26332E]/70">Tap to call HappyCleans OKC</p>
              </a>

              {/* Clickable Email */}
              <a
                href={BUSINESS_INFO.emailHref}
                className="rounded-[1.5rem] bg-[#F7F7F2] border border-[#244B40]/12 p-7 hover:border-[#244B40]/35 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#A9C7B2]/35 flex items-center justify-center text-[#244B40] mb-5">
                  <Mail className="w-4 h-4" aria-hidden="true" />
                </div>
                <p className="text-xs font-medium text-[#244B40]/70">Email</p>
                <p className="mt-1 font-serif text-xl font-medium text-[#244B40] break-all group-hover:underline">
                  {BUSINESS_INFO.email}
                </p>
                <p className="mt-2 text-xs text-[#26332E]/70">
                  Direct email for quotes &amp; support
                </p>
              </a>

              {/* Physical Mailing Address */}
              <div className="sm:col-span-2 rounded-[1.5rem] bg-[#F7F7F2] border border-[#244B40]/12 p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#A9C7B2]/35 flex items-center justify-center text-[#244B40] shrink-0">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#244B40]/70">Oklahoma City Address</p>
                    <p className="mt-1 font-serif text-lg font-medium text-[#244B40]">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="mt-1 text-xs text-[#26332E]/75">
                      Serving Oklahoma City, Edmond, Norman, Moore, Yukon, Midwest City, Bethany,
                      Nichols Hills &amp; nearby communities
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onStartQuote}
                  className="px-6 py-3 rounded-full bg-[#244B40] text-[#FFF9F2] text-sm font-semibold hover:bg-[#1b3a31] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Prepare Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
