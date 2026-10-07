import React from 'react';
import {
  TrendingUp,
  Zap,
  Search,
  Code2,
  Share2,
  Sparkles,
  Layers,
  Award,
  CheckCircle2,
  BarChart2,
  Play,
  Flame,
} from 'lucide-react';
import { SocialPost } from '../SocialHighlightsSection';

interface SocialPostMediaVisualProps {
  post: SocialPost;
  className?: string;
  showPlayIcon?: boolean;
}

export const SocialPostMediaVisual: React.FC<SocialPostMediaVisualProps> = ({
  post,
  className = '',
  showPlayIcon = true,
}) => {
  // Post 1: Instaresume 70K to 90K in 1 Year
  if (post.id === 'post-1') {
    return (
      <div className={`w-full h-full bg-[#120D1A] text-white p-3.5 flex flex-col justify-between font-['Inter',sans-serif] relative overflow-hidden select-none ${className}`}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-pink-600/25 to-purple-600/25 rounded-full blur-2xl pointer-events-none" />

        {/* Top bar */}
        <div className="relative z-10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 font-bold text-white">
            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
            <span>@instaresume.io</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/25">
            1 Year Growth
          </span>
        </div>

        {/* Big Growth Graphic */}
        <div className="relative z-10 my-auto py-1">
          <div className="text-[10px] uppercase font-bold text-pink-300 tracking-wider">
            Verified Instagram Follower Surge
          </div>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-2xl sm:text-3xl font-black text-white tracking-tight">70K → 90.4K+</span>
            <span className="text-xs font-bold text-emerald-400">+29% Net Organic</span>
          </div>

          {/* SVG Smooth Growth Curve */}
          <div className="w-full h-14 mt-1.5">
            <svg viewBox="0 0 260 50" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="growthGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="50%" stopColor="#d946ef" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              {/* Baseline */}
              <line x1="0" y1="42" x2="260" y2="42" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />
              {/* Curve */}
              <path
                d="M 5 40 Q 60 38, 110 30 T 190 18 T 255 6"
                fill="none"
                stroke="url(#growthGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="255" cy="6" r="4" fill="#fff" stroke="#d946ef" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Footer info */}
        <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
          <span>8.2M Peak Reel Views</span>
          <span className="font-semibold text-pink-300">142% Watch Retention</span>
        </div>
      </div>
    );
  }

  // Post 2: AI Prompt System & Cost Optimization
  if (post.id === 'post-2') {
    return (
      <div className={`w-full h-full bg-[#0B1219] text-white p-3.5 flex flex-col justify-between font-['Inter',sans-serif] relative overflow-hidden select-none ${className}`}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 font-bold text-white">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>OpenAI API Pipeline</span>
          </div>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/25">
            -40% Token Cost
          </span>
        </div>

        <div className="relative z-10 my-auto py-1">
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="bg-white/5 p-2 rounded-xl border border-white/5">
              <span className="text-[9px] text-white/50 block">Cache Hit Rate</span>
              <span className="text-xl font-black text-emerald-400">78.4%</span>
            </div>
            <div className="bg-white/5 p-2 rounded-xl border border-white/5">
              <span className="text-[9px] text-white/50 block">Avg Latency</span>
              <span className="text-xl font-black text-cyan-300">0.42s</span>
            </div>
          </div>
          <div className="mt-2 text-center bg-white/5 p-1 rounded-lg text-[10px] text-white/70">
            $18,400+ Saved on 5M+ Platform Requests
          </div>
        </div>

        <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
          <span>Prompt Caching & Compression</span>
          <span className="font-semibold text-emerald-400">MCP Server Live</span>
        </div>
      </div>
    );
  }

  // Post 3: Zero to 400K Organic Visitors (SEO & Sanity CMS)
  if (post.id === 'post-3') {
    return (
      <div className={`w-full h-full bg-[#0C1214] text-white p-3.5 flex flex-col justify-between font-['Inter',sans-serif] relative overflow-hidden select-none ${className}`}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 font-bold text-white">
            <Search className="w-3.5 h-3.5 text-blue-400" />
            <span>Technical SEO Architecture</span>
          </div>
          <span className="text-[10px] font-bold text-blue-300 bg-blue-500/15 px-2 py-0.5 rounded border border-blue-500/25">
            400K Sessions
          </span>
        </div>

        <div className="relative z-10 my-auto py-1">
          <div className="text-[10px] text-white/50 uppercase font-semibold">GA4 Organic Growth</div>
          <div className="text-2xl font-black text-white mt-0.5">10K → 400,000 / mo</div>
          <div className="flex items-center gap-2 mt-1.5 text-[10px]">
            <span className="bg-white/5 px-2 py-0.5 rounded text-emerald-400 font-bold border border-white/5">
              Rank #1.5 "biodata format"
            </span>
            <span className="text-white/50">80+ Long-Tail Clusters</span>
          </div>
        </div>

        <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
          <span>Sanity CMS + Next.js ISR</span>
          <span className="font-semibold text-cyan-300">0 Backlink Farming</span>
        </div>
      </div>
    );
  }

  // Post 4: 5 Web Dev Mistakes Slowing React Apps
  if (post.id === 'post-4') {
    return (
      <div className={`w-full h-full bg-[#10141D] text-white p-3.5 flex flex-col justify-between font-['Inter',sans-serif] relative overflow-hidden select-none ${className}`}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 font-bold text-white">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>React Performance Profile</span>
          </div>
          <span className="text-[10px] font-bold text-cyan-300 bg-cyan-500/15 px-2 py-0.5 rounded border border-cyan-500/25">
            -35% Latency
          </span>
        </div>

        <div className="relative z-10 my-auto py-1 font-mono text-[10px]">
          <div className="bg-black/60 p-2 rounded-xl border border-white/10 space-y-1">
            <div className="flex justify-between text-white/40 border-b border-white/5 pb-0.5">
              <span>Chrome DevTools Profiler</span>
              <span className="text-emerald-400">60 FPS Smooth</span>
            </div>
            <div className="text-emerald-300">
              ✓ Render cascade eliminated
            </div>
            <div className="text-cyan-300">
              ✓ Bundle split: 1.8MB → 320KB
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
          <span>Tested on 5M+ User Web App</span>
          <span className="font-semibold text-white/90">95% Watch Retention</span>
        </div>
      </div>
    );
  }

  // Post 5: Modern Content Engine (1 Marketer + AI = 10-Person Team)
  if (post.id === 'post-5') {
    return (
      <div className={`w-full h-full bg-[#15101A] text-white p-3.5 flex flex-col justify-between font-['Inter',sans-serif] relative overflow-hidden select-none ${className}`}>
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex items-center justify-between text-[11px]">
          <div className="flex items-center gap-1.5 font-bold text-white">
            <Layers className="w-3.5 h-3.5 text-purple-400" />
            <span>15-Day Content Engine</span>
          </div>
          <span className="text-[10px] font-bold text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded border border-purple-500/25">
            ~100M+ Views
          </span>
        </div>

        <div className="relative z-10 my-auto py-1">
          <div className="grid grid-cols-3 gap-1.5 text-center text-[9px]">
            <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
              <span className="text-pink-400 font-bold block">1. Hook</span>
              <span className="text-white/60">1.2s Interrupt</span>
            </div>
            <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
              <span className="text-purple-400 font-bold block">2. Story</span>
              <span className="text-white/60">8s Agitation</span>
            </div>
            <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
              <span className="text-emerald-400 font-bold block">3. DMs</span>
              <span className="text-white/60">12K+ Leads</span>
            </div>
          </div>
          <div className="mt-2 text-center text-[10px] text-white/70">
            Trello + Buffer + Claude Code Solo Workflow
          </div>
        </div>

        <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
          <span>5 Channels Orchestrated</span>
          <span className="font-semibold text-pink-300">8.2K Bookmarks</span>
        </div>
      </div>
    );
  }

  // Post 6: Building Chrome Extension in 48 Hours
  return (
    <div className={`w-full h-full bg-[#0D1420] text-white p-3.5 flex flex-col justify-between font-['Inter',sans-serif] relative overflow-hidden select-none ${className}`}>
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-1.5 font-bold text-white">
          <div className="w-4 h-4 rounded bg-[#0A66C2] flex items-center justify-center text-[9px] font-bold">
            in
          </div>
          <span>LinkedIn Extension Launch</span>
        </div>
        <span className="text-[10px] font-bold text-blue-300 bg-blue-500/15 px-2 py-0.5 rounded border border-blue-500/25">
          Chrome Store
        </span>
      </div>

      <div className="relative z-10 my-auto py-1">
        <div className="bg-white/5 p-2 rounded-xl border border-white/5 flex items-center justify-between">
          <div>
            <span className="text-[9px] text-white/50 block">ATS Profile Score</span>
            <span className="text-xl font-black text-emerald-400">92 / 100</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-blue-300 font-bold block">Top 5% Rank</span>
            <span className="text-[9px] text-white/40">+340% Recruiter Lift</span>
          </div>
        </div>
        <div className="mt-1.5 text-center text-[10px] text-white/70">
          Built in public in 48 hours using React & Manifest V3
        </div>
      </div>

      <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-white/60">
        <span>Cursor & MCP Servers</span>
        <span className="font-semibold text-blue-300">5.1M Total Views</span>
      </div>
    </div>
  );
};
