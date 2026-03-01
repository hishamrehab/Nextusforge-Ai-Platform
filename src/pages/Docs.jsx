import React, { useState } from 'react';
import { docsData } from '../data/docsData';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, ChevronRight, Menu, X, Search, Terminal, Cpu, ShieldCheck, Globe } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Docs = () => {
    const [activeTab, setActiveTab] = useState(docsData[0].items[0].id);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const activeContent = docsData.flatMap(section => section.items).find(item => item.id === activeTab);

    const filteredDocs = docsData.map(section => ({
        ...section,
        items: section.items.filter(item =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.content.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })).filter(section => section.items.length > 0);

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <PageHeader
                badge="Documentation"
                title="The NexusForge Blueprint"
                description="Deep technical documentation governing our architectural standards, security protocols, and AI integration frameworks."
                color="cyan"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row gap-12">
                {/* Mobile Sidebar Toggle */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden flex items-center gap-2 p-4 bg-gray-50 dark:bg-navy rounded-2xl border border-gray-100 dark:border-gray-800 font-black text-gray-900 dark:text-white uppercase text-xs"
                >
                    {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    {isSidebarOpen ? "Close Menu" : "Browse Docs"}
                </button>

                {/* Sidebar */}
                <aside className={`${isSidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-80 shrink-0 space-y-8`}>
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search docs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-navy border border-gray-100 dark:border-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-primary transition-all text-sm font-medium"
                        />
                    </div>

                    <nav className="space-y-10">
                        {filteredDocs.map(section => (
                            <div key={section.id} className="space-y-4">
                                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 px-4">{section.title}</h3>
                                <div className="space-y-1">
                                    {section.items.map(item => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                setActiveTab(item.id);
                                                setIsSidebarOpen(false);
                                            }}
                                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-between group ${activeTab === item.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-primary'}`}
                                        >
                                            {item.title}
                                            <ChevronRight className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${activeTab === item.id ? 'opacity-100' : ''}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Content Area */}
                <main className="flex-grow min-w-0">
                    <AnimatePresence mode="wait">
                        {activeContent ? (
                            <motion.div
                                key={activeContent.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-12"
                            >
                                <div className="space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <Terminal className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-sm font-black text-primary uppercase tracking-widest">Protocol Reference</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white italic uppercase tracking-tighter">{activeContent.title}</h2>
                                    <div className="h-1 w-20 bg-primary" />
                                </div>

                                <div className="p-10 bg-gray-50 dark:bg-navy rounded-[3rem] border border-gray-100 dark:border-gray-800 shadow-xl">
                                    <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium italic">
                                        {activeContent.content}
                                    </p>
                                </div>

                                {/* Technical Callouts */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="p-8 border border-gray-100 dark:border-gray-900 rounded-[2.5rem] space-y-4 group hover:border-primary/30 transition-all">
                                        <Cpu className="w-8 h-8 text-purple-500" />
                                        <h4 className="text-lg font-black dark:text-white uppercase italic">Standard Stack</h4>
                                        <p className="text-sm text-gray-500 font-medium">Every implementation follows our 'Clean Architecture' patterns for 100% test coverage.</p>
                                    </div>
                                    <div className="p-8 border border-gray-100 dark:border-gray-900 rounded-[2.5rem] space-y-4 group hover:border-emerald-500/30 transition-all">
                                        <ShieldCheck className="w-8 h-8 text-emerald-500" />
                                        <h4 className="text-lg font-black dark:text-white uppercase italic">SOC2 Hardened</h4>
                                        <p className="text-sm text-gray-500 font-medium">Automated identity governance and data residency controls global-first.</p>
                                    </div>
                                </div>

                                <div className="bg-primary p-12 rounded-[3.5rem] text-white space-y-6 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform">
                                        <Globe className="w-32 h-32" />
                                    </div>
                                    <h3 className="text-2xl font-black italic uppercase">Need Architectural Guidance?</h3>
                                    <p className="text-blue-100 font-medium max-w-xl">Our principal engineers are available for strategic consultations to audit your existing SaaS infrastructure.</p>
                                    <button className="px-10 py-4 bg-white text-primary font-black rounded-2xl hover:bg-blue-50 transition-all">
                                        Talk to a Specialist
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="py-20 text-center">
                                <Book className="w-16 h-16 text-gray-200 mx-auto mb-6" />
                                <h3 className="text-2xl font-black text-gray-400 uppercase italic">Select a topic to begin</h3>
                            </div>
                        )}
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
};

export default Docs;
