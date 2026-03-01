import React from "react";
import Hero from "../components/Hero";
import TechMarquee from "../components/TechMarquee";
import TrustedBy from "../components/TrustedBy";
import Services from "../components/Services";
import OurWork from "../components/OurWork";
import Teams from "../components/Teams";
import Process from "../components/Process";
import { motion } from "framer-motion";
import ContactUs from "../components/ContactUs";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <TechMarquee />
            <TrustedBy />
            <section id="services">
                <Services />
            </section>
            <Process />
            <section id="our-work">
                <OurWork />
            </section>
            <section id="teams">
                <Teams />
            </section>
            <section id="contact-us">
                <ContactUs />
            </section>
        </motion.div>
    );
};

export default Home;
