import { useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/happycleansData';

interface NavbarProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'FAQs', href: '#faqs' },
];

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF9F2]/95 backdrop-blur-md border-b border-[#244B40]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element clean wordmark */}
        <a
          href="#home"
          className="font-serif text-2xl font-semibold tracking-tight text-[#244B40] whitespace-nowrap shrink-0 focus-visible:rounded"
        >
          HappyCleans
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#26332E]/85"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#244B40] hover:text-[#244B40] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary CTA + clean Call Us text action */}
        <div className="flex items-center gap-5 shrink-0">
          <a
            href={BUSINESS_INFO.phoneHref}
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-[#244B40] hover:text-[#26332E] transition-colors whitespace-nowrap shrink-0"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Call Us</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#244B40] text-[#FFF9F2] text-sm font-semibold hover:bg-[#1b3a31] transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Get My Cleaning Price
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-full text-[#244B40] hover:bg-[#A9C7B2]/25 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden bg-[#FFF9F2] border-t border-[#244B40]/10 px-5 py-6 space-y-5"
        >
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
            <a
              href="#home"
              onClick={handleNavClick}
              className="py-3 text-base font-medium text-[#26332E] border-b border-[#244B40]/10"
            >
              Home
            </a>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 text-base font-medium text-[#26332E] border-b border-[#244B40]/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleNavClick}
              className="py-3 text-base font-medium text-[#26332E] border-b border-[#244B40]/10"
            >
              Contact
            </a>
          </nav>

          <div className="flex flex-col gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 px-6 rounded-full bg-[#244B40] text-[#FFF9F2] text-base font-semibold text-center cursor-pointer"
            >
              Get My Cleaning Price
            </button>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full py-3 px-6 rounded-full border border-[#244B40]/25 text-[#244B40] text-sm font-semibold inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Call Us · {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
