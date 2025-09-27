"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="py-6 text-center bg-gray-900 text-gray-400"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p>© {new Date().getFullYear()} VoxelCloud. All rights reserved.</p>
    </motion.footer>
  );
}
