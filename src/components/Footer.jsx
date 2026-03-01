import React from "react";
import { Link } from "react-router-dom";
import { Rocket, Twitter, Linkedin, Github, Send, Zap, Globe, Shield } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    Solutions: [
      { name: "Services", path: "/services" },
      { name: "Our Work", path: "/our-work" },
      { name: "Pricing", path: "/pricing" },
      { name: "Changelog", path: "/changelog" },
    ],
    Collective: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/team" },
      { name: "Careers", path: "/careers" },
      { name: "Strategic Blog", path: "/blog" },
    ],
    Support: [
      { name: "Contact", path: "/contact" },
      { name: "FAQ", path: "/faq" },
      { name: "System Status", path: "/status" },
      { name: "Documentation", path: "/docs" },
    ],
    Legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
      { name: "Cookie Policy", path: "/privacy" },
      { name: "Governance", path: "/terms" },
    ],
  };

  return (
    <footer className="bg-white dark:bg-[#050B14] border-t border-gray-100 dark:border-gray-900 pt-24 pb-12 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">

          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-3 bg-primary rounded-2xl transition-transform group-hover:rotate-12 shadow-xl shadow-primary/20">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gray-900 dark:text-white tracking-widest uppercase">NexusForge</span>
                <span className="text-xs font-black text-primary uppercase tracking-widest italic opacity-80">Enterprise SaaS Agency</span>
              </div>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-sm">
              Engineering the digital backbone for high-performance SaaS platforms.
              We combine cloud-native speed with enterprise-grade reliability.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="p-3 rounded-2xl bg-gray-50 dark:bg-navy text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 dark:text-white mb-8 italic">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-sm font-bold text-gray-500 hover:text-primary transition-colors flex items-center gap-2 group italic">
                      <span className="w-0 group-hover:w-2 h-[2px] bg-primary transition-all overflow-hidden" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Newsletter / Middle Section */}
        <div className="p-8 md:p-12 bg-gray-50 dark:bg-navy rounded-[3rem] border border-gray-100 dark:border-gray-800 flex flex-col lg:flex-row items-center justify-between gap-10 mb-20 shadow-2xl">
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-2xl font-black dark:text-white flex items-center gap-3 justify-center lg:justify-start">
              <Zap className="w-6 h-6 text-primary" /> Join the Strategic Collective
            </h3>
            <p className="text-gray-500 font-medium italic">Get weekly transmissions on SaaS architecture and engineering breakthroughs.</p>
          </div>
          <form className="flex w-full lg:w-fit gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter corporate email"
              className="flex-grow lg:w-80 px-6 py-4 bg-white dark:bg-gray-800 border-none rounded-2xl dark:text-white shadow-sm focus:ring-4 focus:ring-primary/20 outline-none transition-all font-medium"
            />
            <button className="px-8 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/25 hover:translate-y-[-2px] transition-all whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <span>© 2026 NexusForge Global</span>
            <span className="hidden md:block">•</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-500" /> SOC2 Compliant</span>
            <span className="hidden md:block">•</span>
            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4 text-cyan-500" /> Edge Optimized</span>
          </div>
          <p className="text-[10px] font-black text-gray-300 dark:text-gray-600 uppercase tracking-[0.2em] italic">
            Forged with Excellence in React & Tailwind 4.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
