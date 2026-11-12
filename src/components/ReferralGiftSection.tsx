import { ArrowUpRight, Gift, HeartHandshake } from 'lucide-react';
import { BUSINESS_INFO } from '../data/happycleansData';

export function ReferralGiftSection() {
  return (
    <section className="py-16 md:py-24 bg-[#F7F7F2] border-y border-[#244B40]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#244B40]/80 mb-3">
            Share the Clean Home Feeling
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-[1.15] tracking-tight text-[#244B40] font-medium">
            Referral rewards &amp; digital gift cards.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Referral Rewards */}
          <div className="rounded-[2rem] bg-[#FFF9F2] border border-[#244B40]/10 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-full bg-[#A9C7B2]/35 flex items-center justify-center text-[#244B40] mb-6">
                <HeartHandshake className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#244B40]">Referral Rewards</h3>
              <p className="mt-3 text-base leading-relaxed text-[#26332E]/85">
                HappyCleans offers a referral program for existing customers who introduce friends
                and neighbors in Oklahoma City to their first home cleaning. Current reward
                details and eligibility terms are published directly by HappyCleans.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#244B40]/10">
              <a
                href={BUSINESS_INFO.urls.home}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#244B40] hover:underline"
              >
                <span>View published referral details at HappyCleans.com</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Gift Cards */}
          <div className="rounded-[2rem] bg-[#F5C8B0]/30 border border-[#244B40]/10 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-full bg-[#FFF9F2] flex items-center justify-center text-[#244B40] mb-6">
                <Gift className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-[#244B40]">
                Cleaning Gift Cards
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#26332E]/85">
                Give a housewarming gift, support new parents, or treat someone special to an
                effortless reset. HappyCleans provides digital gift cards that can be sent online
                and applied toward residential cleaning visits.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-[#244B40]/10">
              <a
                href={BUSINESS_INFO.urls.home}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#244B40] hover:underline"
              >
                <span>Explore gift cards on HappyCleans.com</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
