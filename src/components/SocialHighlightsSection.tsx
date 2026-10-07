import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Instagram,
  Linkedin,
  Twitter,
  Play,
  Eye,
  Heart,
  Share2,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import FadeIn from './common/FadeIn';
import { SocialPostMediaVisual } from './social/SocialPostMediaVisual';

export interface SocialPost {
  id: string;
  platform: 'instagram' | 'linkedin' | 'twitter';
  handle: string;
  title: string;
  caption: string;
  views: string;
  likes: string;
  shares: string;
  date: string;
  mediaUrl: string;
  tag: string;
  link: string;
  breakdown: string[];
}

export const TOP_SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'post-1',
    platform: 'instagram',
    handle: '@instaresume.io',
    title: 'How We Scaled from 70K to 90K Followers in 1 Year',
    caption:
      'The exact organic growth engine on @instaresume.io: 15-day content sprints, high-retention resume frameworks, and 50+ viral Reels that generated over 8.2M views.',
    views: '8.2M',
    likes: '624K',
    shares: '94K',
    date: 'Recent Viral',
    mediaUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    tag: 'Instaresume Growth',
    link: 'https://instagram.com/instaresume.io',
    breakdown: [
      'Scaled @instaresume.io from 70K to 90K+ organic followers in 1 year',
      'Average watch percentage: 142% with strong 1.2s hook',
      'Converted 18,400+ profile visits into active platform users',
    ],
  },
  {
    id: 'post-2',
    platform: 'instagram',
    handle: '@instaresume.io · AI Engineering',
    title: 'The AI Prompt System Cutting API Costs by 40%',
    caption:
      'Deconstructing our production OpenAI pipeline: Prompt caching, token compression, and MCP server orchestration on a 5M+ user platform.',
    views: '6.4M',
    likes: '480K',
    shares: '68K',
    date: 'Top Trending',
    mediaUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    tag: 'AI Engineering',
    link: 'https://instagram.com/instaresume.io',
    breakdown: [
      'Engineered for developers and technical founders',
      '12,000+ saves in the first 48 hours',
      'Directly drove enterprise consultation requests',
    ],
  },
  {
    id: 'post-3',
    platform: 'linkedin',
    handle: 'Manan Arora · SEO & Marketing',
    title: 'Zero to 400,000 Monthly Organic Visitors: Our SEO Architecture',
    caption:
      'We did not build backlinks manually. Here is how programmatic technical SEO, Sanity CMS headless rendering, and long-tail query clusters scaled our traffic 40x.',
    views: '1.8M',
    likes: '42K',
    shares: '6.2K',
    date: 'Case Study',
    mediaUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    tag: 'SEO & Marketing',
    link: 'https://www.linkedin.com',
    breakdown: [
      '10K to 400K monthly sessions audited via GA4',
      'Core Web Vitals improved from 64 to 98',
      '350+ comments debating programmatic vs manual blogs',
    ],
  },
  {
    id: 'post-4',
    platform: 'instagram',
    handle: 'Web Dev & Architecture · Instaresume.io',
    title: '5 Web Dev Mistakes Slowing Down 90% of React Apps',
    caption:
      'From re-render cascades to bundle bloat: Real Chrome DevTools profiles from our 5M user codebase that yielded a 35% speedup.',
    views: '5.6M',
    likes: '410K',
    shares: '52K',
    date: 'Viral Tech Reel',
    mediaUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    tag: 'React Performance',
    link: 'https://instagram.com/instaresume.io',
    breakdown: [
      'Demonstrated Chrome DevTools profiler in 30 seconds',
      'Over 95% retention through the 40-second mark',
      'Spurred 2,500+ DMs asking for component templates',
    ],
  },
  {
    id: 'post-5',
    platform: 'twitter',
    handle: 'Marketing Operations & Strategy',
    title: 'The Modern Content Engine: 1 Marketer + AI = 10-Person Team',
    caption:
      'A breakdown of how I plan 15-day calendars with Buffer & Canva, draft with Claude Code, delegate via Trello, and handle 5 channels solo.',
    views: '920K',
    likes: '19.4K',
    shares: '4.8K',
    date: 'Viral Thread',
    mediaUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    tag: 'Marketing Ops',
    link: 'https://x.com',
    breakdown: [
      'Step-by-step Trello sprint delegation methodology',
      'Detailed prompt templates for high-conversion hooks',
      'Bookmarked by 8,200+ marketing leads',
    ],
  },
  {
    id: 'post-6',
    platform: 'instagram',
    handle: 'AI Product Engineering',
    title: 'Building a Chrome Extension in 48 Hours with AI',
    caption:
      'Live demonstration of building the LinkedIn Optimization Chrome Extension using Cursor, React, and MCP servers without boilerplate friction.',
    views: '5.1M',
    likes: '390K',
    shares: '44K',
    date: 'Build in Public',
    mediaUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    tag: 'Product Launch',
    link: 'https://instagram.com/instaresume.io',
    breakdown: [
      'End-to-end demo from manifest.json to production store',
      'High conversion to Chrome Web Store installs',
      'Featured on multiple dev newsletters',
    ],
  },
];

interface SocialHighlightsSectionProps {
  onSelectPost: (post: SocialPost) => void;
}

export const SocialHighlightsSection: React.FC<SocialHighlightsSectionProps> = ({ onSelectPost }) => {
  const [filter, setFilter] = useState<'all' | 'instagram' | 'linkedin' | 'twitter'>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredPosts =
    filter === 'all'
      ? TOP_SOCIAL_POSTS
      : TOP_SOCIAL_POSTS.filter((post) => post.platform === filter);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="social-highlights"
      className="bg-[#0C0C0C] dark:bg-[#0C0C0C] light:bg-[#F3F4F6] text-[#D7E2EA] dark:text-[#D7E2EA] light:text-[#111827] py-20 sm:py-28 px-5 sm:px-8 md:px-10 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeIn delay={0} y={30}>
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold block mb-2">
                Proven Viral Distribution
              </span>
              <h2
                className="hero-heading font-black uppercase leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
              >
                Social Highlights
              </h2>
              <p className="text-sm sm:text-base text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-[#4B5563] max-w-2xl mt-4 font-light leading-relaxed">
                Live selection of top-performing content, viral Reels, and high-impact technical essays reaching
                over <strong>100M+ total impressions</strong> across Instagram, LinkedIn, and X.
              </p>
            </FadeIn>
          </div>

          {/* Controls: Category Filter + Scroll Navigation Arrows */}
          <FadeIn delay={0.15} y={20} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Filter buttons as functional segmented controls */}
            <div className="flex items-center gap-1 p-1 bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-full border border-white/10 dark:border-white/10 light:border-black/10">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-white text-black shadow-md'
                    : 'text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-[#4B5563] hover:text-white dark:hover:text-white light:hover:text-black'
                }`}
              >
                All ({TOP_SOCIAL_POSTS.length})
              </button>
              <button
                onClick={() => setFilter('instagram')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'instagram'
                    ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-md'
                    : 'text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-[#4B5563] hover:text-white dark:hover:text-white light:hover:text-black'
                }`}
              >
                <Instagram className="w-3 h-3" />
                <span>Reels</span>
              </button>
              <button
                onClick={() => setFilter('linkedin')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'linkedin'
                    ? 'bg-[#0077B5] text-white shadow-md'
                    : 'text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-[#4B5563] hover:text-white dark:hover:text-white light:hover:text-black'
                }`}
              >
                <Linkedin className="w-3 h-3" />
                <span>LinkedIn</span>
              </button>
              <button
                onClick={() => setFilter('twitter')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'twitter'
                    ? 'bg-white text-black shadow-md'
                    : 'text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-[#4B5563] hover:text-white dark:hover:text-white light:hover:text-black'
                }`}
              >
                <Twitter className="w-3 h-3" />
                <span>X / Twitter</span>
              </button>
            </div>

            {/* Scroll buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                title="Scroll Left"
                aria-label="Scroll left"
                className="p-2.5 rounded-full border border-white/20 dark:border-white/20 light:border-black/20 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                title="Scroll Right"
                aria-label="Scroll right"
                className="p-2.5 rounded-full border border-white/20 dark:border-white/20 light:border-black/20 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Horizontal Scrolling Grid */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth no-scrollbar select-none"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              onClick={() => onSelectPost(post)}
              className="w-[290px] sm:w-[330px] md:w-[360px] shrink-0 rounded-3xl bg-[#141416] dark:bg-[#141416] light:bg-white border border-[#272930] dark:border-[#272930] light:border-slate-200 overflow-hidden shadow-xl hover:border-[#B600A8]/80 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              {/* Card Media Preview Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/60">
                <SocialPostMediaVisual post={post} />

                {/* Platform Badge & Tag */}
                <div className="absolute top-3 left-3 flex items-center gap-2 z-20">
                  <div className="p-1.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/10">
                    {post.platform === 'instagram' && <Instagram className="w-3.5 h-3.5 text-pink-400" />}
                    {post.platform === 'linkedin' && <Linkedin className="w-3.5 h-3.5 text-sky-400" />}
                    {post.platform === 'twitter' && <Twitter className="w-3.5 h-3.5 text-white" />}
                  </div>
                  <span className="bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10">
                    {post.tag}
                  </span>
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#B600A8] transition-all shadow-lg">
                    <Play className="w-4 h-4 ml-0.5 fill-current" />
                  </div>
                </div>

                {/* Big Metric Badge */}
                <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-white text-xs font-bold flex items-center gap-1.5 z-20">
                  <TrendingUp className="w-3.5 h-3.5 text-[#B600A8]" />
                  <span>{post.views} views</span>
                </div>
              </div>

              {/* Card Content Details */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#D7E2EA]/50 dark:text-[#D7E2EA]/50 light:text-slate-400 mb-2">
                    <span>{post.handle}</span>
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-base font-semibold text-white dark:text-white light:text-slate-900 group-hover:text-[#BBCCD7] transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-600 mt-2 font-light line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                </div>

                {/* Bottom Metrics Bar */}
                <div className="mt-5 pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-100 flex items-center justify-between text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-500">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 text-rose-500" />
                      <span>{post.likes}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="w-3.5 h-3.5 text-sky-400" />
                      <span>{post.shares}</span>
                    </span>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B600A8] group-hover:translate-x-1 transition-transform">
                    View Breakdown →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialHighlightsSection;
