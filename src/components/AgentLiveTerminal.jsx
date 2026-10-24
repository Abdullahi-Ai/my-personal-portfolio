import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Sparkles, Check, Play } from 'lucide-react';

const terminalSteps = [
  {
    cmd: 'about --site',
    output: [
      '✔ Built with React 19, Vite 8 and Tailwind CSS 3',
      '✔ Animations: Framer Motion and GSAP; hosted on Vercel',
      '✔ Source code: github.com/Abdullahi-Ai/my-personal-portfolio',
      '⚡ Single-page site: one canonical URL, sections linked by anchors',
    ],
    status: 'SITE_INFO',
  },
  {
    cmd: 'projects --ai',
    output: [
      '✔ Osman AI Shopping Assistant (prototype, public repository)',
      '✔ Stack: FastAPI, LangChain, ChromaDB, sentence-transformers',
      '✔ LLM provider is configurable: Groq, Gemini or OpenAI',
      '⚡ Includes a retrieval evaluation script (evaluate_retrieval.py)',
    ],
    status: 'AI_PROJECT',
  },
  {
    cmd: 'seo --metadata',
    output: [
      '✔ Schema.org JSON-LD: Person, WebSite and ProfilePage',
      '✔ Canonical URL, Open Graph and Twitter card metadata set',
      '✔ robots.txt and sitemap.xml included in the build output',
      '⚡ Checked by tools/identity-agent; search indexing is not guaranteed',
    ],
    status: 'SEO_CHECKS',
  },
];

const AgentLiveTerminal = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [typedCmd, setTypedCmd] = useState('');
  const [visibleOutputs, setVisibleOutputs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    const current = terminalSteps[stepIndex];

    const startTimeout = setTimeout(() => {
      if (isCancelled) return;
      setTypedCmd('');
      setVisibleOutputs([]);
      setIsRunning(true);

      let charIdx = 0;
      const typeInterval = setInterval(() => {
        if (isCancelled) return;
        if (charIdx <= current.cmd.length) {
          setTypedCmd(current.cmd.slice(0, charIdx));
          charIdx++;
        } else {
          clearInterval(typeInterval);

          current.output.forEach((line, lineIdx) => {
            setTimeout(() => {
              if (isCancelled) return;
              setVisibleOutputs((prev) => [...prev, line]);
              if (lineIdx === current.output.length - 1) {
                setIsRunning(false);
              }
            }, (lineIdx + 1) * 350);
          });
        }
      }, 40);

      cleanups.push(() => clearInterval(typeInterval));
    }, 20);

    const cleanups = [() => clearTimeout(startTimeout)];

    const cycleTimeout = setTimeout(() => {
      if (isCancelled) return;
      setStepIndex((prev) => (prev + 1) % terminalSteps.length);
    }, 7000);

    cleanups.push(() => clearTimeout(cycleTimeout));

    return () => {
      isCancelled = true;
      cleanups.forEach((fn) => fn());
    };
  }, [stepIndex]);

  const handleManualRun = () => {
    setStepIndex((prev) => (prev + 1) % terminalSteps.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-2xl mx-auto mt-12 text-left relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-emerald-500/20 to-teal-400/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-700" />

      <div className="relative rounded-2xl glass-card border border-white/10 bg-[#0d1117]/90 backdrop-blur-xl shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
        
        <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 cursor-pointer transition-colors" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 cursor-pointer transition-colors" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 cursor-pointer transition-colors" />
            <span className="ml-3 text-xs text-foreground/50 flex items-center gap-1.5 font-sans">
              <Terminal size={14} className="text-primary" />
              abdullahi-ai@agent-core: ~
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-primary/10 border border-primary/30 text-primary">
              <span className={`w-1.5 h-1.5 rounded-full bg-primary ${isRunning ? 'animate-ping' : ''}`} />
              {terminalSteps[stepIndex].status}
            </span>
            <button
              onClick={handleManualRun}
              className="p-1 rounded-md text-foreground/40 hover:text-primary hover:bg-white/5 transition-colors"
              title="Next Action"
            >
              <Play size={13} />
            </button>
          </div>
        </div>

        <div className="p-5 space-y-3 min-h-[185px]">
          <div className="flex items-center gap-2 text-primary font-bold">
            <span className="text-emerald-400">$</span>
            <span className="text-foreground/90">{typedCmd}</span>
            <span className="w-2 h-4 bg-primary inline-block animate-pulse" />
          </div>

          <div className="space-y-1.5 pt-2">
            {visibleOutputs.map((line, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-2 text-foreground/75 leading-relaxed text-xs sm:text-sm font-sans"
              >
                <span className="text-primary mt-0.5 shrink-0">
                  <Check size={14} />
                </span>
                <span>{line.replace(/^[✔⚡]\s*/, '')}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="px-4 py-2.5 bg-black/60 border-t border-white/5 flex items-center justify-between text-[11px] text-foreground/40 font-sans">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Cpu size={12} className="text-primary" /> Static summary of this site
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <Sparkles size={12} className="text-primary" /> Not a live AI agent
            </span>
          </div>
          <span className="text-primary/70">Click ▶ to cycle demo</span>
        </div>

      </div>
    </motion.div>
  );
};

export default AgentLiveTerminal;
