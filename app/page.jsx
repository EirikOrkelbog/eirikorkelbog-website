import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Solution from "@/components/Solution";
// import WhatsIncluded from "@/components/WhatsIncluded";
import { Pricing } from "@/components/Pricing";
import { About } from "@/components/About";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-40">
      <Hero />
      {/* <Services /> */}
      {/* <Work /> */}
      {/* <WhatsIncluded /> */}
      <Solution />
      <Pricing />
      <About />
      <Cta />
    </main>
  );
}