import React from 'react';
import PageHeader from '../components/PageHeader';
import { jobs } from '../data/nexusData';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Briefcase, Zap, Globe, Heart, Coffee } from 'lucide-react';

const Careers = () => {
    return (
        <div>
            <PageHeader
                badge="Evolution"
                title="Forge Your Legacy at NexusForge"
                description="Join a global collective of elite engineers and designers rebuilding the SaaS infrastructure of the future."
                color="amber"
            />

            {/* Perks Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl font-black dark:text-white">Why Join the <span className="text-primary italic">Collective</span>?</h2>
                    <p className="text-gray-500 font-medium max-w-2xl mx-auto italic">We don't offer jobs; we offer technical mastery and the freedom to build at the absolute edge of possibility.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Globe, title: "100% Distributed", desc: "Work from Tokyo, London, or a beach in Bali. We value output over location." },
                        { icon: Zap, title: "Modern Stack", desc: "No legacy debt. We use React 19, Go, and the latest AI orchestration tools." },
                        { icon: Heart, title: "Full Benefits", desc: "Premium health, mental wellness support, and unlimited paid time off." },
                        { icon: Coffee, title: "Elite Network", desc: "Collaborate with ex-FAANG leaders and community pioneers daily." }
                    ].map((v, i) => (
                        <div key={i} className="space-y-4 p-8 bg-gray-50 dark:bg-[#0A101A] rounded-[2.5rem] border border-gray-100 dark:border-gray-800 hover:border-amber-500/20 transition-all">
                            <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center">
                                <v.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold dark:text-white">{v.title}</h3>
                            <p className="text-sm text-gray-500 leading-relaxed font-medium">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Jobs List */}
            <section className="py-24 bg-gray-50 dark:bg-[#050B14] border-y border-gray-100 dark:border-gray-900">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-black dark:text-white">Open Roles</h2>
                            <p className="text-gray-500 font-medium tracking-wide italic">Current opportunities across engineering, design, and growth.</p>
                        </div>
                        <div className="hidden sm:block text-xs font-black uppercase tracking-widest text-primary">
                            4 active transmissions
                        </div>
                    </div>

                    <div className="space-y-6">
                        {jobs.map((job, i) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-white dark:bg-[#0A101A] p-8 md:p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:border-primary/20 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
                            >
                                <div className="space-y-4">
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg">{job.department}</span>
                                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-lg">{job.type}</span>
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-primary transition-colors">{job.title}</h3>
                                    <div className="flex items-center gap-6 text-sm font-bold text-gray-500">
                                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> Posted 2d ago</span>
                                    </div>
                                </div>
                                <button className="w-full md:w-auto px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-black rounded-2xl hover:bg-primary dark:hover:bg-primary dark:hover:text-white transition-all shadow-lg shadow-gray-200 dark:shadow-none">
                                    Forge Application
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-gray-500 font-medium mb-6 italic">Don't see a role that fits? We're always looking for elite talent.</p>
                        <a href="mailto:careers@nexusforge.ai" className="text-primary font-black uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all pb-1">Open Transmission / Send CV</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
