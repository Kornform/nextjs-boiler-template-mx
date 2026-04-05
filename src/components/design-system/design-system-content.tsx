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
  Zap,
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
  { id: "colors", label: "Colors", icon: Palette },
  { id: "typography", label: "Typography", icon: Type },
  { id: "radius", label: "Radius", icon: Box },
  { id: "surfaces", label: "Surfaces", icon: Layers },
  { id: "buttons", label: "Buttons", icon: MousePointer2 },
  { id: "form", label: "Form", icon: FormInput },
  { id: "feedback", label: "Feedback", icon: MessageSquare },
  { id: "accordion", label: "Accordion", icon: ChevronsUpDown },
  { id: "layout", label: "Layout & Data", icon: LayoutGrid },
  { id: "overlays", label: "Overlays", icon: Sparkles },
  { id: "animations", label: "Animations", icon: Zap },
] as const;

type ButtonVariantName = NonNullable<
  VariantProps<typeof buttonVariants>["variant"]
>;

const BUTTON_VARIANT_ROWS: { code: string; variant?: ButtonVariantName }[] = [
  { code: "default — mint fill, 2px border" },
  { code: "cta — white fill", variant: "cta" },
  { code: "outline — border, hover invert", variant: "outline" },
  { code: "secondary — slate surface", variant: "secondary" },
  { code: "ghost", variant: "ghost" },
  { code: "link", variant: "link" },
  { code: "destructive — outline only, no red block", variant: "destructive" },
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
            Theme derived from the Astro boilerplate: slate-950 canvas, Mint/CTA
            as <code className="font-mono text-sm">primary</code>, Inter + Cal
            Sans + JetBrains Mono (+ Noto Serif Georgian as{" "}
            <code className="font-mono text-sm">font-quote</code>
            ). Semantics follow shadcn (
            <code className="font-mono text-sm">background</code>,{" "}
            <code className="font-mono text-sm">card</code>, …) — components
            stay compatible. Build: static export to{" "}
            <code className="font-mono text-sm">out/</code>.
          </p>
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
        <nav
          className="lg:sticky lg:top-24 lg:self-start"
          aria-label="Sections"
        >
          <p className="text-label text-muted-foreground mb-3 hidden lg:block">
            Contents
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
          {/* Colors */}
          <section className="space-y-6" aria-labelledby="colors-heading">
            <SectionTitle
              id="colors"
              title="Colors"
              description="Slate + Mint from the Astro boilerplate. Outer border via 1px padding + border color; the border token uses its own shade so the swatch stripe and the card edge never merge."
            />
            <h3 id="colors-heading" className="sr-only">
              Color palette
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

          {/* Typography */}
          <section className="space-y-6" aria-labelledby="typography-heading">
            <SectionTitle
              id="typography"
              title="Typography"
              description="Display: Cal Sans; UI: Inter; Mono: JetBrains Mono; Quotes: font-quote. Scale in globals.css: H1/display with clamp, H2/H3 also fluid (--type-h2/--type-h3); body 1rem, body-muted and body-lg slightly viewport-stepped."
            />
            <h3 id="typography-heading" className="sr-only">
              Text styles
            </h3>
            <Card>
              <CardHeader>
                <CardTitle>Scale</CardTitle>
                <CardDescription>
                  Classes in <code className="font-mono text-xs">globals.css</code>{" "}
                  (@layer components); sizes driven by{" "}
                  <code className="font-mono text-xs">--type-*</code> variables where noted.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-display">text-display</p>
                <p className="text-h1">text-h1 — first-level heading</p>
                <p className="text-h2">text-h2 — section title</p>
                <p className="text-h3">text-h3 — card and list headings</p>
                <p className="text-label text-primary">text-label — label / eyebrow</p>
                <p className="text-body-lg">
                  text-body-lg — introductions and longer paragraphs with increased readability.
                </p>
                <p className="text-body-muted">
                  text-body-muted — secondary body copy and helper text.
                </p>
                <p className="font-quote text-sm italic text-muted-foreground">
                  font-quote — Noto Serif Georgian (for pull-quotes / accents).
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
              title="Border Radius"
              description="Base --radius (0.625rem); scale follows the shadcn docs (sm … 4xl), plus rounded-xs."
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

          {/* Surfaces */}
          <section className="space-y-6">
            <SectionTitle
              id="surfaces"
              title="Surfaces"
              description="Same surface types as the Astro reference project (abstracts_surface.scss): primary, primary2, accent, secondary, solid, gradient-slate. Add .surface-hoverable for border/shadow hover without movement. .surface is an alias for .surface-primary."
            />
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <div className="surface-primary surface-hoverable p-6">
                <p className="font-mono text-xs text-muted-foreground">.surface-primary</p>
                <p className="mt-1 font-medium">Default gradient</p>
                <p className="text-body-muted mt-1 text-sm">
                  Slate-800 gradient, subtle light border.
                </p>
              </div>
              <div className="surface-primary2 surface-hoverable p-6">
                <p className="font-mono text-xs text-muted-foreground">.surface-primary2</p>
                <p className="mt-1 font-medium">Flat + slate-700 border</p>
                <p className="text-body-muted mt-1 text-sm">
                  bg-slate-800/30; hover lifts border to slate-500 and slightly brightens the surface.
                </p>
              </div>
              <div className="surface-accent surface-hoverable p-6">
                <p className="font-mono text-xs text-muted-foreground">.surface-accent</p>
                <p className="mt-1 font-medium">CTA border</p>
                <p className="text-body-muted mt-1 text-sm">
                  Mint gradient + CTA border for highlighted elements.
                </p>
              </div>
              <div className="surface-secondary surface-hoverable p-6">
                <p className="font-mono text-xs text-muted-foreground">.surface-secondary</p>
                <p className="mt-1 font-medium">Slate-700 layer</p>
                <p className="text-body-muted mt-1 text-sm">
                  Slightly lighter; hover strengthens gradient + border.
                </p>
              </div>
              <div className="surface-solid surface-hoverable p-6">
                <p className="font-mono text-xs text-muted-foreground">.surface-solid</p>
                <p className="mt-1 font-medium">Opaque surface</p>
                <p className="text-body-muted mt-1 text-sm">
                  Full slate-800 fill; hover lifts to slate-700.
                </p>
              </div>
              <div className="surface-gradient-slate surface-hoverable p-6">
                <p className="font-mono text-xs text-muted-foreground">
                  .surface-gradient-slate
                </p>
                <p className="mt-1 font-medium">800 → 900</p>
                <p className="text-body-muted mt-1 text-sm">
                  Diagonal gradient, slate-700 border → hover slate-600.
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
              description="Aligned with Astro (mint primary, light CTA, outline with white border on dark UI). Always cursor-pointer / disabled:cursor-not-allowed. CVA variants remain shadcn-compatible; destructive is outline-only. Base UI Button; links: buttonVariants + Next Link."
            />
            <div className="flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Variants</CardTitle>
                  <CardDescription>
                    Prop <code className="font-mono text-xs">variant</code> — each
                    row: active and{" "}
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
                  <CardTitle>Sizes (text)</CardTitle>
                  <CardDescription>
                    Prop <code className="font-mono text-xs">size</code> with{" "}
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
                  <CardTitle>Icon buttons</CardTitle>
                  <CardDescription>
                    Sizes <code className="font-mono text-xs">icon-xs</code> to{" "}
                    <code className="font-mono text-xs">icon-lg</code> — always
                    provide <code className="font-mono text-xs">aria-label</code>.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {BUTTON_ICON_SIZE_ROWS.map((row) => (
                    <ButtonSpecimenRow key={row.code} code={row.code}>
                      <Button size={row.size} aria-label="Add">
                        <Plus className="size-4" />
                      </Button>
                    </ButtonSpecimenRow>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Icons + text</CardTitle>
                  <CardDescription>
                    Spacing for end icons via{" "}
                    <code className="font-mono text-xs">data-icon=&quot;inline-end&quot;</code>{" "}
                    (see{" "}
                    <code className="font-mono text-xs">buttonVariants</code>).
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3 pt-0">
                  <Button variant="default">
                    <Mail className="size-4" data-icon="inline-start" />
                    Email
                  </Button>
                  <Button variant="cta">
                    Get started
                    <ChevronRight className="size-4" data-icon="inline-end" />
                  </Button>
                  <Button variant="outline">
                    Secondary
                    <ChevronRight className="size-4" data-icon="inline-end" />
                  </Button>
                  <Button variant="secondary" disabled>
                    <Loader2
                      className="size-4 animate-spin"
                      data-icon="inline-start"
                    />
                    Loading…
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Combinations</CardTitle>
                  <CardDescription>
                    Common pairings of variant and size.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3 pt-0">
                  <Button variant="default" size="lg">
                    Primary large
                  </Button>
                  <Button variant="cta" size="sm">
                    CTA small
                  </Button>
                  <Button variant="outline" size="lg">
                    Outline large
                  </Button>
                  <Button variant="ghost" size="xs">
                    Ghost xs
                  </Button>
                  <Button variant="secondary" size="icon-sm" aria-label="Info">
                    <Info className="size-3.5" />
                  </Button>
                  <Button variant="destructive" size="sm">
                    Outline only
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Navigation (Server Components)</CardTitle>
                  <CardDescription>
                    No <code className="font-mono text-xs">{"<Button>"}</code>{" "}
                    needed:{" "}
                    <code className="font-mono text-xs">buttonVariants</code> from{" "}
                    <code className="font-mono text-xs">
                      @/components/ui/button-variants
                    </code>{" "}
                    applied to <code className="font-mono text-xs">Link</code>.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3 pt-0">
                  <Link
                    href="/about"
                    className={buttonVariants({ variant: "default" })}
                  >
                    Primary link
                  </Link>
                  <Link
                    href="/about"
                    className={buttonVariants({ variant: "cta", size: "sm" })}
                  >
                    CTA link
                  </Link>
                  <Link
                    href="/"
                    className={buttonVariants({ variant: "outline", size: "sm" })}
                  >
                    Outline link
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Error state</CardTitle>
                  <CardDescription>
                    <code className="font-mono text-xs">aria-invalid</code> — border
                    color only (no mint ring, no red+green mix).
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-3 pt-0">
                  <Button variant="outline" aria-invalid>
                    Invalid
                  </Button>
                  <Button variant="default" aria-invalid>
                    Invalid
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          <Separator />

          {/* Form */}
          <section className="space-y-6">
            <SectionTitle
              id="form"
              title="Form"
              description="Inputs, selects and toggles — consistently focusable."
            />
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Example form</CardTitle>
                <CardDescription>Demonstration of common fields</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="ds-name">Project name</Label>
                  <Input id="ds-name" placeholder="e.g. Multilingual blog" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ds-notes">Notes</Label>
                  <Textarea
                    id="ds-notes"
                    placeholder="Terminology, target audience…"
                    rows={3}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ds-lang">Target language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="ds-lang" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="de">Deutsch</SelectItem>
                      <SelectItem value="fr">Français</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="ds-terms" defaultChecked />
                  <Label htmlFor="ds-terms" className="font-normal">
                    Enable quality rules
                  </Label>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <Label htmlFor="ds-auto" className="font-normal">
                    Auto-translate
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
              description="Notifications, status indicators and compact labels."
            />
            <div className="space-y-4">
              <Alert>
                <Info className="size-4" />
                <AlertTitle>Note</AlertTitle>
                <AlertDescription>
                  Neutral alert component for non-blocking messages.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="size-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Destructive — for validation errors or failed actions.
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

          {/* Accordion */}
          <section className="space-y-6">
            <SectionTitle
              id="accordion"
              title="Accordion"
              description="Full row clickable; only one panel open at a time (multiple disabled in wrapper). Hover shows muted surface only, single chevron rotates."
            />
            <Accordion
              defaultValue={["ds-1"]}
              className="max-w-lg overflow-hidden rounded-xl border border-border/80 bg-card"
            >
              <AccordionItem value="ds-1">
                <AccordionTrigger className="text-[15px]">
                  First panel
                </AccordionTrigger>
                <AccordionContent>
                  Ideal for help text, sub-items or optional details — without cluttering the page.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ds-2">
                <AccordionTrigger className="text-[15px]">
                  Second panel
                </AccordionTrigger>
                <AccordionContent>
                  Opening another panel closes the previous one automatically.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="ds-3">
                <AccordionTrigger className="text-[15px]">
                  Third panel
                </AccordionTrigger>
                <AccordionContent>
                  Focus indicated by background only, no border jump; chevron rotates.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <Separator />

          {/* Layout & Data */}
          <section className="flex flex-col gap-6">
            <SectionTitle
              id="layout"
              title="Layout & Data"
              description="Cards, tabs, avatars — typical patterns for structured content."
            />
            <Tabs defaultValue="one" className="w-full max-w-lg">
              <TabsList>
                <TabsTrigger value="one">First tab</TabsTrigger>
                <TabsTrigger value="two">Second tab</TabsTrigger>
              </TabsList>
              <TabsContent value="one" className="text-muted-foreground mt-3">
                Content for tab one.
              </TabsContent>
              <TabsContent value="two" className="text-muted-foreground mt-3">
                Content for tab two.
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
                <span className="text-foreground font-medium">Avatar</span> with
                fallback initials when no image is set.
              </div>
            </div>

            <Separator />

            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Card layout</CardTitle>
                <CardDescription>
                  CardHeader + CardContent for structured data blocks.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Standard pattern for structured content; longer collapsible text
                  works well in the accordion.
                </p>
              </CardContent>
            </Card>
          </section>

          <Separator />

          <section className="flex flex-col gap-6" aria-labelledby="overlays-heading">
            <SectionTitle
              id="overlays"
              title="Overlays & Feedback"
              description="Dialog, Sheet, Menu, Popover, Tooltip and Skeleton — common building blocks; Tooltips run via TooltipProvider in the root layout."
            />
            <h3 id="overlays-heading" className="sr-only">
              Overlay components
            </h3>

            <Card>
              <CardHeader>
                <CardTitle>Dialog & Sheet</CardTitle>
                <CardDescription>
                  Modal (focused) and side panel — e.g. confirmations or mobile
                  navigation.
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
                      <DialogTitle>Example dialog</DialogTitle>
                      <DialogDescription>
                        Close via X or Esc. Focus is trapped inside the dialog.
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
                      <SheetTitle>Side panel</SheetTitle>
                      <SheetDescription>
                        Useful for filters, cart or secondary actions.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Menu, Popover, Tooltip</CardTitle>
                <CardDescription>
                  Anchored to native triggers (no button-in-button); same
                  buttonVariants classes as everywhere else.
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
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>First option</DropdownMenuItem>
                    <DropdownMenuItem>Second option</DropdownMenuItem>
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
                      Contextual content without leaving the page.
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
                    <p>Short help text on hover or focus.</p>
                  </TooltipContent>
                </Tooltip>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Skeleton</CardTitle>
                <CardDescription>
                  Placeholder for lists and cards while content is loading.
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

          <Separator />

          {/* Animations */}
          <section className="space-y-6">
            <SectionTitle
              id="animations"
              title="Animations & Text effects"
              description="Ready-to-use utility classes from globals.css: shimmer for loading skeletons, float for hovering elements, pulse for status dots, text gradients."
            />

            <Card>
              <CardHeader>
                <CardTitle>Shimmer</CardTitle>
                <CardDescription>
                  <code className="font-mono text-xs">.animate-shimmer</code> —
                  Loading indicator with a CSS gradient sweep; replaces plain grey
                  placeholders.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="animate-shimmer size-10 shrink-0 rounded-full" />
                  <div className="flex min-w-0 flex-1 flex-col gap-2">
                    <div className="animate-shimmer h-3 w-2/3 max-w-[12rem] rounded-full" />
                    <div className="animate-shimmer h-3 w-full rounded-full" />
                  </div>
                </div>
                <div className="animate-shimmer h-24 w-full rounded-xl" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Float & Pulse</CardTitle>
                <CardDescription>
                  <code className="font-mono text-xs">.animate-float</code> for
                  hovering decorative elements,{" "}
                  <code className="font-mono text-xs">.animate-pulse-dot</code>{" "}
                  for live status indicators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-8">
                  <div className="animate-float surface-accent flex size-16 items-center justify-center rounded-2xl">
                    <Sparkles className="size-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="animate-pulse-dot size-2 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span className="text-sm text-muted-foreground">
                      Live status
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Text gradients</CardTitle>
                <CardDescription>
                  <code className="font-mono text-xs">.text-gradient-accent</code>{" "}
                  (Cyan → Sky) and{" "}
                  <code className="font-mono text-xs">.text-gradient-primary</code>{" "}
                  (Mint → Mint dark).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gradient-accent text-h2">
                  Gradient Accent — Cyan to Sky
                </p>
                <p className="text-gradient-primary text-h2">
                  Gradient Primary — Mint
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
