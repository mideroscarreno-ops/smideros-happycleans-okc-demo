import { ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/happycleansData';

export function Footer() {
  return (
    <footer className="bg-[#F7F7F2] border-t border-[#244B40]/12 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#244B40]/12">
          <div className="md:col-span-5 space-y-3">
            <a href="#home" className="font-serif text-2xl font-semibold text-[#244B40]">
              HappyCleans
            </a>
            <p className="text-sm leading-relaxed text-[#26332E]/75 max-w-sm">
              {BUSINESS_INFO.name} — Residential cleaning booking platform connecting local homes
              with vetted cleaning partners. {BUSINESS_INFO.tagline}
            </p>
            <p className="text-xs text-[#26332E]/65">{BUSINESS_INFO.address}</p>
          </div>

          <div className="md:col-span-3 space-y-2.5 text-sm">
            <p className="font-semibold text-[#244B40]">Explore</p>
            <ul className="space-y-2 text-[#26332E]/80">
              <li>
                <a href="#services" className="hover:text-[#244B40]">
                  Cleaning Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#244B40]">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-happycleans" className="hover:text-[#244B40]">
                  Why HappyCleans
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#244B40]">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#service-areas" className="hover:text-[#244B40]">
                  Service Areas
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-[#244B40]">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5 text-sm">
            <p className="font-semibold text-[#244B40]">Official HappyCleans Links</p>
            <ul className="space-y-2 text-[#26332E]/80">
              <li>
                <a
                  href={BUSINESS_INFO.urls.okc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#244B40]"
                >
                  <span>Oklahoma City Page</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.urls.book}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#244B40]"
                >
                  <span>Online Booking Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.urls.faq}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#244B40]"
                >
                  <span>Official FAQ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href={BUSINESS_INFO.phoneHref} className="hover:text-[#244B40]">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={BUSINESS_INFO.emailHref} className="hover:text-[#244B40]">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#26332E]/65">
          <p>{BUSINESS_INFO.name}</p>
          <p>Independent website redesign concept by S.Mideros Agency.</p>
        </div>
      </div>
    </footer>
  );
}
