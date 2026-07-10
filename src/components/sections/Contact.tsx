"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone, Mail, MapPin, MessageCircle, Clock,
  Send, CheckCircle
} from "lucide-react";
import { fadeUp, slideInLeft } from "@/lib/animations";
import { SITE_CONFIG } from "@/lib/constants";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    const message = [
      `👋 *New Enquiry – SARVD Academy Website*`,
      ``,
      `👤 *Name:* ${data.name}`,
      `📞 *Phone:* ${data.phone}`,
      `📧 *Email:* ${data.email}`,
      `📚 *Subject:* ${data.subject}`,
      ``,
      `💬 *Message:*`,
      data.message,
    ].join("\n");

    const waUrl = `https://wa.me/919355133207?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="section-padding" id="contact" style={{ background: "var(--color-surface)" }} ref={ref}>
      <div className="container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <div className="section-label justify-center">
            <Phone className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="section-title text-center">
            We&apos;d Love to <span className="text-gradient">Hear From You</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Whether you have a question about programs, pricing, or anything else — our team is ready to help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-6"
          >
            {[
              { icon: Phone, title: "Call Us", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.whatsappNumber}`, color: "from-blue-500 to-indigo-600" },
              { icon: MessageCircle, title: "WhatsApp", value: "Chat with us now", href: SITE_CONFIG.whatsapp, color: "from-green-500 to-teal-600" },
              { icon: Mail, title: "Email Us", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, color: "from-amber-500 to-orange-500" },
              { icon: MapPin, title: "Visit Us", value: SITE_CONFIG.address, href: "#", color: "from-purple-500 to-pink-600" },
            ].map(({ icon: Icon, title, value, href, color }) => (
              <a key={title} href={href} target={href.startsWith("http") ? "_blank" : undefined}
                className="card flex items-start gap-5 p-6 hover:shadow-xl transition-all group">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shrink-0 shadow-md`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "var(--color-text-muted)", fontFamily: "var(--font-accent)" }}>
                    {title}
                  </div>
                  <div className="font-semibold text-sm" style={{ color: "var(--color-text-primary)" }}>{value}</div>
                </div>
              </a>
            ))}

            {/* Business Hours */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5" style={{ color: "var(--color-accent)" }} />
                <span className="font-bold text-sm" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>Business Hours</span>
              </div>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Mon – Sat", hours: "9:00 AM – 8:00 PM" },
                  { day: "Sunday", hours: "10:00 AM – 5:00 PM" },
                  { day: "WhatsApp", hours: "Available 7 days" },
                ].map(({ day, hours }) => (
                  <div key={day} className="flex justify-between" style={{ color: "var(--color-text-secondary)" }}>
                    <span className="font-medium">{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
                  <h3 className="text-xl font-bold mb-2" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                    WhatsApp Opened! 🎉
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    Your message is ready on WhatsApp. Just hit <strong>Send</strong> to reach us instantly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <h3 className="text-xl font-bold mb-6" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "var(--color-text-muted)" }}>Full Name *</label>
                      <input {...register("name")} placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                        style={{ borderColor: errors.name ? "var(--color-error)" : "var(--color-border)" }} />
                      {errors.name && <p className="text-xs mt-1 text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "var(--color-text-muted)" }}>Phone *</label>
                      <input {...register("phone")} placeholder="+91 XXXXX XXXXX" type="tel"
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                        style={{ borderColor: errors.phone ? "var(--color-error)" : "var(--color-border)" }} />
                      {errors.phone && <p className="text-xs mt-1 text-red-500">{errors.phone.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "var(--color-text-muted)" }}>Email Address *</label>
                    <input {...register("email")} placeholder="your@email.com" type="email"
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                      style={{ borderColor: errors.email ? "var(--color-error)" : "var(--color-border)" }} />
                    {errors.email && <p className="text-xs mt-1 text-red-500">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "var(--color-text-muted)" }}>Subject *</label>
                    <select {...register("subject")}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none bg-white"
                      style={{ borderColor: errors.subject ? "var(--color-error)" : "var(--color-border)", color: "var(--color-text-primary)" }}>
                      <option value="">Select a topic</option>
                      <option>Book Free Demo Class</option>
                      <option>School Program Enquiry</option>
                      <option>Competitive Exam Coaching</option>
                      <option>Elite 5 Batch</option>
                      <option>Ultimate One Program</option>
                      <option>Scholarship Application</option>
                      <option>Fee Structure</option>
                      <option>Other</option>
                    </select>
                    {errors.subject && <p className="text-xs mt-1 text-red-500">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "var(--color-text-muted)" }}>Message *</label>
                    <textarea {...register("message")} rows={4} placeholder="Tell us about your requirements..."
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none"
                      style={{ borderColor: errors.message ? "var(--color-error)" : "var(--color-border)" }} />
                    {errors.message && <p className="text-xs mt-1 text-red-500">{errors.message.message}</p>}
                  </div>

                  <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full justify-center gap-2">
                    {isSubmitting ? (
                      <><div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />Opening WhatsApp...</>
                    ) : (
                      <><Send className="w-4 h-4" />Send via WhatsApp</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
