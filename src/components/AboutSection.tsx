import React from 'react';
import FadeIn from './common/FadeIn';
import AnimatedText from './common/AnimatedText';
import ContactButton from './common/ContactButton';

interface AboutSectionProps {
  onOpenContact: () => void;
  onOpenCv?: () => void;
}

const ABOUT_TEXT =
  "Digital Marketing & Web Development Specialist with 3 years at a high-growth startup, owning SEO, social media, content and influencer marketing end to end. Backed by a full stack developer's skill set, so I can also build the website, set up tracking and automate content with AI. One person for strategy, execution and the tech behind it.";

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact, onOpenCv }) => {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden bg-[#0C0C0C] dark:bg-[#0C0C0C] light:bg-[#F3F4F6] transition-colors duration-500 select-none"
    >
      {/* 4 Decorative 3D Corner Images with exact specs */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon icon"
            loading="lazy"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Geometric asset"
            loading="lazy"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain filter drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego brick"
            loading="lazy"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain filter drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Composition"
            loading="lazy"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain filter drop-shadow-2xl"
          />
        </FadeIn>
      </div>

      {/* Main Content Center Column */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading: "About me" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph: character-by-character scroll opacity */}
        <AnimatedText
          text={ABOUT_TEXT}
          className="text-[#D7E2EA] dark:text-[#D7E2EA] light:text-[#1F2937] font-medium text-center leading-relaxed max-w-[620px] px-4"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        />

        {/* Key metric highlights in clean unboxed typography */}
        <FadeIn delay={0.15} y={20} className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-slate-900 tracking-tight">
              100M+
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 font-light mt-0.5">
              Reel Views Scaled
            </div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-slate-900 tracking-tight">
              400K+
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 font-light mt-0.5">
              Monthly SEO Traffic
            </div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-slate-900 tracking-tight">
              90K+
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 font-light mt-0.5">
              Organic IG Followers
            </div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-black text-white dark:text-white light:text-slate-900 tracking-tight">
              5M+
            </div>
            <div className="text-[11px] uppercase tracking-wider text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500 font-light mt-0.5">
              Platform Users Served
            </div>
          </div>
        </FadeIn>

        {/* Gap between text & button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-12 sm:h-16 md:h-20" />

        {/* Contact button + optional CV button */}
        <FadeIn delay={0.2} y={20} className="flex flex-col sm:flex-row items-center gap-4">
          <ContactButton onClick={onOpenContact} />
          {onOpenCv && (
            <button
              onClick={onOpenCv}
              className="text-[#D7E2EA]/80 dark:text-[#D7E2EA]/80 light:text-[#374151] hover:text-white dark:hover:text-white light:hover:text-black uppercase tracking-widest text-xs sm:text-sm font-medium border-b border-current pb-0.5 transition-colors cursor-pointer"
            >
              Explore Full CV & Case Studies →
            </button>
          )}
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
