"use client";

import { motion } from "framer-motion";

export default function Details() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="px-6 py-12"
    >
      <motion.div
        className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl p-8 border-2 border-jays-blue/20"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-3xl font-extrabold text-jays-navy mb-6 text-center">
          📋 The Deets 📋
        </h2>
        <div className="space-y-5">
          <motion.div
            className="flex items-center gap-4 p-3 rounded-xl bg-jays-blue/5 hover:bg-jays-blue/10 transition-colors"
            whileHover={{ x: 5 }}
          >
            <span className="text-3xl">📅</span>
            <div>
              <p className="text-sm text-jays-blue font-bold uppercase tracking-wide">
                When
              </p>
              <p className="text-jays-navy font-semibold">
                Friday, January 30th at 7:30 PM
              </p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 p-3 rounded-xl bg-jays-blue/5 hover:bg-jays-blue/10 transition-colors"
            whileHover={{ x: 5 }}
          >
            <span className="text-3xl">📍</span>
            <div>
              <p className="text-sm text-jays-blue font-bold uppercase tracking-wide">
                Where
              </p>
              <p className="text-jays-navy font-semibold">Inara's Place 🏠</p>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 p-3 rounded-xl bg-jays-blue/5 hover:bg-jays-blue/10 transition-colors"
            whileHover={{ x: 5 }}
          >
            <span className="text-3xl">🎲</span>
            <div>
              <p className="text-sm text-jays-blue font-bold uppercase tracking-wide">
                What
              </p>
              <p className="text-jays-navy font-semibold">
                Dinner + Games Night 🎮
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
