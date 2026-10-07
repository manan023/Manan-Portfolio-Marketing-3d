import React from 'react';
import {
  FileText,
  Sparkles,
  TrendingUp,
  Search,
  Zap,
  Globe,
  Award,
  CheckCircle2,
  Download,
  Share2,
  Users,
  Code2,
  Check,
  BarChart3,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

// 1. Instaresume.io Core Builder Card
export const InstaresumeBuilderPreviewCard: React.FC = () => {
  return (
    <div className="w-[380px] h-[260px] bg-[#0E1117] text-white p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-white/10 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#B600A8]/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-lg bg-gradient-to-tr from-[#B600A8] to-[#7621B0] flex items-center justify-center text-[10px] font-black text-white shadow-sm">
            IR
          </div>
          <span className="text-xs font-bold text-white tracking-tight">Instaresume.io Core Builder</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
            ATS 96/100
          </span>
          <span className="text-[10px] text-white/50 bg-white/5 px-1.5 py-0.5 rounded border border-white/5">
            PDF Ready
          </span>
        </div>
      </div>

      {/* Mini Resume Canvas Preview */}
      <div className="relative z-10 bg-white/[0.04] p-3 rounded-xl border border-white/10 my-1 flex gap-3 items-center">
        {/* Paper visual */}
        <div className="w-20 h-28 bg-[#181C24] rounded border border-white/10 p-1.5 flex flex-col justify-between shadow-inner flex-shrink-0">
          <div>
            <div className="w-10 h-1.5 bg-[#B600A8] rounded-full mb-1" />
            <div className="w-14 h-1 bg-white/40 rounded-full mb-0.5" />
            <div className="w-12 h-0.5 bg-white/20 rounded-full mb-1.5" />
            <div className="w-full h-0.5 bg-white/15 rounded-full mb-0.5" />
            <div className="w-full h-0.5 bg-white/15 rounded-full mb-0.5" />
            <div className="w-10 h-0.5 bg-white/15 rounded-full" />
          </div>
          <div>
            <div className="w-8 h-1 bg-emerald-400/80 rounded-full mb-0.5" />
            <div className="w-full h-0.5 bg-white/15 rounded-full mb-0.5" />
            <div className="w-12 h-0.5 bg-white/15 rounded-full" />
          </div>
        </div>

        {/* Live details */}
        <div className="flex-1 space-y-1 text-xs">
          <div className="text-[11px] font-semibold text-white">Interactive Editor & Canvas</div>
          <div className="text-[10px] text-white/60 leading-relaxed">
            Instant PDF generation, reactive form binding, and 12+ pre-formatted ATS templates used by 5M+ job seekers.
          </div>
          <div className="flex items-center gap-2 pt-1 text-[10px] text-white/50">
            <span className="flex items-center gap-1 text-emerald-400">
              <Check className="w-3 h-3" /> React 19
            </span>
            <span className="flex items-center gap-1 text-cyan-300">
              <Check className="w-3 h-3" /> Tailwind CSS
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
        <span className="text-[10px] text-white/40">instaresume.io/app/builder</span>
        <span className="text-emerald-400 font-bold text-[10px] flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3" /> Production Live
        </span>
      </div>
    </div>
  );
};

// 2. LinkedIn Chrome Extension Card
export const LinkedInExtensionCardRow2: React.FC = () => {
  return (
    <div className="w-[380px] h-[260px] bg-[#0B131F] text-white p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-blue-500/20 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-[#0A66C2] flex items-center justify-center text-xs font-black text-white">
            in
          </div>
          <span className="text-xs font-bold text-white tracking-tight">LinkedIn Optimizer Extension</span>
        </div>
        <span className="text-[10px] font-semibold text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
          Chrome Web Store
        </span>
      </div>

      {/* Metrics Row */}
      <div className="relative z-10 grid grid-cols-3 gap-2 my-1 text-center">
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-[9px] text-white/50 uppercase font-semibold">ATS Profile Score</div>
          <div className="text-lg font-black text-emerald-400 mt-0.5">92 / 100</div>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-[9px] text-white/50 uppercase font-semibold">Rank Position</div>
          <div className="text-lg font-black text-blue-300 mt-0.5">Top 5%</div>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-[9px] text-white/50 uppercase font-semibold">Search Lift</div>
          <div className="text-lg font-black text-emerald-400 mt-0.5">+340%</div>
        </div>
      </div>

      {/* Feature Checkpoints */}
      <div className="relative z-10 bg-white/5 p-2.5 rounded-xl border border-white/5 space-y-1 text-[11px]">
        <div className="flex items-center justify-between text-white/80">
          <span>Keywords Injected:</span>
          <span className="text-blue-300 font-bold">14 High-Intent Tags</span>
        </div>
        <div className="flex items-center justify-between text-white/80">
          <span>Headline Hook Generator:</span>
          <span className="text-emerald-400 font-bold">✓ Active</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
        <span className="text-[10px] text-white/40">Manifest V3 · Chrome Extension</span>
        <span className="font-semibold text-blue-300 text-[10px]">AI-Powered</span>
      </div>
    </div>
  );
};

// 3. Programmatic Headless SEO Engine (Sanity CMS) Card
export const SanitySeoEngineCardRow2: React.FC = () => {
  return (
    <div className="w-[380px] h-[260px] bg-[#0D1217] text-white p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-white/10 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold border border-emerald-500/30">
            SEO
          </div>
          <span className="text-xs font-bold text-white tracking-tight">Sanity Headless SEO Pipeline</span>
        </div>
        <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          400K Traffic Surge
        </span>
      </div>

      {/* Code / Architecture Box */}
      <div className="relative z-10 bg-black/60 p-2.5 rounded-xl border border-white/10 font-mono text-[10px] text-gray-300 my-1">
        <div className="flex justify-between text-white/40 mb-1 border-b border-white/10 pb-0.5">
          <span>sanity.client.ts</span>
          <span className="text-emerald-400">Next.js 15 ISR</span>
        </div>
        <div className="leading-tight text-emerald-300/90">
          <span className="text-purple-400">const</span> paths = <span className="text-blue-400">fetchCategories</span>();
          <br />
          <span className="text-gray-400">// 80+ programmatic keyword routes</span>
          <br />
          revalidate: <span className="text-amber-300">3600</span> <span className="text-gray-400">/* edge cache */</span>
        </div>
      </div>

      {/* Core Web Vitals Row */}
      <div className="relative z-10 grid grid-cols-3 gap-2 text-center text-xs">
        <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
          <span className="text-[9px] text-white/40 block">Lighthouse</span>
          <span className="font-bold text-emerald-400 text-sm">98 / 100</span>
        </div>
        <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
          <span className="text-[9px] text-white/40 block">LCP Render</span>
          <span className="font-bold text-white text-sm">1.1s</span>
        </div>
        <div className="bg-white/5 p-1.5 rounded-lg border border-white/5">
          <span className="text-[9px] text-white/40 block">Total URLs</span>
          <span className="font-bold text-cyan-300 text-sm">450+ Indexed</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
        <span className="text-[10px] text-white/40">Zero manual backlink farming</span>
        <span className="text-emerald-400 font-bold text-[10px]">GA4 Verified</span>
      </div>
    </div>
  );
};

// 4. OpenAI Prompt Caching & MCP Optimization Card
export const OpenAiPromptOptimizationCardRow2: React.FC = () => {
  return (
    <div className="w-[380px] h-[260px] bg-[#0E1318] text-white p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-emerald-500/20 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold border border-emerald-500/30">
            <Zap className="w-3 h-3 text-emerald-400" />
          </div>
          <span className="text-xs font-bold text-white tracking-tight">OpenAI API Cost Optimization</span>
        </div>
        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          -40% Cost Cut
        </span>
      </div>

      {/* Big Metrics */}
      <div className="relative z-10 grid grid-cols-3 gap-2 my-1 text-center">
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-[9px] text-white/50 uppercase font-semibold">Cache Hit Rate</div>
          <div className="text-lg font-black text-emerald-400 mt-0.5">78.4%</div>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-[9px] text-white/50 uppercase font-semibold">Avg Latency</div>
          <div className="text-lg font-black text-cyan-300 mt-0.5">0.42s</div>
        </div>
        <div className="bg-white/5 p-2 rounded-xl border border-white/5">
          <div className="text-[9px] text-white/50 uppercase font-semibold">Total Saved</div>
          <div className="text-lg font-black text-emerald-400 mt-0.5">$18.4K</div>
        </div>
      </div>

      {/* Pipeline Highlight */}
      <div className="relative z-10 bg-white/5 p-2.5 rounded-xl border border-white/5 space-y-1 text-[11px]">
        <div className="flex items-center justify-between text-white/80">
          <span>Model:</span>
          <span className="text-cyan-300 font-bold">GPT-4o Mini + Prompt Caching</span>
        </div>
        <div className="flex items-center justify-between text-white/80">
          <span>Monthly Platform Scale:</span>
          <span className="text-white font-bold">5M+ Resume Generations</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
        <span className="text-[10px] text-white/40">MCP Server Orchestration</span>
        <span className="text-emerald-400 font-semibold text-[10px]">Production Stable</span>
      </div>
    </div>
  );
};

// 5. 15-Day Viral Content Production Sprint (Trello & Buffer)
export const TrelloContentSprintCardRow2: React.FC = () => {
  return (
    <div className="w-[380px] h-[260px] bg-[#141219] text-white p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-pink-500/20 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse" />
          <span className="text-xs font-bold text-white tracking-tight">15-Day Content Sprint System</span>
        </div>
        <span className="text-[10px] font-semibold text-pink-300 bg-pink-500/20 px-2 py-0.5 rounded border border-pink-500/30">
          50+ Viral Reels
        </span>
      </div>

      {/* Kanban Stages Grid */}
      <div className="relative z-10 grid grid-cols-3 gap-2 my-1">
        <div className="bg-white/5 p-2 rounded-xl border border-white/5 flex flex-col justify-between">
          <div>
            <span className="text-[9px] font-bold text-pink-400 uppercase tracking-wide block">
              1. Hook (1.2s)
            </span>
            <div className="text-[10px] text-white/80 mt-1 leading-snug">
              Visual pattern interrupt & curiosity gap
            </div>
          </div>
          <span className="text-[9px] text-white/40 mt-1 block">A/B tested</span>
        </div>

        <div className="bg-white/5 p-2 rounded-xl border border-white/5 flex flex-col justify-between">
          <div>
            <span className="text-[9px] font-bold text-purple-400 uppercase tracking-wide block">
              2. Agitation
            </span>
            <div className="text-[10px] text-white/80 mt-1 leading-snug">
              ATS rejection statistics & pacing
            </div>
          </div>
          <span className="text-[9px] text-white/40 mt-1 block">142% retention</span>
        </div>

        <div className="bg-white/5 p-2 rounded-xl border border-white/5 flex flex-col justify-between">
          <div>
            <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wide block">
              3. Conversion
            </span>
            <div className="text-[10px] text-white/80 mt-1 leading-snug">
              Comment trigger & ManyChat DMs
            </div>
          </div>
          <span className="text-[9px] text-white/40 mt-1 block">12K+ leads</span>
        </div>
      </div>

      {/* Lifetime Stat */}
      <div className="relative z-10 bg-white/5 p-2 rounded-xl border border-white/5 flex items-center justify-between text-xs">
        <span className="text-[10px] text-white/60">Cross-Platform Impressions</span>
        <span className="text-sm font-black text-pink-400">~100M+ Organic Views</span>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
        <span className="text-[10px] text-white/40">Trello · Buffer · CapCut 4K</span>
        <span className="font-semibold text-white/80 text-[10px]">Zero Ad Spend</span>
      </div>
    </div>
  );
};

// 6. Instaresume Cover Letter & Document Studio Card
export const InstaresumeCoverLetterCardRow2: React.FC = () => {
  return (
    <div className="w-[380px] h-[260px] bg-[#12131C] text-white p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-white/10 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-purple-500/20 text-purple-300 flex items-center justify-center text-xs font-bold border border-purple-500/30">
            <FileText className="w-3 h-3 text-purple-300" />
          </div>
          <span className="text-xs font-bold text-white tracking-tight">AI Cover Letter Generator</span>
        </div>
        <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded border border-purple-500/30">
          Instaresume.io
        </span>
      </div>

      {/* Interactive Form Visual */}
      <div className="relative z-10 bg-white/[0.04] p-2.5 rounded-xl border border-white/10 space-y-2 my-1">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-white/50">Target Job:</span>
          <span className="font-semibold text-white">Lead Full Stack Engineer</span>
        </div>
        <div className="w-full bg-white/5 rounded p-2 text-[10px] text-white/70 italic border border-white/5 leading-relaxed">
          "Tailored 1-click draft matching 98% of employer job description criteria with verified project metrics..."
        </div>
        <div className="flex items-center justify-between text-[10px] pt-1">
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> ATS Match 98%
          </span>
          <span className="text-white/40">1-Click PDF / DOCX</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
        <span className="text-[10px] text-white/40">Next.js 15 & OpenAI API</span>
        <span className="font-semibold text-purple-300 text-[10px]">Instant Download</span>
      </div>
    </div>
  );
};

// 7. Instagram Demographics & Audience Card
export const InstagramDemographicsCardRow2: React.FC = () => {
  return (
    <div className="w-[380px] h-[260px] bg-[#140E18] text-white p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-pink-500/20 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">
            IG
          </div>
          <div>
            <span className="text-xs font-bold text-white tracking-tight">@instaresume.io</span>
            <span className="text-[9px] text-white/40 block">Audience Demographics</span>
          </div>
        </div>
        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          90.4K+ Followers
        </span>
      </div>

      {/* Demographics Bars */}
      <div className="relative z-10 space-y-1.5 my-1">
        <div>
          <div className="flex justify-between text-[10px] text-white/70 mb-0.5">
            <span>Age 21–24 (New Grads & Job Seekers)</span>
            <span className="font-bold text-white">38%</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-[38%]" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-[10px] text-white/70 mb-0.5">
            <span>Age 25–34 (Early Mid-Career Professionals)</span>
            <span className="font-bold text-white">46%</span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full w-[46%]" />
          </div>
        </div>

        {/* Geographic tags */}
        <div className="flex items-center justify-between pt-1 text-[10px] text-white/60">
          <span>Top Locations:</span>
          <span className="font-medium text-white/80">India (64%) · US (18%) · UK (8%)</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
        <span className="text-[10px] text-white/40">Meta Business Suite Telemetry</span>
        <span className="text-emerald-400 font-bold text-[10px]">100% Organic Community</span>
      </div>
    </div>
  );
};

// 8. Google Search Console Top Keyword Rankings Card
export const GscTopQueriesRankCardRow2: React.FC = () => {
  return (
    <div className="w-[380px] h-[260px] bg-[#12161E] text-white p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-white/10 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold border border-blue-500/30">
            <Search className="w-3 h-3 text-blue-400" />
          </div>
          <div>
            <span className="text-xs font-bold text-white tracking-tight">Search Console Keyword Ranks</span>
            <span className="text-[9px] text-white/40 block">instaresume.io</span>
          </div>
        </div>
        <span className="text-[10px] font-semibold text-blue-300 bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/30">
          3.1M+ Total Imp
        </span>
      </div>

      {/* Queries Table */}
      <div className="relative z-10 bg-white/5 p-2 rounded-xl border border-white/5 space-y-1.5 text-[10px] my-1">
        <div className="flex justify-between items-center pb-1 border-b border-white/10 text-white/40 uppercase font-semibold text-[9px]">
          <span>Top Queries</span>
          <span>Clicks</span>
          <span>Rank</span>
        </div>
        <div className="flex justify-between items-center text-white/90">
          <span className="font-medium text-white truncate max-w-[140px]">"biodata format"</span>
          <span className="text-blue-300 font-semibold">3.49K</span>
          <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded"># 1.5</span>
        </div>
        <div className="flex justify-between items-center text-white/90">
          <span className="font-medium text-white truncate max-w-[140px]">"resume builder online"</span>
          <span className="text-blue-300 font-semibold">5.12K</span>
          <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded"># 2.1</span>
        </div>
        <div className="flex justify-between items-center text-white/90">
          <span className="font-medium text-white truncate max-w-[140px]">"ats resume template free"</span>
          <span className="text-blue-300 font-semibold">2.84K</span>
          <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded"># 1.8</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
        <span className="text-[10px] text-white/40">Average CTR: 8.4%</span>
        <span className="text-emerald-400 font-bold text-[10px]">High Intent Queries</span>
      </div>
    </div>
  );
};
