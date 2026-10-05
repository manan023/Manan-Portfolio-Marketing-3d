import React from 'react';
import {
  TrendingUp,
  Search,
  ExternalLink,
  Download,
  Filter,
  CheckCircle2,
  Award,
  Globe,
  BarChart2,
  Calendar,
} from 'lucide-react';

// 1. Google Analytics 4: Active Users (128K) & Peer Median Benchmark
export const Ga4ActiveUsersCard: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#FFFFFF] text-[#202124] p-4 sm:p-5 flex flex-col justify-between font-['Roboto',sans-serif] select-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden shadow-inner">
      {/* Top Stat Bar */}
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-gray-100">
          <div className="flex items-center gap-6 sm:gap-8">
            <div>
              <div className="flex items-center gap-1 text-[11px] text-[#5f6368] font-medium">
                <span>Active users</span>
                <span className="w-3.5 h-3.5 rounded-full border border-gray-400 text-[9px] flex items-center justify-center">?</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
                128K
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1 text-[11px] text-[#5f6368] font-medium">
                <span>New users</span>
                <span className="w-3.5 h-3.5 rounded-full border border-gray-400 text-[9px] flex items-center justify-center">?</span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
                121K
              </div>
            </div>

            <div className="hidden sm:block">
              <div className="text-[11px] text-[#5f6368] font-medium">
                Avg engagement time
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-[#202124] tracking-tight">
                4m 14s
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="p-1 rounded-full text-blue-600 bg-blue-50">
              <Award className="w-4 h-4" />
            </span>
            <span className="p-1 rounded-full text-emerald-600 bg-emerald-50">
              <CheckCircle2 className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>

      {/* SVG Vector Chart: Custom Traffic vs Peer Benchmark */}
      <div className="w-full relative my-2 flex-1 min-h-[90px] sm:min-h-[110px]">
        <svg viewBox="0 0 500 130" className="w-full h-full overflow-visible">
          {/* Shaded Peer Range */}
          <path
            d="M 10 100 Q 60 92, 120 95 T 240 98 T 360 96 T 490 98 L 490 120 L 10 120 Z"
            fill="#e8f0fe"
            opacity="0.8"
          />

          {/* Peer Median Line */}
          <path
            d="M 10 115 Q 60 112, 120 114 T 240 116 T 360 115 T 490 116"
            fill="none"
            stroke="#78d9ec"
            strokeWidth="2"
          />

          {/* Instaresume Custom High-Performance Traffic Line */}
          <path
            d="M 10 35 L 25 45 L 45 20 L 60 30 L 75 60 L 90 48 L 105 70 L 115 85 L 125 50 L 140 45 L 155 75 L 170 52 L 185 68 L 205 38 L 225 65 L 245 42 L 265 60 L 285 45 L 305 75 L 325 50 L 345 62 L 365 72 L 385 48 L 405 58 L 425 45 L 445 68 L 465 52 L 490 40"
            fill="none"
            stroke="#1a73e8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Key milestone points */}
          <circle cx="115" cy="85" r="3.5" fill="#fff" stroke="#1a73e8" strokeWidth="2" />
          <circle cx="125" cy="50" r="3.5" fill="#fff" stroke="#1a73e8" strokeWidth="2" />

          {/* Gridlines */}
          <line x1="10" y1="120" x2="490" y2="120" stroke="#dadce0" strokeWidth="1" />
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
        <div className="flex items-center gap-4 text-gray-400">
          <span>01 Dec</span>
          <span>01 Jan</span>
          <span>01 Feb</span>
          <span>01 Mar</span>
        </div>
      </div>
    </div>
  );
};

// 2. Google Search Console: Country Breakdown (India 1.75M, USA, UAE, Philippines)
export const GscCountriesCard: React.FC = () => {
  const countries = [
    { name: 'India', clicks: '17,609', impressions: '1,751,010' },
    { name: 'Philippines', clicks: '948', impressions: '534,829' },
    { name: 'United Arab Emirates', clicks: '848', impressions: '57,659' },
    { name: 'United States', clicks: '802', impressions: '725,273' },
    { name: 'Pakistan', clicks: '772', impressions: '42,551' },
    { name: 'Bangladesh', clicks: '523', impressions: '79,499' },
  ];

  return (
    <div className="w-full h-full bg-[#FFFFFF] text-[#202124] p-4 sm:p-5 flex flex-col justify-between font-['Roboto',sans-serif] select-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden shadow-inner">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#1a73e8] flex items-center justify-center text-white text-[9px] font-bold">
              G
            </div>
            <span className="text-xs font-semibold text-gray-700">
              instaresume.io · Search Console
            </span>
          </div>
          <span className="text-[10px] bg-blue-50 text-[#1a73e8] font-semibold px-2 py-0.5 rounded-full border border-blue-200">
            ✓ 3 months verified
          </span>
        </div>

        {/* Tab Navigation header */}
        <div className="flex items-center gap-4 text-[11px] font-medium text-gray-500 pt-2 border-b border-gray-100">
          <span className="text-gray-400">QUERIES</span>
          <span className="text-gray-400">PAGES</span>
          <span className="text-[#1a73e8] border-b-2 border-[#1a73e8] pb-1 font-semibold">COUNTRIES</span>
          <span className="text-gray-400">DEVICES</span>
        </div>
      </div>

      {/* Country Table Rows */}
      <div className="my-2 space-y-1.5 flex-1">
        <div className="flex justify-between text-[10px] text-gray-400 uppercase font-semibold pb-1 border-b border-gray-100">
          <span>Country</span>
          <div className="flex gap-6">
            <span>↓ Clicks</span>
            <span>Impressions</span>
          </div>
        </div>

        {countries.map((c, i) => (
          <div
            key={i}
            className="flex items-center justify-between text-xs py-1 px-1 rounded hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-2 font-medium text-gray-800">
              <Globe className="w-3 h-3 text-gray-400" />
              <span>{c.name}</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-bold text-[#1a73e8] w-12 text-right">{c.clicks}</span>
              <span className="text-gray-500 w-16 text-right font-normal">{c.impressions}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Insight */}
      <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
        <span>Global reach across 25+ countries</span>
        <span className="font-semibold text-emerald-600">3.1M+ Total Impressions</span>
      </div>
    </div>
  );
};

// 3. Google Search Console: Main Performance Dashboard (Query: biodata format, 3.49K clicks, 297K impressions, 1.5 position)
export const GscSearchPerformanceCard: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#FFFFFF] text-[#202124] p-5 sm:p-7 flex flex-col justify-between font-['Roboto',sans-serif] select-none rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden shadow-inner">
      {/* Top Search Console Browser Bar */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 font-bold text-gray-700 text-sm">
              <span className="text-red-500 font-black">G</span>
              <span className="text-yellow-500 font-black">o</span>
              <span className="text-blue-500 font-black">o</span>
              <span className="text-green-500 font-black">g</span>
              <span className="text-red-500 font-black">l</span>
              <span className="text-blue-500 font-black">e</span>
              <span className="text-gray-500 font-normal ml-1">Search Console</span>
            </div>
            <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-md font-medium border border-gray-200">
              instaresume.io
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-[11px] text-gray-400 hidden sm:block">
              Last update: 9.5 hours ago
            </div>
            <span className="flex items-center gap-1 text-xs text-gray-600 border border-gray-200 px-2 py-0.5 rounded">
              <Download className="w-3 h-3" /> EXPORT
            </span>
          </div>
        </div>

        {/* Filter Badges Row */}
        <div className="flex flex-wrap items-center gap-2 pt-3 pb-4">
          <span className="text-xs bg-[#e8f0fe] text-[#1a73e8] font-semibold px-2.5 py-1 rounded-full border border-[#d2e3fc]">
            Search type: Web (text)
          </span>
          <span className="text-xs bg-[#e8f0fe] text-[#1a73e8] font-bold px-3 py-1 rounded-full border border-[#1a73e8] flex items-center gap-1 shadow-sm">
            Query: biodata format <span className="font-normal text-xs ml-1">✕</span>
          </span>
          <span className="text-xs text-gray-500 border border-gray-300 px-2.5 py-1 rounded-full">
            + Add filter
          </span>
        </div>

        {/* 4 Performance Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {/* Card 1: Total Clicks */}
          <div className="bg-[#1a73e8] text-white p-3 sm:p-4 rounded-xl shadow-md">
            <div className="flex items-center gap-1 text-[11px] opacity-90">
              <span>☑ Total clicks</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
              3.49K
            </div>
          </div>

          {/* Card 2: Total Impressions */}
          <div className="bg-[#7b1fa2] text-white p-3 sm:p-4 rounded-xl shadow-md">
            <div className="flex items-center gap-1 text-[11px] opacity-90">
              <span>☑ Total impressions</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">
              297K
            </div>
          </div>

          {/* Card 3: Average CTR */}
          <div className="bg-gray-50 border border-gray-200 text-gray-700 p-3 sm:p-4 rounded-xl">
            <div className="text-[11px] text-gray-500">
              ☐ Average CTR
            </div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight mt-1">
              1.2%
            </div>
          </div>

          {/* Card 4: Average Position */}
          <div className="bg-gray-50 border border-gray-200 text-gray-700 p-3 sm:p-4 rounded-xl">
            <div className="text-[11px] text-gray-500">
              ☐ Average position
            </div>
            <div className="text-2xl sm:text-3xl font-bold tracking-tight mt-1 text-emerald-600">
              1.5
            </div>
          </div>
        </div>
      </div>

      {/* Dual Axis Curve: Purple (Impressions up to 3.8K) and Blue (Clicks up to 120) */}
      <div className="w-full relative flex-1 min-h-[160px] sm:min-h-[200px] my-2">
        <svg viewBox="0 0 600 200" className="w-full h-full overflow-visible">
          {/* Grid lines */}
          <line x1="20" y1="40" x2="580" y2="40" stroke="#f1f3f4" strokeWidth="1" />
          <line x1="20" y1="90" x2="580" y2="90" stroke="#f1f3f4" strokeWidth="1" />
          <line x1="20" y1="140" x2="580" y2="140" stroke="#f1f3f4" strokeWidth="1" />
          <line x1="20" y1="180" x2="580" y2="180" stroke="#dadce0" strokeWidth="1" />

          {/* Left Y Axis (Clicks 120, 80, 40, 0) */}
          <text x="15" y="45" fill="#5f6368" fontSize="10" textAnchor="end">120</text>
          <text x="15" y="95" fill="#5f6368" fontSize="10" textAnchor="end">80</text>
          <text x="15" y="145" fill="#5f6368" fontSize="10" textAnchor="end">40</text>
          <text x="15" y="185" fill="#5f6368" fontSize="10" textAnchor="end">0</text>

          {/* Right Y Axis (Impressions 3.8K, 2.5K, 1.3K, 0) */}
          <text x="585" y="45" fill="#7b1fa2" fontSize="10" textAnchor="start">3.8K</text>
          <text x="585" y="95" fill="#7b1fa2" fontSize="10" textAnchor="start">2.5K</text>
          <text x="585" y="145" fill="#7b1fa2" fontSize="10" textAnchor="start">1.3K</text>
          <text x="585" y="185" fill="#7b1fa2" fontSize="10" textAnchor="start">0</text>

          {/* Purple Line: Impressions curve (peaking near 3.8K) */}
          <path
            d="M 25 70 Q 50 60, 75 75 T 120 120 T 160 90 T 200 65 T 240 70 T 280 40 T 320 60 T 360 45 T 400 70 T 440 85 T 480 40 T 520 70 T 570 45"
            fill="none"
            stroke="#7b1fa2"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Blue Line: Clicks curve (peaking at 120) */}
          <path
            d="M 25 155 L 45 130 L 65 110 L 85 40 L 105 135 L 125 150 L 145 125 L 165 145 L 185 160 L 205 135 L 225 115 L 245 130 L 265 95 L 285 60 L 305 115 L 325 125 L 345 105 L 365 90 L 385 145 L 405 125 L 425 120 L 445 150 L 465 90 L 485 120 L 505 145 L 530 155 L 560 135"
            fill="none"
            stroke="#1a73e8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Date timeline labels */}
      <div className="flex justify-between text-[10px] text-gray-500 pt-2 border-t border-gray-100">
        <span>12/1/25</span>
        <span>12/14/25</span>
        <span>12/27/25</span>
        <span>1/9/26</span>
        <span>1/22/26</span>
        <span>2/3/26</span>
        <span>2/16/26</span>
        <span>3/1/26</span>
        <span>3/14/26</span>
        <span>3/26/26</span>
      </div>
    </div>
  );
};

export default GscSearchPerformanceCard;
