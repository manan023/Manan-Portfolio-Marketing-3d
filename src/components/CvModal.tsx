import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Briefcase, Award, GraduationCap, Cpu, Check, MapPin, Phone, Mail, Globe, Instagram, Linkedin, Github } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    const cvContent = `MANAN ARORA
Digital Marketing & Web Development Specialist
Ghaziabad, India | +91-8077696719 | mananarora1812@gmail.com
Instagram: @the_undefined_guy | LinkedIn: linkedin.com/in/manan-arora

PROFESSIONAL SUMMARY
Digital Marketing & Web Development Specialist with 3 years at a high-growth startup, owning SEO, social media, content and influencer marketing end to end. Backed by a full stack developer's skill set, so I can also build the website, set up tracking and automate content with AI. One person for strategy, execution and the tech behind it.

KEY ACHIEVEMENTS
• Grew Instaresume.io's Instagram from 70 to 90K+ organic followers.
• Created 50+ viral Reels with ~100M total views; individual Reels reached 5–8M views.
• Scaled organic website traffic from 10K to 400K+ monthly visitors through technical SEO, on-page optimisation and blog content.
• Ran 5 social platforms at once (Instagram, LinkedIn, YouTube, Pinterest, X/Twitter) with a consistent, regular posting schedule.
• Negotiated influencer promotion fees to keep paid campaign costs low, and briefed designers and video editors to deliver on-brand creatives.
• Supported a platform serving 5M+ users as its developer, improving page performance 30–40% and shipping 40+ production features.

CORE SKILLS
• Digital Marketing & SEO: Technical SEO, On-page SEO, Keyword Research, Content Strategy, Google Analytics 4, Google Search Console, SEMrush
• Social Media & Content: Instagram, LinkedIn, YouTube, Pinterest, X/Twitter, Reels, Content Calendars, Trend Research, Influencer Marketing, Canva, Buffer
• Web Development: React, Next.js, JavaScript/TypeScript, Node/NestJS, Firebase, MongoDB, REST APIs
• AI & Automation: Prompt Engineering, OpenAI API, AI-assisted content workflows, Social media automation, Claude Code, Cursor, MCP
• Marketing Operations: Trello, Sanity, Content scheduling, Customer feedback, Influencer negotiation, Team coordination

EXPERIENCE
Full Stack Software Engineer & Digital Marketer — Instaresume.io (Jul 2024 – Present)
Mohali, Chandigarh (Remote)
Marketing, SEO & Content:
• Tracked trending topics and formats and posted on trends immediately; planned 15-day and monthly content calendars and scheduled posts with Canva and Buffer.
• Built the organic growth engine: keyword research and technical/on-page SEO using GA4, Search Console and SEMrush, with blogs written and published through Sanity CMS.
• Built AI prompt workflows to generate content ideas, draft posts and automate social media publishing.
• Negotiated rates with influencers, and gave graphic designers and video editors clear briefs on how each post and Reel should be made; delegated and tracked tasks in Trello.
• Handled customer feedback on every channel and emailed users facing issues to resolve them quickly.
Web Development:
• Built 40+ production features in React.js, NestJS and Firebase for a 5M+ user platform using AI dev tools (Cursor, Claude Code, MCP servers); improved page performance 30–40%.
• Integrated 10+ AI features via OpenAI, cutting per-request cost by ~40%; automated blog publishing via Sanity.io and set up GitHub Actions CI/CD deployments.

Software Engineer Intern — Instaresume.io (Jul 2023 – Jun 2024)
• Built 50+ responsive, reusable components in React.js, TypeScript and Material UI, and resolved 150+ UI/API issues using Chrome DevTools and React Developer Tools.

EDUCATION & CERTIFICATIONS
• B.Tech, Computer Science & Engineering — AKTU, Meerut (7.5/10 CGPA) | Aug 2021 – Jun 2024
• Diploma in Engineering — BTEUP, Ghaziabad (7.3/10 CGPA) | Aug 2019 – Jul 2021
• Content Creator & Full Stack Development — JSpider | Sep 2023 – Mar 2024
`;
    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Manan_Arora_CV.txt';
    link.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

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
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl bg-[#121212] border border-[#2A2D35] rounded-3xl p-6 sm:p-10 text-[#D7E2EA] shadow-2xl z-10 my-8 max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold">
                  Curriculum Vitae
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
                  MANAN ARORA
                </h2>
                <p className="text-sm text-[#D7E2EA]/80 mt-1 font-medium">
                  Digital Marketing & Web Development Specialist
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#D7E2EA]/60 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B600A8]" /> Ghaziabad, India
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#B600A8]" /> +91-8077696719
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-[#B600A8]" /> mananarora1812@gmail.com
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Instagram className="w-3.5 h-3.5 text-[#B600A8]" /> @the_undefined_guy
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer border border-white/10"
                >
                  {downloaded ? <Check className="w-4 h-4 text-emerald-400" /> : <Download className="w-4 h-4" />}
                  <span>{downloaded ? 'Downloaded!' : 'Download CV'}</span>
                </button>

                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider text-white transition-all cursor-pointer"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  }}
                >
                  Hire Me
                </button>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="py-6 border-b border-white/10">
              <h3 className="text-xs uppercase tracking-widest text-white/50 mb-2 font-medium">
                Professional Summary
              </h3>
              <p className="text-sm sm:text-base text-[#D7E2EA] font-light leading-relaxed">
                Digital Marketing & Web Development Specialist with 3 years at a high-growth startup, owning SEO,
                social media, content and influencer marketing end to end. Backed by a full stack developer&apos;s
                skill set, so I can also build the website, set up tracking and automate content with AI. One person
                for strategy, execution and the tech behind it.
              </p>
            </div>

            {/* Key Achievements */}
            <div className="py-6 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#BBCCD7] mb-4 font-semibold">
                <Award className="w-4 h-4" />
                <span>Key Proven Milestones</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#D7E2EA]/90 font-light">
                <li className="flex items-start gap-2 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] mt-1.5 shrink-0" />
                  <span><strong>70 → 90K+ Followers:</strong> Scaled Instaresume.io Instagram organically.</span>
                </li>
                <li className="flex items-start gap-2 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] mt-1.5 shrink-0" />
                  <span><strong>100M+ Reel Views:</strong> Created 50+ viral Reels with peaks of 5–8M views each.</span>
                </li>
                <li className="flex items-start gap-2 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] mt-1.5 shrink-0" />
                  <span><strong>10K → 400K+ Monthly SEO:</strong> Scaled organic search traffic with Sanity blog engine.</span>
                </li>
                <li className="flex items-start gap-2 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B600A8] mt-1.5 shrink-0" />
                  <span><strong>5M+ Users Web App:</strong> Shipped 40+ features in React/NestJS; boosted speed 30–40%.</span>
                </li>
              </ul>
            </div>

            {/* Experience Section */}
            <div className="py-6 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#BBCCD7] mb-6 font-semibold">
                <Briefcase className="w-4 h-4" />
                <span>Work Experience</span>
              </div>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h4 className="text-base font-semibold text-white uppercase tracking-wide">
                      Full Stack Software Engineer & Digital Marketer
                    </h4>
                    <p className="text-xs text-[#B600A8] font-medium">Instaresume.io · Remote (Mohali, Chandigarh)</p>
                    <div className="mt-2 space-y-2 text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                      <p>
                        <strong>Marketing, SEO & Content:</strong> Tracked trending topics and formats for instant trendjacking; executed 15-day & monthly content calendars with Buffer & Canva. Built the organic growth engine with GA4, Search Console, and SEMrush, authoring blogs on Sanity CMS. Delegated briefs to designers/video editors via Trello and negotiated influencer campaign rates.
                      </p>
                      <p>
                        <strong>Web Development:</strong> Built 40+ production features in React.js, NestJS and Firebase for a 5M+ user platform utilizing Cursor, Claude Code, and MCP servers. Integrated 10+ AI features via OpenAI API, reducing per-request costs by ~40%.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-[#D7E2EA]/50 font-normal shrink-0">
                    Jul 2024 — Present
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 pt-4 border-t border-white/5">
                  <div>
                    <h4 className="text-base font-semibold text-white uppercase tracking-wide">
                      Software Engineer Intern
                    </h4>
                    <p className="text-xs text-[#B600A8] font-medium">Instaresume.io</p>
                    <p className="mt-1 text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed">
                      Built 50+ responsive, reusable components in React.js, TypeScript and Material UI, and resolved 150+ UI/API issues using Chrome DevTools and React Developer Tools.
                    </p>
                  </div>
                  <span className="text-xs text-[#D7E2EA]/50 font-normal shrink-0">
                    Jul 2023 — Jun 2024
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Skills & Toolset */}
            <div className="py-6 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#BBCCD7] mb-4 font-semibold">
                <Cpu className="w-4 h-4" />
                <span>Core Skills & Tooling</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                  <span className="text-xs text-white/50 uppercase font-medium block mb-1">Marketing & SEO</span>
                  <span className="text-xs font-medium text-white">Technical SEO, On-page, GA4, Search Console, SEMrush</span>
                </div>
                <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                  <span className="text-xs text-white/50 uppercase font-medium block mb-1">Social & Content</span>
                  <span className="text-xs font-medium text-white">Instagram, Reels, LinkedIn, Buffer, Canva, Influencer Outreach</span>
                </div>
                <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                  <span className="text-xs text-white/50 uppercase font-medium block mb-1">Web Development</span>
                  <span className="text-xs font-medium text-white">React, Next.js, TypeScript, NestJS, Firebase, MongoDB, REST</span>
                </div>
                <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                  <span className="text-xs text-white/50 uppercase font-medium block mb-1">AI & Automation</span>
                  <span className="text-xs font-medium text-white">OpenAI API, Cursor, Claude Code, MCP Servers, Prompt Eng.</span>
                </div>
                <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                  <span className="text-xs text-white/50 uppercase font-medium block mb-1">Marketing Ops</span>
                  <span className="text-xs font-medium text-white">Trello, Sanity CMS, Customer Support, Team Coordination</span>
                </div>
                <div className="bg-[#181818] p-3.5 rounded-xl border border-white/5">
                  <span className="text-xs text-white/50 uppercase font-medium block mb-1">Channels Managed</span>
                  <span className="text-xs font-medium text-white">Instagram, LinkedIn, YouTube, Pinterest, X/Twitter</span>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="pt-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#BBCCD7] mb-3 font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>Education & Certifications</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <p className="text-xs font-semibold text-white">B.Tech, Computer Science</p>
                  <p className="text-xs text-[#D7E2EA]/60">AKTU, Meerut (7.5/10 CGPA)</p>
                  <p className="text-[10px] text-white/40 mt-1">2021 – 2024</p>
                </div>
                <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <p className="text-xs font-semibold text-white">Diploma in Engineering</p>
                  <p className="text-xs text-[#D7E2EA]/60">BTEUP, Ghaziabad (7.3/10 CGPA)</p>
                  <p className="text-[10px] text-white/40 mt-1">2019 – 2021</p>
                </div>
                <div className="bg-white/[0.02] p-3 rounded-xl border border-white/5">
                  <p className="text-xs font-semibold text-white">Full Stack & Content Creation</p>
                  <p className="text-xs text-[#D7E2EA]/60">JSpider Certification</p>
                  <p className="text-[10px] text-white/40 mt-1">2023 – 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CvModal;
