import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-40">
      <Hero />
      <Services />
      <Work />
      <Cta />
    </main>
  );
}