/* eslint-disable @next/next/no-img-element -- tiny local SVGs; next/image adds nothing here. */

/**
 * Small 3:2 flag for an office phone number. Decorative: the office name beside it says where it is.
 * The SVGs in public/flags come from country-flag-icons; only the two the site needs are copied, so
 * no flag set ships in the page bundle.
 */
export function CountryFlag({ country, className = "" }: { country: "AE" | "SA"; className?: string }) {
  return (
    <img
      src={`/flags/${country}.svg`}
      alt=""
      width={24}
      height={16}
      className={`h-4 w-6 shrink-0 rounded-[3px] object-cover ring-1 ring-white/25 ${className}`}
    />
  );
}
