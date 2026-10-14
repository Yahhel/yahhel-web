'use client'

import { Footer } from "../footer";
import { Navbar } from "../navbar";
import { AudienceCards } from "./audience-cards";
import { CTA } from "./cta";
import { FeaturesGrid } from "./features-grid";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { StatsBar } from "./stats-bar";
import { Testimonial } from "./testimonial";
import { WhatIsSection } from "./what-is";


export default function HomeScreen() {
  return (
    <div className="bg-[#FAF8F5]">
      <Navbar />
      <Hero />
      <StatsBar />
      <WhatIsSection />
      <AudienceCards />
      <FeaturesGrid />
      <HowItWorks />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  )
}