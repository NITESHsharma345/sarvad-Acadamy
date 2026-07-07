"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  UserCheck, Users, Star, BarChart3, MessageSquare,
  BookOpen, GraduationCap, Lightbulb, ArrowRight
} from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import { WHY_CHOOSE } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  UserCheck, Users, Star, BarChart3, MessageSquare,
  BookOpen, GraduationCap, Lightbulb
};

export default function WhyChoose() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-accent-subtle" id="why-sarvd" ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">
            <Star className="w-4 h-4" />
            Why Parents Choose SARVD
          </div>
          <h2 className="section-title text-center">
            What Makes SARVD <span className="text-gradient">Different</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            We&apos;re not another coaching factory. We&apos;re a mentorship platform where every student receives
            the individual attention they deserve.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {WHY_CHOOSE.map(({ icon, title, description, color }) => {
            const Icon = iconMap[icon] || Star;
            return (
              <motion.div
                key={title}
                variants={fadeUp}
                className="card p-7 relative overflow-hidden group cursor-default"
              >
                {/* Hover background glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                {/* Icon */}
                <div className={`mb-5 w-13 h-13 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
                  style={{ width: "52px", height: "52px" }}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-bold text-base mb-2.5" style={{
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-heading)"
                }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {description}
                </p>

                {/* Arrow on hover */}
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: "var(--color-accent)" }}>
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
