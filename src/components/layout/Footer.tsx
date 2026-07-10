"use client";

import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin, Heart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const programs = [
    { label: "School Programs (Class 5–12)", href: "/programs#school" },
    { label: "JEE / NEET Preparation",       href: "/programs#competitive" },
    { label: "CUET Coaching",                 href: "/programs#competitive" },
    { label: "UPSC / SSC / Banking",          href: "/programs#competitive" },
    { label: "Elite 5 Batch",                 href: "/programs#elite5" },
    { label: "Ultimate One (1:1)",            href: "/programs#ultimate-one" },
  ];

  const quickLinks = [
    { label: "About SARVD",             href: "/about" },
    { label: "Our Faculty",             href: "/#faculty" },
    { label: "Scholarship Program",     href: "/scholarships" },
    { label: "Student Success Stories", href: "/#testimonials" },
    { label: "Blog & Resources",        href: "/blog" },
    { label: "Contact Us",              href: "/contact" },
  ];

  const socialLinks = [
    { Icon: FacebookIcon,  href: SITE_CONFIG.facebook,  label: "Facebook" },
    { Icon: InstagramIcon, href: SITE_CONFIG.instagram, label: "Instagram" },
    { Icon: LinkedInIcon,  href: SITE_CONFIG.linkedin,  label: "LinkedIn" },
    { Icon: WhatsAppIcon,  href: SITE_CONFIG.whatsapp,  label: "WhatsApp" },
  ];

  return (
    <footer style={{ background: "var(--gradient-primary)" }} className="text-white">

      {/* ── MAIN FOOTER ────────────────────────────────────────────── */}
      <div className="container pt-14 pb-14 md:pt-20 md:pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20">
                <GraduationCap className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <div
                  className="font-black text-lg leading-none tracking-tight"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  SARVD
                </div>
                <div
                  className="text-xs font-semibold tracking-widest"
                  style={{ color: "var(--color-accent)", fontFamily: "var(--font-accent)" }}
                >
                  ACADEMY
                </div>
              </div>
            </Link>

            <p
              className="text-white/70 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              India&apos;s most trusted personalized learning platform.
              Every student seen. Every dream supported.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4
              className="font-bold text-base mb-5 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
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
                    <div className="w-1 h-1 rounded-full bg-amber-400/60 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold text-base mb-5 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
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
                    <div className="w-1 h-1 rounded-full bg-amber-400/60 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div>
            <h4
              className="font-bold text-base mb-5 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-3 mb-6">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.whatsappNumber}`}
                  className="flex items-start gap-3 text-white/70 hover:text-amber-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-amber-400/70" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-amber-400 text-sm transition-colors break-all"
                >
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
          </div>

        </div>
      </div>

      {/* ── BOTTOM BAR ─────────────────────────────────────────────── */}
      <div className="border-t border-white/10 py-6 pb-24 lg:pb-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center sm:text-left">
          <p style={{ fontFamily: "var(--font-body)" }}>
            © {currentYear} SARVD Academy. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5" style={{ fontFamily: "var(--font-body)" }}>
            Made with <Heart className="w-3 h-3 text-red-400 fill-red-400" /> for every student&apos;s success
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy</Link>
            <Link href="/terms"   className="hover:text-amber-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
