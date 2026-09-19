"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { footerQuickLinks, contactInfo, socialLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#0066b2] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1.2fr_0.8fr]">
          <div>
            <Image
              src="/footer-logo.svg"
              alt="Arbrit Safety Training & Consultancy logo"
              width={180}
              height={49}
            />
            <p className="mt-4 text-sm text-white/85">
              Arbrit Safety training and Consultancy L.L.C has developed a reputation for providing
              quality, cost effective, training, courses and most of our courses are multilingual
              (English/Hindi/Urdu/Arabic)
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-200 hover:bg-white hover:text-[#0066b2] focus-visible:bg-white focus-visible:text-[#0066b2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/85">Official Info</p>
            <div className="mt-4 space-y-2 text-sm text-white/85">
              {contactInfo.phones.map((phone) => (
                <p key={phone.label} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                  <a href={`tel:${phone.number.replace(/\s+/g, "")}`} className="hover:text-white">
                    {phone.number}
                  </a>
                  <span className="text-white/85">— {phone.label}</span>
                </p>
              ))}
              <p className="pl-6 text-white/85">{contactInfo.ksaEntity}</p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-white" aria-hidden="true" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
                  {contactInfo.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0 text-white" aria-hidden="true" /> {contactInfo.address}
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white/85">Quick Links</p>
            <nav className="mt-4 flex flex-col gap-2" aria-label="Footer">
              {footerQuickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/85 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/85 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Arbrit Safety Training &amp; Consultancy LLC. All rights reserved.</p>
          <nav className="flex gap-4" aria-label="Legal">
            <Link href="/terms-and-conditions" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className="hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
