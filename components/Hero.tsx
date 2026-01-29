"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-4">
          You're Invited!
        </h1>
        <p className="text-2xl md:text-3xl text-teal font-medium mb-8">
          Dinner & Games Night
        </p>
        <div className="bg-white rounded-2xl shadow-sm px-8 py-6 inline-block">
          <p className="text-xl md:text-2xl text-charcoal font-semibold">
            Friday, January 30th
          </p>
          <p className="text-lg text-coral font-medium mt-1">7:30 PM</p>
        </div>
      </motion.div>
    </section>
  );
}
