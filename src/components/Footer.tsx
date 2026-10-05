import React from 'react';
import { ArrowUp } from 'lucide-react';
import ContactButton from './common/ContactButton';

interface FooterProps {
  onOpenContact: () => void;
  onOpenCv: () => void;
  onOpenPricing: () => void;
  onNavigateAiStudio?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenCv,
  onOpenPricing,
  onNavigateAiStudio,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-white/10 px-6 md:px-12 py-16 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="hero-heading text-3xl sm:text-4xl font-black uppercase tracking-tight">
            Manan Arora
          </h3>
          <p className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 mt-1">
            Digital Marketing & Web Development Specialist
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80">
          <button
            onClick={() => {
              const el = document.getElementById('about');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('marketing-metrics');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Metrics
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('social-highlights');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Highlights
          </button>
          <button onClick={onOpenPricing} className="hover:text-white transition-colors cursor-pointer">
            Price
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('projects');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button onClick={onOpenCv} className="hover:text-white transition-colors cursor-pointer">
            Resume / CV
          </button>
          {onNavigateAiStudio && (
            <button
              onClick={onNavigateAiStudio}
              className="text-[#B600A8] hover:text-[#BBCCD7] font-semibold transition-colors cursor-pointer"
            >
              AI Studio ✨
            </button>
          )}
          <button onClick={onOpenContact} className="hover:text-white transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        <div className="flex items-center gap-4">
          <ContactButton onClick={onOpenContact} label="Let's Talk" />
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="p-3 rounded-full border border-white/20 hover:bg-white/10 text-white transition-all cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/40 gap-4">
        <p>© {new Date().getFullYear()} Manan Arora. Personal Creator: <a href="https://instagram.com/the_undefined_guy" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline">@the_undefined_guy</a> · Brand: <a href="https://instagram.com/instaresume.io" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline">@instaresume.io</a></p>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            Available for Growth & Web Projects
          </span>
          <span>·</span>
          <span className="text-[#D7E2EA]/70">mananarora1812@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
