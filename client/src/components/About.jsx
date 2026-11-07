import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            <span className="w-2 h-2 rounded-full bg-[#b5ff20] animate-ping" />
            <span>01 // ABOUT THE ENGINEER</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase"
          >
            Engineering <span className="bg-gradient-to-r from-[#b5ff20] via-white to-[#7047ff] bg-clip-text text-transparent">Scalable Systems</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-sm sm:text-base max-w-md font-mono"
        >
          // B.Tech CSE @ Lovely Professional University
          <br />
          Full-Stack • Agentic AI • Cloud Microservices
        </motion.p>
      </div>

      {/* Bento Grid Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Card 1: Main Vision & Bio (Col 8) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 dark-bento-card p-8 sm:p-10 flex flex-col justify-between group"
        >
          {/* Ambient Background Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#7047ff]/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#7047ff]/30 transition-all duration-700" />

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#b5ff20]/10 border border-[#b5ff20]/30 text-[#b5ff20] text-xs font-mono font-bold tracking-wider uppercase">
                Architecture &amp; Philosophy
              </span>
              <span className="text-zinc-500 font-mono text-xs">// 2026 Telemetry</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Building at the convergence of <span className="text-[#b5ff20]">Multi-Agent Orchestration</span> &amp; resilient backend fleets.
            </h3>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl font-normal">
              I'm <strong className="text-white font-semibold">Chandra Mohan Gadige</strong>. I architect distributed systems that transform complex data into intelligent products. From designing 15+ event-driven microservices with RabbitMQ and Redis to orchestrating multi-agent LLM pipelines on Nest.js and Next.js, my focus is zero-friction scalability and production reliability.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap pt-6 border-t border-white/10">
            <a
              href="https://drive.google.com/file/d/1AfmXylZNdx_IIv4sNeC8igKT0izahqtF/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#b5ff20] hover:bg-[#a5f013] text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(181,255,32,0.3)] hover:scale-105 active:scale-95"
            >
              <span>Download CV PDF</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300"
            >
              <span>Discuss Architecture</span>
              <span className="text-[#b5ff20]">→</span>
            </a>
          </div>
        </motion.div>

        {/* Card 2: Interactive Terminal Simulation (Col 4) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-4 dark-bento-card p-6 flex flex-col justify-between font-mono text-xs group"
        >
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <span className="text-zinc-500 text-[11px]">agent-core v2.6.4</span>
          </div>

          {/* Terminal Body */}
          <div className="py-6 space-y-3 text-zinc-300">
            <p className="text-zinc-500">$ ventureforge --boot --live</p>
            <p className="text-[#b5ff20]">✔ Multi-Agent Pipeline: Active</p>
            <p className="text-zinc-400">├─ Market Researcher: Online</p>
            <p className="text-zinc-400">├─ Competitor Analyzer: Stream</p>
            <p className="text-zinc-400">└─ Document Synthesizer: 100%</p>
            <p className="text-[#7047ff]">⚡ BullMQ &amp; Redis: 15 workers</p>
            <p className="text-zinc-400">⚡ Prometheus: 99.98% uptime</p>
            <p className="text-zinc-500 pt-2 flex items-center gap-1.5">
              <span>$ status: ready_for_deployment</span>
              <span className="w-2 h-3.5 bg-[#b5ff20] inline-block animate-pulse" />
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-zinc-400">
            <span className="text-[10px] uppercase tracking-wider text-zinc-500">Host Engine</span>
            <span className="text-white font-bold">AWS EC2 • Nginx</span>
          </div>
        </motion.div>

        {/* ── METRIC PODS (4 Columns) ── */}
        
        {/* Metric 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3 dark-bento-card p-6 sm:p-7 flex flex-col justify-between group hover:border-[#b5ff20]/40"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono text-[#b5ff20] font-bold tracking-wider uppercase">Algorithmic</span>
              <span className="text-xs text-zinc-500">01</span>
            </div>
            <p className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-[#b5ff20] transition-colors">
              190+
            </p>
            <p className="text-sm font-bold text-zinc-200 mb-1">LeetCode Problems</p>
            <p className="text-xs text-zinc-400 leading-relaxed font-mono">
              Arrays, Trees, Graphs, DP with optimal space-time complexity.
            </p>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
            <div className="w-[85%] h-full bg-[#b5ff20] rounded-full" />
          </div>
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:col-span-3 dark-bento-card p-6 sm:p-7 flex flex-col justify-between group hover:border-[#7047ff]/50"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono text-[#7047ff] font-bold tracking-wider uppercase">Distributed</span>
              <span className="text-xs text-zinc-500">02</span>
            </div>
            <p className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-[#7047ff] transition-colors">
              15+
            </p>
            <p className="text-sm font-bold text-zinc-200 mb-1">Microservices Fleet</p>
            <p className="text-xs text-zinc-400 leading-relaxed font-mono">
              Decoupled events with RabbitMQ, Redis, BullMQ &amp; Docker.
            </p>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
            <div className="w-[90%] h-full bg-[#7047ff] rounded-full" />
          </div>
        </motion.div>

        {/* Metric 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-3 dark-bento-card p-6 sm:p-7 flex flex-col justify-between group hover:border-cyan-400/40"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono text-cyan-400 font-bold tracking-wider uppercase">Precision</span>
              <span className="text-xs text-zinc-500">03</span>
            </div>
            <p className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
              100%
            </p>
            <p className="text-sm font-bold text-zinc-200 mb-1">PII Redaction Accuracy</p>
            <p className="text-xs text-zinc-400 leading-relaxed font-mono">
              Zero false positives on technical DOCX files via Presidio &amp; spaCy.
            </p>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
            <div className="w-full h-full bg-cyan-400 rounded-full" />
          </div>
        </motion.div>

        {/* Metric 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="lg:col-span-3 dark-bento-card p-6 sm:p-7 flex flex-col justify-between group hover:border-amber-400/40"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono text-amber-400 font-bold tracking-wider uppercase">Academics</span>
              <span className="text-xs text-zinc-500">04</span>
            </div>
            <p className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-amber-400 transition-colors">
              95.6%
            </p>
            <p className="text-sm font-bold text-zinc-200 mb-1">Intermediate MPC Score</p>
            <p className="text-xs text-zinc-400 leading-relaxed font-mono">
              Top ranker with rigorous analytical logic &amp; mathematical rigor.
            </p>
          </div>
          <div className="w-full h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
            <div className="w-[95%] h-full bg-amber-400 rounded-full" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
