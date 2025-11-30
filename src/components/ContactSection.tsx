"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 text-center">
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-secondary text-white rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
            >
                {/* Decorative blobs */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-coral rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                        Let&apos;s build something <br /> <span className="text-accent-yellow">amazing</span> together.
                    </h2>
                    <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-body">
                        Whether it&apos;s AI, encryption, or just a friendly chat about tech.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="mailto:contact@example.com"
                            className="bg-accent-yellow text-black px-8 py-4 rounded-xl font-bold text-lg border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] transition-all transform hover:-translate-y-1"
                        >
                            Say Hello 👋
                        </a>
                        <a
                            href="https://www.linkedin.com/in/naveen-s-221573bb/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/20 hover:bg-white/10 transition-all"
                        >
                            LinkedIn ↗
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
