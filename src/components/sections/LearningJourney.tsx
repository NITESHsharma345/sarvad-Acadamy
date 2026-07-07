"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Phone, MessageCircle, ClipboardList, Play, FileCheck, TrendingUp, Trophy
} from "lucide-react";
import { JOURNEY_STEPS } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Phone, MessageCircle, ClipboardList, Play, FileCheck, TrendingUp, Trophy
};

export default function LearningJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section className="section-padding" id="journey" style={{ background: "var(--color-surface)" }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">
            <TrendingUp className="w-4 h-4" />
            Your Learning Journey
          </div>
          <h2 className="section-title text-center">
            From Enquiry to <span className="text-gradient">Success</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A simple, transparent, and supportive process — designed to make your transition into SARVD as smooth as possible.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto" ref={ref}>
          {/* Animated vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 overflow-hidden"
            style={{ background: "var(--color-border)" }}>
            <motion.div
              className="absolute top-0 left-0 right-0"
              style={{ height: lineHeight, background: "var(--gradient-accent)" }}
            />
          </div>

          {/* Steps */}
          {JOURNEY_STEPS.map(({ step, title, description, icon }, index) => {
            const Icon = iconMap[icon] || Trophy;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 pl-16 md:pl-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <div className="card p-6 w-full">
                    <div className={`flex items-center gap-2 mb-2 ${isLeft ? "md:flex-row-reverse" : "flex-row"}`}>
                      <span className="text-xs font-bold uppercase tracking-wider badge badge-accent">
                        Step {step}
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-1.5" style={{
                      color: "var(--color-primary)",
                      fontFamily: "var(--font-heading)"
                    }}>
                      {title}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {description}
                    </p>
                  </div>
                </div>

                {/* Center icon */}
                <div className="absolute left-0 md:relative md:w-2/12 flex justify-center z-10">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                    style={{ background: step === 7 ? "var(--gradient-accent)" : "var(--gradient-primary)" }}>
                    <Icon className={`w-5 h-5 md:w-6 md:h-6 ${step === 7 ? "text-amber-900" : "text-amber-400"}`} />
                  </div>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
