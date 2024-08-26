import { SiGithub } from "@icons-pack/react-simple-icons"
import { motion } from "framer-motion"
import { MenuIcon, MoonIcon, SunIcon } from "lucide-react"

import { useTheme } from "@/components/theme-provider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { SheetClose, SheetTrigger } from "@/components/ui/sheet"

import { cn } from "@/lib/utils"

import avatar from "/avatar.png"

export type LinksType = { id: number; name: string; path: string }[]

export const linksNavItems: LinksType = [
  { id: 1, name: "Sobre", path: "#" },
  { id: 2, name: "Projetos", path: "#" },
  { id: 3, name: "Contato", path: "#" }
]

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.4 } }}
      className="sticky top-0 z-50 flex h-16 w-full items-center justify-between gap-4 border-border/40 bg-background/95 px-8 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="flex items-center gap-4">
        <a
          href="/"
          className="flex items-center gap-4 rounded-lg px-2 py-1 transition-colors hover:bg-primary/10"
        >
          <Avatar className="rounded-none rounded-br-sm">
            <AvatarImage src={avatar} alt="Lobo Avatar" />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>

          <span className="text-lg font-normal">Lobo</span>
        </a>
        <Navbar />
      </div>
      <div className="hidden items-center gap-4 sm:flex">
        <ThemeToggle />
        <Buttons />
      </div>
      <div className="flex items-center gap-4 sm:hidden">
        <ThemeToggle />
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <MenuIcon size={24} />
          </Button>
        </SheetTrigger>
      </div>
    </motion.header>
  )
}

function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alterar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Escuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  mobile?: boolean
}

export function Navbar({ mobile = false, className, ...rest }: NavbarProps) {
  return (
    <nav
      className={cn(
        "flex flex-col items-center gap-4",
        {
          "hidden flex-row sm:flex": !mobile
        },
        className
      )}
      {...rest}
    >
      {linksNavItems.map((link) => (
        <SheetClose asChild key={link.id}>
          <a
            href={link.path}
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            {link.name}
          </a>
        </SheetClose>
      ))}
    </nav>
  )
}

export function Buttons({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex justify-center gap-4", className)} {...rest}>
      <SheetClose asChild>
        <Button variant="ghost" size="icon">
          <SiGithub size={22} />
        </Button>
      </SheetClose>
    </div>
  )
}
