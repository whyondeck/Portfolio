import React from "react";
import HeroSection from "@/components/sections/hero-section";
import WhoAreWe from "@/components/sections/who-are-we";
import WhatAreWeBuilding from "@/components/sections/what-building";
import ScrollSectionWrapper from "@/lib/scroll-wrapper";
import { RetroGrid } from "@/components/magicui/retro-grid";

export default function Page() {
  return (
    <div className=" overflow-x-hidden ">
      <div className="relative w-full overflow-hidden">
        {/* Hero Section with Retro Design */}
        <div className="relative h-screen w-full overflow-hidden">
          <RetroGrid />
          <ScrollSectionWrapper animation="fadeScale">
            <HeroSection />
          </ScrollSectionWrapper>
        </div>

        {/* Other Sections without Retro Design */}
        <ScrollSectionWrapper animation="fadeUp">
          <WhoAreWe />
        </ScrollSectionWrapper>

        <ScrollSectionWrapper animation="fadeScale">
          <WhatAreWeBuilding />
        </ScrollSectionWrapper>
      </div>
    </div>
  );
}
