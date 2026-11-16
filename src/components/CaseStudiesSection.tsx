"use client";

import React, { useState, useEffect } from "react";
import {
  Layers,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  Maximize2,
  X,
  Play,
  Pause,
  FolderGit2,
  Image as ImageIcon,
} from "lucide-react";
import {
  CASE_STUDIES,
  OTHER_PROJECTS,
  CaseStudyProject,
} from "@/data/portfolioData";

export default function CaseStudiesSection() {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [showSecondaryImg, setShowSecondaryImg] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<{
    src: string;
    title: string;
  } | null>(null);
  const [repoSlideIndex, setRepoSlideIndex] = useState(0);

  const currentCase: CaseStudyProject = CASE_STUDIES[activeCaseIndex];
  const slides = currentCase.slides;
  const currentSlide = slides[activeSlideIndex] || slides[0];

  useEffect(() => {
    setShowSecondaryImg(false);
  }, [activeCaseIndex, activeSlideIndex]);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [autoPlay, slides.length]);

  const handleCaseSwitch = (index: number) => {
    setActiveCaseIndex(index);
    setActiveSlideIndex(0);
    setShowSecondaryImg(false);
  };

  const displayedImage =
    showSecondaryImg && currentSlide.secondaryImage
      ? currentSlide.secondaryImage
      : currentSlide.image;

  return (
    <section
      id="case-studies"
      className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">
              Featured Work
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              End-to-end API orchestration, enterprise dashboard integration, and applied AI systems.
            </p>
          </div>

          {/* Case Study Switcher Tabs */}
          <div className="flex flex-wrap gap-2">
            {CASE_STUDIES.map((cs, idx) => {
              const isSelected = activeCaseIndex === idx;
              return (
                <button
                  key={cs.id}
                  onClick={() => handleCaseSwitch(idx)}
                  className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold border transition-all active:scale-95 ${
                    isSelected
                      ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/25"
                      : "bg-white dark:bg-[#0b1224] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-500/40"
                  }`}
                >
                  <span className="font-mono opacity-75 mr-1.5">
                    0{idx + 1}.
                  </span>
                  {idx === 0
                    ? "SmartAssist Enterprise Chatbot"
                    : "AI Stock Trading Engine"}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Slide Deck Card */}
        <div className="rounded-3xl bg-white dark:bg-[#0c1428] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
          {/* Top Deck Bar */}
          <div className="p-5 sm:p-6 bg-slate-50/80 dark:bg-[#091020] border-b border-slate-200 dark:border-slate-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-600 text-white">
                  {currentCase.featuredBadge}
                </span>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400">
                  {currentCase.category}
                </span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {currentCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                {currentCase.subtitle}
              </p>
            </div>

            {/* Key Metrics Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              {currentCase.metrics.map((m) => (
                <div
                  key={m.label}
                  className="px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800"
                >
                  <div className="text-[10px] font-mono uppercase text-slate-500 dark:text-slate-400">
                    {m.label}
                  </div>
                  <div className="text-xs sm:text-sm font-display font-bold text-blue-600 dark:text-blue-400">
                    {m.value}
                  </div>
                </div>
              ))}
              <a
                href={currentCase.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-900 dark:bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Interactive Slide Stepper Tabs */}
          <div className="px-5 sm:px-6 py-3 bg-slate-100/70 dark:bg-slate-950/60 border-b border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5">
              {slides.map((s, idx) => {
                const isCurrent = activeSlideIndex === idx;
                return (
                  <button
                    key={s.title}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all ${
                      isCurrent
                        ? "bg-blue-600 text-white font-semibold shadow-sm"
                        : "bg-white/70 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200/60 dark:border-slate-800"
                    }`}
                  >
                    Slide 0{idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Slide Deck Playback & Arrow Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border transition-all ${
                  autoPlay
                    ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                    : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800"
                }`}
              >
                {autoPlay ? (
                  <>
                    <Pause className="w-3.5 h-3.5" />
                    <span>Auto-Slide On</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5" />
                    <span>Auto-Slide</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-1 bg-white dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800">
                <button
                  onClick={() =>
                    setActiveSlideIndex(
                      (prev) => (prev - 1 + slides.length) % slides.length
                    )
                  }
                  aria-label="Previous Slide"
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono px-2 text-slate-600 dark:text-slate-300">
                  {activeSlideIndex + 1} / {slides.length}
                </span>
                <button
                  onClick={() =>
                    setActiveSlideIndex((prev) => (prev + 1) % slides.length)
                  }
                  aria-label="Next Slide"
                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Slide Body: Left Visual Viewer + Right Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-8 items-center">
            {/* Left 7 Cols: Interactive Image Stage */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative group rounded-2xl bg-slate-950 border border-slate-200 dark:border-slate-800 overflow-hidden aspect-[16/10] flex items-center justify-center">
                <img
                  src={displayedImage}
                  alt={currentSlide.title}
                  className="w-full h-full object-contain p-2 sm:p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Fullscreen Zoom Trigger */}
                <button
                  onClick={() =>
                    setLightboxImg({
                      src: displayedImage,
                      title: `${currentCase.title} — ${currentSlide.title}`,
                    })
                  }
                  className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/85 hover:bg-blue-600 text-white text-xs font-mono backdrop-blur-md border border-white/15 shadow-lg transition-all"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Fullscreen</span>
                </button>

                {/* Bottom Overlay Slide Badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-slate-900/85 text-white text-[11px] font-mono backdrop-blur-md border border-white/10">
                  {currentSlide.badge}
                </div>
              </div>

              {/* Dual-Screenshot Switcher if slide has 2 images */}
              {currentSlide.secondaryImage && (
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                    <ImageIcon className="w-3.5 h-3.5 text-blue-500" />
                    This slide contains 2 production screenshots:
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setShowSecondaryImg(false)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        !showSecondaryImg
                          ? "bg-blue-600 text-white"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      View #1
                    </button>
                    <button
                      onClick={() => setShowSecondaryImg(true)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                        showSecondaryImg
                          ? "bg-blue-600 text-white"
                          : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      }`}
                    >
                      View #2
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 Cols: Slide Details & Architecture Notes */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <span className="inline-block text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                  {currentSlide.badge}
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-snug">
                  {currentSlide.title}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {currentSlide.description}
                </p>
              </div>

              <ul className="space-y-2.5">
                {currentSlide.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-[11px] font-mono uppercase text-slate-500 dark:text-slate-400">
                  Architecture & Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentCase.techStack.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Slide Navigation Buttons */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={() =>
                    setActiveSlideIndex(
                      (prev) => (prev - 1 + slides.length) % slides.length
                    )
                  }
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 hover:border-blue-500/50 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-all active:scale-95"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Slide</span>
                </button>
                <button
                  onClick={() =>
                    setActiveSlideIndex((prev) => (prev + 1) % slides.length)
                  }
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition-all active:scale-95"
                >
                  <span>Next Slide</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Repositories Interactive Carousel */}
        <div className="mt-16 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 dark:text-blue-400">
                <FolderGit2 className="w-4 h-4" />
                <span>ADDITIONAL OPEN-SOURCE & AI REPOSITORIES</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
                More Applied Engineering Projects
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setRepoSlideIndex(
                    (prev) =>
                      (prev - 1 + OTHER_PROJECTS.length) % OTHER_PROJECTS.length
                  )
                }
                aria-label="Highlight Previous Project"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-blue-500"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                Spotlight {repoSlideIndex + 1} / {OTHER_PROJECTS.length}
              </span>
              <button
                onClick={() =>
                  setRepoSlideIndex((prev) => (prev + 1) % OTHER_PROJECTS.length)
                }
                aria-label="Highlight Next Project"
                className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:border-blue-500"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {OTHER_PROJECTS.map((proj, idx) => {
              const isFocused = repoSlideIndex === idx;
              return (
                <div
                  key={proj.id}
                  onClick={() => setRepoSlideIndex(idx)}
                  className={`cursor-pointer rounded-2xl border p-4 flex flex-col justify-between transition-all duration-200 ${
                    isFocused
                      ? "bg-white dark:bg-[#101b36] border-blue-500 ring-2 ring-blue-500/25 shadow-xl -translate-y-1"
                      : "bg-white/80 dark:bg-[#0b1224]/80 border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40"
                  }`}
                >
                  <div>
                    <div className="relative h-32 rounded-xl bg-slate-950 overflow-hidden mb-3 border border-slate-200/60 dark:border-slate-800">
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] font-mono uppercase text-blue-600 dark:text-blue-400 font-semibold">
                      {proj.category}
                    </span>
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mt-0.5">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1.5 line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-200/70 dark:border-slate-800/80 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      {proj.techStack.slice(0, 2).join(" • ")}
                    </span>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full rounded-3xl bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800">
              <span className="text-xs sm:text-sm font-mono text-white font-semibold truncate">
                {lightboxImg.title}
              </span>
              <button
                onClick={() => setLightboxImg(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 max-h-[80vh] flex items-center justify-center bg-slate-950">
              <img
                src={lightboxImg.src}
                alt={lightboxImg.title}
                className="max-h-[74vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
