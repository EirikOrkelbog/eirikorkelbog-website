import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Testimonial from "@/components/Testimonial";
import How from "@/components/How";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-40">
      <Hero />
      <Problem />
      <Testimonial />
      <How />
      <Portfolio />
      <Pricing />
      <About />
      <FAQ />
      <Cta />
    </main>
  );
}