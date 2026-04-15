import React, { useState } from 'react';
import { X, ChevronDown, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  category: 'project', // Default value
  details: '',
};

const ContactRequestModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submission:', formData);
    setIsSubmitted(true);
    setTimeout(() => setFormData(initialFormState), 500);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-[#050a0a] shadow-[0_0_50px_-12px_rgba(16,185,129,0.2)]"
          >
            <div className="p-8 md:p-12">
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-8 top-8 rounded-full bg-white/5 p-2 text-white/50 transition hover:text-[#10b981]"
              >
                <X size={20} />
              </button>

              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="flex flex-col items-center py-12 text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#10b981]/10 text-[#10b981]">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white tracking-tight">Got it!</h3>
                  <p className="mt-2 text-white/50">I'll get back to you shortly.</p>
                  <button onClick={handleClose} className="mt-8 text-sm font-mono uppercase tracking-widest text-[#10b981]">Return</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <header className="mb-8">
                    <p className="text-[#10b981] font-mono text-[11px] tracking-[5px] uppercase mb-2">// Inquire</p>
                    <h2 className="text-4xl font-bold text-white tracking-tighter">Let's Connect.</h2>
                  </header>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* NAME */}
                    <div className="group space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 ml-1">Full Name</label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-[#10b981]/50 focus:bg-white/[0.05]"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="group space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-[#10b981]/50 focus:bg-white/[0.05]"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {/* PHONE */}
                    <div className="group space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 ml-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-[#10b981]/50 focus:bg-white/[0.05]"
                        placeholder="+91 00000 00000"
                      />
                    </div>

                    {/* DROPDOWN */}
                    <div className="group space-y-1">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 ml-1">Inquiry Type</label>
                      <div className="relative">
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-[#10b981]/50 focus:bg-white/[0.05]"
                        >
                          <option value="mentorship" className="bg-[#0a0f0f]">Mentorship</option>
                          <option value="tech discussion" className="bg-[#0a0f0f]">Tech Discussion</option>
                          <option value="project" className="bg-[#0a0f0f]">Project Request</option>
                          <option value="other" className="bg-[#0a0f0f]">General Inquiry</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div className="group space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-white/30 ml-1">Message</label>
                    <textarea
                      required
                      name="details"
                      rows={4}
                      value={formData.details}
                      onChange={handleChange}
                      className="w-full resize-none rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4 text-white outline-none transition focus:border-[#10b981]/50 focus:bg-white/[0.05]"
                      placeholder="How can I help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#10b981] py-5 text-[11px] font-bold uppercase tracking-[3px] text-black transition hover:scale-[1.01] hover:brightness-110 active:scale-[0.98]"
                  >
                    Send Message <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactRequestModal;