import { HTMLMotionProps, motion } from "framer-motion"

import { cn } from "@/lib/utils"

export function H1({ children, className, ...rest }: HTMLMotionProps<"h1">) {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1
      }}
      className={cn(
        "mb-2 mt-4 text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl",
        className
      )}
      {...rest}
    >
      {children}
    </motion.h1>
  )
}

export function H2({ children, className, ...rest }: HTMLMotionProps<"h2">) {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1
      }}
      className={cn(
        "mb-2 mt-4 text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl",
        className
      )}
      {...rest}
    >
      {children}
    </motion.h2>
  )
}

export function H3({ children, className, ...rest }: HTMLMotionProps<"h3">) {
  return (
    <motion.h3
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1
      }}
      className={cn(
        "mb-4 mt-4 text-2xl font-bold tracking-tight text-primary md:text-3xl lg:text-4xl",
        className
      )}
      {...rest}
    >
      {children}
    </motion.h3>
  )
}

export function P({ children, className, ...rest }: HTMLMotionProps<"p">) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5 }
      }}
      className={cn("my-2 leading-7 text-primary/80", className)}
      {...rest}
    >
      {children}
    </motion.p>
  )
}

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
