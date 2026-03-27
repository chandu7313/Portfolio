import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillCategories = [
  {
    num: '01',
    category: 'FRONTEND',
    items: [
      { name: 'React',        logo: '/assets/react.png',       proficiency: 90 },
      { name: 'JavaScript',   logo: '/assets/js.png',          proficiency: 90 },
      { name: 'HTML5',        logo: '/assets/html.png',        proficiency: 95 },
      { name: 'CSS3',         logo: '/assets/css.png',         proficiency: 90 },
      { name: 'Tailwind CSS', logo: '/assets/tailwind.png',    proficiency: 90 },
      { name: 'Bootstrap',    logo: '/assets/bootstrap.png',   proficiency: 80 },
    ],
  },
  {
    num: '02',
    category: 'BACKEND',
    items: [
      { name: 'Node.js',     logo: '/assets/nodejs.png',     proficiency: 85 },
      { name: 'Express.js',  logo: '/assets/expressjs.png',  proficiency: 85 },
      { name: 'Spring Boot', logo: '/assets/springboot.png', proficiency: 60 },
      { name: 'FastAPI',     logo: '/assets/fastapi.png',    proficiency: 70 },
      { name: 'REST APIs',   logo: '/assets/restapi.png',    proficiency: 90 },
      { name: 'Socket.io',   logo: '/assets/socketio.png',   proficiency: 80 },
      { name: 'Fast2SMS (API)', logo: '/assets/fast2sms.png', proficiency: 85 }
    ],
  },
  {
    num: '03',
    category: 'DATABASES',
    items: [
      { name: 'MongoDB',    logo: '/assets/mongodb.png', proficiency: 85 },
      { name: 'PostgreSQL', logo: '/assets/psql.png',    proficiency: 75 },
      { name: 'MySQL',      logo: '/assets/mysql.png',   proficiency: 70 },
      { name: 'Redis',      logo: '/assets/redis.png',   proficiency: 60 },
    ],
  },
  {
    num: '04',
    category: 'DEVOPS & CLOUD',
    items: [
      { name: 'Docker',  logo: '/assets/docker.png',  proficiency: 80 },
      { name: 'AWS',     logo: '/assets/aws.png',     proficiency: 65 },
      { name: 'Vercel',  logo: '/assets/vercel.png',  proficiency: 85 },
      { name: 'Render',  logo: '/assets/render.png',  proficiency: 75 },
      { name: 'Git',     logo: '/assets/git.png',     proficiency: 90 },
      { name: 'GitHub',  logo: '/assets/github.png',  proficiency: 90 },
    ],
  },
  {
    num: '05',
    category: 'LANGUAGES',
    items: [
      { name: 'Java',    logo: '/assets/java.png',   proficiency: 80 },
      { name: 'Python',  logo: '/assets/python.png', proficiency: 75 },
      { name: 'C / C++', logo: '/assets/c-cpp.png',  proficiency: 70 },
    ],
  },
  {
    num: '06',
    category: 'TOOLS & CS',
    items: [
      { name: 'Postman',       logo: '/assets/postman.png',     proficiency: 85 },
      { name: 'VS Code',       logo: '/assets/vscode.png',      proficiency: 90 },
      { name: 'Eclipse IDE',   logo: '/assets/eclipse.png',     proficiency: 70 },
      { name: 'DSA',           logo: '/assets/dsa.png',         proficiency: 75 },
      { name: 'OOP',           logo: '/assets/oops.png',        proficiency: 85 },
      { name: 'OS & Networks', logo: '/assets/os&networks.png', proficiency: 70 },
      { name: 'Linux',         logo: '/assets/linux.png',       proficiency: 70 },
    ],
  },
];

const SkillCard = ({ name, logo, proficiency }) => (
  <div className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-black/8 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group">
    <div className="w-12 h-12 flex items-center justify-center">
      <img
        src={logo}
        alt={name}
        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
      />
    </div>
    <span className="text-textMain font-semibold text-xs text-center leading-tight">{name}</span>
    <div className="w-full h-px bg-black/10" />
    <span className="text-textMuted text-[9px] font-mono tracking-widest uppercase">
      PROFICIENCY: {proficiency}%
    </span>
  </div>
);

const SkillRow = ({ cat, isOpen, onToggle }) => (
  <div className="border-b border-black/10">
    {/* Header */}
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-6 px-0 group text-left"
    >
      <div className="flex items-center gap-6 sm:gap-10">
        <span className="text-textMuted font-mono text-xs tracking-widest select-none w-6 flex-shrink-0">
          {cat.num}
        </span>
        <span
          className="text-textMain font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-none uppercase"
          style={{ fontWeight: 900 }}
        >
          {cat.category}
        </span>
      </div>
      <span className="text-textMuted text-xl group-hover:text-textMain transition-colors duration-300 flex-shrink-0 ml-4">
        {isOpen ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        )}
      </span>
    </button>

    {/* Expandable Skills Grid */}
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: 'hidden' }}
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 pb-8 pl-12 sm:pl-16">
            {cat.items.map((skill, i) => (
              <SkillCard key={i} {...skill} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="skills" className="bg-background py-20 lg:py-28 -mx-6 sm:-mx-12 md:-mx-16 lg:-mx-24 xl:-mx-32 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          style={{ willChange: 'transform, opacity' }}
          className="text-textMuted font-mono text-xs tracking-[0.3em] uppercase mb-10 block"
        >
          TECH STACK
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.05, ease: 'easeOut' }}
          style={{ willChange: 'transform, opacity' }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-textMain leading-tight mb-12 tracking-tight"
        >
          Skills &amp; <span className="text-primary">Tools</span>
        </motion.h2>

        {/* Border top */}
        <div className="border-t border-black/10" />

        {/* Accordion Rows */}
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <SkillRow
              cat={cat}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
