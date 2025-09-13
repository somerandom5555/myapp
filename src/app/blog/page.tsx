import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '../../data/blogPosts';

// Generate a simple chart-like SVG data URL deterministically from a slug
function generateChartImage(slug: string) {
  // Simple hash to produce deterministic numbers from slug
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  const rand = (seed: number) => {
    const x = Math.abs(Math.sin(seed) * 10000);
    return x - Math.floor(x);
  };

  const points: number[] = [];
  const count = 9;
  for (let i = 0; i < count; i++) {
    const v = 20 + Math.floor(70 * rand(h + i)); // 20..90 (% height)
    points.push(v);
  }

  const width = 600;
  const height = 320;
  const step = width / (count - 1);
  const coords = points
    .map((p, i) => `${(i * step).toFixed(2)},${((100 - p) / 100 * height).toFixed(2)}`)
    .join(' ');

  const polyline = `<polyline fill="none" stroke="white" stroke-width="2.5" points="${coords}" stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/>`;

  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}' preserveAspectRatio='xMidYMid slice'>
      <defs>
        <linearGradient id='g1' x1='0' x2='1' y1='0' y2='1'>
          <stop offset='0' stop-color='%23106bff'/>
          <stop offset='1' stop-color='%238a2be2'/>
        </linearGradient>
        <linearGradient id='g2' x1='0' x2='0' y1='0' y2='1'>
          <stop offset='0' stop-color='rgba(255,255,255,0.06)'/>
          <stop offset='1' stop-color='rgba(0,0,0,0.12)'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(%23g1)' />
      <rect width='100%' height='100%' fill='url(%23g2)' />
      ${polyline}
      <g fill='white' opacity='0.9' font-family='Arial, Helvetica, sans-serif' font-size='12'>
        <text x='12' y='18'>${slug.replace(/-/g, ' ').slice(0, 30)}</text>
      </g>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const metadata: Metadata = {
  title: 'Blog - TRADERSPOOL',
  description: 'Trading insights, market analysis, and AI-powered investment strategies from the TradersPool community.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0B0C10] via-[#1F2937] to-[#111827] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 pb-4">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent mb-6">
              Traderspool Blog
            </h1>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest trading insights, market analysis, and AI-powered strategies from our community of expert traders.
            </p>
          </div>

          {/* Posts - grouped into three vertical columns */}
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {['BTC Value Areas', 'BTC Daily Analysis', 'Whales & Institutions'].map((category) => (
              <div key={category}>
                <h3 className="text-sm text-white/70 font-semibold mb-3">{category}</h3>
                <div className="space-y-3">
                  {blogPosts.filter(p => p.category === category).map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white/5 hover:bg-white/8 border border-white/8 rounded-lg p-3 transition-all duration-150">
                      <div>
                        <div className="text-xs text-white/60 mb-1">{post.date}</div>
                        <h4 className="text-sm font-semibold mb-1 group-hover:text-white">{post.title}</h4>
                        <p className="text-xs text-white/70">{post.excerpt}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </main>
  );
}
