import React from "react";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex flex-col items-center gap-8 py-24 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-3 border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm p-2 pr-5 rounded-full shadow-sm"
      >
        <div className="flex -space-x-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-navy bg-gray-200 overflow-hidden">
              <img src={`https://i.pravatar.cc/100?u=${i}`} alt="" />
            </div>
          ))}
        </div>
        <p className="text-xs font-bold text-gray-700 dark:text-gray-300">Join 500+ successful founders</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 dark:text-white max-w-5xl leading-[1.1]"
      >
        Build your SaaS <br />
        <span className="text-primary italic">infrastructure</span> in weeks.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
      >
        NexusForge combines elite design with cloud-native engineering to help you
        launch and scale faster than the competition.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-4"
      >
        <Link
          to="/register"
          className="group px-8 py-4 bg-primary text-white font-bold rounded-2xl flex items-center gap-2 hover:bg-blue-600 transition-all shadow-xl shadow-primary/25 hover:translate-y-[-2px] active:translate-y-0"
        >
          Start Building Free
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          to="/pricing"
          className="px-8 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all flex items-center gap-2"
        >
          View Pricing
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative mt-20 w-full max-w-6xl mx-auto"
      >
        <div className="absolute inset-0 bg-primary/5 rounded-[2rem] -rotate-1 scale-[1.02]" />
        <img
          src={assets.hero_img}
          alt="NexusForge Dashboard"
          className="relative rounded-[2rem] shadow-2xl border border-white/10"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
