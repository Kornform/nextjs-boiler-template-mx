"use client";

import type { ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import Link from "next/link";
import {
  AlertCircle,
  Info,
  Palette,
  Type,
  Box,
  MousePointer2,
  FormInput,
  MessageSquare,
  LayoutGrid,
  Layers,
  ChevronsUpDown,
  Sparkles,
  ChevronRight,
  Mail,
  Loader2,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const toc = [
  { id: "farben", label: "Farben", icon: Palette },
  { id: "typografie", label: "Typografie", icon: Type },
  { id: "radius", label: "Radius", icon: Box },
  { id: "oberflaechen", label: "Oberflächen", icon: Layers },
  { id: "buttons", label: "Buttons", icon: MousePointer2 },
  { id: "formular", label: "Formular", icon: FormInput },
  { id: "feedback", label: "Feedback", icon: MessageSquare },
  { id: "akkordeon", label: "Akkordeon", icon: ChevronsUpDown },
  { id: "layout", label: "Layout & Daten", icon: LayoutGrid },
  { id: "overlays", label: "Overlays", icon: Sparkles },
] as const;

type ButtonVariantName = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;

const BUTTON_VARIANT_ROWS: { code: string; variant?: ButtonVariantName }[] = [
  { code: "default — Astro .btn--primary (Mint, 2px)" },
  { code: "cta — Astro .btn--cta", variant: "cta" },
  { code: "outline — Astro .btn--secondary (Rand, Hover invert)", variant: "outline" },
  { code: "secondary — Slate-Fläche", variant: "secondary" },
  { code: "ghost", variant: "ghost" },
  { code: "link", variant: "link" },
  { code: "destructive — nur Kontur (kein roter Block)", variant: "destructive" },
];

const BUTTON_SIZE_ROWS: {
  code: string;
  size: NonNullable<VariantProps<typeof buttonVariants>["size"]>;
}[] = [
  { code: "xs", size: "xs" },
  { code: "sm", size: "sm" },
  { code: "default", size: "default" },
  { code: "lg", size: "lg" },
];

const BUTTON_ICON_SIZE_ROWS: {
  code: string;
  size: NonNullable<VariantProps<typeof buttonVariants>["size"]>;
}[] = [
  { code: "icon-xs", size: "icon-xs" },
  { code: "icon-sm", size: "icon-sm" },
  { code: "icon", size: "icon" },
  { code: "icon-lg", size: "icon-lg" },
];

function ButtonSpecimenRow({
  code,
  children,
}: {
  code: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 border-b border-border/70 py-4 last:border-b-0 sm:flex-row sm:items-center sm:gap-8">
      <code className="text-muted-foreground w-full shrink-0 font-mono text-[11px] sm:w-40">
        {code}
      </code>
      <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">{children}</div>
    </div>
  );
}

function colorSwatchStripeClasses(token: string, className: string) {
  const divider =
    token === "border"
      ? "border-r border-background/90"
      : "border-r border-border";
  return cn("w-14 shrink-0", divider, className);
}

const colorRows: { token: string; className: string; fg?: string }[] = [
  { token: "background", className: "bg-background", fg: "text-foreground" },
  { token: "foreground", className: "bg-foreground", fg: "text-background" },
  { token: "card", className: "bg-card", fg: "text-card-foreground" },
  { token: "popover", className: "bg-popover", fg: "text-popover-foreground" },
  { token: "primary", className: "bg-primary", fg: "text-primary-foreground" },
  {
    token: "secondary",
    className: "bg-secondary",
    fg: "text-secondary-foreground",
  },
  { token: "muted", className: "bg-muted", fg: "text-muted-foreground" },
  { token: "accent", className: "bg-accent", fg: "text-accent-foreground" },
  {
    token: "destructive",
    className: "bg-destructive",
    fg: "text-destructive-foreground",
  },
  { token: "border", className: "bg-border" },
  { token: "ring", className: "bg-ring", fg: "text-primary-foreground" },
  { token: "chart-1", className: "bg-chart-1", fg: "text-primary-foreground" },
  { token: "chart-2", className: "bg-chart-2", fg: "text-primary-foreground" },
  { token: "sidebar", className: "bg-sidebar", fg: "text-sidebar-foreground" },
];

function SectionTitle({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-h2">{title}</h2>
      <p className="text-body-muted mt-2 max-w-2xl">{description}</p>
    </div>
  );
}

export function DesignSystemContent() {
  return (
    <div className="container-site section-sm pb-24">
      <div className="mb-12 flex flex-col gap-6 border-b border-border pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-label mb-2">{siteConfig.name}</p>
          <h1 className="text-h1 text-balance">Design system</h1>
          <p className="text-body-muted mt-3 max-w-2xl">
            Theme abgeleitet vom Astro-Boilerplate: Slate-Dunkelgrund, Mint/CTA
            als <code className="font-mono text-sm">primary</code>, Inter + Cal
            Sans + JetBrains Mono (+ Noto Serif Georgian als{" "}
            <code className="font-mono text-sm">font-quote</code>
            ). Semantik wie shadcn (
            <code className="font-mono text-sm">background</code>,{" "}
            <code className="font-mono text-sm">card</code>, …) — Komponenten
            bleiben kompatibel. Build: statischer Export nach{" "}
            <code className="font-mono text-sm">out/</code>.
          </p>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
        <nav
          className="lg:sticky lg:top-24 lg:self-start"
          aria-label="Abschnitte"
        >
          <p className="text-label text-muted-foreground mb-3 hidden lg:block">
            Inhalt
          </p>
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="link-focus-ring text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors lg:w-full"
                >
                  <item.icon className="size-4 shrink-0 opacity-70" aria-hidden />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex min-w-0 flex-col gap-16">
          {/* Farben */}
          <section className="space-y-6" aria-labelledby="farben-heading">
            <SectionTitle
              id="farben"
              title="Farben"
              description="Slate + Mint aus astro-boilerplate. Außenrahmen per 1px-Padding + Rahmenfarbe; Token border: eigener Rahmen-Ton und Trennlinie zum Text, damit Streifen und Rand nicht verschmelzen."
            />
            <h3 id="farben-heading" className="sr-only">
              Farbpalette
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {colorRows.map((row) => (
                <div
                  key={row.token}
                  className="ds-color-swatch"
                  data-ds-token={row.token}
                >
                  <div className="ds-color-swatch-inner">
                    <div
                      className={colorSwatchStripeClasses(
                        row.token,
                        row.className
                      )}
                      aria-hidden
                    />
                    <div className="flex min-w-0 flex-1 flex-col justify-center px-3 py-2.5">
                      <code className="font-mono text-xs font-medium">
                        {row.token}
                      </code>
                      <span className="text-muted-foreground text-xs">
                        bg-{row.token}
                      </span>
                      {row.fg ? (
                        <span
                          className={cn(
                            "mt-2 inline-flex size-7 items-center justify-center rounded-md text-xs font-medium",
                            row.className,
                            row.fg
                          )}
                          aria-hidden
                        >
                          Aa
                        </span>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Typografie */}
          <section className="space-y-6" aria-labelledby="typografie-heading">
            <SectionTitle
              id="typografie"
              title="Typografie"
              description="Display: Cal Sans; UI: Inter; Mono: JetBrains Mono; Zitate: font-quote. Skala in globals.css: H1/display mit clamp, H2/H3 jetzt ebenfalls fluid (--type-h2/--type-h3); Fließtext 1rem, body-muted und body-lg minimal mit Viewport gestuft."
            />
            <h3 id="typografie-heading" className="sr-only">
              Textstile
            </h3>
            <Card>
              <CardHeader>
                <CardTitle>Skala</CardTitle>
                <CardDescription>
                  Klassen in <code className="font-mono text-xs">globals.css</code>{" "}
                  (@layer components); Größen gesteuert über{" "}
                  <code className="font-mono text-xs">--type-*</code> wo angegeben.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-display">text-display</p>
                <p className="text-h1">text-h1 — Überschrift erste Ebene</p>
                <p className="text-h2">text-h2 — Sektionstitel</p>
                <p className="text-h3">text-h3 — Karten- und Listenüberschriften</p>
                <p className="text-label text-primary">text-label — Label / Eyebrow</p>
                <p className="text-body-lg">
                  text-body-lg — Einleitung und längere Absätze mit erhöhter Lesbarkeit.
                </p>
                <p className="text-body-muted">
                  text-body-muted — sekundärer Fließtext und Hilfetexte.
                </p>
                <p className="font-quote text-sm italic text-muted-foreground">
                  font-quote — Noto Serif Georgian (für Pullquotes / Akzente).
                </p>
                <p className="font-mono text-sm">
                  font-mono — JetBrains Mono Variable.
                </p>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Radius */}
          <section className="space-y-6">
            <SectionTitle
              id="radius"
              title="Eckenradius"
              description="Basis --radius (0.625rem); Skala wie in shadcn-Docs (sm … 4xl), plus rounded-xs."
            />
            <div className="flex flex-wrap gap-4">
              {(
                [
                  ["rounded-xs", "var(--radius-xs)"],
                  ["rounded-sm", "var(--radius-sm)"],
                  ["rounded-md", "var(--radius-md)"],
                  ["rounded-lg", "var(--radius-lg)"],
                  ["rounded-xl", "var(--radius-xl)"],
                  ["rounded-2xl", "var(--radius-2xl)"],
                ] as const
              ).map(([cls, label]) => (
                <div key={cls} className="text-center">
                  <div
                    className={cn(
                      "border-border bg-muted mb-2 size-16 border-2",
                      cls
                    )}
                    aria-hidden
                  />
                  <code className="font-mono text-xs">{cls}</code>
                  <div className="text-muted-foreground text-[10px]">{label}</div>
                </div>
              ))}
            </div>
          </section>

          <Separator />

          {/* Oberflächen — astro abstracts_surface.scss */}
          <section className="space-y-6">
            <SectionTitle
              id="oberflaechen"
              title="Oberflächen"
              description="Gleiche Surface-Typen wie im Astro-Referenzprojekt (abstracts_surface.scss): primary, primary2, accent, secondary, solid, gradient-slate. Optional .surface-hoverable für Rand/Schatten-Hover ohne Bewegung. .surface ist ein Alias für .surface-primary."
            />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="surface-primary surface-hoverable p-6">
                <p className="font-mono text-xs text-muted-foreground">.surface-primary</p>
                <p className="mt-1 font-medium">Standard-Gradient</p>
                <p className="text-body-muted mt-1 text-sm">
                  Slate-800-Verlauf, dezenter heller Rand.
                </p>
              </div>
              <div className="surface-primary2 surface-hoverable p-6">
                <p className="font-mono text-xs text-muted-foreground">.surface-primary2</p>
                <p className="mt-1 font-medium">Flach + slate-700-Rand</p>
                <p className="text-body-muted mt-1 text-sm">
                  bg-slate-800/30; Hover hebt Rand auf slate-500 und die Fläche leicht
                  an.
                </p>
              </div>
              <div className="surface-accent surface-hoverable p-6">
                <p className="font-mono text-xs text-muted-foreground">.surface-accent</p>
                <p className="mt-1 font-medium">CTA-Rahmen</p>
                <p className="text-body-muted mt-1 text-sm">
                  Mint-Gradient + CTA-Border (Hervorhebung).
                </p>
              </div>
              <div className="surface-secondary surface-hoverable p-6">
                <p className="font-mono text-xs text-muted-foreground">.surface-secondary</p>
                <p className="mt-1 font-medium">Slate-700-Ebene</p>
                <p className="text-body-muted mt-1 text-sm">
                  Etwas heller; Hover verstärkt Gradient + Rand.
                </p>
              </div>
              <div className="surface-solid p-6">
                <p className="font-mono text-xs text-muted-foreground">.surface-solid</p>
                <p className="mt-1 font-medium">Ohne Hover-Pattern</p>
                <p className="text-body-muted mt-1 text-sm">
                  Volle slate-800-Fläche, statische Karten.
                </p>
              </div>
              <div className="surface-gradient-slate surface-hoverable p-6">
                <p className="font-mono text-xs text-muted-foreground">
                  .surface-gradient-slate
                </p>
                <p className="mt-1 font-medium">800 → 900</p>
                <p className="text-body-muted mt-1 text-sm">
                  Diagonal-Gradient, Rand slate-700 → Hover slate-600.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Buttons — Astro component_buttons + shadcn/CVA-API */}
          <section className="space-y-6">
            <SectionTitle
              id="buttons"
              title="Buttons"
              description="An Astro (Mint-Primary, heller CTA, Outline mit weißem Rand auf dunklem UI). Immer cursor-pointer / disabled:cursor-not-allowed. CVA-Varianten weiterhin kompatibel zu shadcn; destructive nur als dezente Kontur. Base UI Button; Links: buttonVariants + Next Link."
            />
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Varianten</CardTitle>
                  <CardDescription>
                    Prop <code className="font-mono text-xs">variant</code> — je
                    Zeile: aktiv und{" "}
                    <code className="font-mono text-xs">disabled</code>.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {BUTTON_VARIANT_ROWS.map((row, i) => (
                    <ButtonSpecimenRow
                      key={`${row.variant ?? "default"}-${i}`}
                      code={row.code}
                    >
                      <Button variant={row.variant}>Button</Button>
                      <Button variant={row.variant} disabled>
                        Disabled
                      </Button>
                    </ButtonSpecimenRow>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Größen (Text)</CardTitle>
                  <CardDescription>
                    Prop <code className="font-mono text-xs">size</code> bei{" "}
                    <code className="font-mono text-xs">variant=&quot;default&quot;</code>
                    .
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {BUTTON_SIZE_ROWS.map((row) => (
                    <ButtonSpecimenRow key={row.code} code={row.code}>
                      <Button size={row.size}>Button</Button>
                      <Button size={row.size} disabled>
                        Disabled
                      </Button>
                    </ButtonSpecimenRow>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Icon-Buttons</CardTitle>
                  <CardDescription>
                    Größen <code className="font-mono text-xs">icon-xs</code> bis{" "}
                    <code className="font-mono text-xs">icon-lg</code> — immer{" "}
                    <code className="font-mono text-xs">aria-label</code> setzen.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {BUTTON_ICON_SIZE_ROWS.map((row) => (
                    <ButtonSpecimenRow key={row.code} code={row.code}>
                      <Button size={row.size} aria-label="Hinzufügen">
                        <Plus className="size-4" />
                      </Button>
                    </ButtonSpecimenRow>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Icons + Text</CardTitle>
                  <CardDescription>
                    Abstand für End-Icons:{" "}
                    <code className="font-mono text-xs">data-icon=&quot;inline-end&quot;</code>{" "}
                    (siehe{" "}
                    <code className="font-mono text-xs">buttonVariants</code>).
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3 pt-0">
                  <Button variant="default">
                    <Mail className="size-4" data-icon="inline-start" />
                    E-Mail
                  </Button>
                  <Button variant="cta">
                    Loslegen
                    <ChevronRight className="size-4" data-icon="inline-end" />
                  </Button>
                  <Button variant="outline">
                    Sekundär
                    <ChevronRight className="size-4" data-icon="inline-end" />
                  </Button>
                  <Button variant="secondary" disabled>
                    <Loader2
                      className="size-4 animate-spin"
                      data-icon="inline-start"
                    />
                    Wird geladen…
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Kombinationen</CardTitle>
                  <CardDescription>
                    Häufige Mischungen aus Variant und Size.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3 pt-0">
                  <Button variant="default" size="lg">
                    Primary groß
                  </Button>
                  <Button variant="cta" size="sm">
                    CTA klein
                  </Button>
                  <Button variant="outline" size="lg">
                    Outline groß
                  </Button>
                  <Button variant="ghost" size="xs">
                    Ghost xs
                  </Button>
                  <Button variant="secondary" size="icon-sm" aria-label="Info">
                    <Info className="size-3.5" />
                  </Button>
                  <Button variant="destructive" size="sm">
                    Nur Kontur
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Navigation (Server Components)</CardTitle>
                  <CardDescription>
                    Kein <code className="font-mono text-xs">{"<Button>"}</code>{" "}
                    nötig:{" "}
                    <code className="font-mono text-xs">buttonVariants</code> aus{" "}
                    <code className="font-mono text-xs">
                      @/components/ui/button-variants
                    </code>{" "}
                    auf <code className="font-mono text-xs">Link</code>.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3 pt-0">
                  <Link
                    href="/about"
                    className={buttonVariants({ variant: "default" })}
                  >
                    Primär-Link
                  </Link>
                  <Link
                    href="/about"
                    className={buttonVariants({ variant: "cta", size: "sm" })}
                  >
                    CTA-Link
                  </Link>
                  <Link
                    href="/"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    Outline-Link
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fehlerzustand</CardTitle>
                  <CardDescription>
                    <code className="font-mono text-xs">aria-invalid</code> — nur
                    Randfarbe / Fläche (kein Mint-Ring, kein Rot+Grün-Mix).
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3 pt-0">
                  <Button variant="outline" aria-invalid>
                    Ungültig
                  </Button>
                  <Button variant="default" aria-invalid>
                    Ungültig
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Formular */}
          <section className="space-y-6">
            <SectionTitle
              id="formular"
              title="Formular"
              description="Eingaben, Auswahl und Schalter — konsistent fokussierbar."
            />
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Beispielformular</CardTitle>
                <CardDescription>Demonstration gängiger Felder</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ds-name">Projektname</Label>
                  <Input id="ds-name" placeholder="z. B. Mehrsprachiger Blog" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ds-notes">Notizen</Label>
                  <Textarea
                    id="ds-notes"
                    placeholder="Terminologie, Zielgruppe …"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ds-lang">Zielsprache</Label>
                  <Select defaultValue="de">
                    <SelectTrigger id="ds-lang" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="ds-terms" defaultChecked />
                  <Label htmlFor="ds-terms" className="font-normal">
                    Qualitätsregeln aktivieren
                  </Label>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="ds-auto" className="font-normal">
                    Auto-Übersetzung
                  </Label>
                  <Switch id="ds-auto" defaultChecked />
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator />

          {/* Feedback */}
          <section className="space-y-6">
            <SectionTitle
              id="feedback"
              title="Feedback"
              description="Hinweise, Status und kompakte Labels."
            />
            <div className="space-y-4">
              <Alert>
                <Info className="size-4" />
                <AlertTitle>Hinweis</AlertTitle>
                <AlertDescription>
                  neutrale Alert-Komponente für nicht-blockierende Meldungen.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="size-4" />
                <AlertTitle>Fehler</AlertTitle>
                <AlertDescription>
                  destructive — für Validierung oder fehlgeschlagene Aktionen.
                </AlertDescription>
              </Alert>
              <div className="flex flex-wrap gap-2">
                <Badge>default</Badge>
                <Badge variant="secondary">secondary</Badge>
                <Badge variant="outline">outline</Badge>
                <Badge variant="destructive">destructive</Badge>
                <Badge variant="ghost">ghost</Badge>
              </div>
            </div>
          </section>

          <Separator />

          {/* Akkordeon */}
          <section className="space-y-6">
            <SectionTitle
              id="akkordeon"
              title="Akkordeon"
              description="Volle Zeile klickbar; immer nur ein Panel offen (multiple ist im Wrapper deaktiviert). Hover nur muted-Fläche, ein Chevron mit Rotation."
            />
            <Accordion
              defaultValue={["ds-1"]}
              className="max-w-lg overflow-hidden rounded-xl border border-border/80 bg-card"
            >
              <AccordionItem value="ds-1">
                <AccordionTrigger className="text-[15px]">
                  Erstes Panel
                </AccordionTrigger>
                <AccordionContent>
                  Ideal für Hilfetexte, Unterpunkte oder optionale Detailinfos — ohne
                  die Seite zu überladen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ds-2">
                <AccordionTrigger className="text-[15px]">
                  Zweites Panel
                </AccordionTrigger>
                <AccordionContent>
                  Öffnet ein anderes Panel — das vorherige schließt automatisch.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ds-3">
                <AccordionTrigger className="text-[15px]">
                  Drittes Panel
                </AccordionTrigger>
                <AccordionContent>
                  Fokus nur über Hintergrund, kein Rand-„Sprung“; Chevron dreht sich.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <Separator />

          {/* Layout */}
          <section className="flex flex-col gap-6">
            <SectionTitle
              id="layout"
              title="Layout & Daten"
              description="Karten, Tabs, Avatar — typische Muster für Inhalte."
            />
            <Tabs defaultValue="eins" className="w-full max-w-lg">
              <TabsList>
                <TabsTrigger value="eins">Erster Tab</TabsTrigger>
                <TabsTrigger value="zwei">Zweiter Tab</TabsTrigger>
              </TabsList>
              <TabsContent value="eins" className="text-muted-foreground mt-3">
                Inhalt für Registerkarte eins.
              </TabsContent>
              <TabsContent value="zwei" className="text-muted-foreground mt-3">
                Inhalt für Registerkarte zwei.
              </TabsContent>
            </Tabs>

            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" alt="" />
                <AvatarFallback className="text-lg">CD</AvatarFallback>
              </Avatar>
              <div className="text-body-muted text-sm">
                <span className="text-foreground font-medium">Avatar</span> mit
                Fallback-Initialen, wenn kein Bild gesetzt ist.
              </div>
            </div>

            <Separator />

            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Kartenlayout</CardTitle>
                <CardDescription>
                  CardHeader + CardContent für strukturierte Datenblöcke.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Standardmuster für strukturierte Inhalte; längere ausklappbare Texte
                  eignen sich für das Akkordeon.
                </p>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section className="flex flex-col gap-6" aria-labelledby="overlays-heading">
            <SectionTitle
              id="overlays"
              title="Overlays & Feedback"
              description="Dialog, Sheet, Menü, Popover, Tooltip und Skeleton — typische Bausteine; Tooltips laufen über TooltipProvider im Root-Layout."
            />
            <h3 id="overlays-heading" className="sr-only">
              Overlay-Komponenten
            </h3>

            <Card>
              <CardHeader>
                <CardTitle>Dialog & Sheet</CardTitle>
                <CardDescription>
                  Modal (fokussiert) und seitliches Panel — z. B. Bestätigungen oder
                  mobile Navigation.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <Dialog>
                  <DialogTrigger
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Dialog
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Beispiel-Dialog</DialogTitle>
                      <DialogDescription>
                        Schließen über X oder Esc. Fokus wird ins Fenster
                        übernommen.
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <Sheet>
                  <SheetTrigger
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Sheet
                  </SheetTrigger>
                  <SheetContent side="right" className="flex w-full flex-col sm:max-w-sm">
                    <SheetHeader>
                      <SheetTitle>Seitenpanel</SheetTitle>
                      <SheetDescription>
                        Nutzbar für Filter, Warenkorb oder sekundäre Aktionen.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Menü, Popover, Tooltip</CardTitle>
                <CardDescription>
                  Anker an nativen Triggern (kein Button-in-Button); gleiche
                  buttonVariants-Klassen wie überall.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Dropdown
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Aktionen</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Erste Option</DropdownMenuItem>
                    <DropdownMenuItem>Zweite Option</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Popover>
                  <PopoverTrigger
                    className={cn(buttonVariants({ variant: "outline" }))}
                  >
                    Popover
                  </PopoverTrigger>
                  <PopoverContent>
                    <p className="text-muted-foreground text-sm">
                      Kontext ohne die Seite zu verlassen.
                    </p>
                  </PopoverContent>
                </Popover>

                <Tooltip>
                  <TooltipTrigger
                    className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                  >
                    Tooltip
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Kurzer Hilfetext beim Hover oder Fokus.</p>
                  </TooltipContent>
                </Tooltip>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skeleton</CardTitle>
                <CardDescription>
                  Platzhalter für Listen und Karten während Inhalte laden.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="size-10 rounded-full" />
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <Skeleton className="h-3 w-2/3 max-w-[12rem]" />
                    <Skeleton className="h-3 w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
