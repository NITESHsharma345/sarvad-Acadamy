"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  MessageCircle, ArrowUp, Phone, Calendar
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* WhatsApp Float */}
      <motion.a
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Chat on WhatsApp"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 300 }}
      >
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </motion.a>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-24 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg cursor-pointer border border-gray-200 hover:border-transparent transition-all"
            style={{ background: "white", color: "var(--color-primary)" }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sticky Demo CTA */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
          >
            <div className="flex gap-2 p-3 bg-white border-t border-gray-200 shadow-2xl">
              <a
                href={`tel:${SITE_CONFIG.whatsappNumber}`}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm border-2 transition-all"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                  fontFamily: "var(--font-heading)"
                }}
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
              <Link
                href={SITE_CONFIG.applyLink}
                target="_blank"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm text-white transition-all"
                style={{
                  background: "var(--gradient-accent)",
                  color: "var(--color-primary-dark)",
                  fontFamily: "var(--font-heading)"
                }}
              >
                <Calendar className="w-4 h-4" />
                Book Free Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
