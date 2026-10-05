import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Eye,
  Zap,
  BarChart3,
  Calendar,
  ArrowUpRight,
  ShieldCheck,
  Search,
  Sparkles,
} from 'lucide-react';
import FadeIn from './common/FadeIn';

interface DataPoint {
  label: string;
  value: number;
  secondaryValue?: number;
  highlight?: string;
  notes?: string;
}

// 1. Organic Traffic Growth (10K -> 412K)
const SEO_TRAFFIC_DATA: DataPoint[] = [
  { label: 'Month 1', value: 10, secondaryValue: 85, notes: 'Baseline setup & technical audit' },
  { label: 'Month 2', value: 24, secondaryValue: 190, notes: 'Initial keyword cluster launch' },
  { label: 'Month 3', value: 48, secondaryValue: 420, notes: 'Sanity.io blog publishing live' },
  { label: 'Month 4', value: 92, secondaryValue: 890, notes: 'Core Web Vitals reach 96+' },
  { label: 'Month 5', value: 165, secondaryValue: 1600, notes: 'First 5 keywords hit Top 3 ranking' },
  { label: 'Month 6', value: 230, secondaryValue: 2400, notes: 'Long-tail search discovery explosion' },
  { label: 'Month 7', value: 295, secondaryValue: 3200, notes: 'Search Console CTR optimized to 8.4%' },
  { label: 'Month 8', value: 345, secondaryValue: 4100, notes: 'Internal linking graph deployed' },
  { label: 'Month 9', value: 382, secondaryValue: 4900, notes: 'Dominating high-intent search terms' },
  { label: 'Current', value: 412, secondaryValue: 5600, highlight: '412K/mo', notes: '400K+ monthly organic visitors verified in GA4' },
];

// 2. Cumulative Reel & Video Views (100M+)
const VIRAL_VIEWS_DATA: DataPoint[] = [
  { label: 'Q1 Launch', value: 6.2, highlight: '6.2M', notes: 'First 10 short-form reels tested' },
  { label: 'Month 4', value: 18.4, highlight: '18.4M', notes: 'First viral spike: 5.1M single reel' },
  { label: 'Month 6', value: 39.0, highlight: '39.0M', notes: 'Instaresume format trendjacking' },
  { label: 'Month 8', value: 64.5, highlight: '64.5M', notes: 'Mega viral reel hits 8.2M views' },
  { label: 'Month 10', value: 85.2, highlight: '85.2M', notes: 'Cross-platform syndication to LinkedIn & X' },
  { label: 'Milestone', value: 102.4, highlight: '102.4M', notes: '100M+ total organic views reached' },
];

// 3. Instagram Followers (70K -> 92K in 1 year)
const FOLLOWER_GROWTH_DATA: DataPoint[] = [
  { label: 'Start (70K)', value: 70, highlight: '70K', notes: '70K baseline at start of year' },
  { label: 'Month 3', value: 74.5, highlight: '74.5K', notes: '15-day content calendar deployed' },
  { label: 'Month 6', value: 80.2, highlight: '80.2K', notes: 'Consistent viral short-form testing' },
  { label: 'Month 9', value: 86.0, highlight: '86K', notes: 'High-retention Reels hit 5M+ views' },
  { label: '1 Year', value: 92.4, highlight: '92.4K', notes: '90K+ organic followers achieved on @instaresume.io in 1 year' },
];

export const MarketingMetricsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'seo' | 'views' | 'followers'>('seo');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Active chart data
  const currentData =
    activeTab === 'seo'
      ? SEO_TRAFFIC_DATA
      : activeTab === 'views'
      ? VIRAL_VIEWS_DATA
      : FOLLOWER_GROWTH_DATA;

  const maxValue = Math.max(...currentData.map((d) => d.value));

  // Generate SVG path for the area chart
  const svgWidth = 800;
  const svgHeight = 260;
  const paddingX = 40;
  const paddingY = 30;
  const chartW = svgWidth - paddingX * 2;
  const chartH = svgHeight - paddingY * 2;

  const points = currentData.map((d, i) => {
    const x = paddingX + (i / (currentData.length - 1)) * chartW;
    const y = svgHeight - paddingY - (d.value / maxValue) * chartH;
    return { x, y, data: d };
  });

  // Bezier curve string
  const pathD = points.reduce((acc, point, i, arr) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = arr[i - 1];
    const cx = (prev.x + point.x) / 2;
    return `${acc} C ${cx} ${prev.y}, ${cx} ${point.y}, ${point.x} ${point.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x} ${svgHeight - paddingY} L ${points[0].x} ${svgHeight - paddingY} Z`;

  const activePoint = hoveredIndex !== null ? points[hoveredIndex] : points[points.length - 1];

  return (
    <section
      id="marketing-metrics"
      className="bg-[#0C0C0C] dark:bg-[#0C0C0C] light:bg-[#F3F4F6] text-[#D7E2EA] dark:text-[#D7E2EA] light:text-[#111827] py-20 sm:py-28 px-5 sm:px-8 md:px-10 relative overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <FadeIn delay={0} y={30}>
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold block mb-2">
                Audited Telemetry & Data
              </span>
              <h2
                className="hero-heading font-black uppercase leading-none tracking-tight"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
              >
                Marketing Metrics
              </h2>
              <p className="text-sm sm:text-base text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-[#4B5563] max-w-2xl mt-4 font-light leading-relaxed">
                Empirical growth curves from Google Analytics 4, Search Console, Instagram Insights, and production
                web performance telemetry.
              </p>
            </FadeIn>
          </div>

          {/* Verification Badge */}
          <FadeIn delay={0.15} y={20} className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-[#BBCCD7] dark:text-[#BBCCD7] light:text-slate-600 bg-white/5 dark:bg-white/5 light:bg-black/5 px-4 py-2 rounded-full border border-white/10 dark:border-white/10 light:border-black/10">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>GA4 & Search Console Verified</span>
          </FadeIn>
        </div>

        {/* 4 High-Impact KPI Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* Card 1: SEO Traffic */}
          <FadeIn delay={0.05} y={20} className="bg-[#141416] dark:bg-[#141416] light:bg-white p-6 rounded-3xl border border-[#272930] dark:border-[#272930] light:border-slate-200 shadow-xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-xs text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 mb-2">
              <span className="uppercase tracking-wider font-medium">Monthly SEO Traffic</span>
              <Search className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-white dark:text-white light:text-slate-900 tracking-tight">
                412K+
              </span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center">
                +4,020% <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
            <p className="text-xs text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 mt-2 font-light">
              Scaled from 10K baseline via programmatic SEO & Sanity CMS.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 dark:border-white/5 light:border-slate-100 flex justify-between text-[11px] text-[#D7E2EA]/40 dark:text-[#D7E2EA]/40 light:text-slate-400">
              <span>Baseline: 10K</span>
              <span className="text-white dark:text-white light:text-slate-800 font-medium">Peak: 412,800/mo</span>
            </div>
          </FadeIn>

          {/* Card 2: Viral Views */}
          <FadeIn delay={0.1} y={20} className="bg-[#141416] dark:bg-[#141416] light:bg-white p-6 rounded-3xl border border-[#272930] dark:border-[#272930] light:border-slate-200 shadow-xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-xs text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 mb-2">
              <span className="uppercase tracking-wider font-medium">Total Video Views</span>
              <Eye className="w-4 h-4 text-pink-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-white dark:text-white light:text-slate-900 tracking-tight">
                100M+
              </span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center">
                50+ Reels <Sparkles className="w-3 h-3 ml-0.5" />
              </span>
            </div>
            <p className="text-xs text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 mt-2 font-light">
              Individual viral reels captured up to 8.2M views each.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 dark:border-white/5 light:border-slate-100 flex justify-between text-[11px] text-[#D7E2EA]/40 dark:text-[#D7E2EA]/40 light:text-slate-400">
              <span>Avg Peak: 5–8M</span>
              <span className="text-white dark:text-white light:text-slate-800 font-medium">Shares: 280K+</span>
            </div>
          </FadeIn>

          {/* Card 3: Instagram Followers */}
          <FadeIn delay={0.15} y={20} className="bg-[#141416] dark:bg-[#141416] light:bg-white p-6 rounded-3xl border border-[#272930] dark:border-[#272930] light:border-slate-200 shadow-xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-xs text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 mb-2">
              <span className="uppercase tracking-wider font-medium">Instaresume.io Instagram</span>
              <Users className="w-4 h-4 text-[#B600A8]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-white dark:text-white light:text-slate-900 tracking-tight">
                90K+
              </span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center">
                70K → 90K in 1 yr <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
            <p className="text-xs text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 mt-2 font-light">
              Scaled @instaresume.io organically from 70K to 90K+ followers in 1 year.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 dark:border-white/5 light:border-slate-100 flex justify-between text-[11px] text-[#D7E2EA]/40 dark:text-[#D7E2EA]/40 light:text-slate-400">
              <span>Start: 70K</span>
              <span className="text-white dark:text-white light:text-slate-800 font-medium">92,400+ Follows</span>
            </div>
          </FadeIn>

          {/* Card 4: Web Performance */}
          <FadeIn delay={0.2} y={20} className="bg-[#141416] dark:bg-[#141416] light:bg-white p-6 rounded-3xl border border-[#272930] dark:border-[#272930] light:border-slate-200 shadow-xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-xs text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 mb-2">
              <span className="uppercase tracking-wider font-medium">Web Performance Boost</span>
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-white dark:text-white light:text-slate-900 tracking-tight">
                +38%
              </span>
              <span className="text-xs text-emerald-400 font-semibold flex items-center">
                5M+ Users <ShieldCheck className="w-3 h-3 ml-0.5" />
              </span>
            </div>
            <p className="text-xs text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 mt-2 font-light">
              Shipped 40+ React/NestJS features; cut AI API costs ~40%.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 dark:border-white/5 light:border-slate-100 flex justify-between text-[11px] text-[#D7E2EA]/40 dark:text-[#D7E2EA]/40 light:text-slate-400">
              <span>LCP: 1.1s</span>
              <span className="text-white dark:text-white light:text-slate-800 font-medium">Uptime: 99.98%</span>
            </div>
          </FadeIn>
        </div>

        {/* Interactive Main Chart Card */}
        <div className="bg-[#141416] dark:bg-[#141416] light:bg-white p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] border border-[#272930] dark:border-[#272930] light:border-slate-200 shadow-2xl relative">
          {/* Chart Header with Mode Selector Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 dark:border-white/10 light:border-slate-100">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold block mb-1">
                Interactive Growth Trajectory
              </span>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white dark:text-white light:text-slate-900">
                {activeTab === 'seo' && 'Organic Search Traffic (10,000 → 412,000 Monthly Visitors)'}
                {activeTab === 'views' && 'Viral Content Reach (0 → 102.4 Million Video Impressions)'}
                {activeTab === 'followers' && 'Instagram Follower Growth (70 → 92,400 Organic Followers)'}
              </h3>
            </div>

            {/* Segmented control tabs */}
            <div className="flex items-center gap-1 p-1 bg-white/5 dark:bg-white/5 light:bg-black/5 rounded-full border border-white/10 dark:border-white/10 light:border-black/10 self-start sm:self-auto">
              <button
                onClick={() => {
                  setActiveTab('seo');
                  setHoveredIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'seo'
                    ? 'bg-white text-black shadow-md'
                    : 'text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-[#4B5563] hover:text-white dark:hover:text-white light:hover:text-black'
                }`}
              >
                Organic SEO
              </button>
              <button
                onClick={() => {
                  setActiveTab('views');
                  setHoveredIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'views'
                    ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-md'
                    : 'text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-[#4B5563] hover:text-white dark:hover:text-white light:hover:text-black'
                }`}
              >
                100M+ Views
              </button>
              <button
                onClick={() => {
                  setActiveTab('followers');
                  setHoveredIndex(null);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all cursor-pointer ${
                  activeTab === 'followers'
                    ? 'bg-white text-black shadow-md'
                    : 'text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-[#4B5563] hover:text-white dark:hover:text-white light:hover:text-black'
                }`}
              >
                Instagram 90K
              </button>
            </div>
          </div>

          {/* Real-time Hover Metric Banner */}
          <div className="my-6 p-4 rounded-2xl bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-50 border border-white/5 dark:border-white/5 light:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-[#B600A8] to-[#7621B0] text-white">
                <BarChart3 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 dark:text-[#D7E2EA]/50 light:text-slate-400 block font-normal">
                  {activePoint.data.label} Snapshot
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-white dark:text-white light:text-slate-900 tracking-tight">
                    {activeTab === 'seo' && `${activePoint.data.value.toLocaleString()}K monthly visits`}
                    {activeTab === 'views' && `${activePoint.data.value}M total views`}
                    {activeTab === 'followers' && `${activePoint.data.value >= 1 ? `${activePoint.data.value}K` : activePoint.data.highlight} followers`}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-600 sm:text-right max-w-md">
              <span className="font-semibold text-white dark:text-white light:text-slate-900 block mb-0.5">
                Milestone Note:
              </span>
              <span>{activePoint.data.notes}</span>
            </div>
          </div>

          {/* SVG Vector Area Graph */}
          <div className="w-full relative overflow-x-auto pb-4">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto min-w-[600px] overflow-visible"
            >
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#B600A8" stopOpacity="0.45" />
                  <stop offset="70%" stopColor="#7621B0" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#7621B0" stopOpacity="0.0" />
                </linearGradient>
                <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#646973" />
                  <stop offset="30%" stopColor="#B600A8" />
                  <stop offset="70%" stopColor="#7621B0" />
                  <stop offset="100%" stopColor="#BBCCD7" />
                </linearGradient>
              </defs>

              {/* Horizontal Grid lines */}
              {[0, 0.25, 0.5, 0.75, 1].map((pct, idx) => {
                const y = svgHeight - paddingY - pct * chartH;
                return (
                  <g key={idx}>
                    <line
                      x1={paddingX}
                      y1={y}
                      x2={svgWidth - paddingX}
                      y2={y}
                      stroke="currentColor"
                      strokeOpacity="0.1"
                      strokeDasharray="4 4"
                    />
                    <text
                      x={paddingX - 10}
                      y={y + 4}
                      textAnchor="end"
                      fill="currentColor"
                      fillOpacity="0.4"
                      fontSize="10"
                      fontFamily="Kanit"
                    >
                      {activeTab === 'seo' && `${Math.round(pct * maxValue)}K`}
                      {activeTab === 'views' && `${Math.round(pct * maxValue)}M`}
                      {activeTab === 'followers' && `${Math.round(pct * maxValue)}K`}
                    </text>
                  </g>
                );
              })}

              {/* Filled Area with smooth bezier */}
              <motion.path
                key={`area-${activeTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                d={areaD}
                fill="url(#areaGradient)"
              />

              {/* Curve Stroke */}
              <motion.path
                key={`path-${activeTab}`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                d={pathD}
                fill="none"
                stroke="url(#strokeGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Data points & hover triggers */}
              {points.map((pt, idx) => {
                const isHovered = hoveredIndex === idx;
                const isLast = idx === points.length - 1;

                return (
                  <g key={idx} className="cursor-pointer">
                    {/* Hover vertical line */}
                    {isHovered && (
                      <line
                        x1={pt.x}
                        y1={paddingY}
                        x2={pt.x}
                        y2={svgHeight - paddingY}
                        stroke="#B600A8"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        strokeOpacity="0.8"
                      />
                    )}

                    {/* Outer pulse circle on last or hovered point */}
                    {(isHovered || isLast) && (
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="9"
                        fill="#B600A8"
                        fillOpacity="0.25"
                        className="animate-ping"
                      />
                    )}

                    {/* Point marker */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isHovered ? 6 : 4.5}
                      fill="#FFFFFF"
                      stroke="#7621B0"
                      strokeWidth="2.5"
                      className="transition-all duration-200"
                    />

                    {/* X-axis label */}
                    <text
                      x={pt.x}
                      y={svgHeight - 10}
                      textAnchor="middle"
                      fill="currentColor"
                      fillOpacity={isHovered ? '1' : '0.5'}
                      fontSize="10"
                      fontFamily="Kanit"
                      fontWeight={isHovered ? '600' : '400'}
                    >
                      {pt.data.label}
                    </text>

                    {/* Invisible wide hover area for smooth interaction */}
                    <rect
                      x={pt.x - 25}
                      y={0}
                      width={50}
                      height={svgHeight}
                      fill="transparent"
                      onMouseEnter={() => setHoveredIndex(idx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Footer Highlights summary */}
          <div className="mt-6 pt-6 border-t border-white/10 dark:border-white/10 light:border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B600A8]" />
              <span>
                <strong>Technical SEO:</strong> Core Web Vitals score 98/100
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7621B0]" />
              <span>
                <strong>Virality Rate:</strong> 142% avg video loop retention
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>
                <strong>Platform Reach:</strong> 5M+ active users served
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingMetricsDashboard;
