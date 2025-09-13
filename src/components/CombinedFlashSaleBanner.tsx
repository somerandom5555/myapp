'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CombinedFlashSaleBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-25T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl mb-8 mx-4 lg:mx-0 border border-white/15 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/25 via-orange-500/25 to-yellow-400/25" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 p-5 md:p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <Link
              href="/signal-premium"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 rounded-full text-white font-bold text-sm shadow-md shadow-red-500/25 transition-all duration-300"
            >
              <span className="text-yellow-300">⚡</span>
              FLASH SALE
              <span className="text-yellow-300">⚡</span>
            </Link>

            <h2 className="mt-3 text-lg md:text-xl font-bold">
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Unlock 120+ Trading Channels (Diamond Plan)
              </span>
            </h2>

            <div className="mt-2">
              <p className="text-[12px] md:text-sm font-semibold text-red-100">🚨 LIMITED OFFER TILL 25 SEPTEMBER 2025</p>
              <p className="text-sm md:text-base font-semibold text-white">
                ⏰ Flash Sale: Starting at $400 Yearly • 95% OFF Till 25 September 2025
              </p>
              <p className="text-xs md:text-sm font-medium text-emerald-300 mt-1">
                ✅ Free Trial Available for Proof — Contact via Telegram/WhatsApp
              </p>
              <div className="mt-2 inline-flex items-center gap-2 rounded-md bg-white/10 px-2.5 py-1">
                <span className="text-yellow-300">⚡</span>
                <span className="text-[12px] md:text-sm text-white/90 font-mono">
                  Ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </span>
              </div>
            </div>
          </div>

          <div className="md:ml-4">
            <Link href="/signal-premium" className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-2 text-sm md:text-base font-medium text-white transition-colors">
              <span className="text-yellow-300">⚡</span>
              Grab Offer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
