import { useEffect } from "react"

import { AnimatePresence, motion } from "framer-motion"

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
      <AnimatePresence>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          className="space-y-6 sm:space-y-12"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </SmoothScroll>
  )
}
