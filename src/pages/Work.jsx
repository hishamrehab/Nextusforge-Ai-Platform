import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { caseStudies } from '../data/nexusData';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter, Globe, ExternalLink, Zap } from 'lucide-react';

const Work = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const categories = ['All', ...new Set(caseStudies.map(s => s.category))];

    const filteredProjects = activeFilter === 'All'
        ? caseStudies
        : caseStudies.filter(s => s.category === activeFilter);

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <PageHeader
                badge="Portfolio"
                title="The Nexus Collection"
                description="Engineering the digital infrastructure for the world's most ambitious SaaS founders."
                color="blue"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Filter Bar */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
                    <div className="flex items-center gap-3 mr-4 text-xs font-black uppercase tracking-widest text-gray-400">
                        <Filter className="w-4 h-4" /> Filter by Sector:
                    </div>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${activeFilter === cat
                                    ? 'bg-primary border-primary text-white shadow-xl shadow-primary/20'
                                    : 'bg-gray-50 dark:bg-navy border-gray-100 dark:border-gray-800 text-gray-500 hover:border-primary/50'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((study, i) => (
                            <motion.div
                                layout
                                key={study.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative bg-white dark:bg-navy rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all flex flex-col"
                            >
                                <Link to={`/case-studies/${study.slug}`} className="relative aspect-[4/3] overflow-hidden block">
                                    <img
                                        src={study.image}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                                        alt={study.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                                        <div className="space-y-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <span className="text-xs font-black uppercase tracking-widest text-primary">Core Growth</span>
                                            <p className="text-2xl font-black text-white italic">{study.results}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-8 left-8">
                                        <div className="px-4 py-1.5 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-full border border-white/20 dark:border-gray-800 shadow-2xl flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                            <span className="text-[10px] font-black uppercase tracking-widest dark:text-white">Active Build</span>
                                        </div>
                                    </div>
                                </Link>

                                <div className="p-10 space-y-6 flex-grow flex flex-col">
                                    <div className="flex items-center justify-between">
                                        <span className="px-5 py-2 bg-primary/10 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest">
                                            {study.category}
                                        </span>
                                        <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
                                    </div>

                                    <div className="space-y-4 flex-grow">
                                        <h3 className="text-2xl font-black text-gray-900 dark:text-white uppercase italic tracking-tighter group-hover:text-primary transition-colors italic leading-tight">
                                            {study.title}
                                        </h3>
                                        <p className="text-gray-500 font-medium italic leading-relaxed text-sm line-clamp-3">
                                            {study.description}
                                        </p>
                                    </div>

                                    <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {study.tags.slice(0, 2).map(tag => (
                                                <span key={tag} className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{tag}</span>
                                            ))}
                                        </div>
                                        <Link to={`/case-studies/${study.slug}`} className="group/btn flex items-center gap-3 text-xs font-black text-primary uppercase tracking-widest">
                                            Case Study <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 px-4">
                <div className="max-w-5xl mx-auto bg-gray-900 rounded-[4rem] p-12 md:p-20 text-center space-y-10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                    <Zap className="w-16 h-16 text-primary mx-auto animate-bounce" />
                    <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter">Ready to Build the <span className="text-primary tracking-normal font-sans not-italic underline decoration-primary/30">Next Unicorn</span>?</h2>
                    <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto italic">
                        Our engineering team is currently accepting 2 enterprise-level partnerships for Q3 2026.
                    </p>
                    <div className="pt-6">
                        <Link to="/contact" className="inline-block px-12 py-6 bg-primary text-white text-xl font-black rounded-2xl shadow-2xl shadow-primary/30 hover:translate-y-[-5px] transition-all">
                            Initiate Strategy Session
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Work;
