import React from "react";
import { ArrowRight, PhoneCall } from "lucide-react";
import { motion } from 'framer-motion';
import { useTheme } from "../context/ThemeProvider";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const btnVariant = {
    rest: { scale: 1 },
    hover: { scale: 1.03, transition: { duration: 0.2 } },
};

export default function Footer() {
    const {theme} = useTheme();
    
    return (
        <footer className="relative w-full bg-light-bg dark:bg-dark-bg md:py-16 pb-16 pt-6 md:pt-5 px-4">
            <motion.div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                {/* Logo and tagline */}
                <motion.div className="flex flex-col items-center md:items-start gap-3" variants={fadeUp}>
                    <a href="/" className="flex items-center gap-2">
                        <img
                            src={
                                !theme
                                    ? "/logo-dark.png"
                                    : "/logo-light.png"
                            }
                            alt="Arogya Logo"
                            className="h-10 w-10"
                        />
                        <span className="text-xl font-bold text-light-primary-text dark:text-dark-primary-text">
                            CareFever
                        </span>
                    </a>
                    <p className="text-light-secondary-text dark:text-dark-secondary-text text-sm max-w-xs text-center md:text-left">
                        Your Fever, Our Priority - Empowering Wellness with AI.
                    </p>
                </motion.div>
                {/* Links */}
                <motion.div className="flex md:gap-24 gap-28" variants={fadeUp}>
                    <div className="flex flex-col gap-2 items-center">
                        <span className="font-semibold text-light-primary-text dark:text-dark-primary-text mb-1">
                            Product
                        </span>
                        <a
                            href="#features"
                            className="hover:underline text-light-secondary-text dark:text-dark-secondary-text text-sm">
                            Features
                        </a>
                        <a
                            href="/pricing"
                            className="hover:underline text-light-secondary-text dark:text-dark-secondary-text text-sm">
                            Pricing
                        </a>
                        <a
                            href="#faq"
                            className="hover:underline text-light-secondary-text dark:text-dark-secondary-text text-sm">
                            FAQ
                        </a>
                    </div>
                </motion.div>
                {/* CTA */}
                <motion.div className="flex flex-col items-center gap-4 md:mt-0 mt-8" variants={fadeUp}>
                    <motion.a
                        href="/contact-us"
                        variants={btnVariant}
                        initial="rest"
                        whileHover="hover"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-light-primary text-white dark:bg-dark-primary font-semibold text-base shadow transition"
                    >
                        Contact Us{" "}
                        <span>
                            <PhoneCall className="w-5 h-5" />
                        </span>
                    </motion.a>
                    <motion.span className="text-xs text-light-secondary-text dark:text-dark-secondary-text" variants={fadeUp}>
                        &copy; {new Date().getFullYear()} CareFever. All rights
                        reserved.
                    </motion.span>
                </motion.div>
            </motion.div>
        </footer>
    );
}
