import Link from "next/link";
import { Building2, HardHat, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HseOfficersCta() {
  return (
    <section className="bg-muted py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-8 rounded-3xl bg-[#0066b2] px-8 py-10 text-center shadow-lg md:flex-row md:items-center md:justify-between md:px-12 md:text-left">
          <div className="flex flex-col items-center gap-4 md:flex-row md:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
              <HardHat className="h-7 w-7" aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-xl font-bold text-white sm:text-2xl">
                We Also Supply HSE Officers for Short and Long Term Projects
              </p>
              <p className="mt-2 max-w-md text-sm text-white/85 sm:text-base">
                Certified officers ready to embed with your project team, on-site or on-call.
              </p>
            </div>
          </div>
          <div className="flex shrink-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-col items-center gap-1.5 sm:items-start">
              <Button
                asChild
                size="lg"
                className="w-full bg-white font-semibold text-[#0066b2] shadow-md transition hover:bg-white/90 sm:w-auto"
              >
                <Link href="/contact">
                  <Building2 className="mr-2 h-4 w-4" aria-hidden="true" />
                  Contact Us
                </Link>
              </Button>
              <span className="text-xs text-white/85">Hire an HSE officer</span>
            </div>

            <span
              aria-hidden="true"
              className="hidden h-12 w-px shrink-0 bg-white/25 sm:block"
            />

            <div className="flex flex-col items-center gap-1.5 sm:items-start">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-2 border-white/70 bg-white/10 font-semibold text-white transition hover:border-white hover:bg-white/20 hover:text-white sm:w-auto"
              >
                <Link href="/career">
                  <UserPlus className="mr-2 h-4 w-4" aria-hidden="true" />
                  Apply Now
                </Link>
              </Button>
              <span className="text-xs text-white/85">Join our HSE talent pool</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
