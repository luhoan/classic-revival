import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-[2px] border border-input bg-card px-3.5 py-2.5 text-[0.95rem] transition-colors placeholder:text-muted-foreground/70 focus-visible:outline-none focus-visible:border-primary focus-visible:shadow-[0_0_0_3px_rgba(74,108,148,0.25)] disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-destructive",
        className
      )}
      ref={ref}
      {...props} />
  );
})
Textarea.displayName = "Textarea"

export { Textarea }
