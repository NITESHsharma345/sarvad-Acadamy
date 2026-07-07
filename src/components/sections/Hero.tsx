"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Play, Atom, Calculator, BookOpen, FlaskConical,
  Globe, Music, Palette, Code, TrendingUp, Award, Users, CheckCircle
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { fadeUp, stagger } from "@/lib/animations";

const floatingIcons = [
  { icon: Atom, label: "Physics", x: "8%", y: "20%", delay: 0 },
  { icon: Calculator, label: "Maths", x: "88%", y: "15%", delay: 0.3 },
  { icon: FlaskConical, label: "Chemistry", x: "5%", y: "65%", delay: 0.6 },
  { icon: Globe, label: "Geography", x: "92%", y: "60%", delay: 0.9 },
  { icon: Code, label: "Programming", x: "15%", y: "85%", delay: 1.2 },
  { icon: BookOpen, label: "English", x: "80%", y: "82%", delay: 0.5 },
];

const stats = [
  { value: "500+", label: "Students Mentored", icon: Users },
  { value: "20+", label: "Expert Educators", icon: Award },
  { value: "95%+", label: "Success Rate", icon: TrendingUp },
];

export default function Hero() {
  return (
    <section className="bg-hero min-h-screen relative overflow-hidden flex items-center grid-pattern">
      {/* Floating ambient blobs */}
      <div className="floating-shape w-96 h-96 bg-blue-600 top-[-10%] right-[-10%]" />
      <div className="floating-shape w-80 h-80 bg-amber-500 bottom-[-5%] left-[-5%]" />
      <div className="floating-shape w-64 h-64 bg-indigo-500 top-[30%] left-[-5%]" />

      {/* Floating Subject Icons */}
      {floatingIcons.map(({ icon: Icon, label, x, y, delay }) => (
        <motion.div
          key={label}
          className="absolute hidden xl:flex items-center justify-center"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 + delay, duration: 0.5, type: "spring" }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
            className="card p-3 rounded-2xl cursor-default group"
            style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
            title={label}
          >
            <Icon className="w-6 h-6 text-amber-600" />
          </motion.div>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="container relative z-10 pt-40 pb-32">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 badge badge-primary mb-6"
          >
            <CheckCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>India&apos;s Most Personalized Learning Platform</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title mb-4"
            style={{ color: "var(--color-primary-dark)" }}
          >
            Personalized
            <br />
            <span style={{
              background: "var(--gradient-accent)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Learning.
            </span>
            <br />
            Meaningful Growth.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hero-subtitle mx-auto max-w-2xl mb-10"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Every Student Seen. Every Dream Supported.
            <br />
            <span className="text-gray-500 text-lg">
              Expert mentorship for Class 5–12, JEE, NEET, CUET, UPSC, and beyond.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.a
              href={SITE_CONFIG.applyLink}
              target="_blank"
              className="btn btn-primary text-base px-8 py-4 group"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Free Demo Class
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#programs"
              className="btn btn-outline text-base px-8 py-4 group"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Play className="w-5 h-5 fill-current" />
              Explore Programs
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6"
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="card px-6 py-4 rounded-2xl flex items-center gap-3"
                style={{ borderColor: "var(--color-border)", background: "var(--color-surface)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black" style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary-dark)" }}>
                    {value}
                  </div>
                  <div className="text-xs font-medium" style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)" }}>
                    {label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80L1440 40C1200 0 960 80 720 40C480 0 240 80 0 40L0 80Z"
            fill="var(--color-background)" />
        </svg>
      </div>
    </section>
  );
}
