"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "AI Agentic Framework",
        description: "Orchestrating autonomous agents to solve complex problems.",
        tags: ["Python", "LLM", "Agents"],
        color: "bg-accent-yellow",
        size: "col-span-1 md:col-span-2",
        link: "#"
    },
    {
        id: 2,
        title: "Secure Encryption Suite",
        description: "Advanced protocols for data security.",
        tags: ["Cryptography", "C++"],
        color: "bg-accent-blue",
        size: "col-span-1",
        link: "#"
    },
    {
        id: 3,
        title: "Retirement Calculator",
        description: "Plan your future with this interactive retirement planning tool.",
        tags: ["React", "Finance", "Calculator"],
        color: "bg-accent-coral",
        size: "col-span-1",
        link: "https://retirement-calc.naveen-s.com"
    },
    {
        id: 4,
        title: "Expense Tracker",
        description: "Track your daily expenses and manage your budget efficiently.",
        tags: ["React", "Finance", "Tracker"],
        color: "bg-accent-blue",
        size: "col-span-1",
        link: "https://expense.naveen-s.com"
    },
    {
        id: 5,
        title: "Portfolio V2",
        description: "This very website! Built with Next.js & Love.",
        tags: ["React", "Tailwind"],
        color: "bg-accent-yellow",
        size: "col-span-1 md:col-span-2",
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects">
            <h2 className="text-4xl font-heading font-bold mb-8 flex items-center gap-3">
                <span className="inline-block w-4 h-4 bg-black rounded-full"></span>
                Selected Work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`${project.size} ${project.color} rounded-3xl p-8 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer group relative overflow-hidden`}
                    >
                        <a href={project.link || "#"} className="block h-full">
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold border border-black">
                                        {project.tags[0]}
                                    </div>
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </div>

                                <h3 className="text-3xl font-heading font-bold mb-2 leading-tight">
                                    {project.title}
                                </h3>
                                <p className="font-body text-black/80 text-lg">
                                    {project.description}
                                </p>
                            </div>

                            {/* Decorative Circle */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
