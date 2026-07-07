import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: "Read the Terms of Service of SARVD Academy. Understand the terms, conditions, and rules of using our platform and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 container max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-6" style={{ color: "var(--color-primary-dark)", fontFamily: "var(--font-heading)" }}>
          Terms of Service
        </h1>
        <p className="text-xs text-gray-500 mb-8" style={{ fontFamily: "var(--font-accent)" }}>Last updated: July 7, 2026</p>

        <div className="space-y-6 text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
          <p>
            Welcome to SARVD Academy! These terms and conditions outline the rules and regulations for the use of SARVD Academy&apos;s Website, located at https://sarvdacademy.com.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use SARVD Academy if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-xl font-bold mt-8" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>License</h2>
          <p>
            Unless otherwise stated, SARVD Academy and/or its licensors own the intellectual property rights for all material on SARVD Academy. All intellectual property rights are reserved. You may access this from SARVD Academy for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Republish material from SARVD Academy</li>
            <li>Sell, rent or sub-license material from SARVD Academy</li>
            <li>Reproduce, duplicate or copy material from SARVD Academy</li>
            <li>Redistribute content from SARVD Academy</li>
          </ul>

          <h2 className="text-xl font-bold mt-8" style={{ color: "var(--color-primary)", fontFamily: "var(--font-heading)" }}>Disclaimer</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
        </div>
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  );
}
