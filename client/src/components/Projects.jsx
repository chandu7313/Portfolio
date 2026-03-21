import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    num: '01',
    title: 'Kisan Mithar',
    subtitle: 'Smart Agriculture & Farmer Advisory Platform',
    period: 'Nov 2025 – Present',
    desc: 'Full-stack agriculture advisory platform that processes soil data and delivers tailored suggestions. Built with real-time messaging (Socket.io), MongoDB for data persistence, and Fast2SMS OTP authentication to ensure secure verified access.',
    bullets: [
      'Live presence tracking & uninterrupted message flow via Socket.io',
      'Phone OTP authentication using Fast2SMS — no password needed',
      'Soil analysis → personalised crop/fertiliser recommendations',
    ],
    tags: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    image: './proj1.png',
    github: 'https://github.com/chandu7313/KMC',
    live: 'https://kisan-mithar-consultancy.vercel.app/',
  },
  {
    num: '02',
    title: 'University Management System',
    subtitle: 'Analytics & Customer Feedback Platform',
    period: 'Oct 2025 – Present',
    desc: 'A customisable university management platform featuring member tracking, agency-specific dashboards, and visual analytics for feedback analysis. Enables teams to identify product strengths, gaps, and user sentiment at scale.',
    bullets: [
      'Role-based dashboards for admins, trainers, and members',
      'Visual analytics with Chart.js for attendance & revenue insights',
      'Feedback sentiment analysis for continuous service improvement',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Tailwind CSS','PostgreSQL'],
    image: './proj3.png',
    github: 'https://github.com/chandu7313/UMS',
    live: 'https://ums-omega-eight.vercel.app/',
  },
  {
    num: '03',
    title: 'Nexus Chat',
    subtitle: 'Real-Time Messaging Engine',
    period: '2024 – Present',
    desc: 'A high-performance chatting engine built for persistent, instant engagement. Decoupled websocket transmission to ensure horizontal scalability and zero-delay message delivery.',
    bullets: [
      'Socket.io for real-time bidirectional communication',
      'Persistent message storage with MongoDB',
      'Typing indicators, read receipts, and presence detection',
    ],
    tags: ['React', 'Express', 'Socket.io', 'MongoDB', 'JWT'],
    image: './proj2.png',
    github: 'https://github.com/chandu7313/Nexus-Chat',
    live: 'https://nexus-chat-ten-phi.vercel.app/login',
  },
];

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px', amount: 0.1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      style={{ willChange: 'transform, opacity' }}
      className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
    >
      {/* Image Area */}
      <div className="flex-1 w-full group relative">
        <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-2xl group-hover:bg-primary/10 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
        <div className="relative aspect-[16/10] bg-gradient-to-br from-white to-surfaceSubtle border border-primary/10 rounded-[32px] overflow-hidden shadow-premium group-hover:shadow-card-hover transition-all duration-500 flex items-center justify-center">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          ) : (
            <div className="text-center p-8">
              <div className="w-20 h-20 mx-auto mb-6 rounded-[24px] bg-primary/5 border border-primary/10 flex items-center justify-center text-primary text-3xl font-black shadow-inner">
                {project.num}
              </div>
              <p className="text-textMuted font-mono text-xs uppercase tracking-widest">Case Study Artifact</p>
            </div>
          )}
          
          {/* Hover Overlay Buttons */}
          <div className="absolute inset-0 bg-textMain/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
             <a href={project.github} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-textMain hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-[50ms]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
             </a>
             <a href={project.live} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-textMain hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-[100ms]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
             </a>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-primary/10 rounded-full text-primary font-black text-xs uppercase tracking-widest">{project.num}</span>
          <span className="text-textMuted font-mono text-xs font-bold uppercase tracking-wider select-none">{project.period}</span>
        </div>
        
        <h3 className="text-3xl sm:text-4xl font-black text-textMain mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-primary text-base font-bold mb-6 tracking-tight">{project.subtitle}</p>
        
        <p className="text-textMuted text-base sm:text-lg leading-relaxed mb-8 max-w-xl">{project.desc}</p>

        {/* Bullet Points */}
        <ul className="space-y-3 mb-10">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-textMuted text-sm sm:text-base font-medium">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/30 flex-shrink-0 inline-block"></span>
              {b}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-4 py-1.5 bg-surfaceSubtle border border-primary/5 rounded-xl text-xs font-bold text-textMuted hover:text-primary hover:border-primary/20 transition-colors cursor-default uppercase tracking-tight">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="">
      {/* Section Label */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        style={{ willChange: 'transform, opacity' }}
        className="section-label block"
      >
        SELECT WORK
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        style={{ willChange: 'transform, opacity' }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-textMain leading-tight mb-20 tracking-tight"
      >
        Featured <span className="text-primary">Projects</span>
      </motion.h2>

      {/* Project Cards */}
      <div className="flex flex-col gap-24 lg:gap-32">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
