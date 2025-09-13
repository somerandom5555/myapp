import Link from "next/link";

export default function Footer() {
  const companyLinks = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ];

  const legalLinks = [
    { name: "FAQ", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "AML Policy", href: "/aml" }
  ];

  return (
    <footer className="border-t border-neutral-900/50 bg-[#0b0b0e]/80 backdrop-blur dark:border-neutral-700 dark:bg-gray-900/80 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Company Section */}
          <div>
            <h3 className="text-base font-semibold text-white dark:text-neutral-100 mb-3">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-base font-semibold text-white dark:text-neutral-100 mb-3">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-base font-semibold text-white dark:text-neutral-100 mb-3">
              Contact Information
            </h3>
            <div className="space-y-2 text-neutral-400 dark:text-neutral-300 text-sm">
              <p>WCEGA Tower, 21 Bukit Batok Cres</p>
              <p>Singapore 658065</p>
              <p>For business, partnership, investment or any other queries contact via Whatsapp First</p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 dark:border-neutral-700 mt-4 pt-3">
          <p className="text-center text-neutral-400 dark:text-neutral-300 text-sm">
            © 2021 TradersPool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
