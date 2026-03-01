import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/nexusData';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, Server, Shield, Zap, Globe } from 'lucide-react';

const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find(s => s.slug === slug);

    if (!service) return <Navigate to="/services" />;

    return (
        <div>
            <div className="bg-white dark:bg-black py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100 dark:border-gray-900">
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Services
                </Link>
            </div>

            <PageHeader
                badge="Premium Service"
                title={service.title}
                description={service.longDesc}
                color={service.color}
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Key Core Features */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-black text-gray-900 dark:text-white">Core Capabilities</h2>
                            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                                We've spent years refining our approach to {service.title.toLowerCase()}. Our processes are designed for reliability and extreme scale.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {service.features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex gap-4 p-6 bg-gray-50 dark:bg-[#0A101A] rounded-3xl border border-gray-100 dark:border-gray-800"
                                >
                                    <CheckCircle2 className={`w-6 h-6 text-${service.color}-500 flex-shrink-0`} />
                                    <span className="font-bold text-gray-800 dark:text-gray-200">{feature}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-10 bg-primary/5 rounded-[3rem] border border-primary/10 space-y-6">
                            <h3 className="text-xl font-bold dark:text-white flex items-center gap-3">
                                <Zap className="w-6 h-6 text-primary" /> The NexusForge Edge
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                Choosing NexusForge for {service.title} means you aren't just getting an agency—you're getting an elite technical partnership. We ensure that your architecture can scale from 1,000 to 1,000,000 users without a rebuild.
                            </p>
                        </div>
                    </div>

                    {/* Visual / Outcome Part */}
                    <div className="space-y-10">
                        <div className="relative group">
                            <div className={`absolute -inset-4 bg-${service.color}-500/10 rounded-[3rem] blur-2xl opacity-50`} />
                            <div className="relative bg-white dark:bg-[#0A101A] rounded-[3.5rem] p-1 shadow-2xl overflow-hidden aspect-square flex items-center justify-center border border-gray-100 dark:border-gray-800">
                                <service.icon className={`w-40 h-40 text-${service.color}-500 transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-12`} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: Shield, label: "Compliance", val: "Enterprise" },
                                { icon: Server, label: "Uptime", val: "99.9%" }
                            ].map((item, i) => (
                                <div key={i} className="bg-white dark:bg-navy p-6 rounded-3xl text-center space-y-2 border border-gray-100 dark:border-gray-800">
                                    <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                                    <p className="text-2xl font-black text-gray-900 dark:text-white uppercase italic">{item.val}</p>
                                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            to="/contact"
                            className="block w-full text-center py-6 bg-primary text-white text-xl font-black rounded-[2rem] shadow-xl shadow-primary/20 hover:bg-blue-600 transition-all hover:translate-y-[-5px]"
                        >
                            Discuss Your Project
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
