import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: 'Lovely Professional University',
    badge: 'CGPA 7.82',
    degree: 'B.Tech — Computer Science & Engineering',
    period: '2023 — Now',
    location: 'Punjab, India',
    desc: 'Focusing on full-stack development, data structures, algorithms, and practical modern software architecture. Embracing both theoretical foundations and hands-on engineering challenges.',
    highlights: ['DSA', 'Web Technologies', 'Devops Tools'],
    side: 'left',
  },
  {
    institution: 'Government Junior College',
    badge: '95.8%',
    degree: 'Intermediate · Class XII (MPC)',
    period: '2021 — 2023',
    location: 'Gadwal, Telangana',
    desc: 'Built a strong foundation in Mathematics, Physics, and Chemistry, laying the groundwork for complex problem-solving and rigorous analytical thinking methodologies.',
    highlights: ['Mathematics', 'Physics', 'Analysis'],
    side: 'right',
  },
  {
    institution: 'Majathma Jyothi Rao Phule School',
    badge: '98.6%',
    degree: 'Matriculation · Class X',
    period: '2020 — 2021',
    location: 'Nagarjuna sagar, Nalgonda',
    desc: 'Excelled in academic subjects, fostering a passionate early interest in science, technology, and analytical thinking.',
    highlights: ['Top Performer', 'Science', 'Logic'],
    side: 'left',
  },
];

const EducationCard = ({ item, isEven }) => (
  <motion.div
    initial={{ opacity: 0, x: isEven ? 15 : -15, y: 10 }}
    whileInView={{ opacity: 1, x: 0, y: 0 }}
    viewport={{ once: true, margin: '-50px', amount: 0.1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    style={{ willChange: 'transform, opacity' }}
    className="w-full md:w-[45%] group/card"
  >
    <div className="glass-card p-6 sm:p-8 rounded-[32px] hover:shadow-card-hover transition-all duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary transition-transform group-hover/card:rotate-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          </div>
          <div>
            <h4 className="font-black text-textMain text-lg sm:text-xl leading-tight group-hover/card:text-primary transition-colors">{item.institution}</h4>
            <p className="text-primary font-bold text-[10px] uppercase tracking-wider">{item.degree} • {item.badge}</p>
          </div>
        </div>
        <div className="px-4 py-2 bg-textMain text-white rounded-full text-[10px] font-black tracking-widest shadow-md whitespace-nowrap">
          {item.period}
        </div>
      </div>
      
      <p className="text-textMuted text-sm font-medium leading-relaxed mb-6 opacity-80 border-l-2 border-primary/20 pl-4">{item.desc}</p>
      
      <div className="flex flex-wrap gap-2">
        {item.highlights.map((h, i) => (
          <span key={i} className="px-3 py-1 bg-surfaceSubtle border border-primary/5 rounded-xl text-[10px] font-bold text-textMuted uppercase tracking-tight">
            {h}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section id="education" className="">
      {/* Section Label */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        style={{ willChange: 'transform, opacity' }}
        className="section-label block"
      >
        MY JOURNEY
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
        Education
      </motion.h2>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 hidden md:block"></div>

        <div className="flex flex-col gap-12 md:gap-20">
          {educationData.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Center Dot (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary shadow-premium z-10 hidden md:block group-hover:scale-110 transition-transform"></div>
                
                {/* Mobile Dot (Visible only on mobile timeline if needed, but here we just gap) */}
                <EducationCard item={item} isEven={isEven} />
                
                {/* Empty space for the other side */}
                <div className="hidden md:block w-[45%]">
                   <span className="font-black text-4xl text-primary/5 tracking-tighter uppercase select-none block text-center">{item.period}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
