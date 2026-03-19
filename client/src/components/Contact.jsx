import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('IDLE');
  const [responseLog, setResponseLog] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) return;

    setStatus('SENDING');
    setResponseLog(null);

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus('SUCCESS');
        setResponseLog(data.data);
      } else {
        setStatus('ERROR');
        setResponseLog(data.error);
      }
    } catch (err) {
      setStatus('ERROR');
      setResponseLog("Network error or server unreachable.");
    }
  };

  const contactOptions = [
    {
      label: 'EMAIL',
      val: 'varh6302@gmail.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      )
    },
    {
      label: 'PHONE',
      val: '+91 80740 06300',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      )
    },
    {
      label: 'LINKEDIN',
      val: 'vishnu0317',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
      )
    },
    {
      label: 'GITHUB',
      val: 'vishnuvalmiki6302',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
      )
    }
  ];

  return (
    <section id="contact" className="py-20 font-sans">
      {/* Section Label */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-4 block"
      >
        CONTACT
      </motion.span>

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
        {/* Info Side */}
        <div className="flex-1 max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl font-black text-[#1a1c20] leading-[1.1] mb-8 tracking-tight"
          >
            Let's work<br />together.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-[#4b5563] text-lg sm:text-xl leading-relaxed mb-16 font-medium"
          >
            Open to full-time roles, internships, and interesting freelance projects. Send me a message and I'll respond within 24 hours.
          </motion.p>

          <div className="space-y-8">
            {contactOptions.map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {opt.icon}
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.15em] mb-1">{opt.label}</p>
                  <span className="text-[#1a1c20] font-black text-sm sm:text-base leading-none block">{opt.val}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.3 }}
          className="flex-1 w-full"
        >
          <div className="bg-white p-8 sm:p-12 rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="flex flex-col gap-2.5">
                <label className="text-[13px] font-black text-[#1a1c20] tracking-tight ml-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="bg-[#f3f4f7] border-none rounded-2xl px-6 py-5 text-[#1a1c20] text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-400"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={status === 'SENDING' || status === 'SUCCESS'}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="text-[13px] font-black text-[#1a1c20] tracking-tight ml-1">Email Address</label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="bg-[#f3f4f7] border-none rounded-2xl px-6 py-5 text-[#1a1c20] text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-400"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={status === 'SENDING' || status === 'SUCCESS'}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="text-[13px] font-black text-[#1a1c20] tracking-tight ml-1">Subject</label>
                <input
                  type="text"
                  placeholder="Job opportunity / Collaboration"
                  className="bg-[#f3f4f7] border-none rounded-2xl px-6 py-5 text-[#1a1c20] text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-gray-400"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  disabled={status === 'SENDING' || status === 'SUCCESS'}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="text-[13px] font-black text-[#1a1c20] tracking-tight ml-1">Message</label>
                <textarea
                  rows="5"
                  placeholder="Tell me about the project or role..."
                  className="bg-[#f3f4f7] border-none rounded-2xl px-6 py-6 text-[#1a1c20] text-sm font-bold focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none placeholder:text-gray-400"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={status === 'SENDING' || status === 'SUCCESS'}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'SENDING' || status === 'SUCCESS'}
                className="mt-4 bg-[#6366f1] text-white font-black py-5 rounded-2xl text-sm tracking-wide hover:bg-[#4f46e5] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-100 scale-100 hover:scale-[1.01] flex items-center justify-center gap-3 active:scale-95"
              >
                {status === 'IDLE' ? (
                  'Send Message'
                ) : status === 'SENDING' ? (
                  'Transmitting...'
                ) : status === 'SUCCESS' ? (
                  'Message Received'
                ) : 'Try Again'}
              </button>
            </form>

            {/* Status Overlays */}
            <AnimatePresence>
              {status === 'SUCCESS' && (
                <motion.div
                  initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                  animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
                  className="absolute inset-0 bg-white/40 flex flex-col items-center justify-center p-8 z-20"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500 text-white flex items-center justify-center mb-6 shadow-lg shadow-green-200">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="font-black text-textMain text-2xl mb-2">Message Sent!</h3>
                  <p className="text-textMuted font-medium text-center max-w-xs">I've received your message and will get back to you shortly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
