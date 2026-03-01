import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { team, caseStudies } from '../data/nexusData';
import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { ArrowLeft, Twitter, Linkedin, Github, ExternalLink, Briefcase, Award, GraduationCap } from 'lucide-react';

const TeamProfile = () => {
    const { slug } = useParams();
    const member = team.find(m => m.slug === slug);

    if (!member) return <Navigate to="/team" />;

    // Find case studies related to this member (simulated by tags/logic)
    const relatedWork = caseStudies.slice(0, 2);

    return (
        <div className="bg-white dark:bg-black min-h-screen">
            <div className="bg-white dark:bg-black py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100 dark:border-gray-900">
                <Link to="/team" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Team
                </Link>
            </div>

            <PageHeader
                badge={member.role}
                title={member.name}
                description={member.bio}
                color="purple"
            />

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Visual & Socials Col */}
                    <div className="space-y-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800"
                        >
                            <img src={member.image} className="w-full h-full object-cover" alt={member.name} />
                        </motion.div>

                        <div className="p-10 bg-gray-50 dark:bg-navy rounded-[3rem] border border-gray-100 dark:border-gray-800 space-y-8">
                            <h3 className="text-xl font-black dark:text-white uppercase italic">Connect</h3>
                            <div className="flex gap-4">
                                <a href={member.socials.twitter} className="p-4 bg-white dark:bg-gray-800 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-sm">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href={member.socials.linkedin} className="p-4 bg-white dark:bg-gray-800 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-sm">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href={member.socials.github} className="p-4 bg-white dark:bg-gray-800 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-sm">
                                    <Github className="w-6 h-6" />
                                </a>
                            </div>
                            <hr className="border-gray-200 dark:border-gray-800" />
                            <div className="space-y-6">
                                <h4 className="font-black text-gray-900 dark:text-white uppercase italic text-sm">Specialties</h4>
                                <div className="flex flex-wrap gap-2">
                                    {member.specialties.map(spec => (
                                        <span key={spec} className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-[10px] font-black uppercase tracking-widest">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio & Experience Col */}
                    <div className="lg:col-span-2 space-y-20">
                        <div className="space-y-10">
                            <h2 className="text-4xl font-black text-gray-900 dark:text-white italic uppercase tracking-tighter">Strategic Impact</h2>
                            <p className="text-2xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                {member.longBio}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-8">
                                <h3 className="text-2xl font-black dark:text-white flex items-center gap-3 italic">
                                    <Award className="w-6 h-6 text-amber-500" /> Key Milestones
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Architected 5+ global SaaS platforms",
                                        "Reduced technical debt by 40% for Series B partners",
                                        "Led cross-functional teams of 30+ engineers"
                                    ].map((m, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                                            <p className="text-gray-600 dark:text-gray-400 font-medium italic">{m}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-2xl font-black dark:text-white flex items-center gap-3 italic">
                                    <Briefcase className="w-6 h-6 text-cyan-500" /> Industry Expertise
                                </h3>
                                <div className="space-y-4">
                                    {["Fintech Systems", "AI Infrastructure", "Enterprise UX"].map(exp => (
                                        <div key={exp} className="p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 font-bold text-gray-700 dark:text-gray-300">
                                            {exp}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Related Projects */}
                        <div className="space-y-12">
                            <h3 className="text-3xl font-black dark:text-white italic uppercase tracking-tighter">Selected Case Studies</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                {relatedWork.map(study => (
                                    <Link key={study.id} to={`/case-studies/${study.slug}`} className="group block space-y-6">
                                        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
                                            <img src={study.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={study.title} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                                <span className="text-white font-black uppercase text-sm flex items-center gap-2">Explore Project <ExternalLink className="w-4 h-4" /></span>
                                            </div>
                                        </div>
                                        <h4 className="text-xl font-black dark:text-white group-hover:text-primary transition-colors">{study.title}</h4>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-24 bg-gray-50 dark:bg-[#050B14] border-t border-gray-100 dark:border-gray-900">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-4xl font-black dark:text-white italic uppercase">Work with {member.name.split(' ')[0]}</h2>
                    <p className="text-gray-500 font-medium text-lg italic">Ready to have an elite architect lead your next SaaS build? Initiate the forge today.</p>
                    <Link to="/contact" className="inline-block px-12 py-5 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/30 hover:translate-y-[-5px] transition-all">
                        Schedule a Strategy Session
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default TeamProfile;
