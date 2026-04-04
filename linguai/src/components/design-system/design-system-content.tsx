"use client";

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
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
] as const;

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
  { token: "brand", className: "bg-brand", fg: "text-brand-foreground" },
  {
    token: "void",
    className: "bg-void",
    fg: "text-white",
  },
  {
    token: "highlight",
    className: "bg-highlight",
    fg: "text-white",
  },
  {
    token: "footer",
    className: "bg-[#0a0a0a]",
    fg: "text-white",
  },
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
      <div className="mb-12 flex flex-col gap-6 border-b border-border/40 pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-label mb-2">{siteConfig.name}</p>
          <h1 className="text-h1 text-balance">Designsystem</h1>
          <p className="text-body-muted mt-3 max-w-2xl">
            Übersicht der shadcn/ui-Komponenten (Base UI). Landing-Theme: Void
            (#0a0a0a) + Cool Grey + Orange Primary (#ff4d12), Outfit + DM Sans +
            JetBrains Mono. Hilfsklassen in{" "}
            <code className="font-mono text-sm">globals.css</code>.
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
                  className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors lg:w-full"
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
              description="Semantik: cool grey Canvas, Void-Text, Orange Primary, weiße Karten. Nur heller Modus + dunkle Hero/Footer."
            />
            <h3 id="farben-heading" className="sr-only">
              Farbpalette
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {colorRows.map((row) => (
                <div
                  key={row.token}
                  className="surface flex flex-row items-stretch overflow-hidden p-0"
                >
                  <div
                    className={cn("w-14 shrink-0", row.className)}
                    aria-hidden
                  />
                  <div className="flex flex-1 flex-col justify-center px-3 py-2">
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
              ))}
            </div>
          </section>

          <Separator />

          {/* Typografie */}
          <section className="space-y-6" aria-labelledby="typografie-heading">
            <SectionTitle
              id="typografie"
              title="Typografie"
              description="Überschriften: Outfit (500–900). Fließtext: DM Sans (400–700). Code: JetBrains Mono."
            />
            <h3 id="typografie-heading" className="sr-only">
              Textstile
            </h3>
            <Card>
              <CardHeader>
                <CardTitle>Skala</CardTitle>
                <CardDescription>
                  Klassen aus <code className="font-mono text-xs">globals.css</code>
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
                <p className="font-mono text-sm">
                  font-mono — technische Werte (JetBrains Mono).
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
              description="Skaliert über --radius; Tailwind mapped auf radius-xs … radius-3xl."
            />
            <div className="flex flex-wrap gap-4">
              {(
                [
                  ["rounded-xs", "var(--radius-xs)"],
                  ["rounded-sm", "var(--radius-sm)"],
                  ["rounded-md", "var(--radius-md)"],
                  ["rounded-lg", "var(--radius-lg)"],
                  ["rounded-xl", "var(--radius-xl)"],
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

          {/* Oberflächen */}
          <section className="space-y-6">
            <SectionTitle
              id="oberflaechen"
              title="Oberflächen"
              description="Wiederverwendbare Container aus dem Surface-System."
            />
            <div className="grid gap-4 md:grid-cols-3">
              <div className="surface surface-hoverable p-6">
                <p className="font-medium">surface</p>
                <p className="text-body-muted mt-1 text-sm">
                  Standard-Karte mit Rand.
                </p>
              </div>
              <div className="surface-raised surface-hoverable p-6">
                <p className="font-medium">surface-raised</p>
                <p className="text-body-muted mt-1 text-sm">
                  Leicht erhöht mit Schatten.
                </p>
              </div>
              <div className="surface-brand surface-hoverable p-6">
                <p className="font-medium">surface-brand</p>
                <p className="text-body-muted mt-1 text-sm">
                  Akzentfläche mit Markenfarbe.
                </p>
              </div>
            </div>
          </section>

          <Separator />

          {/* Buttons */}
          <section className="space-y-6">
            <SectionTitle
              id="buttons"
              title="Buttons"
              description="shadcn Button mit Varianten und Größen (Base UI)."
            />
            <Card>
              <CardContent className="flex flex-wrap gap-3 pt-6">
                <Button>Standard</Button>
                <Button variant="secondary">Sekundär</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 border-t-0 pt-0">
                <Button size="xs">xs</Button>
                <Button size="sm">sm</Button>
                <Button size="default">default</Button>
                <Button size="lg">lg</Button>
                <Button size="icon" aria-label="Suche">
                  <Info className="size-4" />
                </Button>
              </CardFooter>
            </Card>
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
              description="shadcn Accordion (Base UI) — ein- oder mehrere Panels gleichzeitig offen; mit Höhen-Animation. Auf der Startseite für das FAQ genutzt."
            />
            <Accordion
              multiple
              defaultValue={["ds-1", "ds-2"]}
              className="max-w-lg rounded-xl border border-border bg-card px-1 shadow-sm"
            >
              <AccordionItem value="ds-1">
                <AccordionTrigger className="px-3 text-[15px]">
                  Erstes Panel
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-3 pb-3">
                  Ideal für Hilfetexte, Unterpunkte oder optionale Detailinfos — ohne
                  die Seite zu überladen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ds-2">
                <AccordionTrigger className="px-3 text-[15px]">
                  Zweites Panel
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-3 pb-3">
                  Mit <code className="font-mono text-xs">multiple</code> können
                  mehrere Einträge gleichzeitig geöffnet sein.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ds-3">
                <AccordionTrigger className="px-3 text-[15px]">
                  Drittes Panel
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-3 pb-3">
                  Fokus-Stile folgen dem globalen Ring-Token (<code className="font-mono text-xs">--ring</code>).
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <Separator />

          {/* Layout */}
          <section className="space-y-6">
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
                Inhalt für Registerkarte eins — z. B. Vorschau der Übersetzung.
              </TabsContent>
              <TabsContent value="zwei" className="text-muted-foreground mt-3">
                Inhalt für Registerkarte zwei — Metadaten oder Verlauf.
              </TabsContent>
            </Tabs>

            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>LA</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="" alt="" />
                <AvatarFallback className="text-lg">LI</AvatarFallback>
              </Avatar>
              <div className="text-body-muted text-sm">
                <span className="text-foreground font-medium">Avatar</span> mit
                Fallback-Initialen, wenn kein Bild gesetzt ist.
              </div>
            </div>

            <Separator className="my-2" />

            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Kartenlayout</CardTitle>
                <CardDescription>
                  CardHeader + CardContent für strukturierte Datenblöcke.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Wird auf der Startseite für Funktionen genutzt; ausklappbare Inhalte
                  im FAQ nutzen das Akkordeon.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
