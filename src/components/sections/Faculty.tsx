"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, BookOpen, ArrowRight } from "lucide-react";
import { FACULTY } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";

export default function Faculty() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="section-padding bg-background" id="faculty" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">
            <GraduationCap className="w-4 h-4" />
            Meet Our Educators
          </div>
          <h2 className="section-title text-center">
            Expert Faculty Who <span className="text-gradient">Truly Care</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            20+ highly qualified educators with decades of combined experience, each dedicated to your child&apos;s success.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FACULTY.map(({ name, subject, experience, qualification, achievements }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="card p-7 text-center group"
            >
              {/* Avatar */}
              <div className="relative mx-auto mb-5 w-20 h-20">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black text-white"
                  style={{ background: "var(--gradient-primary)", fontFamily: "var(--font-heading)" }}>
                  {name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-green-500 border-2 border-white flex items-center justify-center">
                  <Award className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              <h3 className="font-bold text-base mb-1" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                {name}
              </h3>
              <div className="badge badge-accent text-xs mb-3">{subject}</div>

              <div className="space-y-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                <div className="flex items-center justify-center gap-1.5">
                  <BookOpen className="w-3 h-3" />
                  {qualification}
                </div>
                <div className="flex items-center justify-center gap-1.5">
                  <GraduationCap className="w-3 h-3" />
                  {experience} Experience
                </div>
              </div>

              <div className="mt-4 pt-4 border-t text-xs font-medium" style={{
                borderColor: "var(--color-border)",
                color: "var(--color-accent-dark)"
              }}>
                🏆 {achievements}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
            All faculty undergo rigorous vetting and continuous training
          </p>
          <a href="#contact" className="btn btn-outline inline-flex gap-2">
            Meet All Faculty
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
