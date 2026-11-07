import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certifications = [
  {
    id: 'oracle',
    title: 'Oracle Cloud & AI Specialization',
    issuer: 'Oracle',
    period: 'Sep’ 26',
    category: 'Cloud & AI',
    desc: 'Specialization covering Oracle Cloud Infrastructure (OCI) enterprise architectures, autonomous databases, cloud-native deployments, and scalable enterprise AI model integration.',
    image: '/assets/certificates/oracle.png',
    pdf: '/assets/certificates/oracle.png',
    verify: 'https://coursera.org/verify/specialization/JGSHQJNSWKPZ',
    badge: 'Enterprise AI',
    color: '#ea580c',
  },
  {
    id: 'aws',
    title: 'Cloud Architecting Solutions on AWS',
    issuer: 'Amazon Web Services (AWS)',
    period: 'Sep’ 26',
    category: 'Cloud & AI',
    desc: 'Mastery of resilient multi-tier cloud architectures, high availability on AWS EC2, network topology design, load balancing with Nginx, and cloud security frameworks.',
    image: '/assets/certificates/aws.png',
    pdf: '/assets/certificates/aws.png',
    verify: 'https://coursera.org/verify/V7IO33ZJ8XSM',
    badge: 'AWS Infrastructure',
    color: '#ff9900',
  },
  {
    id: 'redhat',
    title: 'Fundamentals of Red Hat Enterprise Linux',
    issuer: 'Red Hat',
    period: 'Sep’ 26',
    category: 'Systems & OS',
    desc: 'Core enterprise Linux administration, shell operations, systemd service management, process orchestration, security policies, and enterprise package configuration.',
    image: '/assets/certificates/redhat.png',
    pdf: '/assets/certificates/redhat.png',
    verify: 'https://coursera.org/verify/4MKC3R0FHSGK',
    badge: 'Enterprise Linux',
    color: '#ee0000',
  },
  {
    id: 'react',
    title: 'React Stack Course',
    issuer: 'NxtWave Academy',
    period: 'Aug’ 25',
    category: 'Full-Stack',
    desc: 'Comprehensive training in modern frontend engineering, building production-grade React applications with dynamic routing, component state, and REST API integration.',
    image: '/assets/certificates/react-cer.png',
    pdf: '/assets/certificates/react-cer.png',
    badge: 'Full-Stack React',
    color: '#61dafb',
  },
  {
    id: 'cloud-nptel',
    title: 'Cloud Computing Specialization',
    issuer: 'NPTEL (IIT Kharagpur)',
    period: 'Jul’ 25',
    category: 'Cloud & AI',
    desc: 'Systems-level understanding of cloud infrastructure design, virtualization primitives, distributed storage architectures, and elastic cloud scaling.',
    image: '/assets/certificates/cloud-cer.png',
    pdf: '/assets/certificates/cloud-cer.png',
    badge: 'Distributed Systems',
    color: '#7047ff',
  },
];

const achievements = [
  {
    stat: '190+',
    title: 'LeetCode DSA Solved',
    subtitle: 'Algorithmic Problem Solving',
    desc: 'Mastered 190+ algorithmic challenges across Graphs, Dynamic Programming, Trees, and Heaps. Optimized space-time complexities under competitive constraints.',
    link: 'https://leetcode.com/u/chandu7313/',
    linkLabel: 'View LeetCode Profile',
    tag: 'Algorithms',
    glow: 'rgba(255, 184, 0, 0.25)',
  },
  {
    stat: '15+',
    title: 'Event-Driven Microservices',
    subtitle: 'Fleet Architecture',
    desc: 'Engineered a decentralized ecosystem with RabbitMQ, Redis, BullMQ, and PostgreSQL. Automated CI/CD releases on AWS EC2 behind an Nginx reverse proxy.',
    link: 'https://github.com/chandu7313',
    linkLabel: 'Inspect Microservices',
    tag: 'Cloud Architecture',
    glow: 'rgba(181, 255, 32, 0.25)',
  },
  {
    stat: '100%',
    title: 'PII Engine Precision',
    subtitle: 'Zero False Positives',
    desc: 'Designed a context-aware validation layer on spaCy & Microsoft Presidio: narrowed 300 raw candidates down to 3 true PII instances without altering tech terms.',
    link: 'https://github.com/chandu7313/PII-Redaction-Tool',
    linkLabel: 'Explore Pipeline',
    tag: 'NLP Compliance',
    glow: 'rgba(112, 71, 255, 0.25)',
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="w-full relative">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative max-w-4xl w-full bg-[#0c0919] border border-white/20 rounded-[32px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#090714] border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#b5ff20] animate-ping" />
                  <span className="text-white font-mono font-bold text-sm tracking-wider uppercase">
                    Credential Inspector
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <div className="aspect-[16/10] bg-black rounded-2xl overflow-hidden border border-white/10 mb-6 flex items-center justify-center">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#b5ff20] uppercase tracking-wider">
                      {selectedCert.issuer} • {selectedCert.period}
                    </span>
                    <h3 className="text-2xl font-black text-white mt-1">
                      {selectedCert.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    {selectedCert.pdf && (
                      <a
                        href={selectedCert.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-mono text-xs font-bold transition-all"
                      >
                        View Certificate ↗
                      </a>
                    )}
                    {selectedCert.verify && (
                      <a
                        href={selectedCert.verify}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-[#b5ff20] text-black font-extrabold text-xs shadow-lg shadow-[#b5ff20]/20 hover:scale-105 transition-all"
                      >
                        Verify on Coursera ↗
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {selectedCert.desc}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <span>04 // VERIFIED CREDENTIALS &amp; PROOF</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase"
          >
            Certifications &amp; <span className="bg-gradient-to-r from-[#b5ff20] via-white to-[#7047ff] bg-clip-text text-transparent">Proof</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 font-mono text-sm max-w-md"
        >
          // Formally accredited by Oracle, AWS, Red Hat, and academic institutions. Click any credential to inspect.
        </motion.p>
      </div>

      {/* Main Grid: Left = Certifications Gallery, Right = Key Achievements Bento */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column: Certifications Cards (Col 7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
            <span className="text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7047ff]" />
              Industry Certifications
            </span>
            <span className="text-zinc-500 font-mono text-xs">
              {certifications.length} Authenticated Badges
            </span>
          </div>

          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              onClick={() => setSelectedCert(cert)}
              className="group relative bg-[#0c0919] hover:bg-[#130e29] border border-white/10 hover:border-[#b5ff20]/50 rounded-[28px] p-5 sm:p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[0_10px_35px_rgba(112,71,255,0.2)]"
            >
              <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                {/* Certificate Preview Thumbnail */}
                <div className="relative w-full sm:w-44 aspect-[16/10] bg-black rounded-2xl overflow-hidden border border-white/10 shrink-0 group-hover:border-[#b5ff20]/40 transition-colors">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1 bg-white/90 text-black text-[10px] font-mono font-bold rounded-full">
                      Click to View
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#b5ff20] text-[10px] font-mono font-bold uppercase tracking-wider">
                      {cert.badge}
                    </span>
                    <span className="text-zinc-500 font-mono text-xs">
                      {cert.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-[#b5ff20] transition-colors leading-snug mb-1">
                    {cert.title}
                  </h4>

                  <p className="text-zinc-400 text-xs font-mono mb-3">
                    Issued by <span className="text-zinc-200 font-semibold">{cert.issuer}</span>
                  </p>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#b5ff20] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Inspect Credential <span>↗</span>
                    </span>
                    {cert.verify && (
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                        • Verified
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Achievements & Rigor (Col 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
            <span className="text-white font-mono font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#b5ff20]" />
              Key Engineering Milestones
            </span>
            <span className="text-zinc-500 font-mono text-xs">Measurable Impact</span>
          </div>

          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + idx * 0.1 }}
              className="group relative bg-[#0c0919] hover:bg-[#130e29] border border-white/10 hover:border-[#7047ff]/60 rounded-[28px] p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Subtle Ambient Corner Glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"
                style={{ backgroundColor: ach.glow }}
              />

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight group-hover:text-[#b5ff20] transition-colors">
                    {ach.stat}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-mono">
                    {ach.tag}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-1">
                  {ach.title}
                </h4>
                <p className="text-xs font-mono text-[#b5ff20] mb-3">
                  // {ach.subtitle}
                </p>

                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {ach.desc}
                </p>
              </div>

              <a
                href={ach.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-[#b5ff20] transition-colors pt-4 border-t border-white/10"
              >
                <span>{ach.linkLabel}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;