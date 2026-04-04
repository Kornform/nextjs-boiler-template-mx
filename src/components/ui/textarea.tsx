import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-[border-color,background-color] outline-none placeholder:text-muted-foreground focus-visible:border-slate-400 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:outline-none md:text-sm dark:bg-input/30 dark:focus-visible:border-slate-400 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
