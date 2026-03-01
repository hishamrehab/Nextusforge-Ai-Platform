import React from 'react';
import PageHeader from '../components/PageHeader';
import { team, testimonials } from '../data/nexusData';
import { motion } from 'framer-motion';
import { Globe, Users, Trophy, Flag, Shield, Rocket, Cpu, LineChart, Code2, Heart } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <PageHeader
                badge="Elite Architecture"
                title="We Build the Backbone of the Digital Economy"
                description="A specialized SaaS agency helping visionary founders and enterprise engineering teams scale with architectural clarity and high-velocity engineering."
                color="emerald"
            />

            {/* Core Values Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-12">
                    {[
                        { icon: Shield, title: "Uncompromising Security", desc: "Enterprise-grade data protection is at the heart of every single product we build. SOC2 and GDPR compliance are our technical baseline." },
                        { icon: Users, title: "Founder-Centric Partnership", desc: "We act as your technical co-founders, not just an external agency. Your success is our reputation, and our code represents your future value." },
                        { icon: Rocket, title: "Extreme Development Velocity", desc: "Cloud-native architectures that allow you to ship features 10x faster than legacy competitors using serverless and edge compute." }
                    ].map((v, i) => (
                        <div key={i} className="space-y-6 p-10 bg-gray-50 dark:bg-navy rounded-[3rem] border border-gray-100 dark:border-gray-800 transition-all hover:translate-y-[-10px] shadow-xl group">
                            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                <v.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 dark:text-white italic uppercase tracking-tighter">{v.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium line-clamp-3">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Story & Evolution */}
            <section className="py-32 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-32 pointer-events-none opacity-5 scale-150">
                    <Globe className="w-full h-full text-emerald-500" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-32 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    <span className="text-emerald-500 font-black uppercase tracking-widest text-sm">Our Genesis</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] italic uppercase tracking-tighter">
                                    A global team with a <span className="text-emerald-500 tracking-normal font-sans not-italic">singular</span> mission.
                                </h2>
                            </div>
                            <p className="text-xl text-gray-400 leading-relaxed font-medium italic">
                                NexusForge started as a small team of elite engineers from Google and AWS who were tired of seeing brilliant SaaS ideas die due to poor scalability and amateur architecture.
                                <br /> <br />
                                Today, we are a distributed team of 50+ specialists focused on one thing: building high-performance software that moves millions of dollars and users with zero friction.
                            </p>

                            <div className="grid grid-cols-2 gap-12 pt-6 border-t border-white/10 mt-12">
                                {[
                                    { label: "Projects Shipped", val: "200+" },
                                    { label: "Capitals Raised", val: "$1B+" },
                                    { label: "Uptime SLA", val: "99.99%" },
                                    { label: "Team Size", val: "50+" }
                                ].map((s, i) => (
                                    <div key={i} className="space-y-1">
                                        <p className="text-5xl font-black text-emerald-500 italic tracking-tighter">{s.val}</p>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">{s.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-4 bg-emerald-500/20 rounded-[4rem] blur-[100px] opacity-50 group-hover:scale-110 transition-transform" />
                            <div className="relative overflow-hidden rounded-[4rem] border border-white/20 aspect-square lg:aspect-[4/5] shadow-3xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200"
                                    alt="NexusForge Team Collaboration"
                                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                                />
                                <div className="absolute inset-x-8 bottom-8 p-10 bg-black/60 backdrop-blur-3xl rounded-[3rem] border border-white/10 shadow-3xl translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <h4 className="text-2xl font-black italic uppercase italic">The Technical Collective</h4>
                                    <p className="text-gray-400 text-sm font-medium mt-2">Where elite engineering meets product foresight.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Methodology Section */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-24 max-w-3xl mx-auto space-y-6">
                    <h2 className="text-6xl font-black italic uppercase tracking-tighter dark:text-white leading-none">TheNexus <span className="text-primary tracking-normal font-sans not-italic">Framework</span></h2>
                    <p className="text-xl text-gray-500 font-medium italic leading-relaxed">How we ensure 100% architectural stability for every enterprise partner.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { icon: Cpu, step: "Discovery", title: "Technical Audit", desc: "We deep-dive into your existing code and business units economics to find scalability bottlenecks." },
                        { icon: Code2, step: "Build", title: "Atomic Engineering", desc: "Our team implements the foundational design system and core backend microservices in parallel sprints." },
                        { icon: Shield, step: "Secure", title: "SOC2 Compliance", desc: "Before deployment, every module passes rigorous security audits and zero-trust protocol testing." },
                        { icon: LineChart, step: "Grow", title: "Performance Tuning", desc: "Constant real-time monitoring and A/B testing of product features to ensure maximum user retention." }
                    ].map((step, i) => (
                        <div key={i} className="p-10 bg-white dark:bg-navy border border-gray-100 dark:border-gray-900 rounded-[3rem] space-y-8 group hover:border-primary/50 transition-all hover:shadow-2xl h-full flex flex-col">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <span className="text-xs font-black text-gray-400 uppercase tracking-widest italic">{step.step}</span>
                            </div>
                            <div className="space-y-4 flex-grow">
                                <h3 className="text-2xl font-black dark:text-white uppercase italic">{step.title}</h3>
                                <p className="text-sm text-gray-500 font-bold leading-relaxed">{step.desc}</p>
                            </div>
                            <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-950 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{ duration: 1.5, delay: i * 0.2 }}
                                    className="h-full bg-primary"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Culture & Hiring CTA */}
            <section className="py-24 bg-primary text-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-32 opacity-10 -rotate-12 transition-transform group-hover:scale-110">
                    <Heart className="w-48 h-48" />
                </div>
                <div className="max-w-5xl mx-auto px-4 text-center space-y-12">
                    <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">We're always looking for <span className="underline decoration-white/30">elite talent</span>.</h2>
                    <p className="text-2xl text-blue-100 font-medium italic opacity-80">Do you have what it takes to join the technical collective? We're currently hiring distributed specialists in AI, Cloud Design, and Product Growth.</p>
                    <div className="pt-8">
                        <Link to="/careers" className="px-16 py-6 bg-white text-primary text-xl font-black rounded-[2rem] hover:bg-blue-50 transition-all shadow-3xl hover:translate-y-[-10px]">
                            Join the Forge
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
