import React, { useState, useMemo } from 'react';
import PageHeader from '../components/PageHeader';
import { blogPosts } from '../data/nexusData';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Search, Filter, X } from 'lucide-react';

const Blog = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = ["All", "Engineering", "Design", "Strategy", "AI", "Cloud"];

    const filteredPosts = useMemo(() => {
        return blogPosts.filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === "All" || post.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchQuery, activeCategory]);

    const featuredPost = blogPosts[0];

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <PageHeader
                badge="Knowledge Hub"
                title="NexusForge Editorial"
                description="Deep technical analysis and strategic foresight for the modern SaaS landscape."
                color="blue"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Marketplace Filter Bar */}
                <div className="bg-gray-50 dark:bg-navy p-6 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 mb-20 shadow-xl">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                        {/* Search Input */}
                        <div className="relative w-full lg:max-w-md">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles, trends, architecture..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-14 pr-12 py-5 bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-2xl outline-none focus:ring-2 focus:ring-primary transition-all font-bold text-gray-900 dark:text-white"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-6 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                                >
                                    <X className="w-4 h-4 text-gray-500" />
                                </button>
                            )}
                        </div>

                        {/* Category Pills */}
                        <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                            <Filter className="w-5 h-5 text-gray-400 shrink-0 hidden lg:block" />
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shrink-0 border ${activeCategory === cat ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20 scale-105' : 'bg-white dark:bg-black border-gray-100 dark:border-gray-800 text-gray-500 hover:border-primary/50'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post, i) => (
                                <motion.article
                                    key={post.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className="group"
                                >
                                    <Link to={`/blog/${post.slug}`} className="space-y-8 block">
                                        <div className="overflow-hidden rounded-[2.5rem] aspect-[4/3] border border-gray-100 dark:border-gray-800 shadow-xl relative bg-gray-100 dark:bg-gray-900">
                                            <img src={post.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={post.title} />
                                            <div className="absolute top-6 left-6">
                                                <span className="px-5 py-2 bg-white/90 dark:bg-black/95 backdrop-blur-xl rounded-xl text-[10px] font-black uppercase tracking-widest text-primary border border-white/20 dark:border-gray-800 shadow-lg">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="space-y-4 px-2">
                                            <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                                            </div>
                                            <h3 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-primary transition-colors leading-tight italic">
                                                {post.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                            <div className="pt-4 flex items-center justify-between">
                                                <span className="inline-flex items-center gap-2 text-xs font-black text-primary group-active:scale-95 transition-all uppercase tracking-widest">
                                                    Read Article <ArrowRight className="w-4 h-4" />
                                                </span>
                                                <div className="w-10 h-10 rounded-full border border-gray-100 dark:border-gray-800 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))
                        ) : (
                            <div className="col-span-full py-32 text-center space-y-6">
                                <div className="w-24 h-24 bg-gray-50 dark:bg-navy rounded-full flex items-center justify-center mx-auto">
                                    <Search className="w-10 h-10 text-gray-300" />
                                </div>
                                <h3 className="text-3xl font-black dark:text-white uppercase italic">No articles found</h3>
                                <p className="text-gray-500 font-medium">Try adjusting your filters or search keywords.</p>
                                <button
                                    onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                                    className="px-8 py-4 bg-primary text-white font-black rounded-2xl uppercase text-xs tracking-widest shadow-xl shadow-primary/20"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Premium CTA */}
            <section className="py-24 bg-primary text-white">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-5xl font-black italic tracking-tighter leading-tight">Stay ahead of the <span className="underline decoration-white/30">technical curve</span>.</h2>
                        <p className="text-xl text-blue-100 font-medium italic">Join 50,000+ SaaS founders and engineers receiving our weekly architectural breakdown.</p>
                    </div>
                    <form className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            placeholder="Enter your enterprise email"
                            className="flex-grow px-8 py-6 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/50 outline-none focus:ring-2 focus:ring-white transition-all font-bold"
                        />
                        <button className="px-10 py-6 bg-white text-primary font-black rounded-2xl hover:bg-blue-50 transition-all shadow-2xl">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Blog;
