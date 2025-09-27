"use client";
import { motion } from "framer-motion";
import SplineScene from "./SplineScene";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center relative">
      <motion.h2
        className="text-5xl font-extrabold text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        AI-Powered 3D SaaS Platform
      </motion.h2>
      <p className="mt-4 text-lg text-gray-300">
        Transform your business with next-gen 3D solutions.
      </p>
      <div className="mt-10 w-full h-[400px]">
        <SplineScene />
      </div>
    </section>
  );
}
