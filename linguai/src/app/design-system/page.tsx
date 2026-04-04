import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { DesignSystemContent } from "@/components/design-system/design-system-content";

export const metadata: Metadata = {
  title: "Designsystem",
  description:
    "Übersicht der LinguAI UI-Bausteine: Farben, Typografie, shadcn-Komponenten und Hilfsklassen.",
};

export default function DesignSystemPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <DesignSystemContent />
      </main>
      <SiteFooter />
    </>
  );
}
