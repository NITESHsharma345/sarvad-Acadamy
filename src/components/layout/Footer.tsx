"use client";

import Link from "next/link";
import {
  GraduationCap, Phone, Mail, MapPin,
  Heart, Send, Share2, Video, Users, MessageSquare
} from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const programs = [
    { label: "School Programs (Class 5–12)", href: "/programs#school" },
    { label: "JEE / NEET Preparation", href: "/programs#competitive" },
    { label: "CUET Coaching", href: "/programs#competitive" },
    { label: "UPSC / SSC / Banking", href: "/programs#competitive" },
    { label: "Elite 5 Batch", href: "/programs#elite5" },
    { label: "Ultimate One (1:1)", href: "/programs#ultimate-one" },
  ];

  const quickLinks = [
    { label: "About SARVD", href: "/about" },
    { label: "Our Faculty", href: "/#faculty" },
    { label: "Scholarship Program", href: "/scholarships" },
    { label: "Student Success Stories", href: "/#testimonials" },
    { label: "Blog & Resources", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer style={{ background: "var(--gradient-primary)" }} className="text-white">
      {/* Main Footer */}
      <div className="container py-20" style={{ padding: "30px 20px" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div className="font-black text-lg leading-none tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  SARVD
                </div>
                <div className="text-xs font-semibold tracking-widest" style={{ color: "var(--color-accent)", fontFamily: "var(--font-accent)" }}>
                  ACADEMY
                </div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-body)" }}>
              India&apos;s most trusted personalized learning platform. Every student seen.
              Every dream supported.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Share2, href: "#", label: "Instagram" },
                { icon: Video, href: "#", label: "YouTube" },
                { icon: Users, href: "#", label: "Facebook" },
                { icon: MessageSquare, href: "#", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Programs
            </h4>
            <ul className="space-y-2.5">
              {programs.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/65 hover:text-amber-400 text-sm transition-colors flex items-center gap-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <div className="w-1 h-1 rounded-full bg-amber-400/60" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/65 hover:text-amber-400 text-sm transition-colors flex items-center gap-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <div className="w-1 h-1 rounded-full bg-amber-400/60" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Get In Touch
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a href={`tel:${SITE_CONFIG.whatsappNumber}`}
                  className="flex items-start gap-3 text-white/70 hover:text-amber-400 text-sm transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-amber-400/70" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-amber-400 text-sm transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-amber-400/70" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-amber-400/70" />
                  {SITE_CONFIG.address}
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <p className="text-xs text-white/50 mb-3 font-medium uppercase tracking-wider" style={{ fontFamily: "var(--font-accent)" }}>
                Newsletter
              </p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/15 text-sm text-white placeholder-white/40 outline-none focus:border-amber-400 transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="p-2 rounded-lg transition-all hover:opacity-90"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  <Send className="w-4 h-4" style={{ color: "var(--color-primary-dark)" }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8 pb-20 lg:pb-8">
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <p style={{ fontFamily: "var(--font-body)" }}>
            © {currentYear} SARVD Academy. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-body)" }}>
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for every student&apos;s success
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
