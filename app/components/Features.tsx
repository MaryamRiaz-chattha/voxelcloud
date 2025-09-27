"use client";
import { motion } from "framer-motion";

const features = [
  { title: "3D Rendering", desc: "Immersive real-time 3D rendering in the browser." },
  { title: "AI Automation", desc: "Smart AI tools to streamline workflows." },
  { title: "Scalable Cloud", desc: "Deploy and scale with secure cloud infrastructure." },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-2xl bg-gray-800 shadow-lg hover:shadow-cyan-500/50 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-cyan-400">{f.title}</h3>
            <p className="mt-2 text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
