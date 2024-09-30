import { HTMLMotionProps, motion } from "framer-motion"

import { cn } from "@/lib/utils"

export function Blockquote({
  children,
  className,
  ...rest
}: HTMLMotionProps<"blockquote">) {
  return (
    <motion.blockquote
      className={cn(
        "ml-2 mt-6 rounded-[0.3rem] border-l-4 bg-primary/5 p-2 pl-6 italic text-primary/60",
        className
      )}
      {...rest}
    >
      {children}
    </motion.blockquote>
  )
}

export function InlineCode({
  children,
  className,
  ...rest
}: HTMLMotionProps<"code">) {
  return (
    <motion.code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className
      )}
      {...rest}
    >
      {children}
    </motion.code>
  )
}
