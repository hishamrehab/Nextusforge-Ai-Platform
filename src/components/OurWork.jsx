import React from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "../data/nexusData";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Globe, TrendingUp, Zap } from "lucide-react";

const OurWork = () => {
  return (
    <section id="our-work" className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
        <div className="space-y-6 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-1 bg-primary" />
            <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">Recent Deployments</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-gray-900 dark:text-white italic uppercase tracking-tighter leading-[0.9]">
            Our latest <span className="text-primary tracking-normal font-sans not-italic">Work</span>.
          </h2>
          <p className="text-xl text-gray-500 font-medium italic leading-relaxed">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>
        </div>
        <Link
          to="/our-work"
          className="group flex items-center gap-4 px-10 py-5 bg-gray-50 dark:bg-navy border border-gray-100 dark:border-gray-800 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all shadow-xl shadow-transparent hover:shadow-primary/20"
        >
          View All Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {caseStudies.map((study, i) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col h-full bg-white dark:bg-navy rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all"
          >
            {/* Image Section */}
            <Link to={`/case-studies/${study.slug}`} className="relative aspect-[4/3] overflow-hidden block">
              <img
                src={study.image}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                alt={study.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs font-black uppercase tracking-widest text-primary">Success Metric</span>
                  <p className="text-2xl font-black text-white italic">{study.results}</p>
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <div className="p-4 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-gray-800 shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-500">
                  <ExternalLink className="w-5 h-5 text-primary" />
                </div>
              </div>
            </Link>

            {/* Content Section */}
            <div className="p-10 space-y-6 flex-grow flex flex-col">
              <div className="flex items-center justify-between">
                <span className="px-5 py-2 bg-primary/10 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest">
                  {study.category}
                </span>
                <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  <Globe className="w-3 h-3" /> Live Product
                </div>
              </div>

              <div className="space-y-3 flex-grow">
                <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase italic tracking-tighter group-hover:text-primary transition-colors italic leading-none">
                  {study.title}
                </h3>
                <p className="text-gray-500 font-medium line-clamp-2 text-sm italic leading-relaxed">
                  {study.description}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                <div className="flex gap-2">
                  {study.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
                <Link to={`/case-studies/${study.slug}`} className="flex items-center gap-2 text-xs font-black text-primary uppercase tracking-widest group-hover:gap-3 transition-all">
                  Details <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experience Stat */}
      <div className="mt-20 p-12 bg-gray-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden group">
        <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity" />
        <div className="space-y-4 relative z-10">
          <h4 className="text-3xl font-black italic uppercase italic">Over $1B in client capital raised.</h4>
          <p className="text-gray-400 font-medium">Our architectural choices aren't just technical—they're venture-critical.</p>
        </div>
        <div className="flex items-center gap-6 relative z-10">
          <div className="text-center">
            <p className="text-4xl font-black text-primary italic">200+</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Deployments</p>
          </div>
          <div className="w-[1px] h-12 bg-white/10" />
          <div className="text-center">
            <p className="text-4xl font-black text-primary italic">99.9%</p>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
