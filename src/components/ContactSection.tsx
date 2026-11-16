"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
  Send,
  MessageSquare,
  Sparkles,
  Download,
  Terminal,
} from "lucide-react";
import { PROFILE_DATA } from "@/data/portfolioData";

const INQUIRY_TOPICS = [
  "Middleware & Backend Engineering",
  "Enterprise IT & Business Analysis",
  "API & SQL Server Integration",
  "AI / ML & RAG Collaboration",
];

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(INQUIRY_TOPICS[0]);
  const [senderName, setSenderName] = useState("");
  const [messageText, setMessageText] = useState("");

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSendWhatsApp = () => {
    const intro = senderName ? `Hi Adhitya, I'm ${senderName}.` : "Hi Adhitya,";
    const body = `${intro} I visited your portfolio regarding [${selectedTopic}]. ${messageText}`;
    const url = `https://wa.me/6282313136526?text=${encodeURIComponent(body)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSendEmail = () => {
    const subject = `[Portfolio Inquiry] ${selectedTopic}${
      senderName ? ` — ${senderName}` : ""
    }`;
    const body = messageText || `Hi Adhitya,\n\nI would love to connect regarding ${selectedTopic}.`;
    window.location.href = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-slate-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 6 Cols: Direct Contact Channels */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>LET&apos;S CONNECT</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
                Ready for Enterprise Engineering & Collaboration
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                Currently serving at{" "}
                <strong className="text-slate-900 dark:text-white">
                  PT Care Technologies (Middleware R&D)
                </strong>{" "}
                and dedicated to{" "}
                <strong className="text-blue-600 dark:text-blue-400">
                  Zurich Indonesia (IT & Business Analyst Team)
                </strong>
                . Feel free to reach out via LinkedIn, Email, or WhatsApp.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1428] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      Direct Email
                    </div>
                    <a
                      href={`mailto:${PROFILE_DATA.email}`}
                      className="text-sm font-display font-bold text-slate-900 dark:text-white hover:text-blue-500 truncate block"
                    >
                      {PROFILE_DATA.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(PROFILE_DATA.email, "email")}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-mono transition-all shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1428] border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      WhatsApp / Phone
                    </div>
                    <a
                      href={PROFILE_DATA.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-display font-bold text-slate-900 dark:text-white hover:text-emerald-500 block"
                    >
                      {PROFILE_DATA.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("082313136526", "phone")}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-mono transition-all shrink-0"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* LinkedIn & GitHub Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-[#0c1428] border border-slate-200 dark:border-slate-800 hover:border-blue-500 flex items-center justify-between transition-all group"
                >
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      LinkedIn Profile
                    </div>
                    <div className="text-sm font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-500 mt-0.5">
                      in/{PROFILE_DATA.linkedinHandle}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                </a>

                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white dark:bg-[#0c1428] border border-slate-200 dark:border-slate-800 hover:border-blue-500 flex items-center justify-between transition-all group"
                >
                  <div>
                    <div className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      GitHub Repositories
                    </div>
                    <div className="text-sm font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-500 mt-0.5">
                      @{PROFILE_DATA.githubHandle}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right 6 Cols: Interactive Quick Message Launcher */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white dark:bg-[#0c1428] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-500" />
                  <span>Interactive Quick Dispatch</span>
                </h3>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Instant Mail / WhatsApp
                </span>
              </div>

              {/* Topic Selector Pills */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400">
                  1. Select Discussion Topic
                </label>
                <div className="flex flex-wrap gap-2">
                  {INQUIRY_TOPICS.map((topic) => {
                    const active = selectedTopic === topic;
                    return (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                          active
                            ? "bg-blue-600 text-white border-blue-500"
                            : "bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-blue-500/40"
                        }`}
                      >
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Inputs */}
              <div className="space-y-3">
                <div>
                  <label className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 block mb-1.5">
                    2. Your Name & Organization
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g., Sarah — Tech Recruiter / Engineering Manager"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-slate-500 dark:text-slate-400 block mb-1.5">
                    3. Brief Message
                  </label>
                  <textarea
                    rows={3}
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Write a short note about the project, middleware role, or collaboration..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <button
                  type="button"
                  onClick={handleSendEmail}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Email</span>
                </button>
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-600/20 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-mono">
              © {new Date().getFullYear()} {PROFILE_DATA.name}, {PROFILE_DATA.degree} • All Rights Reserved.
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono">
            <a
              href={PROFILE_DATA.portfolioPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 inline-flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Portfolio Deck</span>
            </a>
            <a
              href={PROFILE_DATA.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 inline-flex items-center gap-1"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV PDF</span>
            </a>
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
