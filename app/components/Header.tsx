"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="flex justify-between items-center p-6 sticky top-0 z-50 bg-black/70 backdrop-blur-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-2xl font-bold text-cyan-400">VoxelCloud</h1>
      <nav className="space-x-6">
        <a href="#features" className="hover:text-cyan-400">Features</a>
        <a href="#pricing" className="hover:text-cyan-400">Pricing</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </nav>
    </motion.header>
  );
}
