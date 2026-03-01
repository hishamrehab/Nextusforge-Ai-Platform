import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/nexusData';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Share2, Facebook, Twitter, Linkedin, Bookmark } from 'lucide-react';

const BlogDetail = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) return <Navigate to="/blog" />;

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <div className="bg-white dark:bg-black py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100 dark:border-gray-900">
                <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
            </div>

            <PageHeader
                badge={post.category}
                title={post.title}
                description={post.excerpt}
                color="blue"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                {/* Meta info & Social Share */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 pb-12 border-b border-gray-100 dark:border-gray-900">
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-primary/20 bg-gray-100">
                            <img src={`https://i.pravatar.cc/100?u=${post.author}`} alt={post.author} />
                        </div>
                        <div>
                            <p className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tighter italic">{post.author}</p>
                            <p className="text-sm font-bold text-gray-400 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-primary" /> {post.date} • 8 min read
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-black text-gray-400 uppercase tracking-widest mr-2">Share Impact</span>
                        {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                            <button key={i} className="p-3 bg-gray-50 dark:bg-navy rounded-2xl hover:bg-primary hover:text-white transition-all border border-gray-100 dark:border-gray-800">
                                <Icon className="w-5 h-5" />
                            </button>
                        ))}
                        <button className="p-3 bg-gray-50 dark:bg-navy rounded-2xl hover:bg-primary hover:text-white transition-all border border-gray-100 dark:border-gray-800">
                            <Bookmark className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800 mb-16"
                    >
                        <img src={post.image} className="w-full h-full object-cover aspect-video" alt={post.title} />
                    </motion.div>

                    <div className="prose prose-xl dark:prose-invert max-w-none">
                        <p className="text-2xl text-gray-700 dark:text-gray-300 font-medium leading-[1.8] italic first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-primary">
                            {post.content}
                        </p>

                        <div className="my-16 p-12 bg-gray-50 dark:bg-navy rounded-[3rem] border-l-8 border-primary italic">
                            <p className="text-2xl font-black text-gray-900 dark:text-white leading-relaxed">
                                "The next decade of SaaS belongs to those who view technical excellence not as a cost center, but as a strategic moat."
                            </p>
                            <cite className="block mt-6 text-primary font-bold uppercase tracking-widest">— Marcus Thorne, CEO NexusForge</cite>
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                            For more details on how to implement these strategies in your specific vertical, feel free to reach out to our strategic collective. We specialize in transforming these high-level concepts into scalable enterprise infrastructure.
                        </p>
                    </div>

                    {/* Author Bio Footer */}
                    <div className="mt-24 p-12 bg-gray-50 dark:bg-[#0A101A] rounded-[3.5rem] border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                            <img src={`https://i.pravatar.cc/200?u=${post.author}`} alt={post.author} />
                        </div>
                        <div className="text-center md:text-left space-y-3">
                            <h4 className="text-2xl font-black dark:text-white uppercase italic">About {post.author}</h4>
                            <p className="text-gray-500 font-medium">
                                A senior product architect at NexusForge with over a decade of experience in engineering high-growth SaaS platforms. Passionate about AI ethics and cloud-native performance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetail;
