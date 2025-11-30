"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        id: 1,
        role: "Principal Engineer",
        company: "Zoho",
        period: "Oct 2024 - Present",
        desc: "Leading the development of AI Agentic Frameworks. Focused on integrating advanced LLM capabilities and designing scalable architectures for autonomous agents.",
        color: "bg-accent-coral",
        rotate: "rotate-1",
        tags: ["AI Agents", "Python", "LangChain"]
    },
    {
        id: 2,
        role: "Member Technical Staff",
        company: "Zoho",
        period: "May 2017 - Oct 2024",
        desc: "Transitioned from Full-Stack Development to Advanced R&D in Encryption.",
        details: [
            "Conducted extensive research on homomorphic encryption & searchable encryption.",
            "Led development of key features for helpdesk products (comments, mentions, notifications).",
            "Designed versatile custom filter components for complex data management."
        ],
        color: "bg-accent-yellow",
        rotate: "-rotate-2",
        tags: ["Encryption", "Node.js", "JavaScript"]
    },
    {
        id: 3,
        role: "Project Trainee",
        company: "Zoho",
        period: "Jan 2017 - Apr 2017",
        desc: "Initial training and project work, laying the foundation for full-stack engineering skills.",
        color: "bg-accent-blue",
        rotate: "rotate-2",
        tags: ["Training", "Full Stack"]
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="relative">
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-2">
                Journey
                <span className="text-sm font-body font-normal opacity-50 ml-2">(8+ Years)</span>
            </h2>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={exp.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02, rotate: 0 }}
                        className={`${exp.color} p-6 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform ${exp.rotate} transition-transform`}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-3 gap-2">
                            <h3 className="text-xl font-bold font-heading">{exp.role}</h3>
                            <span className="text-xs font-bold bg-black/10 px-2 py-1 rounded whitespace-nowrap">{exp.period}</span>
                        </div>
                        <div className="font-bold opacity-75 mb-3">{exp.company}</div>

                        <p className="font-body text-sm leading-relaxed mb-3">
                            {exp.desc}
                        </p>

                        {exp.details && (
                            <ul className="list-disc list-inside text-sm font-body opacity-90 space-y-1 mb-4">
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        )}

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {exp.tags.map(tag => (
                                <span key={tag} className="text-[10px] uppercase tracking-wider font-bold border border-black/20 px-2 py-0.5 rounded-full bg-white/30">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
