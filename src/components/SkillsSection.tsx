"use client";

import { motion } from "framer-motion";

const skills = [
    "🤖 AI Agents", "🔐 Homomorphic Encryption", "🔍 Searchable Encryption", "🐍 Python",
    "🔗 LangChain", "⚛️ React", "🚀 Next.js", "🏗️ System Design"
];

export default function SkillsSection() {
    return (
        <section id="skills" className="bg-white rounded-3xl p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl font-heading font-bold mb-6">Superpowers</h2>

            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                        className="px-4 py-2 bg-background border-2 border-black rounded-lg font-bold text-sm cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-accent-blue/10 rounded-xl border-2 border-accent-blue border-dashed">
                <p className="font-body text-sm text-secondary">
                    <strong>Currently learning:</strong> Rust & WebAssembly for high-performance browser agents.
                </p>
            </div>
        </section>
    );
}
