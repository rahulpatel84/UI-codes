import { Component } from "@/components/ui/gradient-bar-hero-section";
import { Component as Hero4 } from "@/components/ui/gradient-bar-hero4-section";
import { Component as Hero5 } from "@/components/ui/gradient-bar-hero5-section";
import { Component as Hero6 } from "@/components/ui/gradient-bar-hero6-section";
import { Component as Hero7 } from "@/components/ui/gradient-bar-hero7-section";
import { Component as Hero8 } from "@/components/ui/gradient-bar-hero8-section";
import { Component as Hero9 } from "@/components/ui/gradient-bar-hero9-section";
import { GradientBarSection } from "@/components/ui/gradient-bar-section";
import { GradientBarSectionWhite } from "@/components/ui/gradient-bar-section-white";

export default function Home() {
  return (
    <div className="w-full bg-black">
      <Component />
      <GradientBarSection />
      <GradientBarSectionWhite />
      <Hero4 />
      <Hero5 />
      <Hero6 />
      <Hero7 />
      <Hero8 />
      <Hero9 />
    </div>
  );
}
