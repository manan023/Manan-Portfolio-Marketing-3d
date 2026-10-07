import React from 'react';
import {
  Sparkles,
  TrendingUp,
  Play,
  Heart,
  Share2,
  Bookmark,
  CheckCircle2,
  Zap,
  Cpu,
  Layers,
  Search,
  ExternalLink,
  Code2,
  Shield,
  Gauge,
  ArrowUpRight,
} from 'lucide-react';

// ==========================================
// PROJECT 02: VIRAL REEL & CONTENT ENGINE
// ==========================================

// 1. Project 02 - Left Top: Viral Reel Metrics (8.2M Views)
export const ViralReelsMetricsCard: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0E0E10] text-white p-4 sm:p-5 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 shadow-inner overflow-hidden relative">
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#B600A8]/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-white/90">
            Viral Reel #1 Breakdown
          </span>
        </div>
        <span className="text-[10px] bg-pink-500/20 text-pink-300 font-semibold px-2.5 py-0.5 rounded-full border border-pink-500/30">
          Peak Performance
        </span>
      </div>

      {/* Main Big Stats */}
      <div className="relative z-10 my-1 grid grid-cols-3 gap-2 text-center">
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-[10px] text-white/50 uppercase font-semibold">Views</div>
          <div className="text-xl sm:text-2xl font-black text-white mt-0.5">8.2M</div>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-[10px] text-white/50 uppercase font-semibold">Likes</div>
          <div className="text-xl sm:text-2xl font-black text-pink-400 mt-0.5">624K</div>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-[10px] text-white/50 uppercase font-semibold">Shares</div>
          <div className="text-xl sm:text-2xl font-black text-purple-300 mt-0.5">94K</div>
        </div>
      </div>

      {/* Retention stat */}
      <div className="relative z-10 bg-white/5 p-2.5 rounded-xl border border-white/5 flex items-center justify-between text-xs">
        <div>
          <span className="text-[10px] text-white/50 block">Average Watch Duration</span>
          <span className="font-bold text-white text-xs">142% Retention (Looped 2x)</span>
        </div>
        <span className="text-emerald-400 font-bold text-xs bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          +18.4K Follows
        </span>
      </div>
    </div>
  );
};

// 2. Project 02 - Left Bottom: Instagram Accounts Reached (8.5M in 30 Days)
export const InstagramAccountsReachedCard: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#121214] text-white p-4 sm:p-5 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 shadow-inner overflow-hidden relative">
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white/80">@instaresume.io</span>
            <span className="text-[10px] text-white/40">· Professional Dashboard</span>
          </div>
          <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            100% Organic
          </span>
        </div>

        {/* Milestone Callout */}
        <div className="mt-3 p-3 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30">
          <div className="text-[10px] uppercase font-bold text-purple-300 tracking-wider">
            30-Day Velocity
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white mt-1 tracking-tight">
            8.5M Accounts Reached
          </div>
          <p className="text-[11px] text-white/60 mt-1">
            Scaled from 8K → 70.4K+ followers with zero paid ads or boosted posts.
          </p>
        </div>
      </div>

      {/* Pinned viral themes */}
      <div className="space-y-1 pt-2 border-t border-white/10 text-xs">
        <div className="flex justify-between text-white/70 text-[11px]">
          <span>Interview Advice Series:</span>
          <span className="font-bold text-white">7.2M Reach</span>
        </div>
        <div className="flex justify-between text-white/70 text-[11px]">
          <span>Resume Hacks & Formatting:</span>
          <span className="font-bold text-white">8.2M Reach</span>
        </div>
      </div>
    </div>
  );
};

// 3. Project 02 - Right Tall: Viral Reels Engine Production Studio
export const ViralReelsEngineCard: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#09090B] text-white p-5 sm:p-7 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-pink-600/15 to-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-black text-white text-sm shadow-lg shadow-pink-500/30">
              ▶
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base text-white tracking-tight">
                Short-Form Content Production Engine
              </div>
              <div className="text-xs text-white/50">
                Trello Sprint Briefs · Hook Testing · Retention Engineering
              </div>
            </div>
          </div>

          <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-white/80 border border-white/10 font-medium">
            50+ Viral Reels
          </span>
        </div>

        {/* 3 Step Formula */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <span className="text-[10px] font-bold text-pink-400 uppercase tracking-wider block">
              Phase 1: Hook (1.2s)
            </span>
            <div className="text-xs font-semibold text-white mt-1">
              "Stop doing standard resume formatting in 2026..."
            </div>
            <div className="text-[10px] text-white/50 mt-1">Visual pattern interrupt</div>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block">
              Phase 2: Agitation (8s)
            </span>
            <div className="text-xs font-semibold text-white mt-1">
              "ATS systems reject 75% of CVs before recruiters look"
            </div>
            <div className="text-[10px] text-white/50 mt-1">High retention pacing</div>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
              Phase 3: Conversion
            </span>
            <div className="text-xs font-semibold text-white mt-1">
              "Comment 'RESUME' for the exact template"
            </div>
            <div className="text-[10px] text-white/50 mt-1">12,000+ DMs & site clicks</div>
          </div>
        </div>
      </div>

      {/* Visual Timeline & Milestone Bar */}
      <div className="relative z-10 bg-white/5 p-4 rounded-2xl border border-white/10 my-2">
        <div className="flex justify-between items-center text-xs mb-2">
          <span className="text-white/70 font-medium">Total Lifetime Organic Reel Impressions</span>
          <span className="text-pink-400 font-extrabold text-sm sm:text-base">~100M+ Views</span>
        </div>
        {/* Progress meter */}
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden p-0.5">
          <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full w-[94%]" />
        </div>
        <div className="flex justify-between text-[10px] text-white/40 mt-2">
          <span>Sprint 1: 5M views</span>
          <span>Sprint 2: 25M views</span>
          <span>Sprint 3: 65M views</span>
          <span className="text-white/80 font-bold">Milestone: 100M+</span>
        </div>
      </div>

      {/* Footer Details */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
        <span>Cross-Syndicated to Instagram Reels, LinkedIn Video, & YouTube Shorts</span>
        <span className="font-bold text-white">Full Organic Scaling</span>
      </div>
    </div>
  );
};

// ==========================================
// PROJECT 03: AI TOOLING & CHROME EXTENSION
// ==========================================

// 4. Project 03 - Left Top: LinkedIn Chrome Extension UI
export const LinkedInExtensionCard: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0D1117] text-white p-4 sm:p-5 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-blue-500/20 shadow-inner overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#0A66C2] flex items-center justify-center font-black text-xs text-white">
              in
            </div>
            <span className="text-xs font-bold text-white">LinkedIn Optimizer Extension</span>
          </div>
          <span className="text-[10px] bg-blue-500/20 text-blue-300 font-bold px-2 py-0.5 rounded border border-blue-500/30">
            Chrome Store
          </span>
        </div>

        {/* Profile Audit Score */}
        <div className="flex items-center justify-between my-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
          <div>
            <div className="text-[10px] text-white/50 uppercase font-semibold">Profile ATS Score</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-0.5">92 / 100</div>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 block mb-0.5">
              Top 5% Rank
            </span>
            <span className="text-[9px] text-white/40">14 Keywords Injected</span>
          </div>
        </div>
      </div>

      <div className="space-y-1 text-xs">
        <div className="flex items-center justify-between text-[11px] text-white/70">
          <span>Headline Optimization:</span>
          <span className="font-bold text-emerald-400">✓ Strong Impact</span>
        </div>
        <div className="flex items-center justify-between text-[11px] text-white/70">
          <span>Recruiter Search Visibility:</span>
          <span className="font-bold text-emerald-400">+340% Lift</span>
        </div>
      </div>
    </div>
  );
};

// 5. Project 03 - Left Bottom: OpenAI Prompt Caching & Token Compression
export const OpenAiPromptOptimizationCard: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#10141A] text-white p-4 sm:p-5 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-emerald-500/20 shadow-inner overflow-hidden relative">
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-white">OpenAI Prompt Pipeline</span>
          </div>
          <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
            -40% Cost Cut
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 my-2.5">
          <div className="bg-white/5 p-2 rounded-xl border border-white/5">
            <div className="text-[10px] text-white/50">Cache Hit Rate</div>
            <div className="text-xl font-black text-emerald-400 mt-0.5">78.4%</div>
          </div>
          <div className="bg-white/5 p-2 rounded-xl border border-white/5">
            <div className="text-[10px] text-white/50">Avg Latency</div>
            <div className="text-xl font-black text-cyan-300 mt-0.5">0.42s</div>
          </div>
        </div>
      </div>

      <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-[11px] text-white/70 flex items-center justify-between">
        <span>Token compression on 5M+ users</span>
        <span className="text-emerald-400 font-bold">$18,400+ Saved</span>
      </div>
    </div>
  );
};

// 6. Project 03 - Right Tall: Sanity Headless CMS & Programmatic SEO
export const SanityProgrammaticSeoCard: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0C0F14] text-white p-5 sm:p-7 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-600/15 to-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-blue-600 flex items-center justify-center font-black text-white text-sm shadow-lg shadow-emerald-500/30">
              ⚡
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base text-white tracking-tight">
                Sanity Headless CMS & Programmatic SEO Engine
              </div>
              <div className="text-xs text-white/50">
                Automated Page Generation · High-Speed Incremental Static Regeneration (ISR)
              </div>
            </div>
          </div>

          <span className="text-xs bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-medium">
            400K Organic Surge
          </span>
        </div>

        {/* 3 Architecture Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
              Headless Schema
            </div>
            <div className="text-xs font-semibold text-white mt-1">
              80+ Long-Tail Keywords
            </div>
            <div className="text-[10px] text-white/50 mt-1">
              Dynamic page templates for job titles & resume types
            </div>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <div className="text-[10px] font-bold text-blue-400 uppercase tracking-wider">
              Edge Generation
            </div>
            <div className="text-xs font-semibold text-white mt-1">
              Next.js 15 & NestJS API
            </div>
            <div className="text-[10px] text-white/50 mt-1">
              Sub-second static page deployment on Vercel
            </div>
          </div>

          <div className="bg-white/5 p-3 rounded-2xl border border-white/10">
            <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
              Core Web Vitals
            </div>
            <div className="text-xs font-semibold text-white mt-1">
              98/100 Lighthouse
            </div>
            <div className="text-[10px] text-white/50 mt-1">
              Zero layout shift & 1.1s Largest Contentful Paint
            </div>
          </div>
        </div>
      </div>

      {/* Code / Architecture Snippet Box */}
      <div className="relative z-10 bg-black/60 rounded-2xl p-4 border border-white/10 font-mono text-xs text-emerald-300 my-2">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-white/40">
          <span>sanity.config.ts · programmatic-seo-pipeline</span>
          <span className="text-emerald-400">Status: 200 OK</span>
        </div>
        <div className="pt-2 text-[11px] leading-relaxed text-gray-300">
          <span className="text-purple-400">export async function</span>{' '}
          <span className="text-blue-400">generateStaticParams</span>() {'{'}
          <br />
          &nbsp;&nbsp;<span className="text-purple-400">const</span> keywords ={' '}
          <span className="text-purple-400">await</span> sanityClient.fetch(
          <span className="text-amber-300">`*[_type == "resumeCategory"]`</span>);
          <br />
          &nbsp;&nbsp;<span className="text-purple-400">return</span> keywords.map(k =&gt; ({'{'}{' '}
          slug: k.slug.current {'}'}));
          <br />
          {'}'}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
        <span>Zero manual backlink farming · 100% Programmatic Content Architecture</span>
        <span className="font-bold text-white">400K+ Sessions Audited in GA4</span>
      </div>
    </div>
  );
};
