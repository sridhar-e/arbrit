import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { courseMenu } from "@/lib/course-links";
import { Footer } from "@/components/layout/footer";
import { CoursesDirectorySlot } from "@/components/layout/courses-directory-slot";
import { HseOfficersCta } from "@/components/sections/hse-officers-cta";
import { BackToTop } from "@/components/ui/back-to-top";
import { WhatsappFloatButton } from "@/components/ui/whatsapp-float-button";
import { MobileCtaBar } from "@/components/ui/mobile-cta-bar";
import { allowIndexing, siteUrl } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Absolute URLs in metadata (canonical links, share images) are built from the live site address.
  metadataBase: new URL(siteUrl),
  // Keeps the *.vercel.app review address and preview deployments out of search results.
  ...(allowIndexing ? {} : { robots: { index: false, follow: false } }),
  title: {
    default: "Arbrit Safety Training & Consultancy | HSE Courses in Dubai, Abu Dhabi & KSA",
    template: "%s | Arbrit Safety",
  },
  description:
    "Arbrit Safety Training & Consultancy is the first LEEA Licensed Training Partner in the UAE & KSA, delivering accredited health & safety, lifting, scaffolding, and fire safety training.",
  openGraph: {
    title: "Arbrit Safety Training & Consultancy",
    description:
      "Accredited health & safety training in Dubai, Abu Dhabi and KSA. First LEEA Licensed Training Partner in the region.",
    type: "website",
    siteName: "Arbrit Safety Training & Consultancy",
    locale: "en_AE",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-surface pb-[calc(4rem+env(safe-area-inset-bottom))] text-[#000] font-sans md:pb-0">
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: The homepage walks a visitor through an Arbrit training day, Arrive to Certified, instead of a stack of same-size course cards and stat tiles.
OWN-WORLD: White ground, Arbrit blue #0066b2 fills, navy #123b6d Plus Jakarta 800 headings, Inter body; 20px cards, 24px photo panels, pill search; soft offset navy shadows; full-bleed sunlit site photography.
STORY: See accredited training is real and close (UAE/KSA), follow one day to a certificate, find a course or enquire.
FIRST VIEWPORT: Client mockup. Full-bleed worker and crane photo; logo and menu over it; H1 "Skills for a Safer Tomorrow"; pill course search with blue arrow as primary action; four category shortcuts; blue 15,000+ band.
FORM: Pinned photo story (comp A), candidate 6 of 6 after a factual re-roll; seed key 0df0b355.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
-->`,
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-md focus:bg-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header courseMenu={courseMenu} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <HseOfficersCta />
        <CoursesDirectorySlot courseMenu={courseMenu} />
        <Footer />
        <BackToTop />
        <WhatsappFloatButton />
        <MobileCtaBar />
      </body>
    </html>
  );
}
