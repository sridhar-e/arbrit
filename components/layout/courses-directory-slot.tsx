"use client";

import { usePathname } from "next/navigation";
import { CoursesDirectory } from "@/components/layout/courses-directory";
import type { MegaMenuGroup } from "@/lib/data";

/**
 * Renders the courses directory on the homepage only (client request, September 2026): on every
 * other page it repeated what the Courses menu already offers.
 */
export function CoursesDirectorySlot({ courseMenu }: { courseMenu: MegaMenuGroup[] }) {
  const pathname = usePathname();
  if (pathname !== "/") return null;
  return <CoursesDirectory courseMenu={courseMenu} />;
}
