import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Linkedin, Twitter, ExternalLink, Heart, Share2, Eye, TrendingUp, CheckCircle2 } from 'lucide-react';
import { SocialPost } from './SocialHighlightsSection';

interface SocialPostModalProps {
  post: SocialPost | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const SocialPostModal: React.FC<SocialPostModalProps> = ({ post, onClose, onOpenContact }) => {
  if (!post) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-3xl bg-[#121214] border border-[#2D3039] rounded-[28px] sm:rounded-[36px] text-[#D7E2EA] shadow-2xl z-10 my-6 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/40">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-full bg-white/10 text-white">
                {post.platform === 'instagram' && <Instagram className="w-4 h-4 text-pink-400" />}
                {post.platform === 'linkedin' && <Linkedin className="w-4 h-4 text-sky-400" />}
                {post.platform === 'twitter' && <Twitter className="w-4 h-4 text-white" />}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white">
                {post.platform.toUpperCase()} Post Analysis
              </span>
              <span className="text-xs text-white/40">·</span>
              <span className="text-xs text-[#B600A8] font-medium">{post.tag}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close post analysis"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Visual Media & Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-5 rounded-2xl overflow-hidden bg-black aspect-[4/3] md:aspect-[3/4] border border-white/10 relative">
                <img
                  src={post.mediaUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-md p-2.5 rounded-xl border border-white/15 flex items-center justify-around text-xs text-white">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#B600A8]" />
                    <span className="font-bold">{post.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>{post.shares}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-white/50 uppercase tracking-widest font-normal block mb-1">
                    {post.handle}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/80 font-light leading-relaxed mb-4">
                    {post.caption}
                  </p>
                </div>

                <div className="bg-white/[0.03] p-4 rounded-2xl border border-white/5 space-y-2.5">
                  <span className="text-[11px] uppercase tracking-wider text-[#BBCCD7] font-semibold block">
                    Execution & Hook Breakdown
                  </span>
                  {post.breakdown.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#D7E2EA]/85">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B600A8] mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-xs font-medium uppercase tracking-wider text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Visit Live Platform Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-medium uppercase tracking-widest text-white transition-all cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                }}
              >
                Scale Your Content With Manan
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SocialPostModal;
