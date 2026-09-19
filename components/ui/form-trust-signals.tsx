import { BookOpenCheck, Clock, Users, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { stats } from "@/lib/data";

const signalIcons: Record<string, LucideIcon> = {
  "Years of Experience": Clock,
  "Students Trained": Users,
  "Accredited Courses": BookOpenCheck,
};

const signalLabels: Record<string, string> = {
  "Years of Experience": "Years Experience",
  "Students Trained": "Students Trained",
  "Accredited Courses": "Accredited Courses",
};

const signals = ["Years of Experience", "Students Trained", "Accredited Courses"]
  .map((label) => stats.find((stat) => stat.label === label))
  .filter((stat): stat is (typeof stats)[number] => Boolean(stat));

export function FormTrustSignals({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-2 rounded-2xl border px-3 py-4 sm:gap-4 sm:px-4",
        isDark ? "border-white/15 bg-white/5" : "border-navy/10 bg-[#0066b2]/5",
        className,
      )}
    >
      {signals.map((signal) => {
        const Icon = signalIcons[signal.label];

        return (
          <div key={signal.label} className="flex flex-col items-center text-center">
            {Icon && (
              <Icon
                className={cn("mb-1.5 h-5 w-5", isDark ? "text-white" : "text-[#0066b2]")}
                aria-hidden="true"
              />
            )}
            <p
              className={cn(
                "font-heading text-lg font-bold leading-none sm:text-xl",
                isDark ? "text-white" : "text-[#0066b2]",
              )}
            >
              {signal.value.toLocaleString()}
              {signal.suffix}
            </p>
            <p
              className={cn(
                "mt-1 text-[11px] font-medium leading-tight sm:text-xs",
                isDark ? "text-white/85" : "text-navy-deep/75",
              )}
            >
              {signalLabels[signal.label]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
