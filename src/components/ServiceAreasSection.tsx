import { FormEvent, useState } from 'react';
import { ArrowUpRight, CheckCircle2, Info, MapPin, Search } from 'lucide-react';
import {
  BUSINESS_INFO,
  KNOWN_OKC_ZIP_MAP,
  SERVICE_COMMUNITIES,
} from '../data/happycleansData';

interface ServiceAreasSectionProps {
  onSelectZipForQuote: (zip: string) => void;
}

type LookupResult =
  | { status: 'idle' }
  | { status: 'matched'; label: string; detail: string; zip?: string }
  | { status: 'unconfirmed'; query: string }
  | { status: 'invalid'; message: string };

export function ServiceAreasSection({ onSelectZipForQuote }: ServiceAreasSectionProps) {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<LookupResult>({ status: 'idle' });

  const handleCheckArea = (e: FormEvent) => {
    e.preventDefault();
    const cleaned = query.trim();

    if (!cleaned) {
      setResult({
        status: 'invalid',
        message: 'Please enter a city name or 5-digit Oklahoma ZIP code.',
      });
      return;
    }

    if (/^\d{5}$/.test(cleaned)) {
      const matchedArea = KNOWN_OKC_ZIP_MAP[cleaned];
      if (matchedArea) {
        setResult({
          status: 'matched',
          label: `${cleaned} — ${matchedArea}`,
          detail:
            'This ZIP code falls within the published Oklahoma City metro communities served by HappyCleans. Exact street address eligibility is confirmed during booking on HappyCleans.com.',
          zip: cleaned,
        });
      } else {
        setResult({ status: 'unconfirmed', query: cleaned });
      }
      return;
    }

    const lower = cleaned.toLowerCase();
    const matchedCommunity = SERVICE_COMMUNITIES.find(
      (c) =>
        c.name.toLowerCase() === lower ||
        c.name.toLowerCase().includes(lower) ||
        lower.includes(c.name.toLowerCase())
    );

    if (matchedCommunity) {
      setResult({
        status: 'matched',
        label: matchedCommunity.name,
        detail: `${matchedCommunity.name} is listed among HappyCleans’ Oklahoma City service communities (${matchedCommunity.note}). Enter your exact street address at HappyCleans.com/book to confirm coverage.`,
      });
    } else {
      setResult({ status: 'unconfirmed', query: cleaned });
    }
  };

  return (
    <section id="service-areas" className="py-20 md:py-28 bg-[#FFF9F2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Intro + Interactive Location Checker */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[#244B40]/80 mb-3">
                Oklahoma City Metro Coverage
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl leading-[1.15] tracking-tight text-[#244B40] font-medium">
                Serving Oklahoma City and surrounding communities.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#26332E]/80">
                Check whether your city or ZIP code aligns with HappyCleans’ published Oklahoma City
                metro service communities. Final street-address availability is always verified in
                the official booking portal.
              </p>
            </div>

            <form
              onSubmit={handleCheckArea}
              className="rounded-[1.5rem] bg-[#F7F7F2] border border-[#244B40]/12 p-6 space-y-4"
            >
              <label
                htmlFor="service-area-input"
                className="block text-sm font-semibold text-[#244B40]"
              >
                Check your city or ZIP code
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search
                    className="w-4 h-4 text-[#244B40]/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="service-area-input"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g., Edmond or 73116"
                    className="w-full h-11 pl-10 pr-4 rounded-xl bg-[#FFF9F2] border border-[#244B40]/20 text-sm text-[#26332E] placeholder:text-[#26332E]/45 focus:border-[#244B40]"
                  />
                </div>
                <button
                  type="submit"
                  className="h-11 px-5 rounded-xl bg-[#244B40] text-[#FFF9F2] text-sm font-semibold hover:bg-[#1b3a31] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Check Area
                </button>
              </div>

              {result.status === 'invalid' && (
                <p role="alert" className="text-xs font-medium text-[#9B2C2C]">
                  {result.message}
                </p>
              )}

              {result.status === 'matched' && (
                <div
                  role="status"
                  className="rounded-xl bg-[#FFF9F2] border border-[#244B40]/15 p-4 space-y-2"
                >
                  <div className="flex items-start gap-2.5 text-[#244B40]">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm font-semibold">{result.label}</span>
                  </div>
                  <p className="text-xs leading-relaxed text-[#26332E]/80">{result.detail}</p>
                  <div className="pt-1 flex flex-wrap gap-4">
                    {result.zip && (
                      <button
                        type="button"
                        onClick={() => onSelectZipForQuote(result.zip!)}
                        className="text-xs font-semibold text-[#244B40] underline underline-offset-4 cursor-pointer"
                      >
                        Use {result.zip} in quote preview
                      </button>
                    )}
                    <a
                      href={BUSINESS_INFO.urls.book}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#244B40] hover:underline"
                    >
                      <span>Confirm address on HappyCleans.com</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              )}

              {result.status === 'unconfirmed' && (
                <div
                  role="status"
                  className="rounded-xl bg-[#FFF9F2] border border-[#244B40]/15 p-4 space-y-2"
                >
                  <div className="flex items-start gap-2.5 text-[#244B40]">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm font-semibold">
                      Coverage for “{result.query}” requires direct verification
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-[#26332E]/80">
                    This lookup covers HappyCleans’ primary listed OKC metro cities and common ZIP
                    codes. To verify whether partner coverage extends to your exact address, check{' '}
                    <a
                      href={BUSINESS_INFO.urls.book}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-medium text-[#244B40]"
                    >
                      HappyCleans.com/book
                    </a>{' '}
                    or call{' '}
                    <a href={BUSINESS_INFO.phoneHref} className="underline font-medium text-[#244B40]">
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                    .
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Confirmed Communities List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SERVICE_COMMUNITIES.map((area) => (
              <div
                key={area.name}
                className="rounded-2xl bg-[#F7F7F2] border border-[#244B40]/10 px-5 py-4 flex items-start gap-3"
              >
                <MapPin className="w-4 h-4 text-[#244B40] shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#244B40]">{area.name}</h3>
                  <p className="text-xs leading-relaxed text-[#26332E]/70 mt-0.5">{area.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
