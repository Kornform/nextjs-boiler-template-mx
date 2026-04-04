import Link from "next/link";

import { SiteShell } from "@/components/layout/site-shell";
import { buttonVariants } from "@/components/ui/button-variants";

export default function NotFound() {
  return (
    <SiteShell>
      <div className="container-site section-sm flex flex-col items-center pb-24 text-center">
        <p className="text-label text-muted-foreground">404</p>
        <h1 className="text-h1 mt-2 max-w-md text-balance">Seite nicht gefunden</h1>
        <p className="text-body-muted mt-4 max-w-md">
          Diese Adresse gibt es in diesem Projekt nicht. Zurück zum Designsystem oder
          zur Info-Seite.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className={buttonVariants({ size: "default" })}>
            Startseite
          </Link>
          <Link
            href="/about"
            className={buttonVariants({ variant: "outline", size: "default" })}
          >
            Über
          </Link>
        </div>
      </div>
    </SiteShell>
  );
}
