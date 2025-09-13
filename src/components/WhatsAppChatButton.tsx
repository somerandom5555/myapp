'use client';

import React, { useState, useRef, useEffect } from 'react';

const WhatsAppChatButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowHelp(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const whatsappUrl = "https://wa.me/18632101640?text=Hello%20from%20your%20site";
  const telegramUrl = "https://t.me/+16673164844";
  const discordUrl = "https://discord.gg/Yc7dVvGV";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Help toggle */}
      <div className="mb-3 text-right" ref={containerRef}>
        <button
          onClick={() => setShowHelp((s) => !s)}
          aria-expanded={showHelp}
          aria-label="Help menu"
          className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/80 hover:bg-black/70 text-white border border-white/10 shadow-md transform scale-90 hover:scale-105 transition-transform duration-200"
        >
          <span className="text-lg font-bold text-blue-500">?</span>
        </button>

        {showHelp && (
          <div className="mt-2 w-64 bg-black/95 text-white rounded-lg shadow-xl p-3 space-y-2">
            <a href="/contact" className="flex items-center gap-3 p-2 hover:bg-white/5 rounded">
              <svg className="w-5 h-5 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6.5A2.5 2.5 0 014.5 4h15A2.5 2.5 0 0122 6.5v11A2.5 2.5 0 0119.5 20h-15A2.5 2.5 0 012 17.5v-11z" stroke="currentColor" strokeWidth="0.8"/><path d="M3 6.5l8.5 5L20 6.5" stroke="currentColor" strokeWidth="0.8"/></svg>
              <div>
                <div className="text-sm font-semibold">Contact Support</div>
                <div className="text-xs text-white/70">Get one-on-one help</div>
              </div>
            </a>

            <a href="/faq" className="flex items-center gap-3 p-2 hover:bg-white/5 rounded">
              <svg className="w-5 h-5 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="0.8"/><path d="M8 8h8v2H8zM8 12h8v2H8z" stroke="currentColor" strokeWidth="0.8"/></svg>
              <div>
                <div className="text-sm font-semibold">Knowledge Base</div>
                <div className="text-xs text-white/70">Find articles and guides</div>
              </div>
            </a>

            <a href="/contact?subject=Feature%20Suggestion" className="flex items-center gap-3 p-2 hover:bg-white/5 rounded">
              <svg className="w-5 h-5 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3 6 6 1-4.5 4 1 6L12 17l-5.5 3 1-6L3 9l6-1 3-6z" stroke="currentColor" strokeWidth="0.8"/></svg>
              <div>
                <div className="text-sm font-semibold">Feature suggestion</div>
                <div className="text-xs text-white/70">Share ideas to improve</div>
              </div>
            </a>

            <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 hover:bg-white/5 rounded">
              <svg className="w-5 h-5 text-white/90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.082.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.163-.39-.405-.874-.617-1.249a.077.077 0 00-.082-.037 19.736 19.736 0 00-4.885 1.515.068.068 0 00-.032.027C.533 9.045-.319 13.579.099 18.057a.082.082 0 00.031.056c2.052 1.507 4.041 2.4 5.992 3.011a.077.077 0 00.084-.027c.46-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.103c-.652-.247-1.27-.54-1.872-.892a.077.077 0 01-.007-.127c.126-.094.252-.19.371-.291a.073.073 0 01.077-.01c3.927 1.788 8.18 1.788 12.061 0a.072.072 0 01.078.009c.12.101.245.197.371.29a.077.077 0 01-.006.127c-.601.352-1.219.645-1.871.892a.076.076 0 00-.04.104c.36.7.775 1.365 1.225 1.994a.076.076 0 00.084.028c1.957-.611 3.947-1.505 6-3.011a.077.077 0 00.03-.056c.5-5.177-.838-9.634-3.549-13.661a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" stroke="currentColor" strokeWidth="0.6"/></svg>
              <div>
                <div className="text-sm font-semibold">Community Forum</div>
                <div className="text-xs text-white/70">Join the community</div>
              </div>
            </a>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 items-end">
        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          aria-label="Chat with us on WhatsApp"
        >
          <div className={`
            w-12 h-12 md:w-16 md:h-16
            bg-green-500 hover:bg-green-600
            rounded-full
            flex items-center justify-center
            shadow-lg hover:shadow-2xl
            transition-all duration-200 ease-in-out
            transform scale-90 hover:scale-105
            cursor-pointer
            relative
            overflow-hidden
            ring-2 ring-green-400/0 hover:ring-green-400/40
          `}>

            {/* WhatsApp Icon */}
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.951 3.706"/>
            </svg>
          </div>
        </a>

        {/* Telegram button */}
        <a
          href={telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label="Chat with us on Telegram"
        >
          <div className={`
            w-12 h-12 md:w-16 md:h-16
            bg-blue-500 hover:bg-blue-600
            rounded-full
            flex items-center justify-center
            shadow-lg hover:shadow-2xl
            transition-all duration-200 ease-in-out
            transform scale-90 hover:scale-105
            cursor-pointer
            relative
            overflow-hidden
            ring-2 ring-blue-400/0 hover:ring-blue-400/40
          `}>

            {/* Telegram Icon */}
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
          </div>
        </a>

        {/* Discord button - placed below Telegram */}
        <a
          href={discordUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label="Join our Discord server"
        >
          <div className={`
            w-12 h-12 md:w-16 md:h-16
            bg-[#5865F2] hover:bg-[#4752c4]
            rounded-full
            flex items-center justify-center
            shadow-lg hover:shadow-2xl
            transition-all duration-200 ease-in-out
            transform scale-90 hover:scale-105
            cursor-pointer
            relative
            overflow-hidden
            ring-2 ring-[#5865F2]/0 hover:ring-[#5865F2]/40
          `}>

            {/* Discord Icon */}
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white relative z-10"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.082.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.163-.39-.405-.874-.617-1.249a.077.077 0 00-.082-.037 19.736 19.736 0 00-4.885 1.515.068.068 0 00-.032.027C.533 9.045-.319 13.579.099 18.057a.082.082 0 00.031.056c2.052 1.507 4.041 2.4 5.992 3.011a.077.077 0 00.084-.027c.46-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.103c-.652-.247-1.27-.54-1.872-.892a.077.077 0 01-.007-.127c.126-.094.252-.19.371-.291a.073.073 0 01.077-.01c3.927 1.788 8.18 1.788 12.061 0a.072.072 0 01.078.009c.12.101.245.197.371.29a.077.077 0 01-.006.127c-.601.352-1.219.645-1.871.892a.076.076 0 00-.04.104c.36.7.775 1.365 1.225 1.994a.076.076 0 00.084.028c1.957-.611 3.947-1.505 6-3.011a.077.077 0 00.03-.056c.5-5.177-.838-9.634-3.549-13.661a.061.061 0 00-.03-.028zM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.174 1.095 2.156 2.418 0 1.334-.946 2.419-2.156 2.419z" />
            </svg>
          </div>
        </a>
      </div>

      {/* Mobile bottom spacing adjustment */}
      <div className="md:hidden h-2"></div>
    </div>
  );
};

export default WhatsAppChatButton;
