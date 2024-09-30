import { Suspense } from "react"

import Loading from "@/components/loading"
import { ThemeProvider } from "@/components/theme-provider"

import Routes from "@/routes"
import "@/styles/globals.css"

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="theme">
      <Suspense fallback={<Loading expand />}>
        <Routes />
      </Suspense>
    </ThemeProvider>
  )
}
