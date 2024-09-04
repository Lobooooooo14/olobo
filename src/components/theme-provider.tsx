import { createContext, useContext, useEffect, useState } from "react"

type ThemeType = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: ThemeType
  storageKey?: string
}

export type ThemeProviderState = {
  theme: ThemeType
  themeName: "dark" | "light" | null
  setTheme: (theme: ThemeType) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  themeName: null,
  setTheme: () => null
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<"dark" | "light" | null>(null)
  const [theme, setTheme] = useState<ThemeType>(
    () => (localStorage.getItem(storageKey) as ThemeType) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      setThemeName(systemTheme)
      return
    }

    root.classList.add(theme)
    setThemeName(theme)
  }, [theme])

  const value = {
    theme,
    themeName,
    setTheme: (theme: ThemeType) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    }
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
