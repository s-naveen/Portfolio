"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center px-4 relative overflow-hidden">
            {/* Decorative Background Shapes */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-20 right-10 w-32 h-32 bg-accent-yellow rounded-full opacity-20 blur-3xl"
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-10 w-40 h-40 bg-accent-coral rounded-full opacity-20 blur-3xl"
            />

            <div className="z-10 text-center max-w-4xl flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="relative mb-8"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-accent-yellow via-accent-coral to-accent-blue rounded-full blur opacity-75 animate-pulse"></div>
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                        <Image
                            src="/profile.jpeg"
                            alt="Naveen S"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring" }}
                        className="absolute -bottom-2 -right-2 bg-white text-2xl px-3 py-1 rounded-full shadow-lg border border-black/10"
                    >
                        👋
                    </motion.div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-6xl md:text-8xl font-heading font-bold mb-6 text-foreground tracking-tight"
                >
                    I&apos;m <span className="text-primary underline decoration-wavy decoration-accent-coral underline-offset-8">Naveen</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-foreground/80 font-body leading-relaxed mb-10 max-w-2xl"
                >
                    Principal Engineer at <span className="font-bold">Zoho</span>. <br />
                    Building <span className="bg-accent-blue/20 px-2 rounded inline-block transform -rotate-1">AI Agents</span> & <span className="bg-accent-coral/20 px-2 rounded inline-block transform rotate-1">Encryption</span> tech.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex gap-4 justify-center"
                >
                    <a
                        href="#projects"
                        className="bg-black text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-black hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-y-1"
                    >
                        See My Work
                    </a>
                    <a
                        href="#contact"
                        className="bg-white text-black px-8 py-4 rounded-xl font-bold text-lg border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all transform hover:-translate-y-1"
                    >
                        Let&apos;s Talk
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
