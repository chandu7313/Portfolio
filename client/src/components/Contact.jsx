import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_250qlk8';
const EMAILJS_TEMPLATE_ID = 'template_4wpf93o';
const EMAILJS_PUBLIC_KEY = 'uX93smIJC0vGkMTMW';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('IDLE'); // IDLE | SENDING | SUCCESS | ERROR
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chandrgadige@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setStatus('SENDING');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        EMAILJS_PUBLIC_KEY
      );

      const API_URL = import.meta.env.VITE_API_URL;
      if (API_URL && API_URL !== 'https://your-render-url.onrender.com') {
        try {
          await fetch(`${API_URL}/api/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
        } catch (apiErr) {
          console.error('Backend API error:', apiErr);
        }
      }

      setStatus('SUCCESS');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('ERROR');
    }
  };

  const contactMethods = [
    {
      label: 'PRIMARY INBOX',
      val: 'chandrgadige@gmail.com',
      href: 'mailto:chandrgadige@gmail.com',
      action: 'Email Direct',
      color: '#b5ff20',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
      ),
    },
    {
      label: 'PHONE & WHATSAPP',
      val: '+91 9000540571',
      href: 'tel:+919000540571',
      action: 'Direct Call',
      color: '#38bdf8',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
      ),
    },
    {
      label: 'LINKEDIN NETWORK',
      val: 'linkedin.com/in/chandu7313',
      href: 'https://www.linkedin.com/in/chandu7313/',
      action: 'Connect',
      color: '#7047ff',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
      ),
    },
    {
      label: 'GITHUB REPOSITORIES',
      val: 'github.com/chandu7313',
      href: 'https://github.com/chandu7313',
      action: 'Inspect Code',
      color: '#ffffff',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      ),
    },
  ];

  return (
    <section id="contact" className="w-full relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#b5ff20]/10 rounded-full blur-[140px] pointer-events-none" />

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
            <span>06 // TRANSMISSION &amp; INQUIRY</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase"
          >
            Let's <span className="bg-gradient-to-r from-[#b5ff20] via-white to-[#7047ff] bg-clip-text text-transparent">Collaborate</span>
          </motion.h2>
        </div>

        {/* Live Availability Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 bg-[#0c0919] border border-white/10 rounded-full px-5 py-3 self-start lg:self-end"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b5ff20] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#b5ff20]"></span>
          </span>
          <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
            Available For Roles &amp; Contracts
          </span>
        </motion.div>
      </div>

      {/* Main Grid: Left = Direct Channels & Quick Copy, Right = Cyber Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column (Col 5) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">
              Have a visionary project or need a high-impact engineer?
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              I'm actively open to full-time engineering roles, high-scale microservice contract architectures, and agentic AI deployments. Transmit a message or reach out directly.
            </p>

            {/* Quick 1-Click Copy Email Banner */}
            <div className="group relative bg-[#0c0919] border border-white/10 hover:border-[#b5ff20]/50 rounded-2xl p-5 mb-8 transition-all duration-300">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-wider block mb-0.5">
                    1-Click Direct Copy
                  </span>
                  <span className="text-white font-mono font-bold text-sm sm:text-base">
                    chandrgadige@gmail.com
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#b5ff20] hover:text-black text-white font-mono text-xs font-bold transition-all duration-300 flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <span className="text-emerald-400">✓</span>
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <span>Copy</span>
                      <span>📋</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Contact Channels List */}
            <div className="flex flex-col gap-3">
              {contactMethods.map((m, idx) => (
                <a
                  key={idx}
                  href={m.href}
                  target={m.href.startsWith('http') ? '_blank' : undefined}
                  rel={m.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-[#0c0919]/60 hover:bg-[#130e29] border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:scale-110 transition-transform duration-300"
                      style={{ color: m.color }}
                    >
                      {m.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider block">
                        {m.label}
                      </span>
                      <span className="text-sm font-mono text-white font-semibold group-hover:text-[#b5ff20] transition-colors">
                        {m.val}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs font-mono font-bold text-zinc-500 group-hover:text-white transition-colors">
                    {m.action} ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#0c0919]/40 border border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Standard Telemetry Response Time</span>
            </div>
            <p className="text-zinc-300 font-mono text-xs font-semibold">
              // Guaranteed response within 12 hours.
            </p>
          </div>
        </div>

        {/* Right Column: Cyber Contact Form (Col 7) */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#0c0919] border border-white/10 rounded-[32px] sm:rounded-[40px] p-8 sm:p-10 shadow-2xl"
          >
            {/* Top Form Terminal Bar */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 select-none">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="ml-2 text-xs font-mono text-zinc-400">
                  channel // secure_inbox_v2
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#b5ff20] uppercase tracking-wider">
                TLS 1.3 Encrypted
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Your Name <span className="text-[#b5ff20]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elon Musk"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#090714] border border-white/10 focus:border-[#b5ff20] focus:ring-1 focus:ring-[#b5ff20] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    Email Address <span className="text-[#b5ff20]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. elon@x.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#090714] border border-white/10 focus:border-[#b5ff20] focus:ring-1 focus:ring-[#b5ff20] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Subject / Scope <span className="text-[#b5ff20]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Distributed Systems Engineer Role / Architecture Consultation"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#090714] border border-white/10 focus:border-[#b5ff20] focus:ring-1 focus:ring-[#b5ff20] rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2">
                  Transmission Message <span className="text-[#b5ff20]">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Describe the opportunity, technical challenges, or requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#090714] border border-white/10 focus:border-[#b5ff20] focus:ring-1 focus:ring-[#b5ff20] rounded-xl p-4 text-sm text-white placeholder-zinc-600 outline-none transition-all duration-300 font-mono resize-none"
                />
              </div>

              {/* Status Notice */}
              <AnimatePresence>
                {status === 'SUCCESS' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold flex items-center gap-2"
                  >
                    <span>✓</span>
                    <span>Transmission delivered successfully! I will reply within 12 hours.</span>
                  </motion.div>
                )}
                {status === 'ERROR' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs font-bold flex items-center gap-2"
                  >
                    <span>✕</span>
                    <span>Transmission timed out. Please send directly to chandrgadige@gmail.com</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'SENDING'}
                className="w-full py-4 rounded-full bg-[#b5ff20] hover:bg-[#a3f013] text-black font-extrabold text-sm sm:text-base font-mono uppercase tracking-wider transition-all duration-300 shadow-[0_10px_30px_rgba(181,255,32,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {status === 'SENDING' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Encrypting &amp; Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

      </div>

      {/* Cyber Footer */}
      <div className="mt-24 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#b5ff20]" />
          <span className="font-mono text-xs text-zinc-400">
            © 2026 <strong className="text-white">Chandra Mohan Gadige</strong>. Engineered with React &amp; Tailwind.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://drive.google.com/file/d/1AfmXylZNdx_IIv4sNeC8igKT0izahqtF/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-zinc-400 hover:text-[#b5ff20] transition-colors"
          >
            Download CV PDF ↗
          </a>
          <a
            href="#hero"
            className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;