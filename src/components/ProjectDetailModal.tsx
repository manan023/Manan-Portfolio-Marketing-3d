import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, ArrowLeft, ArrowRight, Eye } from 'lucide-react';
import { ProjectData } from './ProjectsSection';
import {
  Ga4ActiveUsersCard,
  GscCountriesCard,
  GscSearchPerformanceCard,
} from './projects/GscScreenshots';
import {
  ViralReelsMetricsCard,
  InstagramAccountsReachedCard,
  ViralReelsEngineCard,
  LinkedInExtensionCard,
  OpenAiPromptOptimizationCard,
  SanityProgrammaticSeoCard,
} from './projects/ProjectCardsScreenshots';

interface ProjectDetailModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onSelectProject: (project: ProjectData) => void;
  allProjects: ProjectData[];
  onOpenContact: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
  onOpenContact,
}) => {
  const [activeImageTab, setActiveImageTab] = useState<number>(0);
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);

  useEffect(() => {
    setActiveImageTab(0);
  }, [project?.id]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const galleryImages =
    project.id === 'instaresume-platform'
      ? [
          {
            title: 'Google Search Console: Query "biodata format" (3.49K Clicks, 297K Impressions, 1.5 Position)',
            category: 'GSC Keyword Rank',
            url: project.col2Image,
          },
          {
            title: 'Google Search Console: Global Reach (India 1.75M, USA 725K, Philippines 534K Imp)',
            category: 'Global Search Reach',
            url: project.col1Image2,
          },
          {
            title: 'Google Analytics 4: 128K Active Users & Outperforming Peer Median in Resumes',
            category: 'GA4 Active Users',
            url: project.col1Image1,
          },
        ]
      : project.id === 'viral-reel-engine'
      ? [
          {
            title: 'Peak Viral Reel Breakdown (8.2M Views, 624K Likes, 94K Shares, 142% Retention)',
            category: 'Peak Viral Reel #1',
            url: project.col1Image1,
          },
          {
            title: 'Instagram 30-Day Velocity (8.5M Organic Accounts Reached, 8K → 70.4K → 90K+ Followers)',
            category: 'Audience Reach',
            url: project.col1Image2,
          },
          {
            title: 'Short-Form Content Production Studio (3-Step Viral Formula, Trello Sprints, 50+ Reels)',
            category: 'Production Engine',
            url: project.col2Image,
          },
        ]
      : project.id === 'linkedin-chrome-extension'
      ? [
          {
            title: 'LinkedIn Optimization Chrome Extension (Chrome Web Store, 92/100 ATS Profile Score)',
            category: 'Chrome Extension',
            url: project.col1Image1,
          },
          {
            title: 'OpenAI Prompt Pipeline & Token Caching (-40% Cost Cut, 78.4% Cache Hits, $18.4K Saved)',
            category: 'AI Pipeline Caching',
            url: project.col1Image2,
          },
          {
            title: 'Sanity Headless CMS & Programmatic SEO Architecture (Next.js 15 ISR, 80+ Keywords, 400K Surge)',
            category: 'Programmatic SEO',
            url: project.col2Image,
          },
        ]
      : [
          { title: 'Project Overview & Telemetry', category: 'Case Study', url: project.col2Image },
          { title: 'Technical Architecture & Pipeline', category: 'Engineering', url: project.col1Image1 },
          { title: 'Audited Results & Performance', category: 'Metrics', url: project.col1Image2 },
        ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#101010] border border-[#2D3039] rounded-[32px] sm:rounded-[40px] text-[#D7E2EA] shadow-2xl z-10 my-6 max-h-[92vh] overflow-y-auto"
        >
          {/* Top Bar with Controls */}
          <div className="sticky top-0 z-20 bg-[#101010]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-black text-xl text-white tracking-tight">{project.number}</span>
              <span className="text-white/40">/</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-white">
                {project.name}
              </span>
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-medium hidden sm:inline">
                [{project.category}]
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Wireframe toggle */}
              <button
                onClick={() => setWireframeMode(!wireframeMode)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer border ${
                  wireframeMode
                    ? 'bg-[#B600A8]/20 border-[#B600A8] text-white'
                    : 'bg-white/5 border-white/10 text-white/70 hover:text-white'
                }`}
                title="Toggle Shaded Wireframe filter"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">
                  {wireframeMode ? 'Render Mode' : 'Viewport Mode'}
                </span>
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Featured Image Display / Interactive Dashboard Display */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black/60 border border-white/10 min-h-[380px] sm:min-h-[460px] flex items-center justify-center p-2 sm:p-4">
              {project.id === 'instaresume-platform' ? (
                <div className="w-full h-full min-h-[360px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  {activeImageTab === 0 && <GscSearchPerformanceCard />}
                  {activeImageTab === 1 && <GscCountriesCard />}
                  {activeImageTab === 2 && <Ga4ActiveUsersCard />}
                </div>
              ) : project.id === 'viral-reel-engine' ? (
                <div className="w-full h-full min-h-[360px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  {activeImageTab === 0 && <ViralReelsMetricsCard />}
                  {activeImageTab === 1 && <InstagramAccountsReachedCard />}
                  {activeImageTab === 2 && <ViralReelsEngineCard />}
                </div>
              ) : project.id === 'linkedin-chrome-extension' ? (
                <div className="w-full h-full min-h-[360px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  {activeImageTab === 0 && <LinkedInExtensionCard />}
                  {activeImageTab === 1 && <OpenAiPromptOptimizationCard />}
                  {activeImageTab === 2 && <SanityProgrammaticSeoCard />}
                </div>
              ) : (
                <div className="w-full h-full min-h-[360px] flex items-center justify-center text-white/60">
                  {galleryImages[activeImageTab]?.title}
                </div>
              )}
            </div>

            {/* Gallery Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageTab(idx)}
                  className={`relative rounded-xl overflow-hidden p-3 border transition-all cursor-pointer flex flex-col justify-center text-left ${
                    activeImageTab === idx
                      ? 'bg-white/10 border-[#B600A8] scale-[1.02] shadow-lg shadow-[#B600A8]/20 text-white'
                      : 'bg-white/5 border-white/10 opacity-70 hover:opacity-100 text-white/70'
                  }`}
                >
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#B600A8] block mb-1">
                    {img.category || `Telemetry #${idx + 1}`}
                  </span>
                  <span className="text-xs font-medium line-clamp-2 leading-snug">
                    {img.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-white/10">
              {/* Left Column: Project Overview */}
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white">
                  Case Study & Creative Direction
                </h3>
                <p className="text-sm sm:text-base text-[#D7E2EA]/80 font-light leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/60 font-light leading-relaxed">
                  Crafted using a high-precision digital pipeline involving procedural geometry, physical-based
                  spectral shading, and cinematic volumetric lighting. Engineered to maintain photoreal detail at
                  any zoom depth while keeping assets optimized for high-performance interactive deployment.
                </p>
              </div>

              {/* Right Column: Metadata specs */}
              <div className="space-y-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/50 block font-medium">
                    Category
                  </span>
                  <span className="text-sm font-semibold text-white">{project.category} Project</span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-white/50 block font-medium">
                    Role & Scope
                  </span>
                  <span className="text-sm font-semibold text-white">{project.role}</span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-white/50 block font-medium">
                    Year Completed
                  </span>
                  <span className="text-sm font-semibold text-white">{project.year}</span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-white/50 block font-medium mb-1.5">
                    Core Deliverables
                  </span>
                  <ul className="space-y-1 text-xs text-[#D7E2EA]/80">
                    {project.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-[#B600A8]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-full text-xs font-medium uppercase tracking-wider text-white text-center cursor-pointer transition-all border border-white/20 hover:bg-white/10 flex items-center justify-center gap-1.5"
                    >
                      <span>Visit Live Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => {
                      onClose();
                      onOpenContact();
                    }}
                    className="w-full py-2.5 rounded-full text-xs font-medium uppercase tracking-wider text-white text-center cursor-pointer transition-all hover:scale-102"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    }}
                  >
                    Discuss Growth Project
                  </button>
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  onSelectProject(prevProject);
                  setActiveImageTab(0);
                }}
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Prev: {prevProject.name}</span>
              </button>

              <button
                onClick={() => {
                  onSelectProject(nextProject);
                  setActiveImageTab(0);
                }}
                className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-white/70 hover:text-white transition-colors cursor-pointer"
              >
                <span>Next: {nextProject.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectDetailModal;
