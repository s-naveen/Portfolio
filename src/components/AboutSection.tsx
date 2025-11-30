"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 bg-surface/30">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
                    <div className="text-lg text-foreground/80 leading-relaxed space-y-6 font-body">
                        <p>
                            At Zoho Corporation, my journey as a software engineer has been marked by a continuous evolution,
                            from full-stack development to advanced encryption research. With a strong foundation in Information Technology
                            from St. Joseph&apos;s College of Engineering, I&apos;ve effectively leveraged my skills in JavaScript and Node.js
                            to enhance our helpdesk product and create robust project management solutions.
                        </p>
                        <p>
                            Currently, as part of Zoho&apos;s Labs team, my focus on encryption technologies drives our efforts in
                            developing secure, innovative algorithms. We&apos;ve made strides in <strong>homomorphic encryption</strong> and are
                            pioneering <strong>searchable encryption</strong> techniques, aiming to redefine data security standards.
                        </p>
                        <p>
                            My role embodies a commitment to pushing the boundaries of what&apos;s possible in encryption while
                            maintaining optimal functionality for our users.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
