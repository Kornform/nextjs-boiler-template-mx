import type { Metadata } from "next";

import { DesignSystemContent } from "@/components/design-system/design-system-content";
import { SiteShell } from "@/components/layout/site-shell";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Design system",
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <SiteShell>
      <DesignSystemContent />
    </SiteShell>
  );
}
