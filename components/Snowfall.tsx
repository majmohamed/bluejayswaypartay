"use client";

export default function Snowfall() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Snowflakes */}
      {[...Array(10)].map((_, i) => (
        <div key={i} className="snowflake">❄️</div>
      ))}
    </div>
  );
}
