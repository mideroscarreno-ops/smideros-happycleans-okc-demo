import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Info,
  Mail,
  Phone,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  CLEANING_SERVICES,
  FrequencyId,
  RECURRING_FREQUENCIES,
  ServiceId,
} from '../data/happycleansData';

interface BookingQuoteSectionProps {
  selectedService: ServiceId;
  selectedFrequency: FrequencyId;
  prefilledZip: string;
  onChangeService: (service: ServiceId) => void;
  onChangeFrequency: (frequency: FrequencyId) => void;
}

const PROPERTY_SIZES = [
  'Under 1,200 sq ft',
  '1,200 – 1,800 sq ft',
  '1,800 – 2,500 sq ft',
  '2,500 – 3,500 sq ft',
  '3,500+ sq ft',
];

const BEDROOM_OPTIONS = ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5+ Bedrooms'];
const BATHROOM_OPTIONS = ['1 Bathroom', '1.5 Bathrooms', '2 Bathrooms', '2.5 Bathrooms', '3+ Bathrooms'];

const STEPS = [
  { num: 1, title: 'Service & Frequency' },
  { num: 2, title: 'Property Details' },
  { num: 3, title: 'Contact & Next Steps' },
];

export function BookingQuoteSection({
  selectedService,
  selectedFrequency,
  prefilledZip,
  onChangeService,
  onChangeFrequency,
}: BookingQuoteSectionProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [zipCode, setZipCode] = useState(prefilledZip || '');
  const [propertySize, setPropertySize] = useState(PROPERTY_SIZES[1]);
  const [bedrooms, setBedrooms] = useState(BEDROOM_OPTIONS[2]);
  const [bathrooms, setBathrooms] = useState(BATHROOM_OPTIONS[2]);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [previewReady, setPreviewReady] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (prefilledZip) {
      setZipCode(prefilledZip);
    }
  }, [prefilledZip]);

  const currentServiceObj =
    CLEANING_SERVICES.find((s) => s.id === selectedService) ?? CLEANING_SERVICES[0];
  const currentFreqObj =
    RECURRING_FREQUENCIES.find((f) => f.id === selectedFrequency) ?? RECURRING_FREQUENCIES[0];

  const handleSelectService = (id: ServiceId) => {
    onChangeService(id);
    if (id === 'one-time' || id === 'deep' || id === 'move') {
      if (selectedFrequency !== 'one-time' && id === 'one-time') {
        onChangeFrequency('one-time');
      }
    } else if (id === 'regular' && selectedFrequency === 'one-time') {
      onChangeFrequency('biweekly');
    }
    setPreviewReady(false);
  };

  const handleSelectFrequency = (freq: FrequencyId) => {
    onChangeFrequency(freq);
    if (freq !== 'one-time' && selectedService === 'one-time') {
      onChangeService('regular');
    }
    setPreviewReady(false);
  };

  const validateStep2 = () => {
    const nextErrors: Record<string, string> = {};
    if (!/^\d{5}$/.test(zipCode.trim())) {
      nextErrors.zipCode = 'Please enter a valid 5-digit Oklahoma ZIP code.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const validateStep3 = () => {
    const nextErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      nextErrors.fullName = 'Please enter your name.';
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!/^\d{5}$/.test(zipCode.trim())) {
      nextErrors.zipCode = 'A valid 5-digit ZIP code is needed.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      setErrors({});
      setStep(2);
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
      }
    }
  };

  const handlePrepareSummary = () => {
    if (validateStep3()) {
      setPreviewReady(true);
    }
  };

  const buildSummaryText = () => {
    return [
      `HappyCleans Oklahoma City — Home Cleaning Summary`,
      `Service: ${currentServiceObj.title}`,
      `Frequency: ${currentFreqObj.label}`,
      `ZIP Code: ${zipCode || 'Not entered'}`,
      `Property Size: ${propertySize}`,
      `Bedrooms / Bathrooms: ${bedrooms}, ${bathrooms}`,
      `Name: ${fullName || 'Not entered'}`,
      `Email: ${email || 'Not entered'}`,
      phone ? `Phone: ${phone}` : null,
      notes ? `Notes: ${notes}` : null,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(buildSummaryText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const mailtoInquiryHref = `mailto:${BUSINESS_INFO.email}?subject=${encodeURIComponent(
    `Cleaning Quote Inquiry — ${currentServiceObj.title} (${zipCode || 'OKC Area'})`
  )}&body=${encodeURIComponent(buildSummaryText())}`;

  return (
    <section id="booking" className="py-20 md:py-28 bg-[#F7F7F2] border-y border-[#244B40]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-10">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-[#244B40]/80 mb-3">
            Unified Quote &amp; Booking Preparation · Redesign Concept Preview
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight text-[#244B40] font-medium">
            Get My Cleaning Price
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#26332E]/80">
            Organize your service type, frequency, and home details in one guided flow—then
            continue directly to HappyCleans’ official booking portal for live flat-rate pricing
            and available times.
          </p>
        </div>

        {/* Main Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left 8 Columns: Guided Step-by-Step Builder */}
          <div className="lg:col-span-8 rounded-[2rem] bg-[#FFF9F2] border border-[#244B40]/12 p-6 sm:p-10">
            {/* Step Progress Indicator */}
            <div
              aria-label="Booking preparation progress"
              className="flex flex-wrap items-center gap-3 sm:gap-6 pb-6 mb-8 border-b border-[#244B40]/12"
            >
              {STEPS.map((item) => {
                const isActive = step === item.num;
                const isDone = step > item.num;
                return (
                  <button
                    key={item.num}
                    type="button"
                    onClick={() => {
                      if (item.num <= step) {
                        setErrors({});
                        setStep(item.num as 1 | 2 | 3);
                        setPreviewReady(false);
                      } else if (item.num === 2) {
                        setErrors({});
                        setStep(2);
                        setPreviewReady(false);
                      } else if (item.num === 3) {
                        if (validateStep2()) {
                          setStep(3);
                          setPreviewReady(false);
                        } else {
                          setStep(2);
                        }
                      }
                    }}
                    className={`inline-flex items-center gap-2.5 text-left py-1.5 cursor-pointer transition-colors ${
                      isActive
                        ? 'text-[#244B40] font-semibold'
                        : isDone
                        ? 'text-[#244B40]/85 font-medium'
                        : 'text-[#26332E]/45 font-medium'
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full inline-flex items-center justify-center text-xs font-semibold tabular-nums ${
                        isActive
                          ? 'bg-[#244B40] text-[#FFF9F2]'
                          : isDone
                          ? 'bg-[#A9C7B2]/45 text-[#244B40]'
                          : 'bg-[#F7F7F2] text-[#26332E]/55 border border-[#244B40]/15'
                      }`}
                    >
                      {isDone ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : item.num}
                    </span>
                    <span className="text-sm whitespace-nowrap">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* STEP 1: Service & Frequency */}
            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#244B40] mb-1.5">
                    1. Choose your cleaning service
                  </h3>
                  <p className="text-sm text-[#26332E]/75 mb-5">
                    Select the type of visit that matches what your home needs right now.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {CLEANING_SERVICES.map((service) => {
                      const active = selectedService === service.id;
                      return (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => handleSelectService(service.id)}
                          aria-pressed={active}
                          className={`text-left p-5 rounded-2xl border transition-colors duration-200 cursor-pointer ${
                            active
                              ? 'bg-[#244B40] text-[#FFF9F2] border-[#244B40]'
                              : 'bg-[#F7F7F2] text-[#26332E] border-[#244B40]/12 hover:border-[#244B40]/35'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <span
                              className={`text-xs font-medium ${
                                active ? 'text-[#A9C7B2]' : 'text-[#244B40]/70'
                              }`}
                            >
                              {service.subtitle}
                            </span>
                            {active && <Check className="w-4 h-4 text-[#A9C7B2]" aria-hidden="true" />}
                          </div>
                          <p className="font-serif text-lg font-medium">{service.title}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Separate Frequency Selector */}
                <div className="pt-6 border-t border-[#244B40]/10">
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#244B40] mb-1.5">
                    2. Select cleaning frequency
                  </h3>
                  <p className="text-sm text-[#26332E]/75 mb-5">
                    Choose a single visit or a recurring schedule. Recurring schedules automatically
                    pair with Regular Cleaning.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {RECURRING_FREQUENCIES.map((freq) => {
                      const active = selectedFrequency === freq.id;
                      return (
                        <button
                          key={freq.id}
                          type="button"
                          onClick={() => handleSelectFrequency(freq.id)}
                          aria-pressed={active}
                          className={`min-h-[48px] px-4 py-3 rounded-xl border text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                            active
                              ? 'bg-[#A9C7B2]/40 border-[#244B40] text-[#244B40]'
                              : 'bg-[#F7F7F2] border-[#244B40]/12 text-[#26332E]/85 hover:border-[#244B40]/30'
                          }`}
                        >
                          {freq.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#244B40] text-[#FFF9F2] text-sm font-semibold hover:bg-[#1b3a31] transition-colors cursor-pointer"
                  >
                    <span>Continue to Property Details</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Property Details */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#244B40] mb-1.5">
                    Tell us about your home
                  </h3>
                  <p className="text-sm text-[#26332E]/75">
                    HappyCleans structures flat-rate pricing around home size, bedrooms,
                    bathrooms, and service scope.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-zip"
                      className="block text-sm font-semibold text-[#244B40] mb-2"
                    >
                      ZIP Code <span className="text-[#26332E]/60 font-normal">(Required)</span>
                    </label>
                    <input
                      id="quote-zip"
                      type="text"
                      inputMode="numeric"
                      maxLength={5}
                      value={zipCode}
                      onChange={(e) => {
                        setZipCode(e.target.value.replace(/\D/g, ''));
                        if (errors.zipCode) setErrors((prev) => ({ ...prev, zipCode: '' }));
                      }}
                      placeholder="e.g., 73116"
                      className="w-full h-12 px-4 rounded-xl bg-[#F7F7F2] border border-[#244B40]/20 text-sm text-[#26332E] focus:border-[#244B40]"
                    />
                    {errors.zipCode && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-[#9B2C2C]">
                        {errors.zipCode}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-size"
                      className="block text-sm font-semibold text-[#244B40] mb-2"
                    >
                      Approximate Property Size{' '}
                      <span className="text-[#26332E]/60 font-normal">(Required)</span>
                    </label>
                    <select
                      id="quote-size"
                      value={propertySize}
                      onChange={(e) => setPropertySize(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-[#F7F7F2] border border-[#244B40]/20 text-sm text-[#26332E] focus:border-[#244B40]"
                    >
                      {PROPERTY_SIZES.map((sz) => (
                        <option key={sz} value={sz}>
                          {sz}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-bedrooms"
                      className="block text-sm font-semibold text-[#244B40] mb-2"
                    >
                      Bedrooms <span className="text-[#26332E]/60 font-normal">(Required)</span>
                    </label>
                    <select
                      id="quote-bedrooms"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-[#F7F7F2] border border-[#244B40]/20 text-sm text-[#26332E] focus:border-[#244B40]"
                    >
                      {BEDROOM_OPTIONS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-bathrooms"
                      className="block text-sm font-semibold text-[#244B40] mb-2"
                    >
                      Bathrooms <span className="text-[#26332E]/60 font-normal">(Required)</span>
                    </label>
                    <select
                      id="quote-bathrooms"
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                      className="w-full h-12 px-4 rounded-xl bg-[#F7F7F2] border border-[#244B40]/20 text-sm text-[#26332E] focus:border-[#244B40]"
                    >
                      {BATHROOM_OPTIONS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#244B40]/25 text-sm font-semibold text-[#244B40] hover:bg-[#F7F7F2] transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#244B40] text-[#FFF9F2] text-sm font-semibold hover:bg-[#1b3a31] transition-colors cursor-pointer"
                  >
                    <span>Continue to Contact Details</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Details & Transparent Next Steps */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#244B40] mb-1.5">
                    Contact details &amp; next steps
                  </h3>
                  <p className="text-sm text-[#26332E]/75">
                    Prepare your inquiry summary below. Because this site is an independent redesign
                    concept, no live appointment or payment is charged here—your next step connects
                    directly to HappyCleans’ official channels.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quote-name"
                      className="block text-sm font-semibold text-[#244B40] mb-2"
                    >
                      Full Name <span className="text-[#26332E]/60 font-normal">(Required)</span>
                    </label>
                    <input
                      id="quote-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
                      }}
                      placeholder="Your name"
                      className="w-full h-12 px-4 rounded-xl bg-[#F7F7F2] border border-[#244B40]/20 text-sm text-[#26332E] focus:border-[#244B40]"
                    />
                    {errors.fullName && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-[#9B2C2C]">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-email"
                      className="block text-sm font-semibold text-[#244B40] mb-2"
                    >
                      Email Address{' '}
                      <span className="text-[#26332E]/60 font-normal">(Required)</span>
                    </label>
                    <input
                      id="quote-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
                      }}
                      placeholder="you@example.com"
                      className="w-full h-12 px-4 rounded-xl bg-[#F7F7F2] border border-[#244B40]/20 text-sm text-[#26332E] focus:border-[#244B40]"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 text-xs font-medium text-[#9B2C2C]">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="quote-phone"
                      className="block text-sm font-semibold text-[#244B40] mb-2"
                    >
                      Phone Number <span className="text-[#26332E]/60 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="quote-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(405) 555-0199"
                      className="w-full h-12 px-4 rounded-xl bg-[#F7F7F2] border border-[#244B40]/20 text-sm text-[#26332E] focus:border-[#244B40]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="quote-notes"
                      className="block text-sm font-semibold text-[#244B40] mb-2"
                    >
                      Home Priorities or Notes{' '}
                      <span className="text-[#26332E]/60 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="quote-notes"
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g., Pet-friendly home, focus on kitchen"
                      className="w-full h-12 px-4 rounded-xl bg-[#F7F7F2] border border-[#244B40]/20 text-sm text-[#26332E] focus:border-[#244B40]"
                    />
                  </div>
                </div>

                {!previewReady ? (
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#244B40]/25 text-sm font-semibold text-[#244B40] hover:bg-[#F7F7F2] transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={handlePrepareSummary}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#244B40] text-[#FFF9F2] text-sm font-semibold hover:bg-[#1b3a31] transition-colors cursor-pointer"
                    >
                      <span>Prepare My Booking Summary</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                ) : (
                  <div
                    role="status"
                    className="rounded-2xl bg-[#A9C7B2]/25 border border-[#244B40]/20 p-6 space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-[#244B40] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="font-serif text-lg font-medium text-[#244B40]">
                          Your home summary is ready for HappyCleans
                        </h4>
                        <p className="text-sm text-[#26332E]/85 mt-1 leading-relaxed">
                          This interactive form is a concept demonstration and has not submitted a
                          live reservation or charged a payment. Use one of the verified HappyCleans
                          options below to view live flat-rate pricing and schedule your visit:
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-1">
                      <a
                        href={BUSINESS_INFO.urls.book}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#244B40] text-[#FFF9F2] text-sm font-semibold hover:bg-[#1b3a31] transition-colors"
                      >
                        <span>Open Official Booking on HappyCleans.com</span>
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </a>

                      <a
                        href={mailtoInquiryHref}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FFF9F2] border border-[#244B40]/25 text-[#244B40] text-sm font-semibold hover:bg-[#F7F7F2] transition-colors"
                      >
                        <Mail className="w-4 h-4" aria-hidden="true" />
                        <span>Email Summary to HappyCleans</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#FFF9F2] border border-[#244B40]/25 text-[#244B40] text-sm font-semibold hover:bg-[#F7F7F2] transition-colors cursor-pointer"
                      >
                        <Copy className="w-4 h-4" aria-hidden="true" />
                        <span>{copied ? 'Summary Copied' : 'Copy Details'}</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right 4 Columns: Live Selection Summary & Transparent Official Portal Route */}
          <aside className="lg:col-span-4 rounded-[2rem] bg-[#244B40] text-[#FFF9F2] p-7 sm:p-8 space-y-6">
            <div>
              <p className="text-xs font-medium text-[#A9C7B2] mb-1">Your Selection Summary</p>
              <h3 className="font-serif text-2xl font-medium text-[#FFF9F2]">
                {currentServiceObj.title}
              </h3>
              <p className="text-sm text-[#FFF9F2]/75 mt-1">{currentFreqObj.label} Schedule</p>
            </div>

            <dl className="space-y-3 py-5 border-y border-[#FFF9F2]/15 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[#FFF9F2]/70">Service</dt>
                <dd className="font-medium text-right">{currentServiceObj.title}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[#FFF9F2]/70">Frequency</dt>
                <dd className="font-medium text-right">{currentFreqObj.label}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[#FFF9F2]/70">ZIP Code</dt>
                <dd className="font-medium tabular-nums text-right">{zipCode || 'Pending'}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[#FFF9F2]/70">Home Size</dt>
                <dd className="font-medium text-right">{propertySize}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-[#FFF9F2]/70">Layout</dt>
                <dd className="font-medium text-right">
                  {bedrooms}, {bathrooms}
                </dd>
              </div>
            </dl>

            <div className="rounded-xl bg-[#FFF9F2]/10 p-4 flex items-start gap-3">
              <Info className="w-4 h-4 text-[#A9C7B2] shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-[#FFF9F2]/85">
                Live flat-rate pricing and appointment availability are calculated directly in the
                official HappyCleans booking system—never estimated or simulated here.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={BUSINESS_INFO.urls.book}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-5 rounded-full bg-[#F5C8B0] text-[#26332E] text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#f1baa0] transition-colors"
              >
                <span>Go to Official Booking Portal</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={BUSINESS_INFO.phoneHref}
                className="w-full py-3 px-5 rounded-full border border-[#FFF9F2]/25 text-[#FFF9F2] text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-[#FFF9F2]/10 transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Prefer to call? {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
