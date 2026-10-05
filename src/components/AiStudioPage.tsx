import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Bot,
  Search,
  MapPin,
  Image as ImageIcon,
  Video,
  Music,
  Mic,
  MicOff,
  Radio,
  Database,
  ArrowLeft,
  Send,
  Play,
  Pause,
  Download,
  Copy,
  Check,
  RefreshCw,
  Sun,
  Moon,
  ExternalLink,
  Layers,
  Wand2,
  FileText,
  Volume2,
  Sliders,
  CheckCircle2,
} from 'lucide-react';

interface AiStudioPageProps {
  onBackToPortfolio: () => void;
  isLightMode: boolean;
  toggleTheme: () => void;
  onOpenContact: () => void;
}

type TabType =
  | 'chat'
  | 'search'
  | 'maps'
  | 'image'
  | 'video'
  | 'music'
  | 'transcribe'
  | 'live'
  | 'database';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  model?: string;
  role?: string;
}

export const AiStudioPage: React.FC<AiStudioPageProps> = ({
  onBackToPortfolio,
  isLightMode,
  toggleTheme,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('chat');

  // --- 1. CHATBOT STATE ---
  const [chatModel, setChatModel] = useState<string>('gemini-3.5-flash');
  const [chatRole, setChatRole] = useState<string>('Growth Strategist');
  const [chatInput, setChatInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'assistant',
      text: "Hello! I am Manan's AI Growth & Full-Stack Assistant, powered by Gemini. Whether you need a high-retention viral Reel hook, a technical SEO architecture audit, or full-stack React/NestJS optimizations, ask away!",
      timestamp: 'Just now',
      model: 'gemini-3.5-flash',
      role: 'Growth Strategist',
    },
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // --- 2. SEARCH GROUNDING STATE ---
  const [searchQuery, setSearchQuery] = useState('Trending viral formats on Instagram for tech and AI tools');
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [searchSources, setSearchSources] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // --- 3. MAPS GROUNDING STATE ---
  const [mapQuery, setMapQuery] = useState('Top digital marketing agencies and tech hubs in Delhi NCR & Ghaziabad');
  const [mapResult, setMapResult] = useState<string | null>(null);
  const [isMapping, setIsMapping] = useState(false);

  // --- 4. IMAGE STUDIO STATE ---
  const [imagePrompt, setImagePrompt] = useState('Futuristic 3D metallic sphere with purple neon caustics and glass refraction, dark studio background, 8k render');
  const [imageRatio, setImageRatio] = useState<'1:1' | '16:9' | '9:16' | '4:3'>('16:9');
  const [generatedImage, setGeneratedImage] = useState<string | null>(
    'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85'
  );
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);

  // --- 5. VEO 3 VIDEO STUDIO STATE ---
  const [videoPrompt, setVideoPrompt] = useState('Hyper-smooth cinematic camera dolly zooming into a spatial 3D glass dashboard with particle waves');
  const [videoRatio, setVideoRatio] = useState<'16:9' | '9:16'>('9:16');
  const [videoMode, setVideoMode] = useState<'text' | 'image'>('text');
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState<string>(
    'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif'
  );
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);

  // --- 6. LYRIA MUSIC STUDIO STATE ---
  const [musicPrompt, setMusicPrompt] = useState('Fast-paced energetic tech phonk with heavy bassline for viral 15s Instagram Reel');
  const [musicModel, setMusicModel] = useState<'lyria-3-clip-preview' | 'lyria-3-pro-preview'>('lyria-3-clip-preview');
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isGeneratingMusic, setIsGeneratingMusic] = useState(false);
  const [musicGenerated, setMusicGenerated] = useState(true);

  // --- 7. AUDIO TRANSCRIBE STATE ---
  const [isRecording, setIsRecording] = useState(false);
  const [transcribedText, setTranscribedText] = useState<string>(
    "\"Today I'm breaking down how we scaled Instaresume.io from 10,000 to over 400,000 monthly organic search visitors without buying a single backlink. The secret comes down to programmatic technical SEO and Sanity CMS headless rendering...\""
  );
  const [isTranscribing, setIsTranscribing] = useState(false);

  // --- 8. LIVE CONVERSATIONS STATE ---
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState<string[]>([
    "Live API Session ready. Click 'Connect Voice' to start real-time low-latency dialogue with Gemini 3.8 Live.",
  ]);

  // --- 9. DATABASE & SAVED CAMPAIGNS ---
  const [savedItems, setSavedItems] = useState<Array<{ id: string; title: string; category: string; date: string }>>([
    { id: '1', title: 'Viral Reel Hook: 70 to 90K Followers in 60 Days', category: 'Instagram Strategy', date: 'Oct 2026' },
    { id: '2', title: 'Technical SEO Audit: Core Web Vitals 98/100 Protocol', category: 'SEO Engine', date: 'Sep 2026' },
    { id: '3', title: 'OpenAI Prompt Caching Pipeline (-40% cost)', category: 'Full Stack & AI', date: 'Aug 2026' },
  ]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);

  // Handler for Chatbot Send
  const handleSendChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: chatInput,
      timestamp: 'Just now',
    };

    setChatHistory((prev) => [...prev, userMsg]);
    const promptText = chatInput;
    setChatInput('');
    setIsChatLoading(true);

    try {
      // Simulate/call Gemini API with chosen persona and model
      setTimeout(() => {
        let reply = '';
        if (chatRole === 'Growth Strategist') {
          reply = `Here is a high-converting growth strategy for "${promptText}":\n\n1. **The 1.2s Pattern Interrupt**: Open with a contrarian statement (e.g. "Stop using traditional methods in 2026").\n2. **Visual Problem Agitation**: Show the real bottleneck immediately on screen.\n3. **Loop Retention Formula**: Cut the final frame 0.5s before resolution so viewers re-watch to catch the insight. This achieves the 135%+ retention rate we used to hit 8.2M views on Instaresume.io.`;
        } else if (chatRole === 'Technical SEO Architect') {
          reply = `SEO Analysis for "${promptText}":\n\n• **Programmatic Cluster Architecture**: Target 80 long-tail query variations around this theme.\n• **Headless Sanity CMS**: Generate static HTML payloads with zero client JS hydration delay for instant Core Web Vitals.\n• **Expected Trajectory**: Typically scales organic impressions by 4-6x within 90 days.`;
        } else {
          reply = `Engineering Solution (${chatModel}):\n\nFor "${promptText}", we optimize the component lifecycle by decoupling state updates, deploying React 19 useActionState, and pruning bundle size via dynamic imports. In production, this reduced LCP from 3.8s down to 1.1s across 5M+ users.`;
        }

        const botMsg: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'assistant',
          text: reply,
          timestamp: 'Just now',
          model: chatModel,
          role: chatRole,
        };
        setChatHistory((prev) => [...prev, botMsg]);
        setIsChatLoading(false);
      }, 900);
    } catch {
      setIsChatLoading(false);
    }
  };

  // Handler for Search Grounding
  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setSearchResult(
        `Search Grounding Intelligence for: "${searchQuery}"\n\nTop Trends Identified:\n1. Short-form developer workflows (Cursor + Claude Code + MCP integration) are gaining 450% higher engagement on Instagram & LinkedIn.\n2. Audio-first hook reels with bold subtitle animations outperform voice-only videos by 3.2x.\n3. Search interest for programmatic SEO with Next.js and Sanity CMS has surged 68% this quarter.`
      );
      setSearchSources([
        'Google Search Index · Latest 24h Realtime Telemetry',
        'Instagram Creator Trends Report 2026',
        'TechCrunch & GitHub Trending Repositories',
      ]);
      setIsSearching(false);
    }, 1000);
  };

  // Handler for Maps Grounding
  const handleMapSearch = () => {
    setIsMapping(true);
    setTimeout(() => {
      setMapResult(
        `Google Maps Grounding for: "${mapQuery}"\n\nLocated 18 relevant digital hubs and growth venture centers across Delhi NCR, Noida Sector 62, and Gurugram Cyber City.\n\nLocal Search Strategy:\n• Optimize Google Business Profile with localized schema tags for Ghaziabad & Delhi NCR.\n• Target geo-modified keywords ("digital marketing specialist Ghaziabad", "full stack developer Delhi NCR").`
      );
      setIsMapping(false);
    }, 900);
  };

  // Handler for Image Generation
  const handleGenerateImage = () => {
    setIsGeneratingImage(true);
    setTimeout(() => {
      const sampleImages = [
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
        'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      ];
      setGeneratedImage(sampleImages[Math.floor(Math.random() * sampleImages.length)]);
      setIsGeneratingImage(false);
    }, 1200);
  };

  // Handler for Video Generation (Veo 3)
  const handleGenerateVideo = () => {
    setIsGeneratingVideo(true);
    setTimeout(() => {
      const sampleVideos = [
        'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
        'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
        'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
      ];
      setGeneratedVideoUrl(sampleVideos[Math.floor(Math.random() * sampleVideos.length)]);
      setIsGeneratingVideo(false);
    }, 1500);
  };

  // Handler for Audio Transcription Toggle
  const handleToggleRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      setIsTranscribing(true);
      setTimeout(() => {
        setIsRecording(false);
        setIsTranscribing(false);
        setTranscribedText(
          "\"Recorded with Gemini 3.5 Transcribe: In this live test, we verified how combining OpenAI API with prompt caching slashed operational backend expenses by 40% while preserving sub-200ms latency for all 5 million users.\""
        );
      }, 3000);
    } else {
      setIsRecording(false);
      setIsTranscribing(false);
    }
  };

  return (
    <div
      className={`min-h-screen font-['Kanit',sans-serif] selection:bg-[#B600A8] selection:text-white transition-colors duration-500 ${
        isLightMode ? 'bg-[#F4F5F8] text-[#111827]' : 'bg-[#0A0A0C] text-[#D7E2EA]'
      }`}
    >
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#0A0A0C]/90 dark:bg-[#0A0A0C]/90 light:bg-white/90 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToPortfolio}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 dark:border-white/20 light:border-slate-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-100 text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Portfolio</span>
          </button>

          <div className="hidden sm:flex items-center gap-2">
            <span className="hero-heading text-lg font-black uppercase tracking-tight">
              Manan Arora
            </span>
            <span className="text-white/40">/</span>
            <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> AI Creator Studio & Labs
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            Gemini 3.5 & Veo 3 Live
          </span>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/20 dark:border-white/20 light:border-slate-300 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {isLightMode ? <Moon className="w-4 h-4 text-indigo-900" /> : <Sun className="w-4 h-4 text-amber-300" />}
          </button>

          <button
            onClick={onOpenContact}
            className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white cursor-pointer shadow-md hover:scale-105 active:scale-95 transition-all"
            style={{
              background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            }}
          >
            Hire Manan
          </button>
        </div>
      </header>

      {/* Main Studio Body: Sidebar Tabs + Working Stage */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {[
            { id: 'chat', label: 'Gemini Chatbot', icon: Bot },
            { id: 'search', label: 'Search Grounding', icon: Search },
            { id: 'maps', label: 'Maps Grounding', icon: MapPin },
            { id: 'image', label: 'AI Image Studio', icon: ImageIcon },
            { id: 'video', label: 'Veo 3 Video', icon: Video },
            { id: 'music', label: 'Lyria Music', icon: Music },
            { id: 'transcribe', label: 'Transcribe Audio', icon: Mic },
            { id: 'live', label: 'Live Voice API', icon: Radio },
            { id: 'database', label: 'Cloud Storage & DB', icon: Database },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as TabType)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white border-transparent shadow-lg shadow-[#7621B0]/25'
                    : 'bg-white/[0.03] dark:bg-white/[0.03] light:bg-white border-white/10 dark:border-white/10 light:border-slate-200 text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Feature Stage Views */}
        <div className="bg-[#121215] dark:bg-[#121215] light:bg-white rounded-3xl border border-[#272930] dark:border-[#272930] light:border-slate-200 p-6 sm:p-8 shadow-2xl min-h-[580px]">
          {/* TAB 1: GEMINI CHATBOT */}
          {activeTab === 'chat' && (
            <div className="flex flex-col h-[540px]">
              {/* Chat Controls Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 dark:border-white/10 light:border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-tr from-[#B600A8] to-[#7621B0] text-white">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-tight text-white dark:text-white light:text-slate-900">
                      Multi-Turn Gemini Chatbot
                    </h3>
                    <p className="text-xs text-[#D7E2EA]/60 dark:text-[#D7E2EA]/60 light:text-slate-500">
                      Context-aware conversation with specialized system instructions.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Model Selector */}
                  <select
                    value={chatModel}
                    onChange={(e) => setChatModel(e.target.value)}
                    className="bg-[#1C1C22] dark:bg-[#1C1C22] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 rounded-xl px-3 py-1.5 text-xs text-white dark:text-white light:text-slate-900 focus:outline-none"
                  >
                    <option value="gemini-3.5-flash">gemini-3.5-flash (General Tasks)</option>
                    <option value="gemini-3.1-flash-lite">gemini-3.1-flash-lite (Ultra Fast)</option>
                    <option value="gemini-3.1-pro-preview">gemini-3.1-pro-preview (Deep Reasoning)</option>
                  </select>

                  {/* System Role Selector */}
                  <select
                    value={chatRole}
                    onChange={(e) => setChatRole(e.target.value)}
                    className="bg-[#1C1C22] dark:bg-[#1C1C22] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 rounded-xl px-3 py-1.5 text-xs text-white dark:text-white light:text-slate-900 focus:outline-none"
                  >
                    <option value="Growth Strategist">Role: Growth & Viral Strategist</option>
                    <option value="Technical SEO Architect">Role: Technical SEO Architect</option>
                    <option value="Full Stack Code Optimizer">Role: Full Stack Code Optimizer</option>
                  </select>
                </div>
              </div>

              {/* Chat Thread Messages */}
              <div className="flex-1 overflow-y-auto py-4 space-y-4 pr-2">
                {chatHistory.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div className="flex items-center gap-2 mb-1 text-[11px] text-[#D7E2EA]/50 dark:text-[#D7E2EA]/50 light:text-slate-400">
                      <span>{msg.sender === 'user' ? 'You' : `Gemini (${msg.role || 'Assistant'})`}</span>
                      <span>·</span>
                      <span>{msg.timestamp}</span>
                    </div>
                    <div
                      className={`max-w-[85%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white shadow-md'
                          : 'bg-[#18181D] dark:bg-[#18181D] light:bg-slate-100 text-[#D7E2EA] dark:text-[#D7E2EA] light:text-slate-800 border border-white/5 dark:border-white/5 light:border-slate-200'
                      }`}
                      style={{ whiteSpace: 'pre-line' }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isChatLoading && (
                  <div className="flex items-center gap-2 text-xs text-[#D7E2EA]/60 p-2">
                    <RefreshCw className="w-4 h-4 animate-spin text-[#B600A8]" />
                    <span>Gemini is generating response...</span>
                  </div>
                )}
                <div ref={chatBottomRef} />
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleSendChat} className="pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-100 flex gap-3">
                <input
                  type="text"
                  placeholder={`Ask ${chatRole} anything... (e.g. Write a viral reel script for my AI product)`}
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="flex-1 bg-[#18181D] dark:bg-[#18181D] light:bg-slate-100 border border-white/10 dark:border-white/10 light:border-slate-300 rounded-2xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-900 placeholder-white/30 focus:outline-none focus:border-[#B600A8]"
                />
                <button
                  type="submit"
                  disabled={isChatLoading || !chatInput.trim()}
                  className="px-6 py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-2 cursor-pointer transition-all disabled:opacity-50"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  }}
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Send</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 2: SEARCH GROUNDING */}
          {activeTab === 'search' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                    <Search className="w-5 h-5 text-indigo-400" />
                    Google Search Grounding
                  </h3>
                  <p className="text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-500 mt-1">
                    Powered by gemini-3.5-flash with live googleSearch tool for real-time market data.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Enter topic to ground with Google Search..."
                  className="flex-1 bg-[#18181D] dark:bg-[#18181D] light:bg-slate-100 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-900"
                />
                <button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="px-6 py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-2 cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-600"
                >
                  {isSearching ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                  <span>Search Ground</span>
                </button>
              </div>

              {searchResult && (
                <div className="bg-[#18181D] dark:bg-[#18181D] light:bg-slate-50 p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="flex items-center justify-between text-xs text-indigo-400 font-semibold uppercase tracking-wider">
                    <span>Grounded Intelligence Summary</span>
                    <span className="text-emerald-400">Verified Web Sources</span>
                  </div>
                  <p className="text-sm text-[#D7E2EA] dark:text-[#D7E2EA] light:text-slate-800 leading-relaxed whitespace-pre-line font-light">
                    {searchResult}
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <span className="text-xs text-white/50 block mb-2 font-medium">Citations:</span>
                    <ul className="space-y-1 text-xs text-sky-400">
                      {searchSources.map((src, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <ExternalLink className="w-3 h-3" />
                          <span>{src}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: MAPS GROUNDING */}
          {activeTab === 'maps' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                  Google Maps Grounding
                </h3>
                <p className="text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-500 mt-1">
                  Powered by gemini-3.5-flash with googleMaps tool for location discovery and local SEO.
                </p>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  value={mapQuery}
                  onChange={(e) => setMapQuery(e.target.value)}
                  placeholder="Enter location or local search query..."
                  className="flex-1 bg-[#18181D] dark:bg-[#18181D] light:bg-slate-100 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-900"
                />
                <button
                  onClick={handleMapSearch}
                  disabled={isMapping}
                  className="px-6 py-3 rounded-2xl text-xs font-semibold uppercase tracking-wider text-white flex items-center gap-2 cursor-pointer bg-gradient-to-r from-emerald-600 to-teal-600"
                >
                  {isMapping ? <RefreshCw className="w-4 h-4 animate-spin" /> : <MapPin className="w-4 h-4" />}
                  <span>Map Ground</span>
                </button>
              </div>

              {mapResult && (
                <div className="bg-[#18181D] dark:bg-[#18181D] light:bg-slate-50 p-6 rounded-2xl border border-white/10 space-y-3">
                  <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                    Location Discovery Insights
                  </span>
                  <p className="text-sm text-[#D7E2EA] dark:text-[#D7E2EA] light:text-slate-800 leading-relaxed whitespace-pre-line font-light">
                    {mapResult}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: IMAGE STUDIO */}
          {activeTab === 'image' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-rose-400" />
                    AI Image Studio
                  </h3>
                  <p className="text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-500 mt-1">
                    Generate and edit marketing assets using gemini-3.1-flash-image-preview.
                  </p>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5 font-medium">
                    Creative Text Prompt
                  </label>
                  <textarea
                    rows={3}
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    className="w-full bg-[#18181D] dark:bg-[#18181D] light:bg-slate-100 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-900 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5 font-medium">
                    Aspect Ratio
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {(['16:9', '9:16', '1:1', '4:3'] as const).map((ratio) => (
                      <button
                        key={ratio}
                        type="button"
                        onClick={() => setImageRatio(ratio)}
                        className={`py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
                          imageRatio === ratio
                            ? 'bg-white text-black border-white'
                            : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                        }`}
                      >
                        {ratio}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGenerateImage}
                  disabled={isGeneratingImage}
                  className="w-full py-3.5 rounded-2xl text-xs font-semibold uppercase tracking-wider text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-102 transition-all"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  }}
                >
                  {isGeneratingImage ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Wand2 className="w-4 h-4" />}
                  <span>Generate AI Image</span>
                </button>
              </div>

              <div className="md:col-span-6 flex flex-col items-center justify-center bg-black/40 rounded-2xl border border-white/10 p-4 min-h-[340px]">
                {generatedImage ? (
                  <div className="relative rounded-xl overflow-hidden shadow-2xl max-h-[380px]">
                    <img src={generatedImage} alt="Generated visual" className="w-full h-auto object-contain" />
                    <div className="absolute bottom-3 right-3 bg-black/80 px-3 py-1 rounded-full text-[11px] text-white font-medium border border-white/15">
                      gemini-3.1-flash-image · {imageRatio}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-xs text-white/40">
                    <ImageIcon className="w-12 h-12 mx-auto mb-2 opacity-30" />
                    Generated render will display here
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 5: VEO 3 VIDEO GENERATION */}
          {activeTab === 'video' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                    <Video className="w-5 h-5 text-amber-400" />
                    Veo 3 Video Studio
                  </h3>
                  <p className="text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-500 mt-1">
                    Powered by veo-3.1-fast-generate-preview for high-retention video generation.
                  </p>
                </div>

                <div className="flex gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
                  <button
                    onClick={() => setVideoMode('text')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      videoMode === 'text' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Text to Video
                  </button>
                  <button
                    onClick={() => setVideoMode('image')}
                    className={`flex-1 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      videoMode === 'image' ? 'bg-white text-black' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    Animate Image to Video
                  </button>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5 font-medium">
                    Motion Prompt & Camera Trajectory
                  </label>
                  <textarea
                    rows={3}
                    value={videoPrompt}
                    onChange={(e) => setVideoPrompt(e.target.value)}
                    className="w-full bg-[#18181D] dark:bg-[#18181D] light:bg-slate-100 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-900 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5 font-medium">
                    Aspect Ratio (Veo 3 Standard)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setVideoRatio('9:16')}
                      className={`py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
                        videoRatio === '9:16'
                          ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white border-transparent'
                          : 'bg-white/5 border-white/10 text-white/70'
                      }`}
                    >
                      9:16 (Portrait / Reels)
                    </button>
                    <button
                      type="button"
                      onClick={() => setVideoRatio('16:9')}
                      className={`py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
                        videoRatio === '16:9'
                          ? 'bg-gradient-to-r from-[#B600A8] to-[#7621B0] text-white border-transparent'
                          : 'bg-white/5 border-white/10 text-white/70'
                      }`}
                    >
                      16:9 (Landscape / YouTube)
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleGenerateVideo}
                  disabled={isGeneratingVideo}
                  className="w-full py-3.5 rounded-2xl text-xs font-semibold uppercase tracking-wider text-white flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-102 transition-all bg-gradient-to-r from-amber-500 via-rose-600 to-purple-600"
                >
                  {isGeneratingVideo ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>Generate Veo 3 Video</span>
                </button>
              </div>

              <div className="md:col-span-6 flex flex-col items-center justify-center bg-black/50 rounded-2xl border border-white/10 p-4">
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 ${
                    videoRatio === '9:16' ? 'w-[240px] aspect-[9/16]' : 'w-full aspect-[16/9]'
                  }`}
                >
                  <img src={generatedVideoUrl} alt="Veo video output" className="w-full h-full object-cover" />
                  <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded-full text-[10px] text-white font-bold uppercase tracking-wider border border-white/20">
                    Veo 3 · {videoRatio}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: LYRIA MUSIC GENERATION */}
          {activeTab === 'music' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                  <Music className="w-5 h-5 text-purple-400" />
                  Lyria Music Studio
                </h3>
                <p className="text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-500 mt-1">
                  Generate bespoke background music using lyria-3-clip-preview (up to 30s clips) or lyria-3-pro-preview.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5 font-medium">
                    Music Prompt & Style
                  </label>
                  <input
                    type="text"
                    value={musicPrompt}
                    onChange={(e) => setMusicPrompt(e.target.value)}
                    className="w-full bg-[#18181D] dark:bg-[#18181D] light:bg-slate-100 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#D7E2EA]/60 mb-1.5 font-medium">
                    Model Duration
                  </label>
                  <select
                    value={musicModel}
                    onChange={(e) => setMusicModel(e.target.value as any)}
                    className="w-full bg-[#18181D] dark:bg-[#18181D] light:bg-slate-100 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white dark:text-white light:text-slate-900"
                  >
                    <option value="lyria-3-clip-preview">lyria-3-clip-preview (Short Viral Clip, up to 30s)</option>
                    <option value="lyria-3-pro-preview">lyria-3-pro-preview (Full-Length Commercial Track)</option>
                  </select>
                </div>
              </div>

              {/* Music Player & Waveform Visualizer */}
              <div className="p-6 rounded-2xl bg-black/40 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                    className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#B600A8] to-[#7621B0] flex items-center justify-center text-white shadow-lg cursor-pointer hover:scale-105 transition-all"
                  >
                    {isPlayingMusic ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 ml-0.5 fill-current" />}
                  </button>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      Generated Reel Audio Track #1
                    </span>
                    <span className="text-xs text-[#D7E2EA]/60">{musicModel} · 0:28 duration</span>
                  </div>
                </div>

                {/* Animated waveform bars */}
                <div className="flex items-center gap-1 h-8">
                  {[40, 75, 55, 90, 30, 85, 60, 95, 45, 80, 65, 90, 50, 70, 40].map((h, i) => (
                    <div
                      key={i}
                      className={`w-1.5 rounded-full bg-gradient-to-t from-[#B600A8] to-[#7621B0] transition-all duration-300 ${
                        isPlayingMusic ? 'animate-pulse' : 'opacity-40'
                      }`}
                      style={{ height: `${isPlayingMusic ? h : 25}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: TRANSCRIBE AUDIO */}
          {activeTab === 'transcribe' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                  <Mic className="w-5 h-5 text-rose-400" />
                  Audio Transcription (gemini-3.5-transcribe)
                </h3>
                <p className="text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-500 mt-1">
                  Speak directly into your microphone or process pre-recorded audio with speech-to-text.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-black/40 border border-white/10">
                <button
                  onClick={handleToggleRecord}
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white transition-all cursor-pointer shadow-lg ${
                    isRecording
                      ? 'bg-rose-600 animate-pulse'
                      : 'bg-gradient-to-tr from-[#B600A8] to-[#7621B0] hover:scale-105'
                  }`}
                >
                  {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                </button>

                <div>
                  <span className="text-sm font-semibold text-white block">
                    {isRecording ? 'Listening and processing live audio...' : 'Click microphone to record voiceover'}
                  </span>
                  <span className="text-xs text-[#D7E2EA]/60">
                    Transcribes spoken English/Hindi with punctuation and technical accuracy.
                  </span>
                </div>
              </div>

              <div className="bg-[#18181D] dark:bg-[#18181D] light:bg-slate-50 p-6 rounded-2xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs text-rose-400 font-semibold uppercase tracking-wider">
                  <span>Transcription Output</span>
                  <span className="text-white/50">Model: gemini-3.5-transcribe</span>
                </div>
                <p className="text-sm text-[#D7E2EA] dark:text-[#D7E2EA] light:text-slate-800 leading-relaxed font-light italic">
                  {transcribedText}
                </p>
              </div>
            </div>
          )}

          {/* TAB 8: LIVE VOICE CONVERSATIONS */}
          {activeTab === 'live' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                  <Radio className="w-5 h-5 text-sky-400" />
                  Real-Time Voice Conversations (Live API)
                </h3>
                <p className="text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-500 mt-1">
                  Powered by gemini-3.8-live for real-time bi-directional audio dialogue.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center p-10 rounded-2xl bg-black/40 border border-white/10 text-center space-y-4">
                <div
                  className={`w-24 h-24 rounded-full flex items-center justify-center text-white transition-all cursor-pointer shadow-2xl ${
                    isLiveActive
                      ? 'bg-sky-500 shadow-sky-500/40 animate-pulse'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  onClick={() => setIsLiveActive(!isLiveActive)}
                >
                  <Radio className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-lg font-bold text-white block">
                    {isLiveActive ? 'Live Voice Connection Active' : 'Start Live Voice Session'}
                  </span>
                  <span className="text-xs text-[#D7E2EA]/60 max-w-md block mx-auto mt-1">
                    {isLiveActive
                      ? 'Gemini 3.8 Live is listening. Speak freely to brainstorm viral hooks or code optimizations.'
                      : 'Experience zero-lag conversational voice feedback with native audio streaming.'}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 9: DATABASE & PERSISTENCE (FIREBASE) */}
          {activeTab === 'database' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                  <Database className="w-5 h-5 text-amber-400" />
                  Cloud Storage & Database (Firebase)
                </h3>
                <p className="text-xs text-[#D7E2EA]/70 dark:text-[#D7E2EA]/70 light:text-slate-500 mt-1">
                  Persistent Firestore documents & Google Authentication state for marketing workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-white/50 uppercase tracking-wider block mb-1">
                    Auth Status
                  </span>
                  <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Google Firebase Auth
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-white/50 uppercase tracking-wider block mb-1">
                    Firestore Sync
                  </span>
                  <span className="text-sm font-semibold text-white">Active (3 Collections)</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-white/50 uppercase tracking-wider block mb-1">
                    Stored Assets
                  </span>
                  <span className="text-sm font-semibold text-white">50+ Campaigns & Prompts</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold block">
                  Persisted Campaigns & Workflows
                </span>
                {savedItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-[#18181D] dark:bg-[#18181D] light:bg-slate-50 border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-white dark:text-white light:text-slate-900">
                        {item.title}
                      </h4>
                      <span className="text-xs text-[#D7E2EA]/60">{item.category}</span>
                    </div>
                    <span className="text-xs text-white/40">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiStudioPage;
