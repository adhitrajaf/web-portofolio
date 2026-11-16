"use client";

import React, { useState } from "react";
import {
  Cpu,
  Database,
  Server,
  Wrench,
  LayoutGrid,
  SlidersHorizontal,
} from "lucide-react";
import { SKILLS } from "@/data/portfolioData";

const SKILL_CATEGORIES = [
  {
    id: "middleware",
    label: "Middleware, Backend & Languages",
    badge: "Core Focus",
    icon: Server,
  },
  {
    id: "database",
    label: "SQL Server, Data & Cloud/MLOps",
    badge: "Data & Infra",
    icon: Database,
  },
  {
    id: "aiml",
    label: "ML Frameworks & AI",
    badge: "AI Capability",
    icon: Cpu,
  },
  {
    id: "industrial",
    label: "Electrical & Industrial PLC/DCS",
    badge: "Hardware",
    icon: Wrench,
  },
  {
    id: "all",
    label: `All Personal Skills (${SKILLS.length})`,
    badge: "Full Arsenal",
    icon: LayoutGrid,
  },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("middleware");
  const [openSkills, setOpenSkills] = useState<string[]>(["C# (.NET)"]);

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  const toggleSkill = (name: string) => {
    setOpenSkills((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-blue-500/15 bg-slate-100/50 dark:bg-[#080d1a]/75 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 mb-10">
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Personal Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            Programming Languages, Enterprise Middleware &amp; APIs, Databases,
            AI/ML Frameworks, Cloud/MLOps, and Industrial Control Systems. Click any skill card to expand its details directly inside the card.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 mb-8">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 active:scale-[0.98] ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/20"
                    : "bg-white dark:bg-[#0b1224] border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <Icon
                    className={`w-4 h-4 ${
                      isSelected ? "text-white" : "text-blue-500"
                    }`}
                  />
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {cat.badge}
                  </span>
                </div>
                <div className="text-xs font-bold leading-snug">{cat.label}</div>
              </button>
            );
          })}
        </div>

        {/* Inline Expandable Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 items-start">
          {filteredSkills.map((skill) => {
            const isOpen = openSkills.includes(skill.name);
            return (
              <button
                key={skill.name}
                onClick={() => toggleSkill(skill.name)}
                className={`group relative flex flex-col justify-between p-4 rounded-2xl border transition-all duration-200 text-center ${
                  isOpen
                    ? "bg-white dark:bg-[#101d3b] border-blue-500 ring-2 ring-blue-500/30 shadow-xl sm:col-span-2"
                    : "bg-white/90 dark:bg-[#0b1224]/90 border-slate-200/80 dark:border-slate-800/90 hover:border-blue-500/50 hover:-translate-y-0.5"
                }`}
              >
                {skill.highlight && (
                  <span
                    className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-emerald-500"
                    title="Core Middleware Stack"
                  />
                )}

                <div className="w-full h-16 rounded-xl bg-slate-50 dark:bg-white/95 p-2.5 flex items-center justify-center border border-slate-100 dark:border-slate-200/20 mb-3">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="max-h-11 max-w-[120px] object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-1 w-full">
                  <div className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {skill.name}
                  </div>
                </div>

                {isOpen ? (
                  <div className="mt-3 pt-3 border-t border-slate-200/70 dark:border-blue-500/30 text-left space-y-1.5 w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-emerald-500 font-semibold">
                        ● Production Usage
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Close ▲
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-200 leading-relaxed">
                      {skill.roleUsage}
                    </p>
                  </div>
                ) : (
                  <div className="mt-2 text-[10px] font-mono text-slate-400 dark:text-slate-500 group-hover:text-blue-400 w-full">
                    Click for details ▼
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
