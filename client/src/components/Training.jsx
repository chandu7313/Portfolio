import React from 'react';
import { motion } from 'framer-motion';

const trainingData = [
  {
    title: 'Android Mobile Application Engineering',
    provider: 'Intensive Project-Based Engineering Training',
    period: 'Jun – Jul 2025',
    desc: 'Deep-dive into mobile systems engineering with Kotlin and Android Studio. Mastered Android lifecycle management, responsive XML layout architectures, background threads, and client-server REST communication.',
    tags: ['Kotlin', 'Android Studio', 'XML Architecture', 'Mobile Systems', 'REST Client'],
    certificate: '/assets/certificates/andriod-cer.png',
    highlights: [
      'Engineered native Android UI with custom XML layouts and Material components',
      'Implemented clean architecture with Kotlin OOP, separation of concerns, and async threads',
      'Built production-ready mobile prototypes integrated with cloud REST endpoints',
    ],
  },
];

const Training = () => {
  return (
    <section id="training" className="w-full relative">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            <span className="w-2 h-2 rounded-full bg-[#7047ff] animate-ping" />
            <span>SPECIALIZED APPLIED TRAINING</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase"
          >
            Systems <span className="text-[#b5ff20]">Training</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 font-mono text-xs sm:text-sm max-w-md"
        >
          // Hands-on industry project training reinforcing core systems and mobile engineering.
        </motion.p>
      </div>

      {/* Training Bento Card */}
      <div className="flex flex-col gap-12">
        {trainingData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative bg-[#0c0919] border border-white/10 hover:border-[#7047ff]/60 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 transition-all duration-500 overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#7047ff]/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#7047ff]/30 transition-all duration-700" />

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
              
              {/* Certificate Image Frame */}
              <div className="w-full lg:w-5/12 aspect-[16/11] bg-black rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shrink-0 relative group-hover:border-[#b5ff20]/40 transition-colors shadow-2xl">
                <img
                  src={item.certificate}
                  alt={`${item.title} certificate`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                  <span className="text-[11px] font-mono font-bold text-[#b5ff20] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#b5ff20]/30">
                    Verified Training Credential
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-[#7047ff]/15 border border-[#7047ff]/30 text-[#7047ff] text-xs font-mono font-bold uppercase tracking-wider">
                    Mobile Engineering
                  </span>
                  <span className="text-zinc-500 font-mono text-xs">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tight group-hover:text-[#b5ff20] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#b5ff20] font-mono text-sm font-semibold mb-4">
                  // {item.provider}
                </p>

                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-8">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <span className="text-[#b5ff20] font-bold mt-0.5">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-mono font-semibold text-zinc-300 hover:border-white/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Training;