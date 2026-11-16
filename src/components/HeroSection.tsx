"use client";

import React, { useState } from "react";
import {
  Server,
  Building2,
  Cpu,
  ArrowRight,
  Download,
  FileText,
  CheckCircle2,
  Layers,
  Database,
  Code2,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolioData";

const FOCUS_PILLARS = [
  {
    id: "middleware",
    badge: "Primary Focus • 01",
    title: "Middleware R&D Engineering",
    org: "PT Care Technologies — Middleware R&D Dept",
    icon: Server,
    accent: "from-blue-600 to-cyan-500",
    description:
      "Architecting and maintaining enterprise middleware services, REST/SOAP APIs, and relational SQL Server data pipelines using C#, Visual Basic (VB.NET), PHP (Laravel), and JavaScript.",
    tags: ["C# (.NET)", "Visual Basic", "PHP Laravel", "SQL Server (SSMS)", "REST API", "Postman"],
  },
  {
    id: "zurich",
    badge: "Client Assignment • 02",
    title: "Enterprise IT & Business Analysis",
    org: "Dedicated to Zurich Indonesia — IT & BA Team",
    icon: Building2,
    accent: "from-indigo-600 to-blue-500",
    description:
      "Bridging complex enterprise insurance business workflows with resilient middleware architectures, API data contracts, system integration analysis, and end-to-end validation.",
    tags: [
      "Zurich Indonesia",
      "IT & Business Analysis",
      "Enterprise Integration",
      "API Contracts",
      "System Validation",
    ],
  },
  {
    id: "ai-bonus",
    badge: "Bonus Superpower • 03",
    title: "Production AI & ML Engineering",
    org: "Top 1 MVP Graduate (97.93) & Ex-AI Engineer",
    icon: Cpu,
    accent: "from-violet-600 to-fuchsia-500",
    description:
      "Proven capability in building production-grade RAG Agentic Chatbots (AWS Bedrock + Qdrant, 95%+ precision), OCR pipelines (-70% manual effort), and LSTM forecasting engines.",
    tags: ["AWS Bedrock", "Qdrant RAG", "LangChain", "FastAPI", "YOLOv8", "PyTorch / TensorFlow"],
  },
];

export default function HeroSection() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const activePillar = FOCUS_PILLARS[activePillarIndex];

  return (
    <section
      id="overview"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-blue-600/15 dark:bg-blue-600/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-80 h-80 rounded-full bg-indigo-500/10 dark:bg-indigo-500/15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Interactive Focus Switcher */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/25 text-blue-700 dark:text-blue-300 text-xs font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-semibold">Current:</span>
              <span>{PROFILE_DATA.statusBadge}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-widest text-blue-600 dark:text-blue-400 font-semibold">
                Enterprise Middleware • System Integration • IT & Business Analysis
              </p>
              <h1 className="font-display text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                {PROFILE_DATA.name},{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400">
                  {PROFILE_DATA.degree}
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-slate-700 dark:text-slate-200">
                {PROFILE_DATA.primaryTitle}{" "}
                <span className="text-slate-400 dark:text-slate-500 font-normal">
                  |
                </span>{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  IT & Business Analyst
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                {PROFILE_DATA.aboutShort}
              </p>
            </div>

            {/* Interactive Focus Lens Switcher ("Interaktif dipencet-pencet") */}
            <div className="rounded-2xl bg-white/90 dark:bg-[#0d152a]/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800/90 p-4 sm:p-5 shadow-xl shadow-slate-900/5 dark:shadow-black/30 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  Interactive Capability Lens (Click to Switch)
                </span>
                <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400">
                  {activePillar.badge}
                </span>
              </div>

              {/* Pillar Selector Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {FOCUS_PILLARS.map((pillar, idx) => {
                  const Icon = pillar.icon;
                  const isSelected = activePillarIndex === idx;
                  return (
                    <button
                      key={pillar.id}
                      onClick={() => setActivePillarIndex(idx)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-xl border text-left transition-all duration-200 active:scale-[0.98] ${
                        isSelected
                          ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/25"
                          : "bg-slate-100/70 dark:bg-slate-900/70 border-slate-200/70 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-500/40"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold truncate">
                          {idx === 0
                            ? "Middleware R&D"
                            : idx === 1
                            ? "Zurich IT & BA"
                            : "AI/ML Bonus"}
                        </div>
                        <div
                          className={`text-[10px] truncate ${
                            isSelected
                              ? "text-blue-100"
                              : "text-slate-500 dark:text-slate-400"
                          }`}
                        >
                          {idx === 0
                            ? "Care Technologies"
                            : idx === 1
                            ? "Dedicated Team"
                            : "Top 1 MVP Track"}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Pillar Content */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-display font-bold text-slate-900 dark:text-white">
                    {activePillar.title}
                  </h3>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {activePillar.org}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activePillar.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activePillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      <CheckCircle2 className="w-3 h-3 text-blue-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all active:scale-95"
              >
                <span>Explore Dual-Track Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#case-studies"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-800 text-sm font-semibold transition-all active:scale-95"
              >
                <Layers className="w-4 h-4 text-blue-500" />
                <span>Interactive Slide Decks</span>
              </a>
              <a
                href={PROFILE_DATA.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 text-sm font-medium transition-all active:scale-95"
              >
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>Download CV</span>
                <Download className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Column: Portrait Card & Floating Interactive Badges */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Backplate */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-cyan-400/30 blur-xl opacity-80" />

              <div className="relative rounded-3xl bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-[#0f1930] dark:via-[#0b1224] dark:to-[#070b16] border border-slate-200/90 dark:border-slate-800 overflow-hidden shadow-2xl flex flex-col justify-between">
                {/* Top Header Inside Portrait Card */}
                <div className="p-4 sm:p-5 pb-3 border-b border-slate-200/70 dark:border-slate-800/80 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                      <span className="ml-1 text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
                        Adhitya Fajar Rachmadi, S.T.
                      </span>
                    </div>
                    <a
                      href={PROFILE_DATA.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-blue-600 dark:text-blue-400 hover:underline shrink-0 whitespace-nowrap"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Floating Role Chips */}
                  <div className="relative z-20 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActivePillarIndex(0)}
                      className="px-2.5 py-1.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 shadow-sm text-[11px] font-semibold text-slate-800 dark:text-slate-200 flex items-center justify-center gap-1.5 hover:border-blue-500 transition-all truncate"
                    >
                      <Code2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span className="truncate">Middleware R&D</span>
                    </button>
                    <button
                      onClick={() => setActivePillarIndex(1)}
                      className="px-2.5 py-1.5 rounded-xl bg-blue-600/95 text-white shadow-sm text-[11px] font-semibold flex items-center justify-center gap-1.5 hover:bg-blue-500 transition-all truncate"
                    >
                      <Database className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">Dedicated @ Zurich</span>
                    </button>
                  </div>
                </div>

                {/* Waist-Up Portrait Image (410px Height to Fill Card Nicely) */}
                <div
                  className="relative flex justify-center items-end pt-2 px-4 overflow-hidden"
                  style={{ height: "410px", minHeight: "410px", maxHeight: "410px" }}
                >
                  <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-blue-500/20 blur-2xl" />
                  <img
                    src={PROFILE_DATA.profilePhoto}
                    alt="Adhitya Fajar Rachmadi, S.T."
                    style={{ height: "400px", maxHeight: "400px", width: "auto" }}
                    className="relative z-10 object-contain object-bottom drop-shadow-[0_20px_25px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                {/* Flush Bottom Card Footer */}
                <div className="relative z-20 bg-white/95 dark:bg-[#070e22]/95 backdrop-blur-xl border-t border-slate-200/90 dark:border-slate-800 px-5 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-900 dark:text-white truncate">
                        PT Care Technologies × Zurich Indonesia
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono truncate">
                        Middleware R&D Dept • IT & Business Analyst Team
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-[10px] font-mono font-semibold shrink-0">
                      Sept 2026 – Present
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom KPI Bar (Always Visible, No Click Needed) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROFILE_DATA.heroStats.map((stat) => (
            <div
              key={stat.label}
              className="text-left p-5 rounded-2xl border bg-white/85 dark:bg-[#0b1328]/85 border-slate-200/80 dark:border-blue-500/20 shadow-sm"
            >
              <div className="text-xl sm:text-2xl font-display font-bold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {stat.detail}
              </div>
              <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {stat.expandedText}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
