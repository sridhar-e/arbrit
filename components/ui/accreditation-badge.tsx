import type { Accreditation } from "@/lib/data";

export function AccreditationBadge({ name, description, icon: Icon }: Accreditation) {
  return (
    <div
      title={description}
      className="group flex items-center gap-2.5 rounded-xl border border-navy/10 bg-white px-4 py-3 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#0066b2]/30 hover:shadow-md hover:shadow-[#0066b2]/10"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0066b2]/10 text-[#0066b2] transition duration-300 group-hover:bg-[#0066b2] group-hover:text-white">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <p className="font-heading text-sm font-semibold text-[#0066b2]">{name}</p>
    </div>
  );
}
