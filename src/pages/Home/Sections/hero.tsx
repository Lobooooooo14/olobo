import { useTranslation } from "react-i18next"

import { motion } from "framer-motion"

import { H1, P } from "@/components/typography"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "anticipate" }
      }}
      className="h-[calc(100vh-64px)]"
    >
      <div className="flex h-full items-center justify-center">
        <div className="grid-effect absolute z-[-999] h-full w-full border-b border-r border-border/80"></div>
        <div className="flex h-[90%] max-h-[600px] w-[90%] max-w-[800px] flex-col items-center justify-center">
          <H1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1.5,
                duration: 1
              }
            }}
            whileInView={{}}
            className="bg-black bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text text-center text-4xl text-transparent md:text-6xl"
          >
            {t("home.hero.title")}
          </H1>
          <P
            initial={{ opacity: 0, y: 100, letterSpacing: "0.3em" }}
            animate={{
              opacity: 1,
              y: 0,
              letterSpacing: "0.1em",
              transition: {
                delay: 1.8,
                duration: 0.8,
                ease: "easeInOut"
              }
            }}
            whileInView={{}}
            className="m-0 text-nowrap bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-center font-mono font-bold uppercase tracking-widest text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]"
          >
            {t("home.hero.subtitle")}
          </P>
        </div>
      </div>
    </motion.section>
  )
}
