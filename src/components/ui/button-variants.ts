/**
 * buttonVariants — safe to import in Server Components.
 * Extracted from button.tsx which carries "use client".
 */
import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-[color,background-color,border-color,box-shadow] outline-none select-none focus-visible:outline-none focus-visible:ring-0 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:outline-none aria-invalid:ring-0 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /* astro component_buttons .btn--primary: Mint, 2px-Rand, Hover mint-700 */
        default:
          "border-2 border-primary bg-primary text-primary-foreground hover:border-[rgb(var(--mint-700))] hover:bg-[rgb(var(--mint-700))] focus-visible:border-white/70 aria-invalid:!border-destructive aria-invalid:!bg-destructive/15 aria-invalid:!text-destructive-foreground",
        /* astro .btn--cta: helle Fläche auf dunklem UI */
        cta:
          "border-2 border-white/85 bg-white/85 text-[rgb(var(--slate-900))] hover:border-white hover:bg-white focus-visible:border-slate-800/80 aria-invalid:!border-destructive aria-invalid:!bg-destructive/10 aria-invalid:!text-destructive",
        /* astro .btn--secondary: heller Rand, Hover invertiert */
        outline:
          "border-2 border-white/90 bg-transparent text-foreground hover:border-white hover:bg-white hover:text-[rgb(var(--slate-900))] aria-expanded:border-white/80 aria-expanded:bg-white/10 focus-visible:border-white aria-invalid:!border-destructive aria-invalid:!text-destructive aria-invalid:hover:!bg-destructive/10 aria-invalid:hover:!text-destructive",
        secondary:
          "border border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/90 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground focus-visible:border-slate-400 aria-invalid:!border-destructive aria-invalid:!bg-destructive/10 aria-invalid:!text-destructive",
        ghost:
          "focus-visible:bg-muted/80 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:!text-destructive aria-invalid:focus-visible:!bg-destructive/10",
        /* kein roter Klotz — nur Kontur + Text (selten, z. B. Formulare) */
        destructive:
          "border border-destructive/45 bg-transparent text-destructive hover:border-destructive/70 hover:bg-destructive/10 focus-visible:border-destructive/80 aria-invalid:!border-destructive",
        link:
          "cursor-pointer border-transparent text-primary underline-offset-4 hover:underline focus-visible:underline aria-invalid:!text-destructive",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 px-2 text-xs in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-2 px-7 text-[0.9375rem] has-data-[icon=inline-end]:pr-6 has-data-[icon=inline-start]:pl-6",
        icon: "size-8",
        "icon-xs":
          "size-6 in-data-[slot=button-group]:rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 in-data-[slot=button-group]:rounded-full",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
