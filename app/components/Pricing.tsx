"use client";
import { motion } from "framer-motion";

const plans = [
  { name: "Starter", price: "$9/mo", features: ["Basic 3D Tools", "Email Support"] },
  { name: "Pro", price: "$29/mo", features: ["Advanced 3D Tools", "AI Features", "Priority Support"] },
  { name: "Enterprise", price: "$99/mo", features: ["Custom Solutions", "Dedicated Support", "Unlimited Access"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 bg-black">
      <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            className="p-8 rounded-2xl bg-gray-800 text-center shadow-lg hover:shadow-cyan-500/50 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400">{plan.name}</h3>
            <p className="mt-2 text-xl font-semibold">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-gray-300">
              {plan.features.map((f, idx) => (
                <li key={idx}>✔ {f}</li>
              ))}
            </ul>
            <button className="mt-6 px-6 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
