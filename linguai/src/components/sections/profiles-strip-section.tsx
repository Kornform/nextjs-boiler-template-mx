import { RevealOnScroll } from "@/components/ui/reveal-on-scroll";
import { cn } from "@/lib/utils";

const profiles = [
  { name: "Nina K.", role: "Agency lead", grad: "from-zinc-500 to-zinc-800" },
  { name: "Marcus T.", role: "Woo store", grad: "from-neutral-600 to-neutral-900" },
  { name: "Priya S.", role: "Content ops", grad: "from-stone-500 to-stone-800" },
  { name: "Jonas L.", role: "Developer", grad: "from-zinc-600 to-zinc-900" },
] as const;

export function ProfilesStripSection() {
  return (
    <section className="border-y border-border/80 bg-white py-14 md:py-16">
      <div className="container-site">
        <RevealOnScroll className="mb-10 text-center">
          <p className="text-label mb-3">Teams</p>
          <p className="font-display text-xl font-semibold tracking-tight text-foreground md:text-2xl">
            Built with teams who ship multilingual sites every week.
          </p>
        </RevealOnScroll>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {profiles.map((p, i) => (
            <RevealOnScroll key={p.name} delayMs={i * 60}>
              <div className="text-center">
                <div
                  className={cn(
                    "mx-auto mb-4 aspect-[4/5] max-w-[180px] overflow-hidden rounded-lg bg-gradient-to-b bg-zinc-200 grayscale",
                    p.grad
                  )}
                  aria-hidden
                />
                <p className="font-display text-sm font-semibold text-foreground">
                  {p.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{p.role}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
