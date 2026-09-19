import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/layout/legal-page";
import { contactInfo } from "@/lib/data";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Arbrit Safety Training & Consultancy collects, uses and protects the personal information you share through our website, enquiry forms and job applications.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const email = contactInfo.email;
  return (
    <LegalPage title="Privacy Policy" updated="19 September 2026">
      <p>
        Arbrit Safety Training &amp; Consultancy L.L.C (&ldquo;Arbrit&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
        privacy. This policy explains what personal information we collect through this website, why we collect it, how we
        look after it and the choices you have. It applies to our operations in the United Arab Emirates and, through{" "}
        {contactInfo.ksaEntity}, in the Kingdom of Saudi Arabia.
      </p>

      <h2>Information we collect</h2>
      <p>We only collect the information you choose to give us through our forms:</p>
      <ul>
        <li>
          <strong>Course and training enquiries:</strong> your name, email address, phone or WhatsApp number, company name,
          team size, the courses you are interested in, your preferred training location and any message you write.
        </li>
        <li>
          <strong>Consultancy enquiries:</strong> your company, name, work email, phone number, the service you need, site
          location and a description of your requirement.
        </li>
        <li>
          <strong>Job applications:</strong> your name, contact details, the position you are applying for, experience,
          current location, notice period, certifications, a link to your CV and/or the CV file you upload, and any cover
          note.
        </li>
        <li>
          <strong>Technical information:</strong> the page a form was sent from, and basic information our servers and hosting
          provider record automatically (such as IP address and browser type) to keep the site secure and prevent spam.
        </li>
      </ul>
      <p>
        This website does not use advertising or analytics tracking cookies. Some pages embed a Google Map and YouTube
        videos (in YouTube&rsquo;s privacy-enhanced mode); those services may set their own cookies when you interact with
        them, under Google&rsquo;s privacy policy.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To reply to your enquiry and send course dates, fees and proposals you ask for.</li>
        <li>To arrange, deliver and certify training you book with us.</li>
        <li>To assess job applications and contact candidates about suitable roles.</li>
        <li>To keep records required by accrediting and awarding bodies (such as LEEA, IOSH and STI) for training you attend.</li>
        <li>To protect the website against misuse and spam.</li>
      </ul>
      <p>We do not sell your personal information, and we do not use it for marketing you have not asked for.</p>

      <h2>Where your information is stored</h2>
      <p>
        Enquiries and applications are stored securely in our Google Workspace account (Google Sheets and Google Drive) and
        are sent to our team by email through our email delivery provider, Resend. These providers process data on our
        behalf under their own security and data-protection commitments, and their servers may be located outside the UAE
        or KSA. Access is limited to Arbrit staff who need it to handle your request.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep enquiry and training records for as long as needed to serve you and to meet legal, accreditation and
        accounting obligations. Job applications and CVs are kept only while we are recruiting for suitable roles; you can
        ask us to delete yours at any time.
      </p>

      <h2>Your rights</h2>
      <p>
        Subject to the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) and the Saudi Personal Data
        Protection Law, you can ask us to tell you what information we hold about you, correct it, delete it, or stop using
        it. To make a request, email <a href={`mailto:${email}`}>{email}</a>. We will respond within a reasonable time and
        may need to confirm your identity first.
      </p>

      <h2>Security</h2>
      <p>
        We use access controls, secure (HTTPS) connections and reputable service providers to protect your information. No
        method of transmission over the internet is completely secure, so please avoid sending sensitive personal data (for
        example, identity documents) through our forms.
      </p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. The date at the top shows when it was last changed.</p>

      <h2>Contact us</h2>
      <p>
        Arbrit Safety Training &amp; Consultancy L.L.C, {contactInfo.address}. Email{" "}
        <a href={`mailto:${email}`}>{email}</a> or call{" "}
        <a href={`tel:${contactInfo.phones[0].number.replace(/\s+/g, "")}`}>{contactInfo.phones[0].number}</a>.
      </p>
    </LegalPage>
  );
}
