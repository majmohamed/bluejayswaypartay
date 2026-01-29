"use client";

import { motion } from "framer-motion";
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

const floatingItems = [
  { type: "bluejay", top: "10%", left: "8%", delay: 0, duration: 6 },
  { type: "bluejay", top: "25%", left: "85%", delay: 1, duration: 7 },
  { type: "bluejay", top: "60%", left: "5%", delay: 2, duration: 5 },
  { type: "bluejay", top: "75%", left: "90%", delay: 0.5, duration: 8 },
  { type: "flag", country: "kr", top: "15%", left: "75%", delay: 1.5, duration: 6.5 },
  { type: "flag", country: "vn", top: "40%", left: "92%", delay: 2.5, duration: 7.5 },
  { type: "flag", country: "ca", top: "20%", left: "3%", delay: 0.8, duration: 5.5 },
  { type: "flag", country: "gb", top: "50%", left: "95%", delay: 3, duration: 6 },
  { type: "flag", country: "kr", top: "85%", left: "12%", delay: 1.2, duration: 7 },
  { type: "flag", country: "vn", top: "70%", left: "2%", delay: 2.2, duration: 6.5 },
  { type: "flag", country: "ca", top: "35%", left: "88%", delay: 1.8, duration: 5.8 },
  { type: "flag", country: "gb", top: "80%", left: "85%", delay: 2.8, duration: 7.2 },
  { type: "emoji", content: "⚾", top: "30%", left: "95%", delay: 1.2, duration: 7 },
  { type: "emoji", content: "⚾", top: "65%", left: "8%", delay: 2.2, duration: 6.5 },
];

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
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
          {item.type === "bluejay" ? (
            <Image src="/bluejay.png" alt="Blue Jay" width={36} height={36} />
          ) : item.type === "emoji" ? (
            <span className="text-3xl md:text-4xl">{item.content}</span>
          ) : (
            <Flag country={item.country!} size={32} />
          )}
        </motion.div>
      ))}
    </div>
  );
}
