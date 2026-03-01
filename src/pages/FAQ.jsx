import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import { faqData } from '../data/nexusData';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div>
            <PageHeader
                badge="Knowledge"
                title="Common Queries & Technical Specs"
                description="Everything you need to know about partnering with NexusForge for your next SaaS expansion."
                color="indigo"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="space-y-6">
                    {faqData.map((item, i) => (
                        <div key={i} className="group">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className={`w-full text-left p-8 md:p-10 rounded-[2.5rem] border transition-all flex justify-between items-center gap-6 ${openIndex === i ? 'bg-primary border-primary text-white shadow-2xl shadow-primary/25' : 'bg-white dark:bg-[#0A101A] border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white hover:border-primary/20'}`}
                            >
                                <span className="text-xl md:text-2xl font-black italic">{item.question}</span>
                                <div className={`p-2 rounded-full border transition-transform ${openIndex === i ? 'border-white/20 bg-white/10 rotate-180' : 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900'}`}>
                                    {openIndex === i ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-10 pt-2 text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed italic">
                                            {item.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Support CTA */}
                <div className="mt-24 p-12 lg:p-16 bg-gray-50 dark:bg-[#050B14] rounded-[3.5rem] border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                    <div className="space-y-4">
                        <h3 className="text-3xl font-black dark:text-white italic">Still have a transmission?</h3>
                        <p className="text-gray-500 font-medium">Our strategy team is standing by to answer your specific technical requirements.</p>
                    </div>
                    <Link to="/contact" className="px-10 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 flex items-center gap-3 hover:translate-y-[-5px] transition-all">
                        Initiate Contact <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
