"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search } from "lucide-react";
import { FAQS } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";

const categories = ["All", "General", "Programs", "Admission", "Scholarship", "Parent"];

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = FAQS.filter((faq) => {
    const matchCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchSearch = faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section className="section-padding" id="faq" style={{ background: "var(--color-surface)" }} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <div className="section-label justify-center">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>
          <h2 className="section-title text-center">
            Got Questions? <span className="text-gradient">We Have Answers.</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Everything you need to know about SARVD Academy, our programs, and the enrollment process.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative max-w-xl mx-auto mb-8"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "var(--color-text-muted)" }} />
          <input
            type="search"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border text-sm outline-none transition-all"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-background)",
              color: "var(--color-text-primary)",
              fontFamily: "var(--font-body)"
            }}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "text-white shadow-sm"
                  : "border text-gray-600 hover:border-blue-200 hover:text-blue-800"
              }`}
              style={activeCategory === cat ? {
                background: "var(--gradient-primary)",
                fontFamily: "var(--font-heading)"
              } : {
                borderColor: "var(--color-border)",
                background: "var(--color-background)",
                fontFamily: "var(--font-heading)"
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filtered.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-blue-50"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-base pr-4" style={{
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-heading)"
                }}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  style={{ color: "var(--color-accent)" }}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm leading-relaxed" style={{
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                      borderTop: `1px solid var(--color-border)`,
                      paddingTop: "1.25rem"
                    }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-12" style={{ color: "var(--color-text-muted)" }}>
              <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>No questions found. Try a different search term or category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
