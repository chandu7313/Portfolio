import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    num: '01',
    title: 'VentureForge AI',
    subtitle: 'Multi-Agent Business Intelligence Platform',
    period: 'Aug’ 26 – Present',
    status: 'ACTIVE AGENT FLEET',
    accent: '#7047ff',
    badgeGlow: 'rgba(112, 71, 255, 0.35)',
    domain: 'ventureforge-agent.vercel.app',
    desc: 'Engineered a full-stack multi-agent platform that turns raw startup ideas into comprehensive, investor-grade business blueprints. Orchestrates parallel specialized LLM agents with asynchronous task execution and real-time frontend streaming.',
    metrics: [
      { label: 'Architecture', val: 'Multi-Agent' },
      { label: 'Job Queue', val: 'BullMQ + Redis' },
      { label: 'Telemetry', val: 'Grafana 100%' },
    ],
    bullets: [
      'Built a high-performance Nest.js & PostgreSQL backend orchestrating parallel autonomous agents with BullMQ and Redis queues',
      'Integrated Gemini & OpenAI APIs for automated market sizing, competitor risk scoring, and interactive document generation with live SSE streaming',
      'Instrumented complete microservice fleet telemetry with Prometheus metrics and Grafana dashboards hosted on Docker & Nginx',
    ],
    tags: ['Next.js', 'Nest.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Docker', 'Nginx', 'Prometheus', 'Grafana', 'Tailwind CSS'],
    video: '/videos/ventureForge.mp4',
    github: 'https://github.com/chandu7313/ventureForge',
    live: 'https://ventureforge-agent.vercel.app/',
  },
  {
    num: '02',
    title: 'Kissan Mithar',
    subtitle: 'Smart Agriculture & Farmer Advisory Platform',
    period: 'Sep’ 25 – Dec’ 25',
    status: '15+ MICROSERVICES LIVE',
    accent: '#b5ff20',
    badgeGlow: 'rgba(181, 255, 32, 0.3)',
    domain: 'kissanmithar.com',
    desc: 'An event-driven agricultural ecosystem featuring a responsive React.js web portal and Flutter mobile app operating across 15+ decoupled microservices with automated CI/CD and AI crop diagnostics.',
    metrics: [
      { label: 'Fleet Scale', val: '15+ Microservices' },
      { label: 'Event Bus', val: 'RabbitMQ' },
      { label: 'AI Diagnosis', val: 'Gemini + Plant.id' },
    ],
    bullets: [
      'Built responsive React web client & Flutter mobile application backed by 15+ event-driven microservices on Node.js, RabbitMQ, and Redis',
      'Implemented secure JWT auth, real-time soil analysis, agricultural marketplace on PostgreSQL, and AI-powered crop pathology detection',
      'Automated deployment pipelines with Docker and Jenkins CI/CD, hosting the microservice cluster on AWS EC2 with Nginx reverse proxy',
    ],
    tags: ['React.js', 'Node.js', 'Flutter', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Nginx', 'Jenkins', 'AWS EC2'],
    video: '/videos/kissanMithar.mp4',
    github: 'https://github.com/chandu7313/Kissan-Mithar',
    live: 'https://www.kissanmithar.com/',
  },
  {
    num: '03',
    title: 'PII Redaction Engine',
    subtitle: 'Context-Aware Automated Compliance Pipeline',
    period: 'Jun’ 26',
    status: '100% PRECISION VERIFIED',
    accent: '#38bdf8',
    badgeGlow: 'rgba(56, 189, 248, 0.35)',
    domain: 'pii-redaction-tool-jet.vercel.app',
    desc: 'An enterprise automated detection and redaction engine for DOCX documents across 9 PII categories, pairing Microsoft Presidio, spaCy NER, and custom pattern recognizers with zero false positives on technical terminology.',
    metrics: [
      { label: 'Recall & Precision', val: '100%' },
      { label: 'PII Categories', val: '9 Types' },
      { label: 'False Positives', val: '0 On Tech Terms' },
    ],
    bullets: [
      'Automates detection and surgical redaction of sensitive PII in DOCX documents across 9 regulatory categories using spaCy and Presidio',
      'Designed a context-aware validation layer separating detection from approval via section awareness, confidence recalculation, and protected spans',
      'Stress-tested on complex technical resumes: filtered 300 candidate anomalies down to 3 genuine PII instances with zero distortion of technical skills',
    ],
    tags: ['Python', 'Microsoft Presidio', 'spaCy NER', 'Rule-Based Validation', 'DOCX Parsing', 'FastAPI'],
    video: '/videos/pii.mp4',
    github: 'https://github.com/chandu7313/PII-Redaction-Tool',
    live: 'https://pii-redaction-tool-jet.vercel.app/',
  },
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const videoRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`flex flex-col lg:flex-row gap-10 lg:gap-14 items-stretch ${
        !isEven ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Visual Column: Cinematic Browser / Device Frame with Video */}
      <div className="flex-1 w-full flex flex-col justify-center">
        <div className="group relative rounded-[28px] sm:rounded-[36px] bg-[#0c0919] border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20 shadow-2xl">
          
          {/* Ambient Glow behind frame */}
          <div
            className="absolute -inset-2 rounded-[40px] opacity-20 group-hover:opacity-40 blur-2xl transition-opacity duration-700 pointer-events-none"
            style={{ backgroundColor: project.accent }}
          />

          {/* Browser Top Navigation Bar */}
          <div className="relative z-10 flex items-center justify-between px-5 py-3.5 bg-[#090714] border-b border-white/10 select-none">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/90 border border-[#e0443e]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 border border-[#dea123]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/90 border border-[#1aab29]" />
            </div>

            {/* URL Pill */}
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-400 max-w-[200px] sm:max-w-xs truncate">
              <span className="text-[#b5ff20]">https://</span>
              <span className="text-zinc-200">{project.domain}</span>
            </div>

            {/* Live Status Indicator */}
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-ping"
                style={{ backgroundColor: project.accent }}
              />
              <span className="hidden sm:inline text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                {project.status}
              </span>
            </div>
          </div>

          {/* Video Container (Strictly 0 Player Controls, Perfectly Aligned, Native HTML5 Video) */}
          <div className="relative aspect-[16/10] bg-black overflow-hidden flex items-center justify-center">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={`./proj${index + 1}.png`}
              className="w-full h-full object-cover pointer-events-none select-none"
            >
              <source src={project.video} type="video/mp4" />
            </video>

            {/* Hover Action Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070510] via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6 z-20">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-white font-bold tracking-wider">
                  Interactive Preview
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300 backdrop-blur-md"
                  title="Source Code"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-full bg-[#b5ff20] hover:bg-[#a3f013] text-black font-extrabold text-xs flex items-center gap-1.5 transition-all duration-300 shadow-lg shadow-[#b5ff20]/20"
                >
                  <span>Launch Live</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Column */}
      <div className="flex-1 flex flex-col justify-between py-2">
        <div>
          {/* Top Metadata row */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span
              className="px-3 py-1 rounded-full text-xs font-mono font-black uppercase tracking-wider"
              style={{
                backgroundColor: `${project.accent}15`,
                border: `1px solid ${project.accent}40`,
                color: project.accent,
              }}
            >
              PROJECT // {project.num}
            </span>
            <span className="text-zinc-500 font-mono text-xs font-medium">
              {project.period}
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight group-hover:text-[#b5ff20] transition-colors">
            {project.title}
          </h3>

          <p
            className="text-sm sm:text-base font-bold mb-5 tracking-tight font-mono"
            style={{ color: project.accent }}
          >
            {project.subtitle}
          </p>

          {/* Core Description */}
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
            {project.desc}
          </p>

          {/* Impact Metric Chips */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map((m, i) => (
              <div
                key={i}
                className="bg-[#0c0919] border border-white/10 rounded-xl p-3 text-center"
              >
                <div className="text-white font-mono font-bold text-xs sm:text-sm truncate">
                  {m.val}
                </div>
                <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Key Bullets */}
          <ul className="space-y-2.5 mb-8">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <span
                  className="font-bold text-sm mt-0.5"
                  style={{ color: project.accent }}
                >
                  ▸
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills & CTA */}
        <div>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-xl text-xs font-mono font-semibold text-zinc-300 hover:border-white/30 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 flex-wrap pt-6 border-t border-white/10">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#b5ff20] hover:bg-[#a3f013] text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300 shadow-[0_10px_25px_rgba(181,255,32,0.25)] hover:scale-105 active:scale-95"
            >
              <span>View Live Platform</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="w-full relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-[#7047ff]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            <span className="w-2 h-2 rounded-full bg-[#b5ff20] animate-ping" />
            <span>03 // FEATURED PRODUCTIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase"
          >
            Flagship <span className="bg-gradient-to-r from-[#b5ff20] via-white to-[#7047ff] bg-clip-text text-transparent">Engineering</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 font-mono text-sm max-w-md"
        >
          // High-throughput distributed systems &amp; autonomous agent pipelines built for production workloads.
        </motion.p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-24 lg:gap-36">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.num} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;