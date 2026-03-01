import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, LogIn, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
        const origin = location.state?.from?.pathname || '/dashboard';
        navigate(origin);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-gray-50 dark:bg-black">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full"
            >
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
                        <div className="p-3 bg-primary rounded-xl transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-primary/30">
                            <Rocket className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold dark:text-white">NexusForge</span>
                    </Link>
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">Welcome back</h1>
                    <p className="text-gray-600 dark:text-gray-400">Continue your SaaS journey with us</p>
                </div>

                <div className="bg-white dark:bg-navy p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border border-transparent rounded-2xl focus:ring-2 focus:ring-primary dark:text-white focus:bg-white transition-all outline-none"
                                    placeholder="name@company.com"
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
                                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-gray-800 border border-transparent rounded-2xl focus:ring-2 focus:ring-primary dark:text-white focus:bg-white transition-all outline-none"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary border-gray-300" />
                                <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
                            </label>
                            <a href="#" className="text-sm font-semibold text-primary hover:underline">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 active:scale-95"
                        >
                            <LogIn className="w-5 h-5" />
                            Sign In
                        </button>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-bold text-primary hover:underline">Create an account</Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Login;
