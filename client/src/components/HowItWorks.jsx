import { Brain } from "lucide-react";
import React, { useState } from "react";
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const imageVariant = {
    hidden: { opacity: 0, x: -40, scale: 0.98 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

const steps = [
    {
        title: "Smart Symptom Analysis",
        description:
            "Connect to our AI system that analyzes your fever symptoms and history. One input. Comprehensive analysis.",

        image: "/smart-symptom-analysis.jpg",
    },
    {
        title: "Real-time Health Monitoring",
        description:
            "Know your fever patterns. Track what matters. No more guesswork about when to seek help.",

        image: "/realtime-health-monitoring.jpeg",
    },
    {
        title: "Community & AI Insights",
        description:
            "Define your recovery path with AI-powered insights backed by community data. Keep your health journey informed.",

        image: "/community-ai-insights.jpeg",
    },
];

const HowItWorks = () => {
    const [activeImage, setActiveImage] = useState(steps[0].image);

    return (
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-light-primary dark:text-dark-primary">
                        How CareFever Works
                    </h2>
                    <p className="mt-2 text-5xl font-semibold tracking-tight text-pretty text-light-primary-text dark:text-dark-primary-text">
                        Smart Fever Management Made Simple
                    </p>
                </div>

                <motion.div
                    className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Image Section - Always visible on the left */}
                    <motion.div
                        className="relative overflow-hidden rounded-2xl bg-gray-900/5 p-2 transition-all duration-500 ease-in-out"
                        variants={imageVariant}
                    >
                        <motion.img
                            key={activeImage}
                            src={activeImage}
                            alt="Feature illustration"
                            className="w-full object-cover rounded-xl ring-1 ring-gray-900/10 transition-all duration-500 ease-in-out"
                            style={{ height: "500px" }}
                            initial="hidden"
                            animate="visible"
                            variants={imageVariant}
                        />
                    </motion.div>

                    {/* Steps Section - On the right */}
                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className="min-w-[260px] p-6 transition-all duration-300 flex items-start gap-5 border-l-4 border-light-secondary/40 dark:border-dark-secondary/30 hover:bg-light-secondary/10 dark:hover:bg-dark-secondary/10 hover:border-light-secondary dark:hover:border-dark-secondary cursor-pointer bg-transparent"
                                onMouseEnter={() => setActiveImage(step.image)}
                                variants={fadeUp}
                            >
                                <div className="bg-light-secondary  dark:bg-dark-secondary w-fit p-3 rounded-lg">
                                    <Brain size={36} color="white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold tracking-tight text-light-primary-text dark:text-dark-primary-text">
                                        {step.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-light-secondary-text dark:text-dark-secondary-text">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HowItWorks;
