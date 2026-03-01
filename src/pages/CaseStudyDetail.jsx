import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { caseStudies } from '../data/nexusData';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Target, Zap, Shield, Globe, TrendingUp } from 'lucide-react';

const CaseStudyDetail = () => {
    const { slug } = useParams();
    const study = caseStudies.find(s => s.slug === slug);

    if (!study) return <Navigate to="/case-studies" />;

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <div className="bg-white dark:bg-black py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100 dark:border-gray-900">
                <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Case Studies
                </Link>
            </div>

            <PageHeader
                badge={study.category}
                title={study.title}
                description={study.description}
                color="cyan"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 aspect-video"
                        >
                            <img src={study.image} className="w-full h-full object-cover" alt={study.title} />
                        </motion.div>

                        <div className="space-y-8">
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white uppercase italic tracking-tighter">The Full Story</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                {study.fullStory}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                                    <Target className="w-6 h-6 text-red-500" /> The Challenges
                                </h3>
                                <ul className="space-y-4">
                                    {study.challenges.map((c, i) => (
                                        <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-400 font-medium italic bg-gray-50 dark:bg-navy p-4 rounded-2xl border border-gray-100 dark:border-gray-900">
                                            <span className="text-primary font-black">•</span> {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                                    <Zap className="w-6 h-6 text-emerald-500" /> Our Solutions
                                </h3>
                                <ul className="space-y-4">
                                    {study.solutions.map((s, i) => (
                                        <li key={i} className="flex gap-3 text-gray-600 dark:text-gray-400 font-medium italic bg-gray-50 dark:bg-navy p-4 rounded-2xl border border-gray-100 dark:border-gray-900">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Stats */}
                    <div className="space-y-8">
                        <div className="bg-gray-50 dark:bg-[#0A101A] p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-xl space-y-10 sticky top-32">
                            <div className="space-y-2">
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Client</p>
                                <p className="text-2xl font-black text-gray-900 dark:text-white italic">{study.client}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Core Result</p>
                                <div className="flex items-center gap-3">
                                    <TrendingUp className="w-8 h-8 text-primary" />
                                    <p className="text-3xl font-black text-primary">{study.results}</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Tech Stack</p>
                                <div className="flex flex-wrap gap-2">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-900 rounded-lg text-[10px] font-black uppercase text-gray-500 tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <hr className="border-gray-200 dark:border-gray-800" />
                            <div className="space-y-6">
                                <h4 className="font-black text-gray-900 dark:text-white uppercase italic text-sm">Enterprise Ready</h4>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm font-bold text-gray-500">
                                        <Shield className="w-4 h-4 text-emerald-500" /> SOC2 Compliant Dev
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-bold text-gray-500">
                                        <Globe className="w-4 h-4 text-cyan-500" /> Global Edge Deploy
                                    </div>
                                </div>
                            </div>
                            <Link to="/contact" className="block w-full text-center py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/25 hover:translate-y-[-3px] transition-all">
                                Request Similar Build
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CaseStudyDetail;
