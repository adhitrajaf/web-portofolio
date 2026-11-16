import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import CredentialsSection from "@/components/CredentialsSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#060a15] text-slate-900 dark:text-slate-100 bg-grid-pattern">
      <Navbar />
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <CaseStudiesSection />
      <CredentialsSection />
      <ContactSection />
    </main>
  );
}
