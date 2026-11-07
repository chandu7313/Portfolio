import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Lovely Professional University',
    degree: 'B.Tech — Computer Science & Engineering',
    period: 'Aug’ 23 – Present',
    score: 'CGPA 7.81',
    scoreType: 'Cumulative GPA',
    location: 'Punjab, India',
    status: 'In Progress / Final Years',
    color: '#7047ff',
    badgeGlow: 'rgba(112, 71, 255, 0.3)',
    desc: 'Specializing in high-throughput distributed systems, full-stack microservice fleets, and autonomous agent orchestration. Active builder actively developing production software and solving complex algorithmic challenges.',
    highlights: ['Distributed Systems', 'Multi-Agent LLMs', 'Microservices Architecture', 'Data Structures & Algorithms', 'Cloud Deployments'],
  },
  {
    institution: 'Government Junior College',
    degree: 'Intermediate · MPC (Maths, Physics, Chemistry)',
    period: 'Apr’ 21 – Mar’ 23',
    score: '95.6%',
    scoreType: 'State Distinction',
    location: 'Gadwal, Telangana',
    status: 'Completed with Honors',
    color: '#b5ff20',
    badgeGlow: 'rgba(181, 255, 32, 0.3)',
    desc: 'Achieved a distinguished 95.6% score with comprehensive mathematical and scientific rigor, building deep analytical deduction, numerical logic, and computational reasoning skills.',
    highlights: ['95.6% Aggregate', 'Advanced Mathematics', 'Physics', 'Analytical Problem Solving', 'Logic & Modeling'],
  },
  {
    institution: 'Mahatma Jyothi Rao Phule School',
    degree: 'Matriculation · Class X (State Board)',
    period: 'Apr’ 20 – Mar’ 21',
    score: '10.0 CGPA',
    scoreType: 'Perfect 10.0 Score',
    location: 'Nalgonda, Telangana',
    status: 'Graduated Cohort Topper',
    color: '#38bdf8',
    badgeGlow: 'rgba(56, 189, 248, 0.3)',
    desc: 'Graduated as Class Topper with a flawless 10.0 CGPA, mastering foundational sciences, mathematics, and early programming logic.',
    highlights: ['10.0 Perfect CGPA', 'Class Topper', 'Science & Mathematics', 'Computational Logic'],
  },
];

const Education = () => {
  return (
    <section id="education" className="w-full relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-[#7047ff]/15 rounded-full blur-[140px] pointer-events-none" />

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
            <span>05 // ACADEMIC FOUNDATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase"
          >
            Education &amp; <span className="bg-gradient-to-r from-[#b5ff20] via-white to-[#7047ff] bg-clip-text text-transparent">Rigor</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 font-mono text-sm max-w-md"
        >
          // Formal computer science degree and mathematics track with consistent academic excellence.
        </motion.p>
      </div>

      {/* Futuristic Academic Roadmap / Timeline */}
      <div className="relative">
        
        {/* Central Neon Beam (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#7047ff] via-[#b5ff20] to-[#7047ff] opacity-40 shadow-[0_0_15px_rgba(181,255,32,0.5)] pointer-events-none" />

        {/* Mobile Left Rail */}
        <div className="md:hidden absolute left-4 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#7047ff] via-[#b5ff20] to-[#7047ff] opacity-40 pointer-events-none" />

        <div className="flex flex-col gap-12 sm:gap-16">
          {educationData.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row items-center justify-between"
              >
                {/* Central Timeline Pulsing Node (Desktop) */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#070510] border-2 border-white/20 items-center justify-center z-10 shadow-lg">
                  <span
                    className="w-3 h-3 rounded-full animate-ping"
                    style={{ backgroundColor: item.color }}
                  />
                  <span
                    className="w-2.5 h-2.5 rounded-full absolute"
                    style={{ backgroundColor: item.color }}
                  />
                </div>

                {/* Card Container (Left or Right on desktop) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30, y: 10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`w-full md:w-[46%] pl-10 md:pl-0 ${
                    isEven ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="group relative bg-[#0c0919] hover:bg-[#130e29] border border-white/10 hover:border-[#b5ff20]/60 rounded-[32px] p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-[0_15px_40px_rgba(112,71,255,0.2)]">
                    
                    {/* Top Metadata Header */}
                    <div className="flex items-start justify-between gap-4 mb-5 flex-wrap">
                      <div>
                        <span className="text-zinc-500 font-mono text-xs font-semibold block mb-1">
                          {item.location} • {item.period}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#b5ff20] transition-colors leading-tight">
                          {item.institution}
                        </h3>
                      </div>

                      {/* Score Highlight Pill */}
                      <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-2 text-right shrink-0">
                        <div
                          className="text-lg sm:text-xl font-black font-mono leading-none"
                          style={{ color: item.color }}
                        >
                          {item.score}
                        </div>
                        <div className="text-zinc-500 font-mono text-[9px] uppercase tracking-wider mt-1">
                          {item.scoreType}
                        </div>
                      </div>
                    </div>

                    {/* Degree & Status */}
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs font-bold">
                        {item.degree}
                      </span>
                      <span className="text-xs font-mono text-[#b5ff20]">
                        // {item.status}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                      {item.desc}
                    </p>

                    {/* Highlights / Coursework pills */}
                    <div className="flex flex-wrap gap-2 pt-5 border-t border-white/10">
                      {item.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-xl text-[11px] font-mono font-medium text-zinc-300 hover:border-white/30 transition-colors"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;