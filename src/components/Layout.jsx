import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children, theme, setTheme }) => {
    return (
        <div className="flex flex-col min-h-screen bg-white dark:bg-black transition-colors duration-300">
            <Navbar theme={theme} setTheme={setTheme} />
            <motion.main
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex-grow"
            >
                {children}
            </motion.main>
            <Footer />
        </div>
    );
};

export default Layout;
