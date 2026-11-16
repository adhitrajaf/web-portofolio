"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { EXPERIENCES, EDUCATION_DATA } from "@/data/portfolioData";

const FILTER_TABS = [
  { id: "all", label: "All Roles (5)" },
  { id: "middleware", label: "Middleware & Enterprise (Current)" },
  { id: "ai", label: "AI Engineering" },
  { id: "engineering", label: "Industrial & IoT" },
];

export default function ExperienceSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [openIds, setOpenIds] = useState<string[]>([
    "zurich-indonesia",
    "care-technologies",
  ]);

  const filteredExperiences =
    selectedFilter === "all"
      ? EXPERIENCES
      : EXPERIENCES.filter((exp) => exp.category === selectedFilter);

  const toggleCard = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="experience"
      className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-blue-500/15 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Part 1: Education (Placed Right Above Work Experience, Always Visible) */}
        <div id="education">
          <div className="space-y-2 mb-8">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Education
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Academic background in Electrical Engineering (Cum Laude, 3.80 GPA) and intensive AI/ML Engineering Bootcamp (Top 1 MVP Graduate).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.institution}
                className="rounded-2xl bg-white dark:bg-[#0c1428] border border-slate-200 dark:border-blue-500/20 p-6 sm:p-7 shadow-lg space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-600 text-white">
                    {edu.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                    {edu.period}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                    {edu.degree}
                  </p>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </p>
                </div>
                <ul className="space-y-2 pt-3 border-t border-slate-200/70 dark:border-slate-800">
                  {edu.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Work Experience */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Work Experience
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                Click any role below to expand its full responsibilities, metrics,
                and technology stack directly inside the card.
              </p>
            </div>

          <div className="flex flex-wrap gap-1.5 bg-slate-100 dark:bg-[#0b1224] p-1.5 rounded-2xl border border-slate-200/80 dark:border-blue-500/20">
            {FILTER_TABS.map((tab) => {
              const active = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Inline Expandable Experience Cards */}
        <div className="space-y-4">
          {filteredExperiences.map((exp) => {
            const isOpen = openIds.includes(exp.id);
            return (
              <div
                key={exp.id}
                className={`rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "bg-white dark:bg-[#0c152b] border-blue-500/80 shadow-xl shadow-blue-600/10"
                    : "bg-white/75 dark:bg-[#0b1224]/75 border-slate-200/80 dark:border-slate-800/90 hover:border-blue-500/40"
                }`}
              >
                <button
                  onClick={() => toggleCard(exp.id)}
                  className="w-full text-left p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold ${
                          exp.isCurrent
                            ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                            : "bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}
                      >
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      {exp.clientBadge && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                          {exp.clientBadge}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-400">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2 pt-0.5">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </h3>
                      <span className="text-slate-400">—</span>
                      <span className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                        {exp.role}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-500" />
                      {exp.departmentOrTeam}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold border transition-all ${
                        isOpen
                          ? "bg-blue-600 text-white border-blue-500"
                          : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      {isOpen ? (
                        <>
                          <span>Hide Details</span>
                          <ChevronUp className="w-3.5 h-3.5" />
                        </>
                      ) : (
                        <>
                          <span>View Details</span>
                          <ChevronDown className="w-3.5 h-3.5" />
                        </>
                      )}
                    </span>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-200/80 dark:border-slate-800/90 space-y-5">
                    {exp.metrics && exp.metrics.length > 0 && (
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                        {exp.metrics.map((m) => (
                          <div
                            key={m.label}
                            className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#080e1e] border border-slate-200/70 dark:border-blue-500/20"
                          >
                            <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                              {m.label}
                            </div>
                            <div className="text-sm sm:text-base font-display font-bold text-blue-600 dark:text-blue-400 mt-0.5">
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="space-y-2.5">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        ROLE OVERVIEW &amp; KEY RESPONSIBILITIES
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                        {exp.summary}
                      </p>
                      <ul className="space-y-2.5 pt-1">
                        {exp.highlights.map((bullet, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono uppercase text-slate-400 flex items-center gap-1 mr-1">
                        <Layers className="w-3.5 h-3.5 text-blue-500" />
                        Tech Stack:
                      </span>
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
