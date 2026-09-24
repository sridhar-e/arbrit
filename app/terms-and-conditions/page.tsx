import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { LegalPage } from "@/components/layout/legal-page";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Terms and Conditions",
  description:
    "The terms that apply when you use the Arbrit Safety Training & Consultancy website, send an enquiry or apply for a role.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  const email = contactInfo.email;
  return (
    <LegalPage title="Terms and Conditions" updated="19 September 2026">
      <p>
        These terms apply to your use of this website, operated by Arbrit Safety Training &amp; Consultancy L.L.C
        (&ldquo;Arbrit&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using the website you agree to them. If you do not
        agree, please do not use the site.
      </p>

      <h2>Information on this website</h2>
      <p>
        We work to keep course details, durations, accreditations and other information accurate and up to date, but it is
        provided for general guidance only. Course content, schedules, locations and fees may change. Please confirm the
        details with our team before you book.
      </p>

      <h2>Enquiries and bookings</h2>
      <p>
        Sending an enquiry, quote request or application through this website does not create a booking or a contract.
        Training and consultancy services are provided under a separate quotation, booking confirmation or agreement, which
        sets out the price, dates, payment and cancellation terms that apply.
      </p>
      <p>
        Certification depends on meeting the attendance and assessment requirements of the relevant course and awarding or
        accrediting body (such as LEEA, IOSH, Highfield or STI).
      </p>

      <h2>Job applications</h2>
      <p>
        Applying for a role through our Careers page does not guarantee an interview or employment. Please make sure the
        information and documents you send are accurate and your own.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the website for anything unlawful, or to send false, misleading or abusive information;</li>
        <li>send spam, automated submissions or harmful code, or try to disrupt or gain unauthorised access to the site;</li>
        <li>upload files that you do not have the right to share or that contain malicious content.</li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The content of this website, including text, images, logos and design, belongs to Arbrit or is used with permission.
        Accreditation logos belong to their respective organisations. You may view and print pages for your own personal or
        internal business use, but not copy, republish or sell them without our written permission.
      </p>

      <h2>Links to other websites</h2>
      <p>
        This website links to other sites, such as accreditation bodies, maps and social media. We are not responsible for
        their content or privacy practices.
      </p>

      <h2>Liability</h2>
      <p>
        We provide this website &ldquo;as is&rdquo;. To the extent permitted by law, Arbrit is not liable for any loss arising
        from your use of, or reliance on, the website or its content. Nothing in these terms limits any liability that
        cannot be limited by law.
      </p>

      <h2>Privacy</h2>
      <p>
        How we handle personal information is explained in our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates, and
        the courts of Dubai have jurisdiction over any dispute.
      </p>

      <h2>Changes and contact</h2>
      <p>
        We may update these terms from time to time; the date at the top shows the latest version. Questions? Email{" "}
        <a href={`mailto:${email}`}>{email}</a> or call{" "}
        <a href={`tel:${contactInfo.phones[0].number.replace(/\s+/g, "")}`}>{contactInfo.phones[0].number}</a>.
      </p>
    </LegalPage>
  );
}
