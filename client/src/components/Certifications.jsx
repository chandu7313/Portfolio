import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'ChatGPT LLM Applications',
    body: 'Infosys Springboard',
    desc: 'Explored advanced prompt engineering and practical LLM resource integrations for optimized performance.',
    image: null,
    link: '#',
  },
  {
    title: 'Computer Communications',
    body: 'Coursera',
    desc: 'Fundamental computer networking concepts, protocol design principles, and TCP/IP programming skills.',
    image: null,
    link: '#',
  },
];

const achievements = [
  {
    stat: '100+',
    title: 'Problems — Code 360 by Coding Ninjas',
    desc: 'Strengthened algorithmic problem-solving',
    link: '#',
  },
  {
    stat: '90+',
    title: 'Algorithmic Problems (Multi-platform)',
    desc: 'DSA, complexity & analytical thinking',
    link: '#',
  },
];const Certifications = () => {
  return (
    <section id="certifications" className="">
      {/* Section Label */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        style={{ willChange: 'transform, opacity' }}
        className="section-label block"
      >
        CREDENTIALS
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.1, ease: "easeOut" }}
        style={{ willChange: 'transform, opacity' }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-textMain leading-tight mb-20 tracking-tight"
      >
        Certifications & <span className="text-primary">Achievements</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Certifications Column */}
        <div>
          <h3 className="text-textMain font-black text-sm sm:text-base tracking-widest uppercase mb-10 border-l-4 border-primary pl-4">
            PROFESSIONAL CERTIFICATIONS
          </h3>
          <div className="flex flex-col gap-12">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.1 + idx * 0.1, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
                className="group"
              >
                {/* Certificate Image Area */}
                <div className="w-full h-56 sm:h-64 bg-gradient-to-br from-white to-surfaceSubtle rounded-[32px] overflow-hidden flex items-center justify-center border border-primary/5 shadow-premium mb-6 group-hover:shadow-card-hover transition-all duration-500">
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="text-center p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/></svg>
                      </div>
                      <p className="text-textMuted font-mono text-[10px] uppercase tracking-[0.2em]">Credential Artifact</p>
                    </div>
                  )}
                </div>
                <h4 className="font-black text-textMain text-xl mb-1 group-hover:text-primary transition-colors">{cert.title}</h4>
                <p className="text-primary font-bold text-xs uppercase tracking-wider mb-3">{cert.body}</p>
                <p className="text-textMuted text-base leading-relaxed mb-6 max-w-md">{cert.desc}</p>
                <a href={cert.link} className="inline-flex items-center gap-2 bg-textMain text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-primary transition-all shadow-md hover:shadow-lg scale-100 hover:scale-[1.05]">
                  View Certificate <span className="text-sm">↗</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Column */}
        <div>
          <h3 className="text-textMain font-black text-sm sm:text-base tracking-widest uppercase mb-10 border-l-4 border-accent pl-4">
            KEY ACHIEVEMENTS
          </h3>
          <div className="flex flex-col gap-6">
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px', amount: 0.1 }}
                transition={{ delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
                className="glass-card p-8 flex items-center gap-8 group"
              >
                <span className="text-5xl sm:text-6xl font-black text-primary/80 group-hover:text-primary transition-colors tracking-tighter flex-shrink-0 min-w-[70px]">
                  {ach.stat}
                </span>
                <div className="flex-1">
                  <h4 className="font-black text-textMain text-lg sm:text-xl leading-[1.2] mb-1">{ach.title}</h4>
                  <p className="text-textMuted text-sm sm:text-base font-medium">{ach.desc}</p>
                </div>
                <a href={ach.link} className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all transform group-hover:translate-x-1">
                  <span className="text-lg">↗</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
