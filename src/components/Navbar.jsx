import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { LogOut, LayoutDashboard, Menu, X, Rocket, ChevronDown, Sparkles, Code2, Globe } from "lucide-react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/our-work" },
    { name: "Team", path: "/team" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Docs", path: "/docs" },
    { name: "Pricing", path: "/pricing" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-900 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="p-2 bg-primary rounded-xl transition-transform group-hover:rotate-12 shadow-lg shadow-primary/20">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col -gap-1">
              <span className="text-xl font-black text-gray-900 dark:text-white tracking-tighter uppercase">NexusForge</span>
              <span className="text-[10px] uppercase tracking-widest text-primary font-black">Enterprise AI</span>
            </div>
          </Link>

          {/* Systems Status Pulse */}
          <Link to="/status" className="hidden xl:flex items-center gap-2 px-3 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-full group/status transition-all hover:bg-emerald-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">Operational</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-tight transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-gray-600 dark:text-gray-300"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Header: CTA & Auth */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />

            <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-800 mx-2" />

            {isAuthenticated ? (
              <div className="flex items-center gap-6 px-4 py-2 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800">
                <Link to="/dashboard" className="flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-white hover:text-primary transition-colors">
                  <LayoutDashboard className="w-4 h-4" />
                  Console
                </Link>
                <button onClick={logout} className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Sign In
                </Link>
                <Link to="/contact" className="px-6 py-2.5 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-full transition-all shadow-xl shadow-primary/25 hover:translate-y-[-2px]">
                  Book Strategy Call
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <ThemeToggleBtn theme={theme} setTheme={setTheme} />
            <button onClick={() => setSidebarOpen(true)} className="p-2 text-gray-600 dark:text-white">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-[#0A101A] z-[70] p-8 flex flex-col shadow-2xl overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-2xl font-black text-primary">NexusForge</span>
                <button onClick={() => setSidebarOpen(false)} className="p-2 dark:text-white">
                  <X className="w-7 h-7" />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setSidebarOpen(false)}
                    className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                <hr className="my-4 border-gray-100 dark:border-gray-800" />

                {isAuthenticated ? (
                  <>
                    <Link to="/dashboard" onClick={() => setSidebarOpen(false)} className="flex items-center gap-3 text-xl font-bold dark:text-white">
                      <LayoutDashboard className="w-6 h-6 text-primary" /> Dashboard
                    </Link>
                    <button onClick={() => { logout(); setSidebarOpen(false); }} className="flex items-center gap-3 text-xl font-bold text-red-500 text-left">
                      <LogOut className="w-6 h-6" /> Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setSidebarOpen(false)} className="text-xl font-bold dark:text-white">Login</Link>
                    <Link to="/contact" onClick={() => setSidebarOpen(false)} className="px-6 py-4 bg-primary text-white text-center font-bold rounded-2xl shadow-xl shadow-primary/25">
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
