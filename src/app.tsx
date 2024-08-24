import { ThemeProvider } from "@/components/theme-provider"

import Routes from "@/routes"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <Routes />
    </ThemeProvider>
  )
}
