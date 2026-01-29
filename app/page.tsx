import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Cast from "@/components/Cast";
import RSVP from "@/components/RSVP";
import Snowfall from "@/components/Snowfall";
import FloatingElements from "@/components/FloatingElements";
import SnowButton from "@/components/SnowButton";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background effects */}
      <Snowfall />
      <FloatingElements />

      {/* Main content */}
      <div className="relative z-20">
        <Hero />
        <Details />
        <Cast />
        <RSVP />
      </div>

      {/* Easter egg button */}
      <SnowButton />
    </main>
  );
}
