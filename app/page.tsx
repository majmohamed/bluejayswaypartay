import Hero from "@/components/Hero";
import Details from "@/components/Details";
import Cast from "@/components/Cast";
import RSVP from "@/components/RSVP";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <Details />
      <Cast />
      <RSVP />
    </main>
  );
}
