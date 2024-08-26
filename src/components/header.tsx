import { SiGithub } from "@icons-pack/react-simple-icons"
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

import avatar from "/avatar.png"

const links: { id: number; name: string; path: string }[] = [
  { id: 1, name: "Projetos", path: "/projects" },
  { id: 2, name: "Contato", path: "/contact" }
]

export default function Header() {
  return (
    <header className="w-full px-8 py-2 flex items-center justify-between gap-4 sticky z-50 top-0 backdrop-blur border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-4">
        <a
          href="/"
          className="flex items-center gap-4 px-2 py-1 hover:bg-primary/10 rounded-lg transition-colors"
        >
          <Avatar>
            <AvatarImage src={avatar} alt="Lobo Avatar" />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>

          <span className="text-lg font-normal">Lobo</span>
        </a>
        <nav className="hidden sm:flex items-center gap-4 text-sm">
          {links.map((link) => (
            <a
              href={link.path}
              className="text-foreground/60 hover:text-foreground/80 transition-colors"
              key={link.id}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
      <div className="hidden sm:flex items-center gap-4">
        <ThemeToggle />
        <Button variant="ghost" size="icon">
          <SiGithub size={22} />
        </Button>
      </div>
      <div className="sm:hidden flex items-center gap-4">
        <ThemeToggle />
        <MenuIcon size={24} />
      </div>
    </header>
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
