"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Menu, X, ChevronDown, GraduationCap, BookOpen, Users, Star,
  Phone, MessageCircle
} from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import clsx from "clsx";
import AnnouncementBar from "./AnnouncementBar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenu, setMegaMenu] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="scroll-progress"
        style={{ width: progressWidth }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={clsx(
          "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-100"
            : "bg-transparent"
        )}
        style={{ top: 0 }}
      >
        <AnnouncementBar />
        <div className={clsx(
          "transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}>
          <div className="container flex items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "var(--gradient-primary)" }}>
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="font-black text-lg leading-none tracking-tight"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary-dark)" }}>
                  SARVD
                </div>
                <div className="text-xs font-semibold tracking-widest animate-pulse-glow"
                  style={{ color: "var(--color-accent-dark)", fontFamily: "var(--font-accent)" }}>
                  ACADEMY
                </div>
              </div>
            </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative"
                onMouseEnter={() => link.children && setMegaMenu(link.label)}
                onMouseLeave={() => setMegaMenu(null)}>
                <Link
                  href={link.href}
                  className={clsx(
                    "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all",
                    scrolled
                      ? "text-gray-700 hover:text-blue-900 hover:bg-blue-50"
                      : "text-gray-800 hover:text-amber-600 hover:bg-amber-50"
                  )}
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown className={clsx(
                      "w-3.5 h-3.5 transition-transform",
                      megaMenu === link.label && "rotate-180"
                    )} />
                  )}
                </Link>

                {/* Mega Menu */}
                <AnimatePresence>
                  {link.children && megaMenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 z-50"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-3">
            <a
              href={`tel:${SITE_CONFIG.whatsappNumber}`}
              className={clsx(
                "flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all",
                scrolled
                  ? "text-gray-700 hover:text-blue-900"
                  : "text-gray-800 hover:text-amber-600"
              )}
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link
              href={SITE_CONFIG.applyLink}
              target="_blank"
              className="btn btn-primary text-sm px-5 py-2.5"
            >
              Book Free Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-2 rounded-xl transition-colors"
            style={{ color: "var(--color-primary-dark)" }}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-white border-t border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-120px)]"
            >
              <div className="container py-6 space-y-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-2 rounded-lg text-sm text-gray-600 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <Link
                    href={SITE_CONFIG.applyLink}
                    target="_blank"
                    className="btn btn-primary w-full justify-center"
                    onClick={() => setOpen(false)}
                  >
                    Book Free Demo Class
                  </Link>
                  <a
                    href={SITE_CONFIG.whatsapp}
                    target="_blank"
                    className="btn btn-outline w-full justify-center"
                    onClick={() => setOpen(false)}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
