"use client";

import { usePathname } from "next/navigation";
import { CoursesDirectory } from "@/components/layout/courses-directory";
import type { MegaMenuGroup } from "@/lib/data";

/**
 * Renders the global courses directory on every page except /consultancy, where
 * a full course listing pulls against the page's consultancy enquiry CTA.
 */
export function CoursesDirectorySlot({ courseMenu }: { courseMenu: MegaMenuGroup[] }) {
  const pathname = usePathname();
  if (pathname === "/consultancy") return null;
  return <CoursesDirectory courseMenu={courseMenu} />;
}
