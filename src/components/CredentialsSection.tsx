"use client";

import React, { useState } from "react";
import {
  Award,
  GraduationCap,
  Users,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Maximize2,
  X,
  Calendar,
  MapPin,
} from "lucide-react";
import {
  CERTIFICATIONS,
  EDUCATION_DATA,
  LEADERSHIP_DATA,
  CertificationItem,
} from "@/data/portfolioData";

export default function CredentialsSection() {
  const [activeCertIdx, setActiveCertIdx] = useState(0);
  const [activeTab, setActiveTab] = useState<"education" | "leadership">(
    "education"
  );
  const [modalCert, setModalCert] = useState<CertificationItem | null>(null);

  const currentCert = CERTIFICATIONS[activeCertIdx];

  return (
    <section
      id="credentials"
      className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-100/50 dark:bg-[#080d1a]/70 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Part 1: Interactive Certificate Slide Deck */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-blue-600 dark:text-cyan-400 font-semibold">
                Credentials
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Certifications &amp; Honors
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
                Includes TOEFL 597, EF SET C1 Advanced, Top 1 MVP AI/ML
                Graduation, and Kampus Merdeka MSIB Batch 5 Honors.
              </p>
            </div>

            {/* Slide Controls */}
            <div className="flex items-center gap-2 self-start sm:self-end bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800">
              <button
                onClick={() =>
                  setActiveCertIdx(
                    (prev) =>
                      (prev - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length
                  )
                }
                aria-label="Previous Certificate"
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2 text-slate-600 dark:text-slate-300">
                Certificate {activeCertIdx + 1} / {CERTIFICATIONS.length}
              </span>
              <button
                onClick={() =>
                  setActiveCertIdx((prev) => (prev + 1) % CERTIFICATIONS.length)
                }
                aria-label="Next Certificate"
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Certificate Showcase Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left 6 Cols: Featured Certificate Slide */}
            <div className="lg:col-span-6">
              <div className="relative group rounded-3xl bg-white dark:bg-[#0c1428] border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xl">
                <div className="relative h-72 sm:h-80 rounded-2xl bg-slate-100 dark:bg-slate-950 flex items-center justify-center overflow-hidden border border-slate-200/70 dark:border-slate-800">
                  <img
                    src={currentCert.image}
                    alt={currentCert.title}
                    className="max-h-full max-w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                  />
                  <button
                    onClick={() => setModalCert(currentCert)}
                    className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/85 hover:bg-blue-600 text-white text-xs font-mono backdrop-blur-md transition-all"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Enlarge</span>
                  </button>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-600 text-white">
                    {currentCert.scoreOrBadge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {currentCert.issuer} • {currentCert.date}
                  </span>
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-2">
                  {currentCert.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {currentCert.description}
                </p>
              </div>
            </div>

            {/* Right 6 Cols: Clickable Selector Cards */}
            <div className="lg:col-span-6 space-y-2.5">
              {CERTIFICATIONS.map((cert, idx) => {
                const isSelected = activeCertIdx === idx;
                return (
                  <button
                    key={cert.id}
                    onClick={() => setActiveCertIdx(idx)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border flex items-center gap-4 transition-all duration-200 active:scale-[0.99] ${
                      isSelected
                        ? "bg-white dark:bg-[#101c38] border-blue-500 shadow-lg ring-1 ring-blue-500/30"
                        : "bg-white/70 dark:bg-[#0b1224]/70 border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/40"
                    }`}
                  >
                    <div className="w-16 h-14 rounded-xl bg-slate-100 dark:bg-slate-900 p-1 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-800 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-mono text-blue-600 dark:text-blue-400 font-semibold truncate">
                          {cert.scoreOrBadge}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 shrink-0">
                          {cert.date}
                        </span>
                      </div>
                      <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate mt-0.5">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {cert.issuer}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Part 2: Organizational Leadership */}
        <div className="pt-8 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="mb-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Organizational &amp; Leadership Experience
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              University leadership and robotics team track records at Universitas Sebelas Maret (UNS).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LEADERSHIP_DATA.map((item) => (
              <div
                key={item.role + item.organization}
                className="rounded-2xl bg-white dark:bg-[#0c1428] border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-md space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {item.period}
                  </span>
                </div>
                <h4 className="font-display text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {item.role}
                </h4>
                <div className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {item.organization}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {modalCert && (
        <div
          onClick={() => setModalCert(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full rounded-3xl bg-slate-900 border border-slate-700 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800">
              <span className="text-xs sm:text-sm font-mono text-white font-semibold truncate">
                {modalCert.title}
              </span>
              <button
                onClick={() => setModalCert(null)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 bg-slate-950 flex items-center justify-center">
              <img
                src={modalCert.image}
                alt={modalCert.title}
                className="max-h-[75vh] w-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
