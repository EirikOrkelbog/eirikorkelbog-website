import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Solution from "@/components/Solution";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-40">
      <Hero />
      <Testimonial />
      <Solution />
      <Pricing />
      <About />
      <Cta />
    </main>
  );
}