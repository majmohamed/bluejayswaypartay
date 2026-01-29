"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Using Twemoji CDN for consistent flag rendering
const Flag = ({ country, size = 28 }: { country: string; size?: number }) => {
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

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Decorative birds around title */}
        <div className="flex items-center justify-center gap-4 mb-2">
          <motion.span
            className="text-4xl"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🐦
          </motion.span>
          <motion.span
            className="text-4xl"
            animate={{ rotate: [10, -10, 10] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            🐦
          </motion.span>
        </div>

        <motion.h1
          className="text-5xl md:text-8xl font-extrabold text-jays-navy mb-4 drop-shadow-lg"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          You're Invited!
        </motion.h1>

        <p className="text-2xl md:text-4xl text-jays-blue font-bold mb-8">
          🎲 Dinner & Games Night 🎲
        </p>

        {/* Flags decoration */}
        <div className="flex justify-center items-center gap-3 mb-6">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Flag country="kr" size={28} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          >
            <Flag country="vn" size={28} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          >
            <Flag country="ca" size={28} />
          </motion.div>
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
          >
            <Flag country="gb" size={28} />
          </motion.div>
        </div>

        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl px-10 py-8 inline-block border-4 border-jays-blue"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <p className="text-2xl md:text-3xl text-jays-navy font-bold">
            📅 Friday, January 30th
          </p>
          <p className="text-xl md:text-2xl text-jays-red font-bold mt-2">
            ⏰ 7:30 PM
          </p>
          <p className="text-lg text-jays-blue mt-2">
            ❄️ Toronto Winter Vibes ❄️
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
