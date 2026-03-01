import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Cpu, Lock, Database, Layout, Smartphone } from 'lucide-react';

const TechMarquee = () => {
    const tech = [
        { name: "SOC2 Type II", icon: Shield },
        { name: "Edge Compute", icon: Globe },
        { name: "AI RAG Ops", icon: Cpu },
        { name: "Zero-Trust", icon: Lock },
        { name: "Vector DBs", icon: Database },
        { name: "Atomic Design", icon: Layout },
        { name: "Cloud Native", icon: Zap },
        { name: "Mobile First", icon: Smartphone }
    ];

    return (
        <div className="py-12 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-900 overflow-hidden relative">
            <div className="flex gap-12 whitespace-nowrap animate-scroll">
                {[...tech, ...tech, ...tech].map((t, i) => (
                    <div key={i} className="flex items-center gap-4 px-8 py-4 bg-gray-50 dark:bg-navy rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm shrink-0 group hover:border-primary/50 transition-all">
                        <t.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 group-hover:text-primary transition-colors">{t.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechMarquee;
