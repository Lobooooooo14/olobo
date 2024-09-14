import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import Twemoji from "react-twemoji"

import { SiGithub } from "@icons-pack/react-simple-icons"
import { motion } from "framer-motion"
import {
  LanguagesIcon,
  MenuIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { SheetClose, SheetTrigger } from "@/components/ui/sheet"

import { useTheme } from "@/components/theme-provider"

import avatar from "@/assets/avatar.png"
import { cn } from "@/lib/utils"
import i18n from "@/locale/i18n"

export type LinksType = { id: number; name: string; route: string }[]

export const linksNavItems: LinksType = [
  { id: 1, name: "header.navbar.home", route: "/" },
  { id: 2, name: "header.navbar.projects", route: "/projects" }
]

export default function Header() {
  const { t } = useTranslation()

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

          <span className="text-lg font-normal">{t("header.name")}</span>
        </a>
        <Navbar />
      </div>
      <div className="hidden items-center gap-4 sm:flex">
        <ThemeToggle />
        <LanguageToggle />
        <Buttons />
      </div>
      <div className="flex items-center gap-4 sm:hidden">
        <ThemeToggle />
        <LanguageToggle />
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
  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("header.theme.changeTheme")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem className="gap-2" onClick={() => setTheme("light")}>
          <SunIcon size={16} />
          {t("header.theme.light")}
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2" onClick={() => setTheme("dark")}>
          <MoonIcon size={16} />
          {t("header.theme.dark")}
        </DropdownMenuItem>

        <DropdownMenuItem className="gap-2" onClick={() => setTheme("system")}>
          <MonitorIcon size={16} />
          {t("header.theme.system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function LanguageToggle() {
  const { t } = useTranslation()

  const handleChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LanguagesIcon className="h-[1.2rem] w-[1.2rem] scale-100" />
          <span className="sr-only">{t("header.language.changeLanguage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Twemoji options={{ className: "twemoji" }}>
          <DropdownMenuItem
            className="gap-2"
            onClick={() => handleChangeLanguage("en-US")}
          >
            <span>🇺🇸</span>
            {t("header.language.english")}
          </DropdownMenuItem>

          <DropdownMenuItem
            className="gap-2"
            onClick={() => handleChangeLanguage("pt-BR")}
          >
            <span>🇧🇷</span>
            {t("header.language.portuguese")}
          </DropdownMenuItem>
        </Twemoji>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  mobile?: boolean
}

export function Navbar({ mobile = false, className, ...rest }: NavbarProps) {
  const navigate = useNavigate()
  const { t } = useTranslation()

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
          <span
            onClick={() => navigate(link.route)}
            className="cursor-pointer text-foreground/60 transition-colors hover:text-foreground/80"
          >
            {t(link.name)}
          </span>
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
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            window.open("https://github.com/Lobooooooo14", "_blank")
          }
        >
          <SiGithub size={22} />
        </Button>
      </SheetClose>
    </div>
  )
}
