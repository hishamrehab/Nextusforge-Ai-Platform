import React, { useState } from "react";
import Title from "../components/Title";
import PageHeader from "../components/PageHeader";
import { motion } from "framer-motion";
import { Mail, User, Send, CheckCircle2, Phone, MapPin, Globe, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
    const [status, setStatus] = useState("idle");

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("sending");
        setTimeout(() => setStatus("success"), 1500);
    };

    if (status === "success") {
        return (
            <div className="flex flex-col items-center justify-center py-40 px-4 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6"
                >
                    <CheckCircle2 className="w-10 h-10" />
                </motion.div>
                <h2 className="text-4xl font-black dark:text-white mb-4 italic uppercase">Forge Initiated!</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-10 text-lg font-medium">
                    Your transmission has been received. Our strategy team will review it and reach out within 12-24 hours.
                </p>
                <button
                    onClick={() => setStatus("idle")}
                    className="px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-primary/30"
                >
                    Return to Contact Page
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <PageHeader
                badge="Connect"
                title="Let's Forge the Future Together"
                description="Ready to scale? Book a strategy call or send us a message to initiate your digital transformation."
                color="blue"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Contact Info Col */}
                    <div className="lg:col-span-1 space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-black dark:text-white">Global Presence</h2>
                            <p className="text-gray-600 dark:text-gray-400 font-medium">
                                Our distributed team operates across 4 continents, ensuring 24/7 strategic support for our enterprise partners.
                            </p>
                        </div>

                        <div className="space-y-8">
                            {[
                                { icon: MapPin, title: "Headquarters", val: "San Francisco, CA (Remote-First)" },
                                { icon: Mail, title: "Strategy Team", val: "strategy@nexusforge.ai" },
                                { icon: Phone, title: "Support Line", val: "+1 (555) NEXUS-AI" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 group">
                                    <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-gray-500 uppercase tracking-widest">{item.title}</p>
                                        <p className="text-lg font-bold dark:text-white">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <hr className="border-gray-100 dark:border-gray-900" />

                        <div className="space-y-6">
                            <h3 className="text-xl font-bold dark:text-white">Social Channels</h3>
                            <div className="flex gap-4">
                                <a href="#" className="p-4 bg-gray-50 dark:bg-navy rounded-2xl hover:bg-primary hover:text-white transition-all">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href="#" className="p-4 bg-gray-50 dark:bg-navy rounded-2xl hover:bg-primary hover:text-white transition-all">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="p-4 bg-gray-50 dark:bg-navy rounded-2xl hover:bg-primary hover:text-white transition-all">
                                    <Globe className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Col */}
                    <div className="lg:col-span-2">
                        <div className="bg-gray-50 dark:bg-[#0A101A] p-10 md:p-16 rounded-[3.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                                <Send className="w-40 h-40 text-primary -rotate-12" />
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-black dark:text-white uppercase tracking-tighter italic flex items-center gap-2">
                                            <User className="w-4 h-4 text-primary" /> Full Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Enter your name"
                                            className="w-full p-5 bg-white dark:bg-gray-800 border-none rounded-2xl dark:text-white focus:ring-4 focus:ring-primary/20 outline-none shadow-sm transition-all text-lg font-medium"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-sm font-black dark:text-white uppercase tracking-tighter italic flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-primary" /> Corporate Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            placeholder="name@company.com"
                                            className="w-full p-5 bg-white dark:bg-gray-800 border-none rounded-2xl dark:text-white focus:ring-4 focus:ring-primary/20 outline-none shadow-sm transition-all text-lg font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-sm font-black dark:text-white uppercase tracking-tighter italic">Strategic Requirements</label>
                                    <textarea
                                        required
                                        rows={6}
                                        placeholder="Describe your SaaS vision and any technical hurdles..."
                                        className="w-full p-6 bg-white dark:bg-gray-800 border-none rounded-[2rem] dark:text-white focus:ring-4 focus:ring-primary/20 outline-none shadow-sm transition-all text-lg font-medium"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "sending"}
                                    className="w-full py-6 bg-primary hover:bg-blue-600 text-white font-black text-xl rounded-2xl shadow-xl shadow-primary/25 transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3"
                                >
                                    {status === "sending" ? "Initiating Forge..." : "Contact Strategy Team"}
                                    <Send className="w-6 h-6" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
