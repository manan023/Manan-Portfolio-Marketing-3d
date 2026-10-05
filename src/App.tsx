/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import MarqueeSection from './components/MarqueeSection';
import AboutSection from './components/AboutSection';
import MarketingMetricsDashboard from './components/MarketingMetricsDashboard';
import SocialHighlightsSection, { SocialPost } from './components/SocialHighlightsSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection, { PROJECTS, ProjectData } from './components/ProjectsSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import PricingModal from './components/PricingModal';
import CvModal from './components/CvModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import SocialPostModal from './components/SocialPostModal';
import ScrollProgressBar from './components/common/ScrollProgressBar';
import AiStudioPage from './components/AiStudioPage';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('manan-portfolio-theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [currentPage, setCurrentPage] = useState<'portfolio' | 'ai-studio'>('portfolio');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [selectedPost, setSelectedPost] = useState<SocialPost | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    localStorage.setItem('manan-portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenContact = () => {
    setIsContactOpen(true);
  };

  const handleOpenPricing = () => {
    setIsPricingOpen(true);
  };

  const handleOpenCv = () => {
    setIsCvOpen(true);
  };

  const handleSelectPricingTier = (tierName: string) => {
    setIsPricingOpen(false);
    setIsContactOpen(true);
  };

  if (currentPage === 'ai-studio') {
    return (
      <>
        <ScrollProgressBar />
        <AiStudioPage
          onBackToPortfolio={() => setCurrentPage('portfolio')}
          isLightMode={theme === 'light'}
          toggleTheme={toggleTheme}
          onOpenContact={handleOpenContact}
        />
        {/* Modals available inside Studio as well */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </>
    );
  }

  return (
    <div
      className={`min-h-screen font-['Kanit',sans-serif] selection:bg-[#B600A8] selection:text-white transition-colors duration-500 ${
        theme === 'dark' ? 'bg-[#0C0C0C] text-[#D7E2EA]' : 'bg-[#F3F4F6] text-[#111827]'
      }`}
      style={{ overflowX: 'clip' }}
    >
      {/* SCROLL PROGRESS BAR */}
      <ScrollProgressBar />

      {/* 1. HERO SECTION */}
      <HeroSection
        onOpenContact={handleOpenContact}
        onOpenPricing={handleOpenPricing}
        onOpenCv={handleOpenCv}
        onNavigateAiStudio={() => setCurrentPage('ai-studio')}
        isLightMode={theme === 'light'}
        toggleTheme={toggleTheme}
      />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection
        onOpenContact={handleOpenContact}
        onOpenCv={handleOpenCv}
      />

      {/* 4. MARKETING METRICS DASHBOARD (Interactive charts & audited telemetry) */}
      <MarketingMetricsDashboard />

      {/* 5. SOCIAL MEDIA HIGHLIGHTS SECTION (Horizontal Scrolling Grid) */}
      <SocialHighlightsSection
        onSelectPost={(post) => setSelectedPost(post)}
      />

      {/* 6. SERVICES SECTION */}
      <ServicesSection />

      {/* 7. PROJECTS SECTION */}
      <ProjectsSection
        onSelectProject={(project) => setSelectedProject(project)}
      />

      {/* FOOTER */}
      <Footer
        onOpenContact={handleOpenContact}
        onOpenCv={handleOpenCv}
        onOpenPricing={handleOpenPricing}
        onNavigateAiStudio={() => setCurrentPage('ai-studio')}
      />

      {/* INTERACTIVE MODALS */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <PricingModal
        isOpen={isPricingOpen}
        onClose={() => setIsPricingOpen(false)}
        onSelectTier={handleSelectPricingTier}
      />

      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        onOpenContact={handleOpenContact}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PROJECTS}
        onOpenContact={handleOpenContact}
      />

      <SocialPostModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onOpenContact={handleOpenContact}
      />
    </div>
  );
}
