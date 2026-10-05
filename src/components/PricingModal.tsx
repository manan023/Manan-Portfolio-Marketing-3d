import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Zap, Sparkles, TrendingUp } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier: (tierName: string) => void;
}

interface Tier {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period?: string;
  description: string;
  icon: any;
  featured?: boolean;
  features: string[];
  turnaround: string;
}

const TIERS: Tier[] = [
  {
    id: 'social-growth',
    name: '01 / Viral Social Engine',
    subtitle: 'Instagram & Multi-Platform Growth',
    price: '$1,200',
    description: 'Proven short-form video system to scale followers organically and capture millions of qualified views.',
    icon: TrendingUp,
    features: [
      '12 high-retention viral Reels / Shorts monthly',
      'Data-backed hook testing & trend research',
      '15-day and monthly scheduled content calendars',
      'Multi-platform syndication (IG, LinkedIn, YouTube, X)',
      'Influencer outreach negotiation & creator briefs',
    ],
    turnaround: 'Monthly Retainer',
  },
  {
    id: 'seo-engine',
    name: '02 / Technical SEO & Traffic',
    subtitle: 'Scale to 400K+ Monthly Searchers',
    price: '$2,200',
    description: 'Comprehensive technical and on-page SEO infrastructure powered by keyword mapping and Sanity CMS.',
    icon: Sparkles,
    featured: true,
    features: [
      'Full technical SEO audit & Core Web Vitals optimization',
      'High-intent keyword clusters via SEMrush & GA4',
      '8–12 optimized articles published on headless CMS',
      'Internal linking architecture & metadata overhaul',
      'Bi-weekly ranking and search impression reporting',
    ],
    turnaround: 'Monthly / Quarterly',
  },
  {
    id: 'full-stack-growth',
    name: '03 / Strategy, Growth & Tech',
    subtitle: 'The All-in-One Full Stack Partner',
    price: '$4,500',
    description: 'Complete technical build and marketing execution: full stack web apps plus end-to-end viral growth.',
    icon: Zap,
    features: [
      'Full stack app development (React, Next.js, Firebase)',
      '30–40% performance & load speed optimization',
      'Integrated AI features via OpenAI API with MCP pipelines',
      'Both Social Growth Engine + Technical SEO included',
      'Direct Slack channel & dedicated weekly strategy calls',
    ],
    turnaround: 'Dedicated Retainer',
  },
];

export const PricingModal: React.FC<PricingModalProps> = ({ isOpen, onClose, onSelectTier }) => {
  const [selectedPlan, setSelectedPlan] = useState<string>('seo-engine');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-[#121212] border border-[#2A2D35] rounded-3xl p-6 sm:p-10 text-[#D7E2EA] shadow-2xl z-10 my-8 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close pricing"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold">
                Transparent Pricing
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
                Packages & Retainers
              </h2>
              <p className="text-sm text-[#D7E2EA]/70 mt-2">
                One dedicated specialist for marketing strategy, organic traffic scaling, and full-stack engineering.
              </p>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TIERS.map((tier) => {
                const Icon = tier.icon;

                return (
                  <div
                    key={tier.id}
                    onClick={() => setSelectedPlan(tier.id)}
                    className={`relative rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 border ${
                      tier.featured
                        ? 'bg-[#18181F] border-[#B600A8]/80 shadow-lg shadow-[#B600A8]/10'
                        : 'bg-[#161616] border-[#2A2D35] hover:border-[#4B5563]'
                    }`}
                  >
                    {tier.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md">
                        Highest Impact
                      </span>
                    )}

                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-white/5 text-[#BBCCD7]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs text-[#D7E2EA]/50 uppercase tracking-wider font-light">
                          {tier.turnaround}
                        </span>
                      </div>

                      <h3 className="font-semibold text-lg uppercase tracking-wide text-white">
                        {tier.name}
                      </h3>
                      <p className="text-xs text-[#D7E2EA]/60 mb-4">{tier.subtitle}</p>

                      <div className="mb-4">
                        <span className="text-3xl font-black text-white">{tier.price}</span>
                        <span className="text-xs text-[#D7E2EA]/50 ml-1">/ month</span>
                      </div>

                      <p className="text-xs text-[#D7E2EA]/70 leading-relaxed mb-6">
                        {tier.description}
                      </p>

                      <ul className="space-y-2.5 text-xs text-[#D7E2EA]/80 mb-6">
                        {tier.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-[#BBCCD7] mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectTier(tier.name);
                      }}
                      className={`w-full py-3 rounded-full text-xs font-medium uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        tier.featured
                          ? 'text-white'
                          : 'border border-[#D7E2EA]/30 text-[#D7E2EA] hover:bg-white/5'
                      }`}
                      style={
                        tier.featured
                          ? {
                              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                              boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                              outline: '2px solid white',
                              outlineOffset: '-3px',
                            }
                          : {}
                      }
                    >
                      <span>Inquire This Package</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Custom scope note */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-[#D7E2EA]/60 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>Looking for custom advisory, influencer partnerships, or a technical sprint?</span>
              <button
                onClick={() => onSelectTier('Custom Partnership')}
                className="text-white hover:text-[#BBCCD7] underline underline-offset-4 cursor-pointer"
              >
                Discuss custom scope with Manan →
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PricingModal;
