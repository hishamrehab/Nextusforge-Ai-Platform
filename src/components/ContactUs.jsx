import React, { useState } from "react";
import Title from "./Title";
import { motion } from "framer-motion";
import { Mail, User, Send, CheckCircle2 } from "lucide-react";

const ContactUs = () => {
  const [status, setStatus] = useState("idle"); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate Formspree submission
    setTimeout(() => setStatus("success"), 1500);
  };

  if (status === "success") {
    return (
      <div id="contact-us" className="flex flex-col items-center justify-center py-40 px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle2 className="w-10 h-10" />
        </motion.div>
        <h2 className="text-3xl font-bold dark:text-white mb-4">Message Sent!</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          Thanks for reaching out! Our strategy team will review your request and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-primary font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <section id="contact-us" className="py-32 px-4 md:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto bg-white dark:bg-navy rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden grid lg:grid-cols-2">
        {/* Info Side */}
        <div className="p-12 lg:p-20 bg-primary text-white space-y-8 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-black text-white">Let's forge something <span className="italic">epic</span>.</h2>
          <p className="text-blue-100 text-lg">
            Ready to scale your SaaS idea? Our experts are standing by to help you design,
            develop, and deploy your next big breakthrough.
          </p>
          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-bold">hello@nexusforge.ai</span>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-12 lg:p-20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-white">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold dark:text-white">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold dark:text-white">How can we help?</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full p-4 bg-gray-50 dark:bg-gray-800 border-none rounded-2xl dark:text-white focus:ring-2 focus:ring-primary outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-5 bg-primary hover:bg-blue-600 text-white font-black rounded-2xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
            >
              {status === "sending" ? "Forging message..." : "Initiate Contact"}
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
