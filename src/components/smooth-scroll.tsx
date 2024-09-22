import React, { useEffect } from "react"

import { ReactLenis, useLenis } from "@/lib/lenis"

interface LenisProps {
  children: React.ReactNode
}

function SmoothScroll({ children }: LenisProps) {
  const lenis = useLenis()

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      lenis?.stop()
      lenis?.start()
    })
  }, [])

  return (
    <ReactLenis
      root
      options={{
        duration: 1
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
