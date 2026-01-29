"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import Image from "next/image";

// Using Twemoji CDN for consistent flag rendering
const Flag = ({ country, size = 24 }: { country: string; size?: number }) => {
  const flagCodes: Record<string, string> = {
    kr: "1f1f0-1f1f7", // South Korea
    vn: "1f1fb-1f1f3", // Vietnam
    ca: "1f1e8-1f1e6", // Canada
    gb: "1f1ec-1f1e7", // UK
  };

  const code = flagCodes[country];
  if (!code) return null;

  return (
    <Image
      src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/${code}.svg`}
      alt={`${country} flag`}
      width={size}
      height={size}
      className="inline-block"
      unoptimized
    />
  );
};

export default function RSVP() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    // Fire confetti!
    const duration = 2000;
    const end = Date.now() + duration;

    const colors = ["#134A8E", "#E8291C", "#1D2D5C", "#ffffff"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Also do a big burst from center
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
    });

    // Show the modal
    setShowModal(true);
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 py-16 text-center"
      >
        <motion.button
          onClick={handleClick}
          className="bg-gradient-to-r from-jays-blue to-jays-navy text-white text-2xl font-bold px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-4 border-white"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(19, 74, 142, 0.4)",
              "0 0 0 20px rgba(19, 74, 142, 0)",
            ],
          }}
          transition={{
            boxShadow: { duration: 1.5, repeat: Infinity },
          }}
        >
          I'm In! 🎉
        </motion.button>
        <motion.p
          className="text-jays-navy/60 mt-8 text-xl font-medium"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          🐦 See you there! 🐦
        </motion.p>
        <div className="flex justify-center items-center gap-3 mt-4">
          <Flag country="kr" size={28} />
          <span className="text-2xl">❄️</span>
          <Flag country="vn" size={28} />
          <span className="text-2xl">⚾</span>
          <Flag country="ca" size={28} />
          <span className="text-2xl">❄️</span>
          <Flag country="gb" size={28} />
        </div>
      </motion.section>

      {/* Funny Modal */}
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
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
              >
                🐦
              </motion.div>
              <h3 className="text-2xl font-bold text-jays-navy mb-4">
                lol this button doesn't actually do anything
              </h3>
              <p className="text-xl text-jays-blue mb-6">
                but see u soon! 💙
              </p>
              <motion.button
                onClick={() => setShowModal(false)}
                className="bg-jays-red text-white font-bold px-8 py-3 rounded-full text-lg hover:bg-jays-red/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Got it!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
