import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

/* House register: formal small-caps buttons, squared corners,
   matching .btn-primary / .btn-secondary in globals.css. */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[2px] font-semibold uppercase tracking-[0.08em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground border border-primary hover:bg-burgundy-dark hover:border-burgundy-dark",
        destructive:
          "bg-destructive text-destructive-foreground border border-destructive hover:opacity-90",
        outline:
          "border border-primary text-burgundy bg-transparent hover:bg-primary hover:text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground border border-border hover:bg-accent",
        ghost: "normal-case tracking-normal hover:bg-accent hover:text-accent-foreground",
        link: "normal-case tracking-normal text-burgundy underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-3 text-[0.8rem]",
        sm: "px-4 py-2 text-[0.75rem]",
        lg: "px-8 py-3.5 text-[0.85rem]",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
