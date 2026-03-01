import React from 'react';
import PageHeader from '../components/PageHeader';
import { changelogData } from '../data/changelogData';
import { motion } from 'framer-motion';
import { Rocket, Box, Zap, AlertCircle } from 'lucide-react';

const Changelog = () => {
    return (
        <div>
            <PageHeader
                badge="Evolution"
                title="Technical Velocity & Updates"
                description="Every update to the NexusForge ecosystem, tracked for transparency and performance."
                color="purple"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="relative border-l-2 border-gray-100 dark:border-gray-900 ml-4 md:ml-0 md:pl-0">
                    {changelogData.map((item, i) => (
                        <motion.div
                            key={item.version}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="mb-20 relative pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-11px] top-2 w-5 h-5 bg-white dark:bg-black border-4 border-primary rounded-full shadow-lg" />

                            <div className="space-y-6 bg-gray-50 dark:bg-navy p-10 rounded-[3rem] border border-gray-100 dark:border-gray-900 shadow-xl">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div className="space-y-1">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${item.type === 'Major' ? 'bg-red-500/10 text-red-500' : 'bg-primary/10 text-primary'}`}>
                                            {item.type} Release
                                        </span>
                                        <h2 className="text-3xl font-black text-gray-900 dark:text-white italic">{item.version} — {item.title}</h2>
                                    </div>
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{item.date}</p>
                                </div>

                                <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                                    {item.description}
                                </p>

                                <div className="space-y-4 pt-4">
                                    <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em]">Technical Changes</h3>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {item.changes.map((change, idx) => (
                                            <li key={idx} className="flex gap-3 text-sm font-bold text-gray-700 dark:text-gray-300">
                                                <Box className="w-4 h-4 text-primary flex-shrink-0" /> {change}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Changelog;
