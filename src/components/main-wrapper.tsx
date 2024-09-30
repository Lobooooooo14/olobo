import { useEffect } from "react"

import Footer from "@/components/footer"
import Header from "@/components/header"
import SmoothScroll from "@/components/smooth-scroll"

export default function MainWrapper({
  children
}: {
  children?: React.ReactNode
}) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <SmoothScroll>
      <Header />
      <main>{children}</main>
      <Footer />
    </SmoothScroll>
  )
}
