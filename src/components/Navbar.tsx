"use client";

import React, { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Menu,
  X,
  Download,
  Terminal,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolioData";

const NAV_ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#case-studies" },
  { label: "Certificates", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("adhit-theme");
    if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 220) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("adhit-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("adhit-theme", "light");
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 border ${
            scrolled
              ? "bg-white/85 dark:bg-[#0b1224]/85 backdrop-blur-xl border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-900/5 dark:shadow-blue-950/20"
              : "bg-white/60 dark:bg-[#0b1224]/60 backdrop-blur-md border-slate-200/50 dark:border-slate-800/60"
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#overview"
            className="flex items-center gap-3 group focus:outline-none shrink-0 whitespace-nowrap"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-display font-bold text-sm shadow-md shadow-blue-600/25 group-hover:scale-105 transition-transform shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="whitespace-nowrap">
              <div className="font-display font-bold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white flex items-center gap-1.5 whitespace-nowrap">
                <span>Adhitya Fajar Rachmadi</span>
                <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  S.T.
                </span>
              </div>
              <p className="hidden xl:block text-[11px] text-slate-500 dark:text-slate-400 font-mono whitespace-nowrap">
                Middleware R&D • Dedicated @ Zurich Indonesia
              </p>
            </div>
          </a>

          {/* Desktop Navigation Pills */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-900/70 p-1 rounded-xl border border-slate-200/60 dark:border-slate-800/70 shrink-0 whitespace-nowrap">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveSection(id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm shadow-blue-600/30"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Switcher + Resume */}
          <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Light/Dark Mode"
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all active:scale-95 text-xs font-medium"
            >
              {isDark ? (
                <>
                  <Moon className="w-4 h-4 text-blue-400" />
                  <span className="hidden sm:inline font-mono">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 text-amber-500" />
                  <span className="hidden sm:inline font-mono">Light</span>
                </>
              )}
            </button>

            <a
              href={PROFILE_DATA.portfolioPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Portfolio PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Navigation Menu"
              className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 rounded-2xl bg-white/95 dark:bg-[#0b1224]/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 p-4 shadow-xl space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {NAV_ITEMS.map((item) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(id);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
              <a
                href={PROFILE_DATA.portfolioPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-semibold"
              >
                <Download className="w-4 h-4" />
                <span>Download Portfolio Deck</span>
              </a>
              <a
                href={PROFILE_DATA.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold"
              >
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
