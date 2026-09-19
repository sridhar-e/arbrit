import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { offices, contactInfo, socialLinks } from "@/lib/data";

/**
 * Address-search embed, used for offices with no verified listing on file.
 * Google resolves the address string, so the pin is approximate — see the
 * `mapEmbed` note on the Office type.
 */
function searchEmbed(address: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

function directionsHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

/**
 * The three offices as Mist cards (map, tap-to-call phone rows, address, directions), then the
 * shared email and social links between hairlines. Sits on a white band (Contact, Consultancy).
 */
export function OfficesContactBlock({
  /** Render a map at the top of each office card. */
  showMaps = false,
}: {
  showMaps?: boolean;
} = {}) {
  return (
    <>
      <ul className="grid gap-5 md:grid-cols-3 md:gap-6">
        {offices.map((office) => (
          <li
            key={office.label}
            className="flex flex-col overflow-hidden rounded-[20px] bg-[#f5f7fa]"
          >
            {showMaps && (
              <div className="h-44 w-full shrink-0 bg-navy-deep/5 sm:h-48">
                <iframe
                  src={office.mapEmbed ?? searchEmbed(office.address)}
                  title={`Map showing the Arbrit Safety office in ${office.label}`}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h3 className="font-heading text-2xl font-extrabold leading-tight tracking-[-0.02em] text-navy-deep">
                {office.label}
              </h3>

              <ul className="mt-4 grid gap-2">
                {office.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      aria-label={`Call ${office.label} on ${phone}`}
                      className="flex min-h-12 items-center gap-3 rounded-full bg-white py-1.5 pl-1.5 pr-4 font-semibold tracking-wide text-navy-deep shadow-[0_10px_24px_-20px_rgba(18,59,109,0.5)] transition-colors hover:text-[#0066b2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
                        <Phone className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-5 flex items-start gap-2.5 text-[15px] leading-relaxed text-navy-deep/80">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#0066b2]" aria-hidden="true" />
                {office.address}
              </p>

              <a
                href={directionsHref(office.address)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get directions to the ${office.label} office (opens Google Maps)`}
                className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-3 text-sm font-semibold text-[#0066b2] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
              >
                Get directions
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col gap-5 border-y border-navy-deep/10 py-5 sm:flex-row sm:items-center sm:justify-between">
        <a
          href={`mailto:${contactInfo.email}`}
          className="group flex min-h-12 items-center gap-3.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2]">
            <Mail className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-[13px] text-navy-deep/75">Email us</span>
            <span className="block break-all font-semibold text-navy-deep transition-colors group-hover:text-[#0066b2]">
              {contactInfo.email}
            </span>
          </span>
        </a>

        <ul className="flex flex-wrap gap-2" aria-label="Arbrit Safety on social media">
          {socialLinks.map(({ icon: Icon, label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f7fa] text-navy-deep transition-colors hover:bg-[#0066b2] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066b2]"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
