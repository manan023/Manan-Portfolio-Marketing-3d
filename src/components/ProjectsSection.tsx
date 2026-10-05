import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './common/FadeIn';
import LiveProjectButton from './common/LiveProjectButton';
import {
  Ga4ActiveUsersCard,
  GscCountriesCard,
  GscSearchPerformanceCard,
} from './projects/GscScreenshots';

export interface ProjectData {
  id: string;
  number: string;
  name: string;
  category: 'Startup' | 'Creator' | 'Product' | 'Client' | 'Personal';
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  description: string;
  deliverables: string[];
  year: string;
  role: string;
  link?: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 'instaresume-platform',
    number: '01',
    name: 'Instaresume.io Platform & Growth',
    category: 'Startup',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    description:
      'Spearheaded organic marketing and technical SEO development for Instaresume.io. Scaled traffic to 128K active users and 121K new users, achieved 297K impressions with an average position of 1.5 for high-volume keywords, and generated over 3.1M global impressions across 25+ countries.',
    deliverables: ['128K Active Users (GA4 Verified)', 'Search Console: 297K Imp / 1.5 Rank', '3.1M+ Global Organic Search Imp'],
    year: '2024 — 2026',
    role: 'Full Stack Engineer & Digital Marketer',
    link: 'https://www.instaresume.io',
  },
  {
    id: 'viral-reel-engine',
    number: '02',
    name: 'Viral Content & Reel Engine',
    category: 'Creator',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    description:
      'Engineered a viral short-form video system producing 50+ viral Reels with ~100M total organic impressions, with peak individual videos capturing 5–8M views. Managed creative direction, scriptwriting, hook testing, and editor briefs via Trello.',
    deliverables: ['~100M Total Organic Views', '5–8M Peak View Reels', 'Multi-Platform Syndication'],
    year: '2024',
    role: 'Creative Director & Growth Strategist',
    link: 'https://instagram.com/the_undefined_guy',
  },
  {
    id: 'linkedin-chrome-extension',
    number: '03',
    name: 'AI Tooling & Chrome Extension',
    category: 'Product',
    col1Image1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Image2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    description:
      'Developed a LinkedIn Optimization Chrome Extension along with automated Sanity CMS blog publishing workflows. Integrated 10+ AI features via OpenAI API with MCP server prompt optimizations, reducing per-request operational costs by 40%.',
    deliverables: ['LinkedIn Optimization Extension', 'OpenAI API Cost Optimization', 'Automated Sanity.io Publishing'],
    year: '2024 — 2025',
    role: 'Full Stack & AI Engineer',
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  onSelectProject: (project: ProjectData) => void;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards, onSelectProject }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  // Target scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] relative"
      >
        {/* Top Row: Number, category label, project name, and Live Project button */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#D7E2EA]/20">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none select-none tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              {project.number}
            </span>

            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-normal">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-wide"
                style={{ fontSize: 'clamp(1.1rem, 2vw, 1.8rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <div className="self-end sm:self-center">
            <LiveProjectButton onClick={() => onSelectProject(project)} />
          </div>
        </div>

        {/* Bottom Row: Two-column image grid (Left: 40% with 2 stacked images, Right: 60% with 1 tall image) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 pt-6 sm:pt-8">
          {/* Left Column (40% width -> 5 cols out of 12) */}
          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6">
            {/* Left Top Image / GA4 Dashboard */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818] border border-white/10 group relative shadow-lg"
              style={{ height: 'clamp(140px, 17vw, 240px)' }}
            >
              {project.id === 'instaresume-platform' ? (
                <Ga4ActiveUsersCard />
              ) : (
                <>
                  <img
                    src={project.col1Image1}
                    alt={`${project.name} preview 1`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </>
              )}
            </div>

            {/* Left Bottom Image / GSC Countries Breakdown */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818] border border-white/10 group relative shadow-lg"
              style={{ height: 'clamp(170px, 23vw, 350px)' }}
            >
              {project.id === 'instaresume-platform' ? (
                <GscCountriesCard />
              ) : (
                <>
                  <img
                    src={project.col1Image2}
                    alt={`${project.name} preview 2`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </>
              )}
            </div>
          </div>

          {/* Right Column (60% width -> 7 cols out of 12) - GSC Search Results Performance */}
          <div className="md:col-span-7">
            <div
              className="w-full h-full min-h-[320px] sm:min-h-[420px] md:min-h-[auto] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181818] border border-white/10 group relative shadow-xl"
              style={{ height: '100%' }}
            >
              {project.id === 'instaresume-platform' ? (
                <GscSearchPerformanceCard />
              ) : (
                <>
                  <img
                    src={project.col2Image}
                    alt={`${project.name} featured visual`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] dark:bg-[#0C0C0C] light:bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading: "Project" (singular) */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky Stacking Project Cards Container */}
        <div className="relative">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              onSelectProject={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
