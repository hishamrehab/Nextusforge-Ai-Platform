import React from 'react';
import PageHeader from '../components/PageHeader';
import { team } from '../data/nexusData';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, ExternalLink, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
const Team = () => {
    return (
        <div>
            <PageHeader
                badge="Elite Engineers"
                title="The Technical Collective Behind NexusForge"
                description="A distributed team of product architects, cloud engineers, and design visionaries."
                color="purple"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group space-y-8"
                        >
                            <div className="relative overflow-hidden rounded-[3rem] aspect-[4/5] bg-gray-100 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-xl group">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-x-4 bottom-4 p-6 bg-white/90 dark:bg-black/90 backdrop-blur-xl rounded-[2.5rem] transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 border border-white/20 dark:border-gray-800">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-4">
                                            <a href="#" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-all">
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                            <a href="#" className="p-2 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-white transition-all">
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        </div>
                                        <Link to={`/team/${member.slug}`} className="text-sm font-bold flex items-center gap-1 group/link text-gray-900 dark:text-white hover:text-primary transition-colors">
                                            View Profile <ExternalLink className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <span className="text-primary font-black uppercase tracking-widest text-xs">{member.role}</span>
                                <h3 className="text-3xl font-black text-gray-900 dark:text-white">{member.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-24 bg-gray-50 dark:bg-[#050B14] border-y border-gray-100 dark:border-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-purple-500/20 rounded-[3rem] blur-2xl opacity-50" />
                            <div className="relative grid grid-cols-2 gap-4">
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800"
                                    className="rounded-3xl shadow-xl aspect-square object-cover rotate-[-2deg]"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800"
                                    className="rounded-3xl shadow-xl aspect-square object-cover translate-y-12 rotate-[3deg]"
                                />
                            </div>
                        </div>
                        <div className="space-y-10">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
                                We don't just hire. We <span className="text-primary italic">recruit the best</span> engineers on the planet.
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                                Our culture is built on technical excellence, transparency, and a relentless commitment to founder success. Every member of our collective has built and scaled high-performance SaaS platforms before.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Continuous Technical Growth", desc: "Every engineer gets a $10k annual learning stipend." },
                                    { title: "Distributed, Not Isolated", desc: "Global first, with quarterly offsites in Tokyo, London, and SF." },
                                    { title: "Extreme Autonomy", desc: "No micro-management. Just excellence and results." }
                                ].map((c, i) => (
                                    <div key={i} className="flex gap-4 group">
                                        <div className="p-4 bg-primary/10 text-primary rounded-2xl transition-transform group-hover:scale-110">
                                            <Rocket className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold dark:text-white leading-tight mb-1">{c.title}</h4>
                                            <p className="text-gray-500 text-sm">{c.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;
