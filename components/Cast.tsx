"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Using Twemoji CDN for consistent flag rendering
const Flag = ({ country, size = 20 }: { country: string; size?: number }) => {
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

const cast = [
  {
    emoji: "🍰",
    name: "Harrison",
    role: "Dessert King",
    description: "Making tiramisu because he's fancy like that ✨",
    flag: "kr",
  },
  {
    emoji: "🍷",
    name: "Michelle",
    role: "Wine Legend",
    description: "Bringing TWO bottles of wine (we see you 👀)",
    flag: "vn",
  },
  {
    emoji: "👩‍🍳",
    name: "Inara",
    role: "Head Chef",
    description: "Doing her absolute best to cook some food 😅",
    flag: "ca",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 100 },
  },
};

export default function Cast() {
  return (
    <section className="px-6 py-12">
      <motion.h2
        className="text-4xl font-extrabold text-jays-navy text-center mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        🌟 The Cast 🌟
      </motion.h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-lg mx-auto space-y-5"
      >
        {cast.map((person, index) => (
          <motion.div
            key={person.name}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              rotate: index % 2 === 0 ? 2 : -2,
              transition: { type: "spring", stiffness: 400 },
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex items-start gap-4 border-2 border-jays-blue/10 hover:border-jays-blue/30 hover:shadow-xl transition-all cursor-pointer"
          >
            <motion.span
              className="text-5xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            >
              {person.emoji}
            </motion.span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-jays-navy">
                  {person.name}
                </h3>
              </div>
              <p className="text-sm text-jays-red font-bold">{person.role}</p>
              <p className="text-jays-navy/70 mt-1">{person.description}</p>
            </div>
          </motion.div>
        ))}

        {/* NPC Card */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            transition: { type: "spring", stiffness: 400 },
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex items-start gap-4 border-2 border-jays-blue/10 hover:border-jays-blue/30 hover:shadow-xl transition-all cursor-pointer"
        >
          <motion.span
            className="text-5xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
          >
            👤
          </motion.span>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-jays-navy">
                Everyone Else
              </h3>
            </div>
            <p className="text-sm text-jays-red font-bold">Supporting Cast</p>
            <p className="text-jays-navy/70 mt-1">the rest of us are just NPCs i think</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
