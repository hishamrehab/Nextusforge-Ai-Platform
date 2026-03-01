import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {
    Plus,
    Sparkles,
    Copy,
    Trash2,
    History,
    Search,
    LogOut,
    Rocket,
    Check,
    ChevronRight,
    TrendingUp,
    Award,
    Circle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [topic, setTopic] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [ideas, setIdeas] = useState([]);
    const [history, setHistory] = useState(() => {
        const saved = localStorage.getItem('nexus_history');
        return saved ? JSON.parse(saved) : [];
    });
    const [copiedId, setCopiedId] = useState(null);

    useEffect(() => {
        localStorage.setItem('nexus_history', JSON.stringify(history));
    }, [history]);

    const generateIdeas = (e) => {
        e.preventDefault();
        if (!topic.trim()) return;

        setIsGenerating(true);
        setIdeas([]);

        // Simulating API call
        setTimeout(() => {
            const mockIdeas = [
                `How to scale a SaaS in ${topic} using AI`,
                `The secret to improving retention for ${topic} platforms`,
                `Top 10 tools every ${topic} entrepreneur needs in 2026`,
                `Why traditional ${topic} methods are dying (and what to do instead)`,
                `Case Study: How NexusForge transformed a ${topic} startup`
            ];

            const newEntry = {
                id: Date.now(),
                topic: topic,
                ideas: mockIdeas,
                timestamp: new Date().toLocaleString()
            };

            setIdeas(mockIdeas);
            setHistory([newEntry, ...history]);
            setIsGenerating(false);
        }, 2000);
    };

    const copyToClipboard = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const deleteFromHistory = (id) => {
        setHistory(history.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <h1 className="text-3xl font-black text-gray-900 dark:text-white flex items-center gap-3">
                            Hello, {user?.name?.split(' ')[0]}! <span className="animate-bounce">👋</span>
                        </h1>
                        <p className="text-gray-500 font-medium">Ready to forge some groundbreaking content today?</p>
                    </div>
                    <div className="flex items-center gap-4 bg-white dark:bg-navy p-2 px-4 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                            {user?.name?.charAt(0)}
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-sm font-bold dark:text-white line-clamp-1">{user?.email}</p>
                            <p className="text-xs text-primary font-semibold uppercase tracking-wider">Pro Advisor</p>
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                        { label: "Ideas Generated", value: history.length * 5, icon: Sparkles, color: "text-blue-500", bg: "bg-blue-500/10" },
                        { label: "Topics Explored", value: history.length, icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-500/10" },
                        { label: "AI Confidence", value: "98%", icon: Award, color: "text-emerald-500", bg: "bg-emerald-500/10" }
                    ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-navy p-6 rounded-3xl border border-transparent dark:border-gray-800 shadow-sm hover:shadow-md transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}>
                                    <stat.icon className="w-6 h-6" />
                                </div>
                                <div className="text-gray-300 dark:text-gray-600">
                                    <Plus className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                            <h3 className="text-gray-500 dark:text-gray-400 font-medium text-sm">{stat.label}</h3>
                            <p className="text-2xl font-black text-gray-900 dark:text-white">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Generator Core */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Main Generator Col */}
                    <div className="lg:col-span-12">
                        <div className="bg-white dark:bg-navy rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 p-8 pointer-events-none opacity-10">
                                <Rocket className="w-40 h-40 text-primary rotate-12" />
                            </div>

                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-bold dark:text-white mb-2">Content Forge</h2>
                                <p className="text-gray-500 dark:text-gray-400 mb-8">Enter a keyword or industry to generate viral content ideas instantly.</p>

                                <form onSubmit={generateIdeas} className="flex flex-col sm:flex-row gap-4 mb-10">
                                    <div className="relative flex-grow">
                                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                        <input
                                            type="text"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-primary rounded-2xl dark:text-white outline-none transition-all"
                                            placeholder="e.g. Fintech, Sustainable Fashion, AI CRM..."
                                            value={topic}
                                            onChange={(e) => setTopic(e.target.value)}
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isGenerating || !topic.trim()}
                                        className="px-8 py-4 bg-primary hover:bg-blue-600 disabled:opacity-50 text-white font-bold rounded-2xl shadow-lg shadow-primary/30 flex items-center justify-center gap-2 transition-all active:scale-95 whitespace-nowrap"
                                    >
                                        {isGenerating ? (
                                            <>
                                                <Circle className="w-5 h-5 animate-spin border-2 border-white/30 border-t-white rounded-full" />
                                                Generating...
                                            </>
                                        ) : (
                                            <>
                                                <Sparkles className="w-5 h-5" />
                                                Generate Ideas
                                            </>
                                        )}
                                    </button>
                                </form>

                                <AnimatePresence>
                                    {ideas.length > 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="space-y-4"
                                        >
                                            <h4 className="text-sm font-bold text-primary uppercase tracking-widest flex items-center gap-2">
                                                <Rocket className="w-4 h-4" /> AI Generated Ideas
                                            </h4>
                                            {ideas.map((idea, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                    className="group flex justify-between items-center bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl hover:bg-white dark:hover:bg-gray-750 hover:shadow-lg hover:border-primary/20 border-2 border-transparent transition-all"
                                                >
                                                    <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed pr-10">
                                                        {idea}
                                                    </p>
                                                    <button
                                                        onClick={() => copyToClipboard(idea, `idea-${index}`)}
                                                        className={`p-3 rounded-xl transition-all ${copiedId === `idea-${index}`
                                                                ? 'bg-accent/20 text-accent'
                                                                : 'bg-gray-200 dark:bg-gray-700 text-gray-500 hover:text-primary hover:bg-primary/10'
                                                            }`}
                                                    >
                                                        {copiedId === `idea-${index}` ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                                    </button>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* History Section */}
                    <div className="lg:col-span-12">
                        <div className="bg-white dark:bg-navy rounded-3xl p-8 border border-gray-100 dark:border-gray-800 shadow-xl h-full">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 bg-accent/10 rounded-2xl text-accent">
                                        <History className="w-6 h-6 " />
                                    </div>
                                    <h2 className="text-2xl font-extrabold dark:text-white">Recent Forges</h2>
                                </div>
                                {history.length > 0 && (
                                    <button
                                        onClick={() => {
                                            if (confirm('Clear all history?')) {
                                                setHistory([]);
                                            }
                                        }}
                                        className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors"
                                    >
                                        Clear All
                                    </button>
                                )}
                            </div>

                            {history.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-20 text-center opacity-50">
                                    <div className="w-20 h-20 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6">
                                        <Search className="w-8 h-8 text-gray-400" />
                                    </div>
                                    <h3 className="text-xl font-bold dark:text-white mb-2">No history yet</h3>
                                    <p className="text-gray-500 max-w-xs">Your generated ideas will appear here for easy access later.</p>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                    {history.map((item) => (
                                        <motion.div
                                            layout
                                            key={item.id}
                                            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-3xl border border-transparent hover:border-primary/20 hover:shadow-xl transition-all relative group"
                                        >
                                            <button
                                                onClick={() => deleteFromHistory(item.id)}
                                                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-3">
                                                <TrendingUp className="w-3 h-3" /> Topic Forge
                                            </div>
                                            <h3 className="text-lg font-black dark:text-white mb-1 line-clamp-1">{item.topic}</h3>
                                            <p className="text-xs text-gray-500 mb-4">{item.timestamp}</p>

                                            <div className="space-y-2">
                                                {item.ideas.slice(0, 2).map((idea, i) => (
                                                    <p key={i} className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1 italic">
                                                        "{idea}"
                                                    </p>
                                                ))}
                                                <button
                                                    className="mt-4 w-full py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
                                                    onClick={() => {
                                                        setTopic(item.topic);
                                                        setIdeas(item.ideas);
                                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                                    }}
                                                >
                                                    View All Ideas <ChevronRight className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
