import React, { useRef, useState, useEffect } from 'react';

const ROW1_IMAGES = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
];

const ROW2_IMAGES = [
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

// Tripled lists for seamless scrolling
const TRIPLED_ROW1 = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
const TRIPLED_ROW2 = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(scrollOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Row 1 moves right: translateX(offset - 200)
  // We offset by -1200px initially so content fills left and right smoothly
  const row1Transform = `translateX(${offset - 200 - 1500}px)`;
  // Row 2 moves left: translateX(-(offset - 200))
  const row2Transform = `translateX(${-(offset - 200) - 500}px)`;

  return (
    <section
      ref={sectionRef}
      id="marquee"
      className="bg-[#0C0C0C] dark:bg-[#0C0C0C] light:bg-[#EFEFEF] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative transition-colors duration-500"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - moves right */}
        <div
          className="flex gap-3"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW1.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-[#222]/40 shadow-lg"
            >
              <img
                src={src}
                alt={`3D Work Preview ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - moves left */}
        <div
          className="flex gap-3"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {TRIPLED_ROW2.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="w-[420px] h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#161616] border border-[#222]/40 shadow-lg"
            >
              <img
                src={src}
                alt={`3D Work Preview ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
