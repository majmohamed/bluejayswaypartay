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
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-md p-8">
        <h2 className="text-2xl font-bold text-charcoal mb-6 text-center">
          The Details
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl">📅</span>
            <div>
              <p className="text-sm text-teal font-medium uppercase tracking-wide">
                When
              </p>
              <p className="text-charcoal font-semibold">
                Friday, January 30th at 7:30 PM
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl">📍</span>
            <div>
              <p className="text-sm text-teal font-medium uppercase tracking-wide">
                Where
              </p>
              <p className="text-charcoal font-semibold">Inara's Place</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl">🎲</span>
            <div>
              <p className="text-sm text-teal font-medium uppercase tracking-wide">
                What
              </p>
              <p className="text-charcoal font-semibold">
                Dinner + Games Night
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
