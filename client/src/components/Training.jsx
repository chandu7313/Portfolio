import React from 'react';
import { motion } from 'framer-motion';

const trainingData = [
  {
    title: 'Android App Development',
    provider: 'Hands-on Project Training',
    period: 'Jun – Jul 2025',
    desc: 'Mastered Kotlin programming, OOP principles, and Android Studio. Built mobile UIs with XML layouts delivering responsive, production-ready app behaviour.',
    tags: ['Kotlin', 'Android Studio', 'XML', 'Mobile UI'],
    certificate: null, // placeholder for certificate image
  },
];

const Training = () => {
  return (
    <section id="training" className="">
      {/* Section Label */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        style={{ willChange: 'transform, opacity' }}
        className="section-label block"
      >
        PROFESSIONAL TRAINING
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.1, ease: "easeOut" }}
        style={{ willChange: 'transform, opacity' }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-textMain leading-tight mb-16 tracking-tight"
      >
        Training
      </motion.h2>

      {/* Training Cards */}
      <div className="flex flex-col gap-16">
        {trainingData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px', amount: 0.1 }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
            className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
          >
            {/* Certificate Image Area */}
            <div className="flex-1 w-full aspect-[4/3] bg-gradient-to-br from-white to-surfaceSubtle rounded-[32px] overflow-hidden flex items-center justify-center border border-primary/5 shadow-premium group transition-all duration-500 hover:shadow-card-hover">
              {item.certificate ? (
                <img src={item.certificate} alt={`${item.title} certificate`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              ) : (
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shadow-inner">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:scale-110 transition-transform"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                  </div>
                  <p className="text-textMuted font-mono text-xs uppercase tracking-widest">Training Credential Artifact</p>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-textMuted font-mono text-xs font-bold uppercase tracking-wider mb-2">{item.period}</span>
              <h3 className="text-3xl sm:text-4xl font-black text-textMain mb-2 tracking-tight">{item.title}</h3>
              <p className="text-primary text-base font-bold mb-6 tracking-tight">{item.provider}</p>
              <p className="text-textMuted text-base sm:text-lg leading-relaxed mb-10 max-w-xl">{item.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-surfaceSubtle border border-primary/5 rounded-xl text-xs font-bold text-textMuted hover:text-primary hover:border-primary/20 transition-colors cursor-default uppercase tracking-tight">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Training;
