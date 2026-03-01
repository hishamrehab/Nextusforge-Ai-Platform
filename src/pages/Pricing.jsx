import React from 'react';
import { motion } from 'framer-motion';
import { Check, Rocket, Zap, Crown, User, HelpCircle, Minus, Plus, ShieldCheck, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const Pricing = () => {
    const tiers = [
        {
            name: 'Lite Startup',
            price: '$49',
            description: 'Essential infrastructure for single-founder SaaS ventures.',
            features: [
                'Core Auth & User Management',
                'Basic Stripe Integration',
                '5 AI Utility Credits /mo',
                'NexusForge Branding',
                'Standard Email Support'
            ],
            cta: 'Start Scaling',
            icon: Rocket,
            color: 'blue',
            popular: false
        },
        {
            name: 'Growth Scale',
            price: '$199',
            description: 'Advanced features for scaling products and teams.',
            features: [
                'Unlimited AI Orchestration',
                'Custom Design System Hooks',
                'Priority Slack Channel',
                'White-label Dashboards',
                'Multi-region Deployment'
            ],
            cta: 'Accelerate Now',
            icon: Zap,
            color: 'indigo',
            popular: true
        },
        {
            name: 'Enterprise Forge',
            price: 'Custom',
            description: 'Elite partnership for high-volume corporate systems.',
            features: [
                'Dedicated Principal Engineer',
                'SOC2 Type II Hardening',
                'On-premise AI Model Hosting',
                'Custom CI/CD Pipelines',
                '24/7 Strategic Crisis Support'
            ],
            cta: 'Contact Architecture',
            icon: Crown,
            color: 'gold',
            popular: false
        }
    ];

    const comparison = [
        { feature: "Custom Domains", lite: true, growth: true, enterprise: true },
        { feature: "White-labeling", lite: false, growth: true, enterprise: true },
        { feature: "SOC2 Compliance", lite: false, growth: "Optional", enterprise: true },
        { feature: "AI Model Fine-tuning", lite: false, growth: false, enterprise: true },
        { feature: "Global Edge Hosting", lite: true, growth: true, enterprise: true },
    ];

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <PageHeader
                badge="Investment"
                title="SaaS Scaling Economics"
                description="Predictable investment plans designed for every stage of the product lifecycle—from MVP to Enterprise scale."
                color="indigo"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative bg-gray-50 dark:bg-navy p-12 rounded-[3.5rem] border ${tier.popular
                                ? 'border-primary ring-8 ring-primary/5 shadow-2xl scale-105 z-10'
                                : 'border-gray-100 dark:border-gray-900 shadow-xl'
                                } transition-all hover:translate-y-[-5px] group`}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 right-14 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/30">
                                    Highly Recommended
                                </div>
                            )}

                            <div className="mb-10">
                                <div className={`w-16 h-16 rounded-[2rem] bg-white dark:bg-black border border-gray-100 dark:border-gray-800 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform ${tier.popular ? 'text-primary' : 'text-gray-400'}`}>
                                    <tier.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-2 italic uppercase tracking-tighter">{tier.name}</h3>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-black text-gray-900 dark:text-white">{tier.price}</span>
                                    {tier.price !== 'Custom' && <span className="text-gray-500 font-bold">/mo</span>}
                                </div>
                                <p className="text-gray-500 font-medium text-sm mt-4 italic">{tier.description}</p>
                            </div>

                            <hr className="border-gray-200 dark:border-gray-800 mb-10" />

                            <ul className="space-y-6 mb-12">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300 font-bold">
                                        <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to={tier.price === 'Custom' ? '/contact' : '/register'}
                                className={`block w-full text-center py-6 rounded-2xl font-black transition-all active:scale-95 shadow-xl uppercase text-xs tracking-[0.2em] ${tier.popular
                                    ? 'bg-primary text-white hover:bg-blue-600 shadow-primary/30'
                                    : 'bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-100 dark:border-gray-800 hover:border-primary/50'
                                    }`}
                            >
                                {tier.cta}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Comparison */}
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-3xl font-black text-center dark:text-white italic uppercase tracking-tighter">Feature Comparison</h2>
                    <div className="overflow-hidden rounded-[3rem] border border-gray-100 dark:border-gray-900 shadow-2xl">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 dark:bg-gray-900">
                                <tr className="border-b border-gray-100 dark:border-gray-800">
                                    <th className="px-8 py-6 text-xs font-black uppercase text-gray-400">Capability</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase text-gray-900 dark:text-white text-center">Lite</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase text-primary text-center">Growth</th>
                                    <th className="px-8 py-6 text-xs font-black uppercase text-amber-500 text-center">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                {comparison.map((row, i) => (
                                    <tr key={i} className="hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-colors">
                                        <td className="px-8 py-6 text-sm font-bold text-gray-700 dark:text-gray-300">{row.feature}</td>
                                        <td className="px-8 py-6 text-center">{typeof row.lite === 'boolean' ? (row.lite ? <Plus className="w-5 h-5 mx-auto text-emerald-500" /> : <Minus className="w-5 h-5 mx-auto text-gray-200" />) : <span className="text-xs font-black uppercase text-gray-400">{row.lite}</span>}</td>
                                        <td className="px-8 py-6 text-center">{typeof row.growth === 'boolean' ? (row.growth ? <Plus className="w-5 h-5 mx-auto text-emerald-500" /> : <Minus className="w-5 h-5 mx-auto text-gray-200" />) : <span className="text-xs font-black uppercase text-primary">{row.growth}</span>}</td>
                                        <td className="px-8 py-6 text-center">{typeof row.enterprise === 'boolean' ? (row.enterprise ? <Plus className="w-5 h-5 mx-auto text-emerald-500" /> : <Minus className="w-5 h-5 mx-auto text-gray-200" />) : <span className="text-xs font-black uppercase text-amber-500">{row.enterprise}</span>}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Infrastructure Trust */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary rounded-full blur-[150px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    <div className="space-y-10">
                        <h2 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-none">Built for <span className="text-primary tracking-normal font-sans not-italic">99.99%</span> Reliability.</h2>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { icon: ShieldCheck, title: "Global Security", val: "SOC2 Compliance" },
                                { icon: Globe, title: "Edge Network", val: "250+ POPs" },
                                { icon: Cpu, title: "Compute Power", val: "Auto-scaling Clusters" },
                                { icon: Rocket, title: "Deployment", val: "Instant Rollouts" }
                            ].map((stat, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-primary">
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                    <p className="text-xs font-black uppercase tracking-widest text-gray-500">{stat.title}</p>
                                    <p className="text-2xl font-black italic">{stat.val}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-10 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 shadow-3xl">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-black italic uppercase">The Founders Pledge</h3>
                            <p className="text-lg text-gray-400 font-medium leading-relaxed italic">
                                "At NexusForge, we don't just sell software licenses. We provide the technical backbone for your multi-million dollar venture. Every tier includes our 'Core Stability' guarantee."
                            </p>
                            <div className="flex items-center gap-4">
                                <img src="https://i.pravatar.cc/100?u=marcus" className="w-14 h-14 rounded-full border-2 border-primary" />
                                <div>
                                    <p className="font-black uppercase tracking-tighter">Marcus Thorne</p>
                                    <p className="text-xs font-bold text-primary uppercase tracking-widest">CEO, NexusForge</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
