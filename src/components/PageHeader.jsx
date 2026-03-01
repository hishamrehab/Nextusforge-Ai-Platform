import React from 'react';
import { motion } from 'framer-motion';

const PageHeader = ({ title, description, badge, color = "blue" }) => {
    const colorMap = {
        blue: "from-blue-600 to-blue-400 bg-blue-500/10 text-blue-500",
        indigo: "from-indigo-600 to-indigo-400 bg-indigo-500/10 text-indigo-500",
        emerald: "from-emerald-600 to-emerald-400 bg-emerald-500/10 text-emerald-500",
        purple: "from-purple-600 to-purple-400 bg-purple-500/10 text-purple-500",
        cyan: "from-cyan-600 to-cyan-400 bg-cyan-500/10 text-cyan-500",
        amber: "from-amber-600 to-amber-400 bg-amber-500/10 text-amber-500"
    };

    const selectedColor = colorMap[color] || colorMap.blue;
    const [gradient, bg, text] = selectedColor.split(' ');

    return (
        <div className="relative py-24 md:py-32 overflow-hidden border-b border-gray-100 dark:border-gray-900 bg-gray-50 dark:bg-[#050B14]">
            {/* Abstract Background Decoration */}
            <div className="absolute top-0 right-0 p-32 pointer-events-none opacity-5 dark:opacity-10">
                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="40" strokeLinecap="round" strokeDasharray="50 50" className={text} />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl"
                >
                    {badge && (
                        <motion.span
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest ${bg} ${text} mb-6`}
                        >
                            {badge}
                        </motion.span>
                    )}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight mb-6">
                        {title.split(' ').map((word, i) => (
                            i === title.split(' ').length - 1 ? (
                                <span key={i} className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent italic`}> {word}</span>
                            ) : <span key={i}> {word}</span>
                        ))}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                        {description}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default PageHeader;
