"use client";

import { motion } from "framer-motion";

export default function RSVP() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-6 py-16 text-center"
    >
      <button className="bg-teal text-white text-xl font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-teal/90 hover:scale-105 transition-all duration-300 active:scale-95">
        I'm In! 🎉
      </button>
      <p className="text-charcoal/60 mt-6 text-lg">See you there! ✨</p>
    </motion.section>
  );
}
