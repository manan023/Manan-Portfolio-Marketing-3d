import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import {
  Ga4DashboardCard,
  ContentPerformanceCard,
  GscBiodataCard,
  InstagramCombinedMilestonesCard,
  InstagramMilestone70KCard,
  InstagramMilestone53KCard,
  InstagramMilestone23KCard,
  InstagramMilestone8KCard,
} from './marquee/RealWorkCards';
import {
  InstaresumeBuilderPreviewCard,
  LinkedInExtensionCardRow2,
  SanitySeoEngineCardRow2,
  OpenAiPromptOptimizationCardRow2,
  TrelloContentSprintCardRow2,
  InstaresumeCoverLetterCardRow2,
  InstagramDemographicsCardRow2,
  GscTopQueriesRankCardRow2,
} from './marquee/RealWorkCardsRow2';

// 8 Interleaved authentic work cards for maximum visual variety
const ROW1_ITEMS = [
  { id: 'gsc-1', component: <GscBiodataCard /> },
  { id: 'ig-70k', component: <InstagramMilestone70KCard /> },
  { id: 'ga4-1', component: <Ga4DashboardCard /> },
  { id: 'ig-combined', component: <InstagramCombinedMilestonesCard /> },
  { id: 'content-perf', component: <ContentPerformanceCard /> },
  { id: 'ig-53k', component: <InstagramMilestone53KCard /> },
  { id: 'ig-23k', component: <InstagramMilestone23KCard /> },
  { id: 'ig-8k', component: <InstagramMilestone8KCard /> },
];

// Row 2: 8 Authentic Engineering & Growth Cards (Instaresume, Chrome Extension, SEO, OpenAI API)
const ROW2_ITEMS = [
  { id: 'builder-core', component: <InstaresumeBuilderPreviewCard /> },
  { id: 'linkedin-ext', component: <LinkedInExtensionCardRow2 /> },
  { id: 'sanity-seo', component: <SanitySeoEngineCardRow2 /> },
  { id: 'openai-cost', component: <OpenAiPromptOptimizationCardRow2 /> },
  { id: 'trello-sprint', component: <TrelloContentSprintCardRow2 /> },
  { id: 'cover-letter', component: <InstaresumeCoverLetterCardRow2 /> },
  { id: 'ig-demographics', component: <InstagramDemographicsCardRow2 /> },
  { id: 'gsc-queries', component: <GscTopQueriesRankCardRow2 /> },
];

// Quadrupled lists for unbroken continuous scrolling
const QUAD_ROW1 = [...ROW1_ITEMS, ...ROW1_ITEMS, ...ROW1_ITEMS, ...ROW1_ITEMS];
const QUAD_ROW2 = [...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS, ...ROW2_ITEMS];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [manualOffset, setManualOffset] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const autoOffsetRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const [displayOffset, setDisplayOffset] = useState(0);

  // Smooth continuous auto-scrolling loop
  useEffect(() => {
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (!isPaused) {
        // Continuous smooth auto-advance ~50px/sec
        autoOffsetRef.current += 50 * dt;
      }

      setDisplayOffset(autoOffsetRef.current);
      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPaused]);

  // Accelerates on scroll so user can scrub through all cards quickly
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const scrollDistance = (window.scrollY - sectionTop + window.innerHeight) * 0.9;
            setScrollSpeed(scrollDistance);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Total width of one single cycle (8 cards * ~396px = 3168px)
  const singleCycleWidth = ROW1_ITEMS.length * 396;
  const currentX1 = ((displayOffset + scrollSpeed + manualOffset) % singleCycleWidth + singleCycleWidth) % singleCycleWidth;
  const row1Transform = `translate3d(-${currentX1}px, 0, 0)`;

  const singleCycleWidth2 = ROW2_ITEMS.length * 396;
  const currentX2 = ((displayOffset * 0.85 - scrollSpeed - manualOffset) % singleCycleWidth2 + singleCycleWidth2) % singleCycleWidth2;
  const row2Transform = `translate3d(-${singleCycleWidth2 - currentX2}px, 0, 0)`;

  const handleShift = (amount: number) => {
    setManualOffset((prev) => prev + amount);
  };

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="bg-[#0C0C0C] dark:bg-[#0C0C0C] light:bg-[#EFEFEF] pt-24 sm:pt-32 md:pt-40 pb-12 overflow-hidden relative transition-colors duration-500"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top subtle controls & badge */}
      <div className="max-w-6xl mx-auto px-6 mb-4 flex items-center justify-between text-xs text-[#D7E2EA]/60">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold uppercase tracking-wider text-white">
            Verified Work Telemetry, Platform Engineering & Growth (16 Live Case Studies)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => handleShift(-400)}
            title="Previous Cards"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? 'Resume Auto-Scroll' : 'Pause Auto-Scroll'}
            className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center gap-1 transition-all cursor-pointer"
          >
            {isPaused ? <Play className="w-3 h-3 fill-current" /> : <Pause className="w-3 h-3 fill-current" />}
            <span className="text-[10px] font-bold uppercase">{isPaused ? 'Play' : 'Pause'}</span>
          </button>
          <button
            onClick={() => handleShift(400)}
            title="Next Cards"
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {/* Row 1 - moves smoothly across all 8 verified work items */}
        <div
          className="flex gap-4"
          style={{
            transform: row1Transform,
            willChange: 'transform',
            transition: 'transform 0.05s linear',
          }}
        >
          {QUAD_ROW1.map((item, index) => (
            <div
              key={`row1-${index}`}
              className="w-[380px] h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              {item.component}
            </div>
          ))}
        </div>

        {/* Row 2 - moves in opposite direction across relevant project works */}
        <div
          className="flex gap-4"
          style={{
            transform: row2Transform,
            willChange: 'transform',
            transition: 'transform 0.05s linear',
          }}
        >
          {QUAD_ROW2.map((item, index) => (
            <div
              key={`row2-${index}`}
              className="w-[380px] h-[260px] flex-shrink-0 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              {item.component}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
