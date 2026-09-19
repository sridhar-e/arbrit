"use client";

import { useFloatingUiVisible } from "@/components/ui/use-floating-ui-visible";
import { WhatsappIcon } from "@/components/icons/social-icons";

/** Round WhatsApp button, tablet and desktop only: on phones the bottom bar has a WhatsApp button. */
export function WhatsappFloatButton() {
  const visible = useFloatingUiVisible();

  return (
    <a
      href="https://wa.me/971586695300"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`fixed bottom-6 left-6 z-50 max-md:hidden flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:bg-[#25D366]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsappIcon className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
