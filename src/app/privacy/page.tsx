import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Read the Privacy Policy of SARVD Academy. Understand how we collect, use, and protect your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 container max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-6" style={{ color: "var(--color-primary-dark)", fontFamily: "var(--font-heading)" }}>
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500 mb-8" style={{ fontFamily: "var(--font-accent)" }}>Last updated: July 7, 2026</p>

        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
          <p>
            At SARVD Academy, accessible from https://sarvdacademy.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by SARVD Academy and how we use it.
          </p>

          <h2 className="text-xl font-bold mt-8" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h2 className="text-xl font-bold mt-8" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, operate, and maintain our website</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails or contact you via WhatsApp/SMS</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 className="text-xl font-bold mt-8" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>Consent</h2>
          <p>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>
        </div>
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
