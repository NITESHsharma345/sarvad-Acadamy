"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  BookOpen, Atom, Building2, Globe, Code, ArrowRight, Check, X, ChevronRight
} from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import { SCHOOL_PROGRAMS, COMPETITIVE_EXAMS } from "@/lib/constants";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const categories = [
  { id: "school", label: "School (5–12)", icon: BookOpen },
  { id: "competitive", label: "Competitive Exams", icon: Atom },
  { id: "professional", label: "Professional", icon: Building2 },
  { id: "international", label: "International", icon: Globe },
  { id: "skills", label: "Skill Development", icon: Code },
];

const professionalPrograms = [
  { name: "CA Foundation", icon: "📊", desc: "Chartered Accountancy — Foundation Level" },
  { name: "CMA", icon: "📈", desc: "Cost & Management Accountancy" },
  { name: "CS Foundation", icon: "⚖️", desc: "Company Secretary Foundation" },
];

const internationalPrograms = [
  { name: "IELTS", icon: "🌏", desc: "International English Language Testing System" },
  { name: "TOEFL", icon: "🎓", desc: "Test of English as a Foreign Language" },
  { name: "SAT", icon: "🇺🇸", desc: "Scholastic Assessment Test for US admissions" },
];

const skillPrograms = [
  { name: "Communication Skills", icon: "💬", desc: "Professional communication and presentation" },
  { name: "Digital Literacy", icon: "💻", desc: "Basic to advanced computer skills" },
  { name: "Personality Development", icon: "⭐", desc: "Leadership, confidence, and soft skills" },
];

export default function Programs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeTab, setActiveTab] = useState("school");
  const [selectedProgram, setSelectedProgram] = useState<typeof SCHOOL_PROGRAMS[0] | null>(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && categories.some((cat) => cat.id === hash)) {
        setActiveTab(hash);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <section className="section-padding bg-background" id="programs" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <div className="section-label justify-center">
            <BookOpen className="w-4 h-4" />
            Our Programs
          </div>
          <h2 className="section-title text-center">
            Find Your Perfect <span className="text-gradient">Learning Path</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            From foundational school programs to competitive exam prep and professional certifications —
            we have a personalized path for every goal.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                activeTab === id
                  ? "shadow-md text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-blue-200 hover:text-blue-800"
              }`}
              style={activeTab === id ? {
                background: "var(--gradient-primary)",
                fontFamily: "var(--font-heading)"
              } : { fontFamily: "var(--font-heading)" }}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div id="school" className="scroll-mt-28" />
        <div id="competitive" className="scroll-mt-28" />
        <div id="professional" className="scroll-mt-28" />
        <div id="international" className="scroll-mt-28" />
        <div id="skills" className="scroll-mt-28" />
        <AnimatePresence mode="wait">
          {/* School Programs */}
          {activeTab === "school" && (
            <motion.div
              key="school"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {SCHOOL_PROGRAMS.map((program) => (
                <div key={program.class} className="card p-8 flex flex-col group relative overflow-hidden">
                  {program.badge === "Most Popular" && (
                    <div className="absolute top-4 right-4 badge badge-accent text-xs">
                      ⭐ Most Popular
                    </div>
                  )}
                  <div className={`mb-6 px-3 py-1.5 rounded-full text-xs font-bold text-white inline-flex self-start bg-gradient-to-r ${program.color}`}>
                    {program.class}
                  </div>
                  <h3 className="text-xl font-bold mb-1" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                    {program.title}
                  </h3>
                  <p className="text-sm mb-5" style={{ color: "var(--color-text-muted)" }}>{program.subtitle}</p>

                  <div className="mb-5">
                    <p className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ color: "var(--color-text-muted)" }}>
                      Subjects Covered
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {program.subjects.map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {program.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={SITE_CONFIG.applyLink}
                    target="_blank"
                    className="btn btn-primary w-full justify-center mt-auto"
                  >
                    Enroll Now
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </motion.div>
          )}

          {/* Competitive Exams */}
          {activeTab === "competitive" && (
            <motion.div
              key="competitive"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {COMPETITIVE_EXAMS.map(({ name, category }) => (
                <div key={name} className="card p-6 text-center group cursor-pointer hover:border-amber-300 transition-all"
                  style={{ borderColor: "var(--color-border)" }}>
                  <div className="text-3xl mb-3">📚</div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                    {name}
                  </h3>
                  <p className="text-xs mb-3" style={{ color: "var(--color-text-muted)" }}>{category}</p>
                  <Link href={SITE_CONFIG.applyLink} target="_blank"
                    className="text-xs font-semibold inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: "var(--color-accent)" }}>
                    Enquire <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </motion.div>
          )}

          {/* Professional Programs */}
          {activeTab === "professional" && (
            <motion.div
              key="professional"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {professionalPrograms.map(({ name, icon, desc }) => (
                <div key={name} className="card p-8 text-center group">
                  <div className="text-5xl mb-4">{icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>{name}</h3>
                  <p className="text-sm mb-6" style={{ color: "var(--color-text-secondary)" }}>{desc}</p>
                  <Link href={SITE_CONFIG.applyLink} target="_blank" className="btn btn-outline w-full justify-center">
                    Learn More
                  </Link>
                </div>
              ))}
            </motion.div>
          )}

          {/* International */}
          {activeTab === "international" && (
            <motion.div
              key="international"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {internationalPrograms.map(({ name, icon, desc }) => (
                <div key={name} className="card p-8 text-center">
                  <div className="text-5xl mb-4">{icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>{name}</h3>
                  <p className="text-sm mb-6" style={{ color: "var(--color-text-secondary)" }}>{desc}</p>
                  <Link href={SITE_CONFIG.applyLink} target="_blank" className="btn btn-outline w-full justify-center">
                    Learn More
                  </Link>
                </div>
              ))}
            </motion.div>
          )}

          {/* Skills */}
          {activeTab === "skills" && (
            <motion.div
              key="skills"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {skillPrograms.map(({ name, icon, desc }) => (
                <div key={name} className="card p-8 text-center">
                  <div className="text-5xl mb-4">{icon}</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>{name}</h3>
                  <p className="text-sm mb-6" style={{ color: "var(--color-text-secondary)" }}>{desc}</p>
                  <Link href={SITE_CONFIG.applyLink} target="_blank" className="btn btn-outline w-full justify-center">
                    Learn More
                  </Link>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
