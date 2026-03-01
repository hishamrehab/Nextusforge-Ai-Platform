import React from 'react';
import PageHeader from '../components/PageHeader';
import { caseStudies } from '../data/nexusData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy, TrendingUp, BarChart3, Globe } from 'lucide-react';

const CaseStudies = () => {
    return (
        <div>
            <PageHeader
                badge="Proven Results"
                title="From Zero to Millions in Scale"
                description="A showcase of enterprise SaaS products transformed through elite engineering and strategic design."
                color="cyan"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32">
                {caseStudies.map((study, i) => (
                    <motion.div
                        key={study.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                    >
                        {/* Image Col */}
                        <div className={`relative group ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                            <div className="absolute inset-4 bg-cyan-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:scale-105 transition-transform" />
                            <div className="relative overflow-hidden rounded-[3.5rem] shadow-2xl border border-white/10 aspect-video lg:aspect-[4/3]">
                                <img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute top-8 left-8 p-6 bg-white/90 dark:bg-black/95 backdrop-blur-xl rounded-[2.5rem] shadow-xl border border-white/20 dark:border-gray-800 scale-90 lg:scale-100 origin-top-left transition-transform group-hover:scale-105">
                                    <p className="text-sm font-black text-gray-900 dark:text-white mb-1 uppercase tracking-tighter italic">Key Metric</p>
                                    <p className="text-3xl font-black text-primary">{study.results.split(' ')[0]}</p>
                                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{study.results.split(' ').slice(1).join(' ')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Content Col */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <span className="text-primary font-black uppercase tracking-widest text-xs flex items-center gap-2">
                                    <Globe className="w-4 h-4 text-cyan-500" /> {study.category} Case Study
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                                    {study.title}
                                </h2>
                            </div>

                            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic border-l-4 border-primary/20 pl-6">
                                {study.description}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {study.tags.map((tag, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-xs font-bold text-gray-500 tracking-widest uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-4">
                                <Link
                                    to={`/case-studies/${study.slug}`}
                                    className="inline-flex items-center gap-4 px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black rounded-full hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-xl shadow-gray-200 dark:shadow-none hover:shadow-primary/30"
                                >
                                    View Case Study <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4 space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black leading-tight italic">Ready to be our next <span className="underline decoration-white/30">success story</span>?</h2>
                    <p className="text-xl text-blue-100 font-medium">
                        Let's discuss how NexusForge can transform your SaaS idea into an enterprise-level platform.
                    </p>
                    <div className="pt-6">
                        <Link
                            to="/contact"
                            className="px-12 py-6 bg-white text-primary text-xl font-black rounded-2xl hover:bg-blue-50 transition-all shadow-2xl hover:translate-y-[-5px]"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
