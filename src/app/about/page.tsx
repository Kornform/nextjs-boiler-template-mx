import type { Metadata } from "next";
import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Über diese Boilerplate",
  description:
    "Kurzüberblick zum Setup: Routen, Konfiguration, Tokens und nächste Schritte.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <div className="container-site section-sm pb-24">
        <p className="text-label mb-3 text-primary">Info</p>
        <h1 className="text-h1 text-balance max-w-2xl">
          So nutzt du diese Boilerplate
        </h1>
        <p className="text-body-muted mt-4 max-w-2xl">
          Eine zweite Route als Vorlage: gleicher Header/Footer wie auf der
          Startseite, Inhalt nur in dieser Datei.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Konfiguration</CardTitle>
              <CardDescription>
                Zentrale Werte in{" "}
                <code className="font-mono text-xs">src/config/site.ts</code>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-body-muted space-y-2 text-sm">
              <p>
                <span className="text-foreground font-medium">Name &amp; URL:</span>{" "}
                {siteConfig.name} —{" "}
                <code className="font-mono text-xs">{siteConfig.url}</code>{" "}
                (über{" "}
                <code className="font-mono text-xs">NEXT_PUBLIC_SITE_URL</code>{" "}
                in <code className="font-mono text-xs">.env.local</code>)
              </p>
              <p>
                <span className="text-foreground font-medium">Theme:</span> Slate +
                Mint wie im Astro-Boilerplate; Schriften via Fontsource (Inter, Cal
                Sans, JetBrains Mono).
              </p>
              <p>
                <span className="text-foreground font-medium">Statischer Export:</span>{" "}
                <code className="font-mono text-xs">npm run build</code> erzeugt{" "}
                <code className="font-mono text-xs">out/</code> — beliebig auf
                nginx, FTP, S3 o. Ä. ausrollen (kein Node nötig).
              </p>
              <p>
                <span className="text-foreground font-medium">Design tokens:</span>{" "}
                in{" "}
                <code className="font-mono text-xs">src/app/globals.css</code>{" "}
                (<code className="font-mono text-xs">:root</code>, optional{" "}
                <code className="font-mono text-xs">.light</code>).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Neue Seiten</CardTitle>
              <CardDescription>
                App Router: Ordner unter{" "}
                <code className="font-mono text-xs">src/app/</code>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-body-muted space-y-4 text-sm">
              <p>
                Lege z. B.{" "}
                <code className="font-mono text-xs">src/app/kontakt/page.tsx</code>{" "}
                an und exportiere wie hier{" "}
                <code className="font-mono text-xs">metadata</code> plus{" "}
                <code className="font-mono text-xs">SiteShell</code>.
              </p>
              <Link
                href="/"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                ← Zum Designsystem
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </SiteShell>
  );
}
