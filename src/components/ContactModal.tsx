import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, MapPin, CheckCircle, Copy, Check, Phone, Instagram } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Growth & Instagram Scaling');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#B600A8', '#7621B0', '#BE4C00', '#BBCCD7'],
      });
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('mananarora1812@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+918077696719');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-[#121212] border border-[#2A2D35] rounded-3xl p-6 sm:p-8 text-[#D7E2EA] shadow-2xl z-10 my-8 overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold">
                Start a Collaboration
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mt-1">
                Get in Touch with Manan
              </h2>
              <p className="text-sm text-[#D7E2EA]/70 mt-1">
                One person for marketing strategy, organic traffic scaling, viral content, and full-stack execution.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-12 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#B600A8] to-[#7621B0] flex items-center justify-center mb-4 text-white shadow-lg shadow-[#7621B0]/30">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                  Message Dispatched!
                </h3>
                <p className="text-sm text-[#D7E2EA]/70 max-w-md mt-2">
                  Thanks for reaching out, {name}. I have received your note and will get back to you directly at {email} within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 px-6 py-2.5 rounded-full border border-white/20 text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5 font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#1A1A1A] border border-[#2D3039] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#1A1A1A] border border-[#2D3039] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#B600A8] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5 font-medium">
                    Area of Collaboration
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-[#2D3039] rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B600A8] transition-colors cursor-pointer"
                  >
                    <option value="Growth & Instagram Scaling">01 - Social Media & Viral Reels (0 to 100K+)</option>
                    <option value="Technical SEO & Content">02 - Technical SEO & 400K+ Search Scaling</option>
                    <option value="Full Stack Web Development">03 - Full Stack Web App (React / Next.js / NestJS)</option>
                    <option value="AI Workflows & Automation">04 - AI Content Workflows & Tooling Automation</option>
                    <option value="Full-Service Strategy & Tech">Full-Service: Growth Strategy + Full Stack Tech</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5 font-medium">
                    Project Brief & Goals
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell me about your product, growth targets, tech requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#1A1A1A] border border-[#2D3039] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-[#B600A8] transition-colors resize-none"
                  />
                </div>

                {/* Direct info pill buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs text-[#D7E2EA]/70">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 text-xs text-white/90 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied Email!' : 'mananarora1812@gmail.com'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1.5 text-xs text-white/90 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Phone className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Copied Phone!' : '+91-8077696719'}</span>
                  </button>

                  <span className="flex items-center gap-1 text-[#D7E2EA]/50 ml-auto">
                    <MapPin className="w-3 h-3" /> Ghaziabad, India
                  </span>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto rounded-full font-medium uppercase tracking-widest text-xs px-8 py-3.5 text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105 active:scale-95 transition-all"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                      outline: '2px solid white',
                      outlineOffset: '-3px',
                    }}
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry to Manan</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
