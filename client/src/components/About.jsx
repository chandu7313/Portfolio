import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="">
      {/* Section Label */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        style={{ willChange: 'transform, opacity' }}
        className="section-label block"
      >
        A BIT ABOUT ME
      </motion.span>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
        {/* Left Column: Text & CTA */}
        <div className="flex-1 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-textMain leading-[1.1] tracking-tight"
          >
            I solve problems through <span className="text-primary italic">modern code.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
            className="text-textMuted text-lg sm:text-xl leading-relaxed font-medium max-w-2xl"
          >
            I'm a Full Stack Developer & DevOps enthusiast based in India. I specialize in building scalable web applications and optimizing delivery pipelines with a focus on clean architecture and developer experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.3 }}
            className="pt-4"
          >
            <a
              href="/chandu cv .pdf"
              download="Chandra_Mohan_Resume.pdf"
              className="group relative inline-flex items-center gap-3 bg-textMain text-white px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:pr-10 shadow-premium active:scale-95"
            >
              <span className="relative z-10">Download Resume</span>
              <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 pt-10 border-t border-primary/10"
          >
            <div>
              <p className="text-3xl font-black text-textMain tracking-tighter">3+</p>
              <p className="text-[10px] text-textMuted font-bold uppercase tracking-widest">Years Exp</p>
            </div>
            <div>
              <p className="text-3xl font-black text-textMain tracking-tighter">15+</p>
              <p className="text-[10px] text-textMuted font-bold uppercase tracking-widest">Projects done</p>
            </div>
            <div>
              <p className="text-3xl font-black text-textMain tracking-tighter">8+</p>
              <p className="text-[10px] text-textMuted font-bold uppercase tracking-widest">Tech Stack</p>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Key Focus Areas */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Architecture', val: 'Scalable Systems', sub: 'High-availability backend design', icon: '⚡' },
            { label: 'Automation', val: 'CI/CD Pipelines', sub: 'Zero-downtime deployments', icon: '🚀' },
            { label: 'Frontend', val: 'Modern UX', sub: 'Responsive & Accessible', icon: '💎' },
            { label: 'Security', val: 'Robust Tech', sub: 'Performance & Hardening', icon: '🛡️' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px', amount: 0.1 }}
              transition={{ delay: 0.1 * i + 0.5, ease: "easeOut" }}
              style={{ willChange: 'transform, opacity' }}
              className="glass-card p-6 rounded-[32px] group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-xl mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <p className="text-[10px] font-black text-primary/60 uppercase tracking-widest mb-1">{item.label}</p>
              <h4 className="font-black text-textMain text-lg leading-tight mb-2">{item.val}</h4>
              <p className="text-textMuted text-xs font-medium leading-relaxed">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
