import React from 'react';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Clock, Zap, Shield, Globe, Server } from 'lucide-react';

const Status = () => {
    const systems = [
        { name: "Core Deployment Engine", status: "Operational", latency: "12ms" },
        { name: "AI Orchestration Layer", status: "Operational", latency: "145ms" },
        { name: "Global Edge Network", status: "Operational", latency: "4ms" },
        { name: "Database Clusters", status: "Operational", latency: "8ms" },
        { name: "Auth & Security Gateway", status: "Operational", latency: "15ms" }
    ];

    return (
        <div>
            <PageHeader
                badge="Reliability"
                title="Real-time System Status"
                description="Monitor the health and performance of the NexusForge infrastructure across all global regions."
                color="emerald"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-12">
                {/* Overall Status Header */}
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 animate-pulse">
                            <CheckCircle2 className="w-10 h-10 text-white" />
                        </div>
                        <div className="space-y-1 text-center md:text-left">
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white italic uppercase">All Systems Nominal</h2>
                            <p className="text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest text-xs">Uptime: 99.998% (Last 30 Days)</p>
                        </div>
                    </div>
                    <p className="text-sm font-bold text-gray-500 italic">Last Checked: Just now</p>
                </div>

                {/* System Grid */}
                <div className="space-y-4">
                    {systems.map((s, i) => (
                        <motion.div
                            key={s.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white dark:bg-navy p-8 rounded-2xl border border-gray-100 dark:border-gray-900 flex justify-between items-center group hover:border-emerald-500/30 transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <Server className="w-5 h-5 text-primary opacity-50" />
                                <span className="font-black text-gray-900 dark:text-white uppercase tracking-tighter italic">{s.name}</span>
                            </div>
                            <div className="flex items-center gap-8">
                                <div className="hidden sm:flex flex-col items-end">
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Latency</span>
                                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">{s.latency}</span>
                                </div>
                                <span className="px-4 py-1.5 bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest rounded-lg">
                                    {s.status}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Maintenance History */}
                <div className="space-y-8 pt-12">
                    <h3 className="text-2xl font-black dark:text-white italic uppercase border-b border-gray-100 dark:border-gray-900 pb-4">Incident Library</h3>
                    <div className="space-y-8">
                        {[
                            { date: "Feb 24, 2026", title: "Global Edge Cache Purge", status: "Resolved", desc: "Successfully purged global CDN caches to support v4.2.0 deployment rollout." },
                            { date: "Feb 15, 2026", title: "API Gateway Scaling Incident", status: "Resolved", desc: "Automated triggers scaled out clusters during a 400% traffic surge from a viral partner launch." }
                        ].map((inc, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="flex flex-col items-center">
                                    <div className="w-10 h-10 bg-gray-100 dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800">
                                        <Clock className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <div className="w-[2px] flex-grow bg-gray-100 dark:bg-gray-900 my-2" />
                                </div>
                                <div className="space-y-2 pb-8">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-black text-primary">{inc.date}</span>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 italic bg-emerald-500/10 px-2 py-0.5 rounded">Fixed</span>
                                    </div>
                                    <h4 className="text-xl font-bold dark:text-white">{inc.title}</h4>
                                    <p className="text-gray-500 text-sm font-medium">{inc.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Status;
