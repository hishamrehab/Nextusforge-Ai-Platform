import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, UserPlus, Rocket, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!acceptedTerms) return;
        register(name, email, password);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-4 py-20 bg-gray-50 dark:bg-black overflow-hidden relative">
            {/* Decorative Blur Elements */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
                {/* Left Col - Branding & Info */}
                <div className="hidden lg:block space-y-12">
                    <Link to="/" className="inline-flex items-center gap-2 group">
                        <div className="p-3 bg-primary rounded-xl transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-primary/30">
                            <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-3xl font-extrabold dark:text-white">NexusForge</span>
                    </Link>

                    <div className="space-y-6">
                        <h2 className="text-5xl font-black text-gray-900 dark:text-white leading-tight">
                            Start building the <span className="text-primary italic">future</span> with us today.
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Join a network of over <span className="text-primary font-bold">5,000+</span> founders and builders who use NexusForge to power their SaaS.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {[
                            "Unlimited SaaS Project Capacity",
                            "Priority Multi-Cloud Deployments",
                            "24/7 Expert Strategic Support"
                        ].map((feature, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Col - Form */}
                <div className="max-w-md w-full mx-auto">
                    <div className="bg-white dark:bg-navy p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm relative z-10">
                        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Create Account</h1>
                        <p className="text-gray-500 dark:text-gray-400 mb-8">Let's get your Nexus journey started</p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary dark:text-white transition-all outline-none"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary dark:text-white transition-all outline-none"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl focus:ring-2 focus:ring-primary dark:text-white transition-all outline-none"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>

                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    checked={acceptedTerms}
                                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                                    required
                                    className="mt-1 w-5 h-5 rounded text-primary focus:ring-primary border-gray-300 cursor-pointer"
                                />
                                <span className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                    I agree to the <a href="#" className="font-bold text-primary underline">Terms of Service</a> and <a href="#" className="font-bold text-primary underline">Privacy Policy</a>
                                </span>
                            </label>

                            <button
                                type="submit"
                                disabled={!acceptedTerms}
                                className="w-full bg-primary hover:bg-blue-600 disabled:opacity-50 disabled:hover:bg-primary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 active:scale-95"
                            >
                                <UserPlus className="w-5 h-5" />
                                Create Account
                            </button>
                        </form>

                        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                            Already have an account?{' '}
                            <Link to="/login" className="font-bold text-primary hover:underline transition-all">Sign in here</Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;
