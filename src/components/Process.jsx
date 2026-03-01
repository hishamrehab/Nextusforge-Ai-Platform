import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, ShieldCheck, Rocket } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: Search,
            title: "Discovery & Audit",
            desc: "We analyze your business unit economics and technical bottlenecks before writing any code."
        },
        {
            icon: Code2,
            title: "Agile Development",
            desc: "2-week sprints with full transparency, continuous CI/CD, and 100% architectural stability."
        },
        {
            icon: ShieldCheck,
            title: "Security Hardening",
            desc: "Zero-trust protocol implementation and SOC2 compliance audits for enterprise trust."
        },
        {
            icon: Rocket,
            title: "Global Scale",
            desc: "Multi-region edge deployment on AWS with automated auto-scaling clusters."
        }
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            <div className="text-center mb-20 space-y-4">
                <span className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">The Methodology</span>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white italic uppercase tracking-tighter leading-none">Our <span className="text-primary tracking-normal font-sans not-italic">Execution</span> Framework.</h2>
            </div>

            <div className="relative">
                {/* Connector Line */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 dark:bg-gray-900 -translate-y-1/2 hidden lg:block" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative z-10 bg-white dark:bg-navy p-10 rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-xl group hover:border-primary/50 transition-all flex flex-col items-center text-center"
                        >
                            <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-2xl shadow-primary/30 group-hover:rotate-12 transition-transform">
                                <step.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 italic uppercase tracking-tighter">{step.title}</h3>
                            <p className="text-gray-500 font-medium leading-relaxed italic">{step.desc}</p>

                            {/* Step Number Badge */}
                            <div className="absolute -top-4 -right-4 w-10 h-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-black text-xs shadow-lg">
                                0{i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
