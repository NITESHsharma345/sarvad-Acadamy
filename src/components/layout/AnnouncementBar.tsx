"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("announcement-dismissed");
    if (dismissed) {
      setTimeout(() => setVisible(false), 0);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("announcement-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="announcement-bar"
        >
          <div className="container flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 py-1.5 md:py-0">
            <Sparkles className="w-4 h-4 shrink-0" />
            <p className="text-sm font-semibold">
              🎓 Admissions Open 2025–26 — Book Your{" "}
              <Link
                href={SITE_CONFIG.applyLink}
                target="_blank"
                className="underline underline-offset-2 hover:no-underline"
              >
                Free Demo Class
              </Link>{" "}
              Today! Limited Seats Available.
            </p>
            <button
              onClick={dismiss}
              aria-label="Dismiss announcement"
              className="ml-4 p-1 rounded-full hover:bg-black/10 transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
