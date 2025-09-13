'use client';

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Navigation() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" }
  ];

  const pricingLinks = [
    { name: "Premiums", href: "/signal-premium" }
  ];


  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (pricingRef.current && !pricingRef.current.contains(event.target as Node)) {
        setPricingOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handlePricingToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPricingOpen(!pricingOpen);
    setAboutOpen(false); // Close other dropdown
  };

  const handleAboutToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setAboutOpen(!aboutOpen);
    setPricingOpen(false); // Close other dropdown
  };


  return (
    <nav className="flex items-center gap-1 mobile:gap-2 relative">
      <Link
        href="/"
        className="rounded-md px-2 mobile:px-3 tablet:px-4 py-1.5 mobile:py-2 text-xs mobile:text-sm text-white hover:bg-white/10 dark:text-neutral-200 dark:hover:bg-white/20 transition-all duration-200 whitespace-nowrap"
      >
        Home
      </Link>

      {/* Direct Blog Page Link (separate from dropdown) */}
      <Link
        href="/blog"
        className="rounded-md px-2 mobile:px-3 tablet:px-4 py-1.5 mobile:py-2 text-xs mobile:text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-200 whitespace-nowrap ml-2"
      >
        Blog
      </Link>

      {/* Pricing Dropdown */}
      <div
        ref={pricingRef}
        className="relative"
        onMouseEnter={() => setPricingOpen(true)}
        onMouseLeave={() => setPricingOpen(false)}
      >
        <button 
          onClick={handlePricingToggle}
          className="rounded-md px-2 mobile:px-3 tablet:px-4 py-1.5 mobile:py-2 text-xs mobile:text-sm text-white hover:bg-white/10 dark:text-neutral-200 dark:hover:bg-white/20 flex items-center gap-1 transition-all duration-200 whitespace-nowrap"
        >
          Pricing
          <ChevronDown 
            className={`w-3 h-3 mobile:w-4 mobile:h-4 transform transition-transform duration-200 ${
              pricingOpen ? 'rotate-180' : 'rotate-0'
            }`} 
          />
        </button>
        {pricingOpen && (
          <div className="absolute top-full left-0 mt-1 w-40 mobile:w-48 bg-[#0b0b0e]/95 backdrop-blur border border-neutral-800 rounded-md shadow-lg z-[100]">
            {pricingLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 mobile:px-4 py-2 mobile:py-3 text-xs mobile:text-sm text-neutral-300 hover:text-white hover:bg-white/10 transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
                onClick={() => setPricingOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* About Dropdown */}
      <div 
        ref={aboutRef}
        className="relative"
        onMouseEnter={() => setAboutOpen(true)}
        onMouseLeave={() => setAboutOpen(false)}
      >
        <button 
          onClick={handleAboutToggle}
          className="rounded-md px-2 mobile:px-3 tablet:px-4 py-1.5 mobile:py-2 text-xs mobile:text-sm text-white hover:bg-white/10 dark:text-neutral-200 dark:hover:bg-white/20 flex items-center gap-1 transition-all duration-200 whitespace-nowrap"
        >
          About
          <ChevronDown 
            className={`w-3 h-3 mobile:w-4 mobile:h-4 transform transition-transform duration-200 ${
              aboutOpen ? 'rotate-180' : 'rotate-0'
            }`} 
          />
        </button>
        {aboutOpen && (
          <div className="absolute top-full right-0 mt-1 w-40 mobile:w-48 bg-[#0b0b0e]/95 backdrop-blur border border-neutral-800 rounded-md shadow-lg z-[100] max-h-60 overflow-y-auto">
            {aboutLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 mobile:px-4 py-2 mobile:py-3 text-xs mobile:text-sm text-neutral-300 hover:text-white hover:bg-white/10 transition-colors duration-200 first:rounded-t-md last:rounded-b-md"
                onClick={() => setAboutOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
