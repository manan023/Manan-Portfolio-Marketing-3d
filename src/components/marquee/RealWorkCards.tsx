import React from 'react';
import {
  TrendingUp,
  Download,
  Award,
  CheckCircle2,
  Info,
  ChevronDown,
  Grid,
  Bookmark,
  Share2,
  Lock,
  Plus,
  Menu,
} from 'lucide-react';

// 1. Google Analytics 4 Dashboard Card
export const Ga4DashboardCard: React.FC = () => {
  return (
    <div className="w-[430px] h-[270px] bg-white text-[#202124] p-5 flex flex-col justify-between font-['Roboto',sans-serif] select-none rounded-2xl border border-gray-200 shadow-md">
      {/* Top Stat Row */}
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <div className="flex items-center gap-6">
            <div>
              <div className="flex items-center gap-1 text-[11px] text-[#5f6368] font-medium">
                <span>Active users</span>
                <span className="w-3.5 h-3.5 rounded-full border border-gray-400 text-[9px] flex items-center justify-center">?</span>
              </div>
              <div className="text-2xl font-bold text-[#202124] tracking-tight">
                128K
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 text-[11px] text-[#5f6368] font-medium">
                <span>New users</span>
                <span className="w-3.5 h-3.5 rounded-full border border-gray-400 text-[9px] flex items-center justify-center">?</span>
              </div>
              <div className="text-2xl font-bold text-[#202124] tracking-tight">
                121K
              </div>
            </div>

            <div>
              <div className="text-[11px] text-[#5f6368] font-medium">
                Average engagement
              </div>
              <div className="text-2xl font-bold text-[#202124] tracking-tight">
                4m 14s
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="p-1 rounded-full text-blue-600 bg-blue-50">
              <Award className="w-4 h-4" />
            </span>
            <span className="p-1 rounded-full text-emerald-600 bg-emerald-50">
              <CheckCircle2 className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>

      {/* SVG Chart: Custom vs Peer Median Benchmark */}
      <div className="w-full relative flex-1 my-2 min-h-[110px]">
        <svg viewBox="0 0 400 110" className="w-full h-full overflow-visible">
          {/* Peer range band */}
          <path
            d="M 10 85 Q 50 80, 100 82 T 200 85 T 300 83 T 390 85 L 390 100 L 10 100 Z"
            fill="#e8f0fe"
            opacity="0.8"
          />

          {/* Peer median line */}
          <path
            d="M 10 96 Q 50 94, 100 95 T 200 97 T 300 96 T 390 97"
            fill="none"
            stroke="#78d9ec"
            strokeWidth="1.8"
          />

          {/* Custom Traffic Spike Line */}
          <path
            d="M 10 25 L 20 32 L 35 15 L 48 24 L 60 48 L 72 38 L 84 56 L 92 68 L 100 40 L 112 36 L 124 60 L 136 42 L 148 54 L 164 30 L 180 52 L 196 34 L 212 48 L 228 36 L 244 60 L 260 40 L 276 50 L 292 58 L 308 38 L 324 46 L 340 36 L 356 54 L 372 42 L 390 32"
            fill="none"
            stroke="#1a73e8"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <circle cx="92" cy="68" r="3" fill="#fff" stroke="#1a73e8" strokeWidth="2" />
          <circle cx="100" cy="40" r="3" fill="#fff" stroke="#1a73e8" strokeWidth="2" />

          <line x1="10" y1="100" x2="390" y2="100" stroke="#dadce0" strokeWidth="1" />
        </svg>
      </div>

      {/* Legend & Dates */}
      <div className="flex items-center justify-between text-[10px] text-[#5f6368] pt-1 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 font-medium text-[#1a73e8]">
            <span className="w-2.5 h-0.5 bg-[#1a73e8] inline-block" /> Custom
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-1.5 bg-[#e8f0fe] border border-[#78d9ec] inline-block" /> Peer: Resumes & Portfolios
          </span>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <span>01 Dec</span>
          <span>01 Jan</span>
          <span>01 Feb</span>
          <span>01 Mar</span>
        </div>
      </div>
    </div>
  );
};

// 2. Content Performance Card (23,133 Impressions, +131%)
export const ContentPerformanceCard: React.FC = () => {
  return (
    <div className="w-[430px] h-[270px] bg-white text-[#202124] p-5 flex flex-col justify-between font-['Roboto',sans-serif] select-none rounded-2xl border border-gray-200 shadow-md">
      <div>
        {/* Title */}
        <div className="flex items-center gap-1 text-sm font-semibold text-gray-800 pb-2">
          <span>Content performance</span>
          <Info className="w-3.5 h-3.5 text-gray-500" />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
            <span>Impressions</span>
            <ChevronDown className="w-3 h-3 text-gray-500" />
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-700 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
            <span>Cumulative</span>
            <ChevronDown className="w-3 h-3 text-gray-500" />
          </div>
        </div>

        {/* Big Metric */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-black text-gray-900 tracking-tight">23,133</span>
          <span className="text-xs text-gray-600 font-medium">Impressions</span>
        </div>
        <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1 mt-0.5">
          <span>▲ 131%</span>
          <span className="font-normal text-gray-500">vs. prior 28 days</span>
        </div>
      </div>

      {/* Surge SVG curve */}
      <div className="w-full relative flex-1 min-h-[90px] my-1">
        <svg viewBox="0 0 380 90" className="w-full h-full overflow-visible">
          {/* Grid lines */}
          <line x1="20" y1="20" x2="370" y2="20" stroke="#f1f3f4" strokeWidth="1" />
          <line x1="20" y1="50" x2="370" y2="50" stroke="#f1f3f4" strokeWidth="1" />
          <line x1="20" y1="80" x2="370" y2="80" stroke="#e0e0e0" strokeWidth="1" />

          {/* Y-axis labels */}
          <text x="15" y="23" fill="#9aa0a6" fontSize="9" textAnchor="end">30K</text>
          <text x="15" y="53" fill="#9aa0a6" fontSize="9" textAnchor="end">20K</text>
          <text x="15" y="83" fill="#9aa0a6" fontSize="9" textAnchor="end">0</text>

          {/* Sharp exponential curve */}
          <path
            d="M 25 78 L 80 77 L 140 76 L 200 75 L 250 74 L 270 73 L 285 70 L 300 52 L 315 28 L 330 20 L 350 16 L 370 15"
            fill="none"
            stroke="#00695c"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Date markers */}
      <div className="flex justify-between text-[10px] text-gray-500 pt-1 border-t border-gray-100">
        <span>Sep 7</span>
        <span>Sep 16</span>
        <span>Sep 25</span>
        <span>Oct 4</span>
      </div>
    </div>
  );
};

// 3. Google Search Console Performance Card ("biodata format")
export const GscBiodataCard: React.FC = () => {
  return (
    <div className="w-[430px] h-[270px] bg-white text-[#202124] p-4 flex flex-col justify-between font-['Roboto',sans-serif] select-none rounded-2xl border border-gray-200 shadow-md">
      {/* Top Bar */}
      <div>
        <div className="flex items-center justify-between pb-1.5 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-700">Google Search Console</span>
            <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded border border-gray-200 font-medium">
              instaresume.io
            </span>
          </div>
          <span className="text-[10px] text-gray-500 font-medium">Performance</span>
        </div>

        {/* Filter tags */}
        <div className="flex items-center gap-1.5 pt-2 pb-2">
          <span className="text-[10px] bg-[#e8f0fe] text-[#1a73e8] font-bold px-2 py-0.5 rounded-full border border-[#1a73e8]">
            Query: biodata format ✕
          </span>
          <span className="text-[10px] text-gray-500 border border-gray-200 px-2 py-0.5 rounded-full">
            Web (text)
          </span>
        </div>

        {/* 4 Stat Boxes */}
        <div className="grid grid-cols-4 gap-1.5 mb-1.5">
          <div className="bg-[#1a73e8] text-white p-2 rounded-lg">
            <div className="text-[9px] opacity-90">☑ Total clicks</div>
            <div className="text-lg font-black mt-0.5">3.49K</div>
          </div>
          <div className="bg-[#7b1fa2] text-white p-2 rounded-lg">
            <div className="text-[9px] opacity-90">☑ Impressions</div>
            <div className="text-lg font-black mt-0.5">297K</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 text-gray-700 p-2 rounded-lg">
            <div className="text-[9px] text-gray-500">☐ Avg CTR</div>
            <div className="text-lg font-bold mt-0.5">1.2%</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 text-gray-700 p-2 rounded-lg">
            <div className="text-[9px] text-gray-500">☐ Avg position</div>
            <div className="text-lg font-bold text-emerald-600 mt-0.5">1.5</div>
          </div>
        </div>
      </div>

      {/* Dual Axis Curve */}
      <div className="w-full relative flex-1 min-h-[80px] my-1">
        <svg viewBox="0 0 380 80" className="w-full h-full overflow-visible">
          <line x1="15" y1="20" x2="365" y2="20" stroke="#f1f3f4" strokeWidth="1" />
          <line x1="15" y1="50" x2="365" y2="50" stroke="#f1f3f4" strokeWidth="1" />
          <line x1="15" y1="75" x2="365" y2="75" stroke="#dadce0" strokeWidth="1" />

          {/* Purple: Impressions up to 3.8K */}
          <path
            d="M 20 40 Q 50 30, 80 45 T 140 60 T 190 35 T 240 25 T 290 40 T 340 22 T 365 30"
            fill="none"
            stroke="#7b1fa2"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Blue: Clicks up to 120 */}
          <path
            d="M 20 65 L 45 55 L 70 20 L 95 62 L 120 70 L 145 58 L 170 65 L 195 50 L 220 35 L 245 52 L 270 42 L 295 62 L 320 50 L 345 58 L 365 48"
            fill="none"
            stroke="#1a73e8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="flex justify-between text-[9px] text-gray-400 pt-1 border-t border-gray-100">
        <span>12/1/25</span>
        <span>1/9/26</span>
        <span>2/16/26</span>
        <span>3/26/26</span>
      </div>
    </div>
  );
};

// 4. Combined Instagram Growth Card (8.3K -> 23.8K -> 53.5K -> 70.4K Followers)
export const InstagramCombinedMilestonesCard: React.FC = () => {
  const stages = [
    { followers: '8,353', reach: '4.9M Reach', posts: '53', tag: 'Early Phase' },
    { followers: '23.8K', reach: '6.4M Reach', posts: '58', tag: 'Scale Phase' },
    { followers: '53.5K', reach: '7.2M Reach', posts: '73', tag: 'Viral Sprints' },
    { followers: '70.4K', reach: '8.5M Reach', posts: '80', tag: '70K Milestone', highlight: true },
  ];

  return (
    <div className="w-[430px] h-[270px] bg-[#000000] text-white p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-white/20 shadow-xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-[#B600A8]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-1">
            <span className="text-black font-black text-xs">i</span>
          </div>
          <div>
            <div className="text-xs font-bold tracking-tight">instaresume.io</div>
            <div className="text-[10px] text-white/50">Instagram Verified Growth Track</div>
          </div>
        </div>

        <span className="text-[10px] bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white font-bold px-2 py-0.5 rounded-full">
          8.5M Peak Monthly Reach
        </span>
      </div>

      {/* 4 Milestones Progression */}
      <div className="relative z-10 grid grid-cols-4 gap-2 my-2">
        {stages.map((s, i) => (
          <div
            key={i}
            className={`p-2.5 rounded-xl border flex flex-col justify-between transition-all ${
              s.highlight
                ? 'bg-gradient-to-b from-white/15 to-[#B600A8]/30 border-[#B600A8] shadow-lg shadow-[#B600A8]/20'
                : 'bg-white/5 border-white/10'
            }`}
          >
            <span className="text-[9px] uppercase tracking-wider text-white/50 block font-semibold">
              {s.tag}
            </span>
            <div className="my-1.5">
              <span className="text-lg font-black text-white block tracking-tight leading-none">
                {s.followers}
              </span>
              <span className="text-[9px] text-[#B600A8] font-bold mt-1 block">
                {s.reach}
              </span>
            </div>
            <span className="text-[9px] text-white/40">{s.posts} Posts</span>
          </div>
        ))}
      </div>

      {/* Footer Banner from Professional Dashboard */}
      <div className="relative z-10 bg-white/10 rounded-xl px-3 py-2 border border-white/10 flex items-center justify-between text-xs">
        <div>
          <span className="text-[10px] text-white/50 block">Professional dashboard</span>
          <span className="font-bold text-white text-[11px]">8.5M accounts reached in the last 30 days</span>
        </div>
        <span className="text-emerald-400 font-black text-xs">100% Organic</span>
      </div>
    </div>
  );
};

// 5. Instagram Single Milestone Card: 70.4K Milestone
export const InstagramMilestone70KCard: React.FC = () => {
  return (
    <div className="w-[430px] h-[270px] bg-white text-black p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-gray-200 shadow-md">
      {/* Top Instagram Bar */}
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm tracking-tight">instaresume.io</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Plus className="w-4 h-4" />
            <Menu className="w-4 h-4" />
          </div>
        </div>

        {/* Profile Stats Row */}
        <div className="flex items-center justify-between pt-3 px-2">
          {/* Avatar with brand mark */}
          <div className="w-14 h-14 rounded-full border-2 border-gray-200 p-0.5 flex items-center justify-center bg-gray-50 shadow-inner">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-xl text-black">
              1
            </div>
          </div>

          <div className="flex items-center gap-7 text-center">
            <div>
              <div className="font-bold text-base leading-none">80</div>
              <div className="text-[11px] text-gray-500 mt-1">Posts</div>
            </div>
            <div>
              <div className="font-black text-base leading-none text-black">70.4 k</div>
              <div className="text-[11px] text-gray-500 mt-1">Followers</div>
            </div>
            <div>
              <div className="font-bold text-base leading-none">67</div>
              <div className="text-[11px] text-gray-500 mt-1">Following</div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Dashboard Highlight Box */}
      <div className="bg-gray-100/80 rounded-xl p-3 border border-gray-200">
        <div className="text-xs font-bold text-gray-900">Professional dashboard</div>
        <div className="text-xs font-semibold text-gray-600 mt-0.5">
          8.5M accounts reached in the last 30 days.
        </div>
      </div>

      {/* Pinned 70K Celebration Badge */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
        <span className="text-gray-500 font-medium">Software Company · Job Seekers Resume Engine</span>
        <span className="font-extrabold text-[#B600A8] bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
          ★ Celebrating 70K Followers
        </span>
      </div>
    </div>
  );
};

// 6. Instagram Single Milestone Card: 53.5K Followers (7.2M Reach)
export const InstagramMilestone53KCard: React.FC = () => {
  return (
    <div className="w-[430px] h-[270px] bg-white text-black p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-gray-200 shadow-md">
      {/* Top Instagram Bar */}
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm tracking-tight">instaresume.io</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
          </div>
          <span className="text-xs text-gray-500 font-semibold">Stage 3 Scaling</span>
        </div>

        {/* Profile Stats Row */}
        <div className="flex items-center justify-between pt-3 px-2">
          <div className="w-14 h-14 rounded-full border-2 border-gray-200 p-0.5 flex items-center justify-center bg-gray-50 shadow-inner">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-xl text-black">
              1
            </div>
          </div>

          <div className="flex items-center gap-7 text-center">
            <div>
              <div className="font-bold text-base leading-none">73</div>
              <div className="text-[11px] text-gray-500 mt-1">Posts</div>
            </div>
            <div>
              <div className="font-black text-base leading-none text-black">53.5 k</div>
              <div className="text-[11px] text-gray-500 mt-1">Followers</div>
            </div>
            <div>
              <div className="font-bold text-base leading-none">66</div>
              <div className="text-[11px] text-gray-500 mt-1">Following</div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Dashboard Highlight Box */}
      <div className="bg-gray-100/80 rounded-xl p-3 border border-gray-200">
        <div className="text-xs font-bold text-gray-900">Professional dashboard</div>
        <div className="text-xs font-semibold text-gray-600 mt-0.5">
          7.2M accounts reached in the last 30 days.
        </div>
      </div>

      {/* Pinned Viral Reels Info */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
        <span className="text-gray-500 font-medium">Reel: "What is your Salary Expectation?"</span>
        <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
          7.2M Monthly Reach
        </span>
      </div>
    </div>
  );
};

// 7. Instagram Early Phase Card: 8,353 Followers (4.9M Reach)
export const InstagramMilestone8KCard: React.FC = () => {
  return (
    <div className="w-[400px] h-[255px] bg-white text-black p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-gray-200 shadow-md">
      <div>
        <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm tracking-tight">instaresume.io</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
          </div>
          <span className="text-xs text-gray-400 font-semibold">Stage 1 · Baseline</span>
        </div>

        <div className="flex items-center justify-between pt-2 px-2">
          <div className="w-12 h-12 rounded-full border border-gray-200 p-0.5 flex items-center justify-center bg-gray-50 shadow-inner">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-lg text-black">
              1
            </div>
          </div>

          <div className="flex items-center gap-6 text-center">
            <div>
              <div className="font-bold text-base leading-none">53</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Posts</div>
            </div>
            <div>
              <div className="font-black text-base leading-none text-black">8,353</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Followers</div>
            </div>
            <div>
              <div className="font-bold text-base leading-none">63</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Following</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100/80 rounded-xl p-2.5 border border-gray-200">
        <div className="text-xs font-bold text-gray-900">Professional dashboard</div>
        <div className="text-xs font-semibold text-gray-600 mt-0.5">
          4.9M accounts reached in the last 30 days.
        </div>
      </div>

      <div className="flex items-center justify-between pt-1.5 border-t border-gray-100 text-xs">
        <span className="text-gray-500 font-medium">Reel: "Recruiters on LinkedIn like this"</span>
        <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
          4.9M Monthly Reach
        </span>
      </div>
    </div>
  );
};

// 8. Instagram Scaling Phase Card: 23.8K Followers (6.4M Reach)
export const InstagramMilestone23KCard: React.FC = () => {
  return (
    <div className="w-[400px] h-[255px] bg-white text-black p-4 flex flex-col justify-between font-['Inter',sans-serif] select-none rounded-2xl border border-gray-200 shadow-md">
      <div>
        <div className="flex items-center justify-between pb-1.5 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-sm tracking-tight">instaresume.io</span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" />
          </div>
          <span className="text-xs text-purple-600 font-semibold">Stage 2 · Scaling</span>
        </div>

        <div className="flex items-center justify-between pt-2 px-2">
          <div className="w-12 h-12 rounded-full border border-gray-200 p-0.5 flex items-center justify-center bg-gray-50 shadow-inner">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-lg text-black">
              1
            </div>
          </div>

          <div className="flex items-center gap-6 text-center">
            <div>
              <div className="font-bold text-base leading-none">58</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Posts</div>
            </div>
            <div>
              <div className="font-black text-base leading-none text-black">23.8 k</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Followers</div>
            </div>
            <div>
              <div className="font-bold text-base leading-none">64</div>
              <div className="text-[10px] text-gray-500 mt-0.5">Following</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100/80 rounded-xl p-2.5 border border-gray-200">
        <div className="text-xs font-bold text-gray-900">Professional dashboard</div>
        <div className="text-xs font-semibold text-gray-600 mt-0.5">
          6.4M accounts reached in the last 30 days.
        </div>
      </div>

      <div className="flex items-center justify-between pt-1.5 border-t border-gray-100 text-xs">
        <span className="text-gray-500 font-medium">Reel: "5 Best Websites to crack any Interview"</span>
        <span className="font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
          6.4M Monthly Reach
        </span>
      </div>
    </div>
  );
};
