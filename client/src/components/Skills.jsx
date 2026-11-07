import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'all', label: 'All Tech' },
  { id: 'languages', label: 'Languages' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'genai', label: 'GenAI & Agents' },
  { id: 'data', label: 'Data & Queues' },
  { id: 'devops', label: 'Cloud & DevOps' },
  { id: 'cs', label: 'Core CS' },
];

const skillsData = [
  // Languages
  { name: 'Python', category: 'languages', logo: '/assets/python.png', level: 92, status: 'Core Stack', desc: 'FastAPI, spaCy, Presidio, Scripts' },
  { name: 'Java', category: 'languages', logo: '/assets/java.png', level: 88, status: 'OOP & DSA', desc: 'Object-Oriented, Multithreading' },
  { name: 'JavaScript', category: 'languages', logo: '/assets/js.png', level: 90, status: 'Production', desc: 'ES6+, Async/Await, Web APIs' },
  { name: 'SQL', category: 'languages', logo: '/assets/psql.png', level: 88, status: 'Relational', desc: 'Complex Joins, Indexes, Schema' },

  // Full-Stack
  { name: 'React.js', category: 'fullstack', logo: '/assets/react.png', level: 92, status: 'Flagship', desc: 'Hooks, Context, State, Framer' },
  { name: 'Next.js', category: 'fullstack', logo: '/assets/react.png', level: 90, status: 'Production', desc: 'App Router, SSR, Streaming' },
  { name: 'Nest.js', category: 'fullstack', logo: '/assets/nodejs.png', level: 88, status: 'Architecture', desc: 'Modular DI, Microservices' },
  { name: 'Node.js', category: 'fullstack', logo: '/assets/nodejs.png', level: 90, status: 'Production', desc: 'Event Loop, Streams, REST' },
  { name: 'Express.js', category: 'fullstack', logo: '/assets/expressjs.png', level: 88, status: 'Production', desc: 'Middleware, Routing, Auth' },
  { name: 'Flutter', category: 'fullstack', logo: '/assets/certificates/andriod-cer.png', level: 82, status: 'Mobile', desc: 'Cross-Platform UI, State' },
  { name: 'Tailwind CSS', category: 'fullstack', logo: '/assets/tailwind.png', level: 94, status: 'Design', desc: 'Modern Responsive Layouts' },
  { name: 'REST APIs', category: 'fullstack', logo: '/assets/restapi.png', level: 95, status: 'Architecture', desc: 'OpenAPI, JWT, Rate Limiting' },

  // GenAI & Agentic AI
  { name: 'Gemini LLM APIs', category: 'genai', logo: '/assets/fastapi.png', level: 90, status: 'Production', desc: 'Multimodal, Tool Calling, Agents' },
  { name: 'Multi-Agent Systems', category: 'genai', logo: '/assets/dsa.png', level: 88, status: 'Flagship', desc: 'Parallel Orchestration, State' },
  { name: 'RAG Pipelines', category: 'genai', logo: '/assets/cloud-cer.png', level: 86, status: 'Research', desc: 'Embeddings, Vector Context' },
  { name: 'spaCy NLP / NER', category: 'genai', logo: '/assets/python.png', level: 86, status: 'Production', desc: 'Entity Recognition & Parsing' },
  { name: 'Presidio PII Redaction', category: 'genai', logo: '/assets/oops.png', level: 92, status: '100% Precision', desc: 'Context-Aware Sensitive Data Masking' },

  // Data & Queues
  { name: 'PostgreSQL', category: 'data', logo: '/assets/psql.png', level: 88, status: 'Primary DB', desc: 'ACID, Indexing, Complex Relational' },
  { name: 'Redis', category: 'data', logo: '/assets/redis.png', level: 86, status: 'Cache & Pub/Sub', desc: 'In-Memory Cache, Rate Limiting' },
  { name: 'BullMQ', category: 'data', logo: '/assets/nodejs.png', level: 88, status: 'Job Queue', desc: 'Asynchronous Job Processing' },
  { name: 'RabbitMQ', category: 'data', logo: '/assets/socketio.png', level: 84, status: 'Message Broker', desc: 'Event-Driven Microservices' },
  { name: 'MongoDB', category: 'data', logo: '/assets/mongodb.png', level: 84, status: 'NoSQL', desc: 'Document Models, Aggregation' },

  // Cloud & DevOps
  { name: 'Docker', category: 'devops', logo: '/assets/docker.png', level: 88, status: 'Containerization', desc: 'Multi-stage Builds, Compose' },
  { name: 'AWS (EC2)', category: 'devops', logo: '/assets/aws.png', level: 82, status: 'Cloud Infra', desc: 'Virtual Machines, Security Groups' },
  { name: 'Nginx', category: 'devops', logo: '/assets/linux.png', level: 84, status: 'Reverse Proxy', desc: 'Load Balancing, SSL Termination' },
  { name: 'Jenkins CI/CD', category: 'devops', logo: '/assets/render.png', level: 80, status: 'Automation', desc: 'Automated Build & Deploy Pipelines' },
  { name: 'Linux / Shell', category: 'devops', logo: '/assets/linux.png', level: 86, status: 'Administration', desc: 'Systemd, Process Mgmt, Bash' },
  { name: 'Prometheus & Grafana', category: 'devops', logo: '/assets/cloud-cer.png', level: 80, status: 'Telemetry', desc: 'Microservice Metrics & Alerts' },

  // Core CS
  { name: 'DSA (190+ LeetCode)', category: 'cs', logo: '/assets/dsa.png', level: 90, status: 'Algorithmic', desc: 'Graphs, Dynamic Prog, Trees' },
  { name: 'System Design', category: 'cs', logo: '/assets/docker.png', level: 86, status: 'Architecture', desc: 'Microservices, Scalability, Queues' },
  { name: 'OOP Concepts', category: 'cs', logo: '/assets/oops.png', level: 90, status: 'Foundations', desc: 'Inheritance, Polymorphism, SOLID' },
  { name: 'DBMS & Operating Systems', category: 'cs', logo: '/assets/os&networks.png', level: 85, status: 'Foundations', desc: 'Concurrency, Transactions, Memory' },
  { name: 'Git & GitHub', category: 'cs', logo: '/assets/github.png', level: 92, status: 'Workflow', desc: 'Branching, PRs, CI Workflows' },
  { name: 'Postman', category: 'cs', logo: '/assets/postman.png', level: 90, status: 'Testing', desc: 'API Testing & Mock Servers' },
];

const marqueeRow1 = [
  'NEXT.JS', 'NEST.JS', 'REACT', 'POSTGRESQL', 'REDIS', 'BULLMQ', 'RABBITMQ', 'DOCKER', 'AWS EC2', 'GEMINI AI', 'PYTHON', 'FASTAPI'
];

const marqueeRow2 = [
  '190+ LEETCODE DSA', 'MICROSERVICES FLEET', 'MULTI-AGENT ORCHESTRATION', '100% PII PRECISION', 'NGINX PROXY', 'JENKINS CI/CD', 'PROMETHEUS', 'GRAFANA'
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="w-full py-24 sm:py-32 relative overflow-hidden">
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-[#7047ff]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-[#b5ff20]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-label"
            >
              <span className="w-2 h-2 rounded-full bg-[#b5ff20] animate-ping" />
              <span>02 // CAPABILITIES &amp; STACK</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase"
            >
              Technical <span className="bg-gradient-to-r from-[#b5ff20] via-white to-[#7047ff] bg-clip-text text-transparent">Arsenal</span>
            </motion.h2>
          </div>

          {/* Quick Stats Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-6 bg-[#0c0919] border border-white/10 rounded-2xl px-6 py-4 self-start lg:self-end"
          >
            <div>
              <div className="text-2xl font-black text-[#b5ff20] font-mono leading-none">30+</div>
              <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mt-1">Tools &amp; Libs</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-black text-white font-mono leading-none">15+</div>
              <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mt-1">Microservices</div>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div>
              <div className="text-2xl font-black text-[#7047ff] font-mono leading-none">190+</div>
              <div className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider mt-1">DSA Solved</div>
            </div>
          </motion.div>
        </div>

        {/* Category Pill Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'text-black font-extrabold shadow-[0_0_20px_rgba(181,255,32,0.4)]'
                    : 'text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-[#b5ff20] rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className="group relative bg-[#0c0919]/80 hover:bg-[#130e29] border border-white/10 hover:border-[#b5ff20]/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(112,71,255,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    {/* Tech Logo */}
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-2 group-hover:scale-110 group-hover:border-[#b5ff20]/40 transition-all duration-300">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className="w-full h-full object-contain filter group-hover:brightness-110"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Status Badge */}
                    <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-mono font-medium group-hover:text-[#b5ff20] group-hover:border-[#b5ff20]/30 transition-colors">
                      {skill.status}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-white font-bold text-base group-hover:text-[#b5ff20] transition-colors mb-1">
                    {skill.name}
                  </h3>
                  <p className="text-zinc-500 text-xs font-mono line-clamp-1 mb-5">
                    {skill.desc}
                  </p>
                </div>

                {/* Proficiency Gauge */}
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1.5">
                    <span>MASTERY</span>
                    <span className="text-[#b5ff20] font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-[#7047ff] via-[#9455ff] to-[#b5ff20] rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dual Marquee Ticker */}
        <div className="mt-20 pt-10 border-t border-white/10 overflow-hidden relative">
          <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#070510] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#070510] to-transparent z-10 pointer-events-none" />

          {/* Marquee Row 1 */}
          <div className="flex gap-8 mb-4 animate-marquee select-none whitespace-nowrap">
            {[...marqueeRow1, ...marqueeRow1].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0c0919] border border-white/10 text-xs font-mono text-zinc-300 font-bold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#b5ff20]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Marquee Row 2 (Reverse) */}
          <div
            className="flex gap-8 select-none whitespace-nowrap"
            style={{
              animation: 'marquee 35s linear infinite reverse',
              display: 'flex',
              width: 'max-content',
            }}
          >
            {[...marqueeRow2, ...marqueeRow2].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0c0919] border border-[#7047ff]/20 text-xs font-mono text-zinc-400 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#7047ff]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;