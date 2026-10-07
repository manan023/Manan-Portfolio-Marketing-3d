import React from 'react';
import { Sun, Moon, FileText, Sparkles } from 'lucide-react';
import FadeIn from './common/FadeIn';
import Magnet from './common/Magnet';
import ContactButton from './common/ContactButton';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenPricing: () => void;
  onOpenCv: () => void;
  onNavigateAiStudio: () => void;
  isLightMode: boolean;
  toggleTheme: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenPricing,
  onOpenCv,
  onNavigateAiStudio,
  isLightMode,
  toggleTheme,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="h-screen w-full flex flex-col justify-between relative overflow-x-clip select-none">
      {/* Navbar: 4 links evenly spaced with justify-between + utility controls */}
      <FadeIn delay={0} y={-20} className="w-full z-20 px-6 md:px-10 pt-6 md:pt-8">
        <header className="w-full flex items-center justify-between">
          <nav className="w-full flex items-center justify-between">
            <button
              onClick={() => scrollTo('about')}
              className="text-[#D7E2EA] dark:text-[#D7E2EA] light-text-adaptive font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              About
            </button>

            {/* Price option commented out per request */}
            {/*
            <button
              onClick={onOpenPricing}
              className="text-[#D7E2EA] dark:text-[#D7E2EA] light-text-adaptive font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Price
            </button>
            */}

            <button
              onClick={() => scrollTo('projects')}
              className="text-[#D7E2EA] dark:text-[#D7E2EA] light-text-adaptive font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
            >
              Projects
            </button>

            <div className="flex items-center gap-2.5 sm:gap-4">
              <button
                onClick={onOpenContact}
                className="text-[#D7E2EA] dark:text-[#D7E2EA] light-text-adaptive font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
              >
                Contact
              </button>

              {/* AI Studio Page Button */}
              <button
                onClick={onNavigateAiStudio}
                title="Launch AI Studio & Labs"
                className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  boxShadow: '0 0 12px rgba(182, 0, 168, 0.35)',
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">AI Studio</span>
              </button>

              {/* CV Button */}
              <button
                onClick={onOpenCv}
                title="View Resume / CV"
                className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-[#D7E2EA]/30 dark:border-[#D7E2EA]/30 light-border-adaptive text-[#D7E2EA] dark:text-[#D7E2EA] light-text-adaptive text-xs md:text-sm font-medium uppercase tracking-wider hover:bg-[#D7E2EA]/10 transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">CV</span>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                title={isLightMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                aria-label="Toggle theme"
                className="p-1.5 sm:p-2 rounded-full border border-[#D7E2EA]/30 dark:border-[#D7E2EA]/30 light-border-adaptive text-[#D7E2EA] dark:text-[#D7E2EA] light-text-adaptive hover:bg-[#D7E2EA]/10 transition-all duration-200 cursor-pointer"
              >
                {isLightMode ? (
                  <Moon className="w-4 h-4 text-indigo-900" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-300" />
                )}
              </button>
            </div>
          </nav>
        </header>
      </FadeIn>

      {/* Hero Heading Container - elevated to z-20 so typography is proudly in front without clipping */}
      <div className="w-full text-center relative z-20 pointer-events-none px-4 sm:px-6 md:px-8 flex justify-center items-center">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
            style={{ fontSize: 'clamp(2.2rem, 12.2vw, 12.8vw)' }}
          >
            Hi, i&apos;m manan
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait: Positioned at bottom with Magnet, behind heading (z-10) */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 bottom-0 top-auto translate-y-0 pointer-events-none flex items-end justify-center"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="pointer-events-auto"
        >
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png"
            alt="Manan Arora portrait"
            className="w-[240px] sm:w-[320px] md:w-[400px] lg:w-[460px] max-h-[52vh] sm:max-h-[62vh] md:max-h-[70vh] h-auto object-contain object-bottom select-none drop-shadow-2xl opacity-95"
            loading="eager"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar: Flexbox justify-between items-end */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] dark:text-[#D7E2EA] light-text-adaptive font-light uppercase tracking-wide leading-snug max-w-[170px] sm:max-w-[240px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a digital marketer & full stack specialist scaling viral growth and crafting high-performance web apps
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onOpenContact} />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
