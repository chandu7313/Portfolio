import React from 'react';
import { motion } from 'framer-motion';

const SkillIcon = ({ name }) => {
  const iconProps = {
    className: "w-6 h-6 transition-transform duration-500",
    strokeWidth: 2,
    stroke: "currentColor",
    fill: "none",
  };

  switch (name.toLowerCase()) {
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" {...iconProps} fill="currentColor" stroke="none">
          <path d="M3 3h18v18H3V3zm16.525 13.843c0-1.11-.645-1.957-1.467-2.316l-.427-.183c-.347-.145-.71-.24-1.127-.373l-.406-.134c-.217-.07-.406-.11-.536-.17-.11-.052-.16-.1-.16-.184 0-.11.085-.183.254-.183.15 0 .26.06.394.183l.89-.604c-.21-.3-.625-.563-1.192-.563-.984 0-1.57.65-1.57 1.344 0 .96.536 1.487 1.353 1.832l.462.193c.31.13.67.24 1.05.372l.453.15c.294.1.488.19.585.3.11.123.16.273.16.48 0 .285-.23.492-.596.492-.353 0-.61-.17-.837-.506l-1.01.597c.33.564.93 1.015 1.886 1.015 1.258 0 1.957-.69 1.957-1.745zm-6.19 1.85c-.3 0-.585-.123-.742-.314-.15-.19-.24-.467-.24-.775l-1.155.15c.03.493.2.914.492 1.24.417.47.962.66 1.633.66 1.053 0 1.63-.53 1.63-1.417V12.11H13.68v5.12c0 .24-.1.35-.346.35z"/>
        </svg>
      );
    case 'c / c++':
      return (
        <svg viewBox="0 0 24 24" {...iconProps} fill="currentColor" stroke="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.61 14.76c-1.18.57-2.61.89-4.11.89-3.3 0-6-2.69-6-6s2.7-6 6-6c1.38 0 2.64.44 3.73 1.18l-1.41 1.41C13.9 7.82 13 7.5 12 7.5c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5c.82 0 1.58-.23 2.23-.62l1.38 1.38z"/>
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" {...iconProps} fill="currentColor" stroke="none">
          <path d="M14.004 19.344c-3.156 1.036-7.8.216-9.216-.404a11.532 11.532 0 011.668-.38c.612-.072 1.56-.168 2.04-.156.408.012.876.108 1.164.336 2.052.024 4.392-.612 4.344-.924l.156-2.58c-1.14.756-1.572 1.38-2.676 1.5-1.992.204-4.5 0-5.46-1.392-.936-1.356-.372-2.316.324-2.736.6-.336.96-.348 1.644-.432-.432-.192-.72-.372-.948-.564-.468-.384-.816-.852-.804-1.356 0-1.164 1.152-2.16 2.508-2.652.288-.108.768-.216 1.164-.264-.444-.396-.708-.852-.708-1.308.012-.624.444-1.152 1.176-1.452l.24-.096c.216-.012.516-.012.96-.012l.144-.348C10.536 2.304 10.464 1.548 10 1.008c3.084.288 3.96 3.192 3.864 5.34.408.096.792.252 1.128.468.996.648 1.488 1.632 1.488 2.52 0 1.296-1.044 2.22-2.124 2.688l.06 1.092c.672-.216 1.152-.396 1.68-.396.672 0 1.272.288 1.704.708l.192.192c.168.168.324.36.432.552.42.756.408 1.644-.06 2.4l.012.012c4.14-.144 6.648-1.548 5.64-3.216-1.416-2.328-8.256-4.992-12.288-5.328a6.52 6.52 0 011.668.612c1.776 1.02 1.392 3.108 0 4.14-.996.72-2.196.792-3.372.48l-.492-.12c1.176.432 2.604.384 3.792-.612.876-.756 1.128-1.92.516-2.712-.828-1.056-2.436-1.632-4.044-1.452-2.316.276-3.156 1.344-3.66 2.22l-.24.492c-.108.384-.156.816-.168 1.368 0 2.22 1.296 3.516 3.552 4.14.732.192 2.412.336 3.636.336.852.012 1.956-.12 2.76-.324l.024 1.008c2.904-.084 4.548-1.284 3.948-2.616-.276-.624-.912-1.056-1.776-1.212-.516-.096-.948.06-1.236.432-.24.3-.228.696-.036.912l.144.156c.492.48 1.284.456 1.356 0l-.132-.156c-.072-.048-.156-.108-.18-.168a.385.385 0 01-.012-.228c.036-.084.144-.144.252-.168.156-.024.444.072.588.276.108.144.144.408-.036.792l-.012.036c-.468.96-2.148 1.632-4.488 1.704zM4.92 18.06c.012.276.012.444 0 .552z"/>
        </svg>
      );
    case 'python':
      return (
        <svg viewBox="0 0 24 24" {...iconProps} fill="currentColor" stroke="none">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V3h-2.12v1.45h2.16v1.44h-2.16V7.3h3.21v.44h1.08v3.29h-2.16v-1.44h-2.16v1.44h-2.16V13h-1.45v2.16H10.5V13h-1.44v-2.16h-2.16v2.16H4.75V13H3.3v-2.16h2.16V9.4h-2.16V7.95h2.16V6.5H3.3V5.05h2.16V3.6H3.3l.02-.2.04-.26.1-.3.16-.33.25-.34.34-.34.45-.32.59-.3.73-.26.9-.2z"/>
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14.5a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z"/>
        </svg>
      );
    case 'reactjs':
      return (
        <svg viewBox="0 0 24 24" {...iconProps} fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <path d="M12 12m-9.1-3.5c4.6-2.7 9.6-3.8 13.6-2.6 4.1 1.2 6.5 4.3 6.5 8.1 0 3.8-2.4 6.9-6.5 8.1-4 1.2-9 0-13.6-2.6-4.6-2.7-7-6-7-9.3 0-3.3 2.4-6.6 7-9.3z" transform="rotate(0 12 12)"/>
          <path d="M12 12m-9.1-3.5c4.6-2.7 9.6-3.8 13.6-2.6 4.1 1.2 6.5 4.3 6.5 8.1 0 3.8-2.4 6.9-6.5 8.1-4 1.2-9 0-13.6-2.6-4.6-2.7-7-6-7-9.3 0-3.3 2.4-6.6 7-9.3z" transform="rotate(120 12 12)"/>
          <path d="M12 12m-9.1-3.5c4.6-2.7 9.6-3.8 13.6-2.6 4.1 1.2 6.5 4.3 6.5 8.1 0 3.8-2.4 6.9-6.5 8.1-4 1.2-9 0-13.6-2.6-4.6-2.7-7-6-7-9.3 0-3.3 2.4-6.6 7-9.3z" transform="rotate(240 12 12)"/>
        </svg>
      );
    case 'node.js':
      return (
        <svg viewBox="0 0 24 24" {...iconProps} fill="currentColor" stroke="none">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM9.5 16.5H8v-9h1.5v9zm6.5 0h-1.5v-4.5H13v4.5h-1.5v-9H13v3h1.5v-3H16v9z"/>
        </svg>
      );
    case 'express':
      return (
        <svg viewBox="0 0 24 24" {...iconProps} fill="currentColor" stroke="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
        </svg>
      );
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" {...iconProps} fill="currentColor" stroke="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v10h-2z"/>
        </svg>
      );
    case 'postgresql / mysql':
    case 'postgresql':
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" {...iconProps} fill="currentColor" stroke="none">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 4h2v6h-2zM11 14h2v4h-2z"/>
        </svg>
      );
    case 'docker':
      return (
        <svg viewBox="0 0 24 24" {...iconProps} fill="currentColor" stroke="none">
          <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V9.07c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.822c0 .102.084.186.186.186zM11.283 11.078h2.119c.102 0 .186-.084.186-.186V9.07c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.822c0 .102.084.186.186.186zM8.584 11.078h2.119c.102 0 .186-.084.186-.186V9.07c0-.102-.084-.186-.186-.186H8.584c-.102 0-.186.084-.186.186v1.822c0 .102.084.186.186.186zM5.884 11.078h2.119c.102 0 .186-.084.186-.186V9.07c0-.102-.084-.186-.186-.186H5.884c-.102 0-.186.084-.186.186v1.822c0 .102.084.186.186.186zM8.584 8.278h2.119c.102 0 .186-.084.186-.186V6.27c0-.102-.084-.132-.186-.132H8.584c-.102 0-.186.03-.186.132v1.822c0 .102.084.186.186.186zM11.283 8.278h2.119c.102 0 .186-.084.186-.186V6.27c0-.102-.084-.132-.186-.132h-2.119c-.102 0-.186.03-.186.132v1.822c0 .102.084.186.186.186zM11.283 5.378h2.119c.102 0 .186-.084.186-.186V3.37c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v1.822c0 .102.084.186.186.186zM13.983 8.278h2.119c.102 0 .186-.084.186-.186V6.27c0-.102-.084-.132-.186-.132h-2.119c-.102 0-.186.03-.186.132v1.822c0 .102.084.186.186.186zM23 11.078a.186.186 0 00-.186-.186h-2.731c-.102 0-.186.084-.186.186v1.822c0 .102.084.186.186.186h2.731a.186.186 0 00.186-.186v-1.822zM23.633 13.978c-.102 0-.21 0-.312.012-1.065.138-3 .678-3 .678s.168-1.572.24-2.832c.006-.09.006-.186.006-.276 0-.618.066-1.122.138-1.662.036-.264.084-.528.144-.792.012-.042.066-.186.066-.186s-.318.084-.714.288c-.03.012-.06.012-.09.018a.393.393 0 01-.108-.018c-.468-.21-.852-.366-1.17-.468a.186.186 0 00-.228.18v.834c0 .102.084.186.186.186h.54c.102 0 .186.084.186.186v1.822c0 .102-.084.186-.186.186H12.91a.186.186 0 01-.186-.186V6.15a.186.186 0 01.186-.186h2.119a.186.186 0 00.186-.186V3.956c0-.102-.084-.186-.186-.186H10.584a.186.186 0 00-.186.186v13.064c0 .102-.084.186-.186.186H5.884a.186.186 0 00-.186.186v1.822c0 .102.084.186.186.186h11.984a.186.186 0 01.186.186v.558c0 .102.084.186.186.186h.558a.186.186 0 01.186.186v.558a.186.186 0 01-.186.186h-.558a.186.186 0 00-.186.186v1.116c0 .102-.084.186-.186.186h-.558a.186.186 0 00-.186.186v1.116c0 .102-.084.186-.186.186h-5.558a.186.186 0 01-.186-.186v-1.116a.186.186 0 01-.186-.186H1.91a.186.186 0 00-.186.186V21.12a.186.186 0 00.186.186h15.984a.186.186 0 01.186.186v1.116c0 .102.084.186.186.186h3.633a.186.186 0 00.186-.186V14.164a.186.186 0 00-.186-.186zM6.633 13.978a.186.186 0 01-.186.186H3.633a.186.186 0 01-.186-.186v-1.822a.186.186 0 01.186-.186h2.814a.186.186 0 01.186.186v1.822zM9.433 13.978a.186.186 0 01-.186.186H6.633a.186.186 0 01-.186-.186v-1.822a.186.186 0 01.186-.186h2.614a.186.186 0 01.186.186v1.822zM12.233 13.978a.186.186 0 01-.186.186H9.433a.186.186 0 01-.186-.186v-1.822a.186.186 0 01.186-.186h2.614a.186.186 0 01.186.186v1.822zM15.033 13.978a.186.186 0 01-.186.186H12.233a.186.186 0 01-.186-.186v-1.822a.186.186 0 01.186-.186h2.614a.186.186 0 01.186.186v1.822z"/>
        </svg>
      );
    case 'git & github':
    case 'github actions':
    case 'github':
      return (
        <svg viewBox="0 0 24 24" {...iconProps} fill="currentColor" stroke="none">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.137 20.16 22 16.42 22 12c0-5.523-4.477-10-10-10z"/>
        </svg>
      );
    default:
      return (
        <span className="text-xs font-bold font-mono">{name.charAt(0)}</span>
      );
  }
};

const CategoryCard = ({ cat, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ delay }}
    className="glass-card p-6 sm:p-8 rounded-[32px] group"
  >
    {/* Category Header */}
    <div className="flex items-center gap-4 mb-8">
      <span className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-xl font-mono shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
        <span className="transition-transform group-hover:scale-110 duration-500">{cat.icon}</span>
      </span>
      <h3 className="font-black text-textMain text-lg sm:text-xl tracking-tight">{cat.category}</h3>
    </div>

    {/* Skill Items */}
    <div className="flex flex-col gap-3">
      {cat.items.map((item, i) => (
        <div
          key={i}
          className="bg-white/50 backdrop-blur-sm border border-primary/5 rounded-2xl px-5 py-4 flex items-center gap-4 hover:border-primary/30 hover:bg-white hover:shadow-premium transition-all duration-300 group/item"
        >
          <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
            <SkillIcon name={item.name} />
          </div>
          <div>
            <p className="text-sm font-bold text-textMain leading-tight group-hover/item:text-primary transition-colors">{item.name}</p>
            <p className="text-[11px] text-textMuted font-medium uppercase tracking-wider">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skills = ({ skillCategories, bottomCategories }) => {
  return (
    <section id="skills" className="">
      {/* Section Label */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        className="section-label block"
      >
        TECH STACK
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ delay: 0.1 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-textMain leading-tight mb-16 tracking-tight"
      >
        Skills & <span className="text-primary">Tools</span>
      </motion.h2>

      {/* Top Row: Languages, Frameworks, Databases */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {skillCategories.map((cat, i) => (
          <CategoryCard key={i} cat={cat} delay={0.1 + i * 0.05} />
        ))}
      </div>

      {/* Bottom Row: Cloud & DevOps, Dev Tools, CS Fundamentals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {bottomCategories.map((cat, i) => (
          <CategoryCard key={i} cat={cat} delay={0.2 + i * 0.05} />
        ))}
      </div>
    </section>
  );
};

const SkillsWrapper = () => {
  const skillCategories = [
    {
      category: 'Languages',
      icon: '<>',
      items: [
        { name: 'JavaScript', desc: 'Core Web Logic' },
        { name: 'C / C++', desc: 'Systems & DSA' },
        { name: 'Java', desc: 'Enterprise Apps' },
        { name: 'Python', desc: 'Scripting & Data' },
        { name: 'Kotlin / PHP', desc: 'App / API Logic' },
      ],
    },
    {
      category: 'Frameworks',
      icon: '□',
      items: [
        { name: 'ReactJS', desc: 'Interactive UIs' },
        { name: 'Node.js', desc: 'Runtime Env' },
        { name: 'Express', desc: 'RESTful APIs' },
        { name: 'HTML5 / CSS3', desc: 'Semantic Web Layouts' },
        { name: 'Tailwind CSS', desc: 'Utility Styling' },
      ],
    },
    {
      category: 'Databases',
      icon: '⊞',
      items: [
        { name: 'MongoDB', desc: 'NoSQL Datastore' },
        { name: 'PostgreSQL / MySQL', desc: 'Relational Schema' },
      ],
    },
  ];

  const bottomCategories = [
    {
      category: 'Cloud & DevOps',
      icon: '☁',
      items: [
        { name: 'AWS', desc: 'Cloud Infrastructure' },
        { name: 'Vercel', desc: 'Frontend Hosting' },
        { name: 'Docker', desc: 'Containerization' },
        { name: 'GitHub Actions', desc: 'CI/CD Pipelines' },
      ],
    },
    {
      category: 'Dev Tools',
      icon: '⚙',
      items: [
        { name: 'Git / GitHub', desc: 'Version Control' },
        { name: 'VS Code', desc: 'Primary IDE' },
        { name: 'Postman', desc: 'API Testing' },
      ],
    },
    {
      category: 'CS Fundamentals',
      icon: '≡',
      items: [
        { name: 'DSA', desc: 'Algorithm Optimization' },
        { name: 'OOP', desc: 'Design Patterns' },
        { name: 'OS & Networks', desc: 'System Concepts' },
      ],
    },
  ];

  return <Skills skillCategories={skillCategories} bottomCategories={bottomCategories} />;
};

export default SkillsWrapper;
