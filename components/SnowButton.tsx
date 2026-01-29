"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SnowButton() {
  const [showModal, setShowModal] = useState(false);
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  const handleClick = () => {
    // Create a burst of snowflakes
    const newSnowflakes = Array.from({ length: 50 }, (_, i) => Date.now() + i);
    setSnowflakes(newSnowflakes);

    // Clear snowflakes after animation
    setTimeout(() => setSnowflakes([]), 4000);

    // Show modal
    setShowModal(true);
  };

  return (
    <>
      {/* Floating question mark button */}
      <motion.button
        onClick={handleClick}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border-2 border-jays-blue flex items-center justify-center text-2xl font-bold text-jays-blue hover:bg-jays-blue hover:text-white transition-colors"
        whileHover={{ scale: 1.1, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ y: { duration: 2, repeat: Infinity } }}
      >
        ?
      </motion.button>

      {/* Snowflake burst */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {snowflakes.map((id, index) => (
          <motion.div
            key={id}
            className="absolute text-2xl md:text-4xl"
            initial={{
              x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 400),
              y: -50,
              rotate: 0,
              opacity: 1,
            }}
            animate={{
              y: (typeof window !== "undefined" ? window.innerHeight : 800) + 100,
              x: `+=${Math.random() * 200 - 100}`,
              rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
              opacity: 0,
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              delay: index * 0.02,
              ease: "easeIn",
            }}
          >
            ❄️
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-backdrop"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-3xl p-8 max-w-sm mx-auto shadow-2xl text-center border-4 border-jays-blue"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className="text-6xl mb-4"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: 2 }}
              >
                🥶
              </motion.div>
              <h3 className="text-2xl font-bold text-jays-navy mb-6">
                why tf is it so cold in this country pls
              </h3>
              <motion.button
                onClick={() => setShowModal(false)}
                className="bg-jays-blue text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-jays-navy transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                fr fr
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
