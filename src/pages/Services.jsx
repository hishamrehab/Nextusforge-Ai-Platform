import React, { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader';
import { services } from '../data/nexusData';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Zap, Filter, Search } from 'lucide-react';

const Services = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Engineering", "Design", "Strategy", "Cloud"];

    // Mapping service color to a Tailwind color class explicitly to avoid string interpolation issues
    const getColorClass = (color) => {
        const colors = {
            blue: "text-blue-500 bg-blue-500/10",
            indigo: "text-indigo-500 bg-indigo-500/10",
            emerald: "text-emerald-500 bg-emerald-500/10",
            purple: "text-purple-500 bg-purple-500/10",
            cyan: "text-cyan-500 bg-cyan-500/10",
            amber: "text-amber-500 bg-amber-500/10"
        };
        return colors[color] || "text-primary bg-primary/10";
    };

    const filteredServices = useMemo(() => {
        if (activeCategory === "All") return services;
        return services.filter(s => {
            if (activeCategory === "Engineering") return s.id === 'custom-dev' || s.id === 'ai-analytics';
            if (activeCategory === "Design") return s.id === 'ui-ux-design';
            if (activeCategory === "Strategy") return s.id === 'product-strategy' || s.id === 'growth-marketing';
            if (activeCategory === "Cloud") return s.id === 'cloud-infrastructure';
            return true;
        });
    }, [activeCategory]);

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <PageHeader
                badge="Premium Capabilities"
                title="Engineering the Next Tech Breakthrough"
                description="We build enterprise-ready SaaS platforms that combine deep AI integration with elite user experiences."
                color="indigo"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Marketplace Filter Bar */}
                <div className="flex justify-center mb-20 overflow-x-auto pb-4 no-scrollbar">
                    <div className="flex bg-gray-50 dark:bg-navy p-2 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-xl">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-10 py-4 rounded-[1.5rem] text-xs font-black uppercase tracking-widest transition-all shrink-0 ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' : 'text-gray-500 hover:text-primary'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredServices.map((service, i) => (
                            <motion.div
                                key={service.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group bg-white dark:bg-navy p-12 rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl hover:border-primary/30 transition-all flex flex-col h-full relative overflow-hidden"
                            >
                                {/* Background Accent */}
                                <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-5 blur-3xl group-hover:opacity-20 transition-opacity ${getColorClass(service.color).split(' ')[0].replace('text-', 'bg-')}`} />

                                <div className={`w-20 h-20 rounded-[2rem] mb-10 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 shadow-lg ${getColorClass(service.color)}`}>
                                    <service.icon className="w-10 h-10" />
                                </div>

                                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-6 uppercase italic tracking-tighter italic leading-none">{service.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-10 flex-grow leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                <div className="space-y-4 mb-12">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Core Deliverables</p>
                                    <ul className="grid grid-cols-1 gap-4">
                                        {service.features.map((f, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-800 dark:text-gray-200">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link
                                    to={`/services/${service.slug}`}
                                    className="inline-flex items-center justify-between w-full p-6 bg-gray-50 dark:bg-black/50 rounded-2xl border border-gray-100 dark:border-gray-800 group-hover:bg-primary transition-all overflow-hidden relative"
                                >
                                    <span className="text-sm font-black uppercase tracking-widest text-gray-900 dark:text-white group-hover:text-white relative z-10 transition-colors">Details</span>
                                    <ArrowRight className="w-5 h-5 text-primary group-hover:text-white relative z-10 transition-all group-hover:translate-x-2" />
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Enterprise Trust Section */}
            <section className="py-24 bg-gray-900 dark:bg-[#050B14] text-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-10">
                        <div className="w-16 h-1 bg-primary" />
                        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none">The <span className="text-primary">NexusForge</span> Difference.</h2>
                        <p className="text-xl text-gray-400 font-medium leading-relaxed italic">
                            Beyond conventional outsourcing. We are your architectural partners, your growth engineers, and your technical security wardens.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-12 pt-6">
                            {[
                                { title: "Zero Visual Debt", desc: "Atomic design systems that scale infinitely." },
                                { title: "SOC2 Compliance", desc: "Security baked into the first line of code." },
                                { title: "Zero Latency", desc: "Edge-first global distribution on AWS." },
                                { title: "AI Native", desc: "Deep LLM integration in every workflow." }
                            ].map((v, i) => (
                                <div key={i} className="space-y-2">
                                    <h4 className="text-xl font-black uppercase italic text-primary">{v.title}</h4>
                                    <p className="text-sm text-gray-500 font-bold">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-x-0 -bottom-10 h-2/3 bg-gradient-to-t from-black to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200"
                            className="rounded-[4rem] grayscale opacity-50 shadow-2xl transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                            alt="Security Infrastructure"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
