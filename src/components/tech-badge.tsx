import { HTMLAttributes } from "react"

import { transparentize } from "polished"

import { Badge } from "@/components/ui/badge"

import { BadgeType } from "@/constants"
import { cn } from "@/lib/utils"

interface TechBadgeProps
  extends Omit<BadgeType, "id" | "icon" | "name" | "iconColor"> {
  _icon: BadgeType["icon"]
  color: BadgeType["iconColor"]
  name?: string
}

export default function TechBadge({
  _icon,
  name,
  color,
  className,
  ...rest
}: TechBadgeProps & HTMLAttributes<HTMLDivElement>) {
  return (
    <Badge
      className={cn(
        "flex items-center gap-2 font-mono text-xs text-primary/80 dark:text-primary/80",
        className
      )}
      style={{
        backgroundColor: transparentize(0.9, color),
        border: `1px solid ${transparentize(0.8, color)}`
      }}
      {...rest}
    >
      <_icon size={16} color={color} className="my-[0.2rem]" />
      {name && <span className="whitespace-nowrap">{name}</span>}
    </Badge>
  )
}
