import React from 'react';
import FadeIn from './common/FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
  tools: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: '01',
    name: 'Growth & Social Media',
    description:
      'Grew Instagram from 70 to 90K+ organic followers, created 50+ viral Reels with ~100M total views, and managed 5 social platforms with consistent, high-engagement content.',
    tools: ['Instagram Reels', 'LinkedIn', 'YouTube', 'Pinterest', 'X/Twitter', 'Buffer'],
  },
  {
    id: '02',
    name: 'Technical SEO & Content',
    description:
      'Scaled organic website traffic from 10K to 400K+ monthly visitors through technical audits, keyword research, on-page optimization, and scalable Sanity CMS blog publishing.',
    tools: ['Google Analytics 4', 'Search Console', 'SEMrush', 'Sanity.io', 'Technical SEO'],
  },
  {
    id: '03',
    name: 'Full Stack Development',
    description:
      'Built 40+ production features in React.js, Next.js, and Firebase for a 5M+ user platform, improving page performance by 30–40% and writing clean, scalable code.',
    tools: ['React', 'Next.js', 'TypeScript', 'NestJS', 'Firebase', 'MongoDB', 'REST APIs'],
  },
  {
    id: '04',
    name: 'AI Workflows & Automation',
    description:
      'Engineered AI prompt pipelines with OpenAI API, Cursor, Claude Code, and MCP servers to cut API request costs by ~40% and automate social media publishing end to end.',
    tools: ['OpenAI API', 'Claude Code', 'Cursor', 'MCP Servers', 'Prompt Engineering'],
  },
  {
    id: '05',
    name: 'Marketing Operations',
    description:
      'Led comprehensive campaign execution: built 15-day and monthly content calendars, briefed video editors and graphic designers, negotiated influencer fees, and tracked sprints in Trello.',
    tools: ['Trello', 'Canva', 'Influencer Negotiation', 'Creative Briefs', 'CI/CD Pipelines'],
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10 select-none shadow-[0_-20px_50px_rgba(0,0,0,0.15)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading: "Services" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service items in a vertical list */}
        <div className="flex flex-col border-t border-[rgba(12,12,12,0.15)]">
          {SERVICES.map((service, i) => (
            <FadeIn
              key={service.id}
              delay={i * 0.1}
              y={25}
              className="group border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 transition-colors duration-300 hover:bg-[#0C0C0C]/[0.02]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-8 md:gap-12">
                {/* Number on the left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none tracking-tight min-w-[90px] sm:min-w-[140px] md:min-w-[190px] shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.id}
                </div>

                {/* Name & Description stacked vertically on the right */}
                <div className="flex-1 flex flex-col justify-center pt-1 sm:pt-3 md:pt-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2 sm:mb-3">
                    <h3
                      className="font-medium uppercase text-[#0C0C0C] tracking-tight group-hover:translate-x-1 transition-transform duration-200"
                      style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    >
                      {service.name}
                    </h3>
                  </div>

                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>

                  {/* Clean unboxed tool tags for enhanced richness */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#0C0C0C]/40 uppercase tracking-wider font-normal">
                    {service.tools.map((tool, idx) => (
                      <React.Fragment key={tool}>
                        {idx > 0 && <span aria-hidden="true" className="opacity-40">·</span>}
                        <span>{tool}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
