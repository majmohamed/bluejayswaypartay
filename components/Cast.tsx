"use client";

import { motion } from "framer-motion";

const cast = [
  {
    emoji: "🍰",
    name: "Harrison",
    role: "Dessert King",
    description: "Making tiramisu because he's fancy like that",
  },
  {
    emoji: "🍷",
    name: "Michelle",
    role: "Wine Legend",
    description: "Bringing TWO bottles of wine (we see you)",
  },
  {
    emoji: "👩‍🍳",
    name: "Inara",
    role: "Head Chef",
    description: "Doing her absolute best to cook some food",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Cast() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold text-charcoal text-center mb-8">
        The Cast
      </h2>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-lg mx-auto space-y-4"
      >
        {cast.map((person) => (
          <motion.div
            key={person.name}
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
          >
            <span className="text-4xl">{person.emoji}</span>
            <div>
              <h3 className="text-xl font-bold text-charcoal">{person.name}</h3>
              <p className="text-sm text-coral font-medium">{person.role}</p>
              <p className="text-charcoal/70 mt-1">{person.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
