"use client";

import { motion } from "framer-motion";

const floatingItems = [
  { emoji: "🐦", top: "10%", left: "8%", delay: 0, duration: 6 },
  { emoji: "🐦", top: "25%", left: "85%", delay: 1, duration: 7 },
  { emoji: "🐦", top: "60%", left: "5%", delay: 2, duration: 5 },
  { emoji: "🐦", top: "75%", left: "90%", delay: 0.5, duration: 8 },
  { emoji: "🇰🇷", top: "15%", left: "75%", delay: 1.5, duration: 6.5 },
  { emoji: "🇻🇳", top: "40%", left: "92%", delay: 2.5, duration: 7.5 },
  { emoji: "🇰🇷", top: "85%", left: "12%", delay: 0.8, duration: 5.5 },
  { emoji: "🇻🇳", top: "50%", left: "3%", delay: 3, duration: 6 },
  { emoji: "⚾", top: "30%", left: "95%", delay: 1.2, duration: 7 },
  { emoji: "⚾", top: "70%", left: "2%", delay: 2.2, duration: 6.5 },
];

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-3xl md:text-4xl"
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          {item.emoji}
        </motion.div>
      ))}
    </div>
  );
}
