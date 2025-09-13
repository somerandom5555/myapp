export type BlogPost = {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image?: string;
  category: 'BTC Value Areas' | 'BTC Daily Analysis' | 'Whales & Institutions';
};

export const blogPosts: BlogPost[] = [
  {
    title: 'Analysis of Monday Playbook in BTC CME Futures',
    slug: 'btc-cme-monday-playbook',
    date: 'September 2, 2025',
    excerpt: 'The Monday Playbook involves weekend gaps in BTC CME futures causing Monday volatility with sweeps of highs and lows that often revert to the 0.5 equilibrium. This article breaks down phases, key levels and trade setups.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F75da4fd91a5e42b99780e230ac3e5130%2F5682121579f2446695b6aa261906d589?format=webp&width=1200',
    category: 'BTC Value Areas'
  },
  {
    title: 'BTC Daily Analysis — 25 August 2025',
    slug: 'btc-daily-analysis-25-august-25',
    date: 'August 25, 2025',
    excerpt: 'Balanced weekly price action, CME gaps around 11,600 and unfilled NPOCs. A detailed breakdown of weekly and lower timeframe structure and trading setups.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F9e7d1d55e0074c05b262a3fbbb560894%2Fd2b915d163b7443ea26e83bb3a739882',
    category: 'BTC Daily Analysis'
  },
  {
    title: 'BTC Daily Analysis — 26 August 2025',
    slug: 'btc-daily-analysis-26-august-25',
    date: 'August 26, 2025',
    excerpt: 'Daily technical analysis highlighting structure, key levels and trade ideas for BTC across multiple timeframes.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Feeaaa092ccbd42afa859df4281251554%2F7b61d76e65f1441a8d3c05379e15c65e?format=webp&width=800',
    category: 'BTC Daily Analysis'
  },
  {
    title: 'BTC Daily Analysis — 27 August 2025',
    slug: 'btc-daily-analysis-27-august-25',
    date: 'August 27, 2025',
    excerpt: 'Market recap and technical setups for BTC focusing on volume profile and auction structure.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Feeaaa092ccbd42afa859df4281251554%2F18d9875c5385455eba368d8313cccaa2?format=webp&width=800',
    category: 'BTC Daily Analysis'
  },
  {
    title: 'BTC Daily Analysis — 28 August 2025',
    slug: 'btc-daily-analysis-28-august-25',
    date: 'August 28, 2025',
    excerpt: 'Short-form analysis of intraday structure and likely targets based on recent price action.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F75da4fd91a5e42b99780e230ac3e5130%2F09a6bf3bf50743e7b44fc7d43de50b8b?format=webp&width=900',
    category: 'BTC Daily Analysis'
  },
  {
    title: 'BTC Daily Analysis — 29 August 2025',
    slug: 'btc-daily-analysis-29-august-25',
    date: 'August 29, 2025',
    excerpt: 'Market commentary and trade ideas following the latest session, with emphasis on key levels and scenario planning.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F75da4fd91a5e42b99780e230ac3e5130%2F7917b463eee64132b888a11c060f0ff7?format=webp&width=1000',
    category: 'BTC Daily Analysis'
  },
  {
    title: 'BTC Daily Fibonacci Analysis — 25 August 2025',
    slug: 'btc-daily-fibonacci-analysis-25-august-25',
    date: 'August 25, 2025',
    excerpt: 'Fibonacci-based analysis for BTC, identifying confluences and retracement targets useful for trade management.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F9e7d1d55e0074c05b262a3fbbb560894%2F1e74e1e4a9184e7989e6fc810ea24bcc',
    category: 'BTC Value Areas'
  },
  {
    title: "James Wynn — Market Manipulation",
    slug: 'james-wynn-market-manipulation',
    date: 'August 2025',
    excerpt: 'A deep-dive into alleged market manipulation techniques and their observable footprints in recent price action.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fbbfeae742d9e408393a892b705a9405a%2F01b7455e5ddd4ca98fec9b4f608465cb?format=webp&width=1200',
    category: 'Whales & Institutions'
  },
  {
    title: 'Machi Brothers Trading Analysis',
    slug: 'machi-brothers-trading-analysis',
    date: 'August 2025',
    excerpt: 'Analysis and commentary on a notable trading approach that has been circulating in the community.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F984a425177d14c83a7d5bd1fcd34d098%2Fdeb1f1e431d8484d9a53757395d271c5?format=webp&width=800',
    category: 'Whales & Institutions'
  },
  {
    title: 'Solana Fibonacci Analysis',
    slug: 'solana-fibonacci-analysis',
    date: 'August 2025',
    excerpt: 'Fibonacci retracements and extension levels for SOL with trade scenarios and risk points.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2Fbbfeae742d9e408393a892b705a9405a%2F146cbf3bd3fd424eb8433725449252c9?format=webp&width=800',
    category: 'BTC Value Areas'
  }
];
