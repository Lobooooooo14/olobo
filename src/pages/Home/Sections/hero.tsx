import { useTranslation } from "react-i18next"

import { motion } from "framer-motion"

import waves from "@/assets/waves.svg"

export default function Hero() {
  const { t } = useTranslation("pages/home")

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, ease: "anticipate" }
      }}
      className="relative h-[calc(100vh-64px)]"
    >
      <div
        className="absolute -z-10 h-full w-full bg-primary/40"
        style={{
          maskImage: `url(${waves})`,
          maskSize: "cover",
          maskRepeat: "no-repeat",
          maskPosition: "center"
        }}
      />

      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-8xl">
          {t("hero.title")}
        </h1>
        <p className="m-0 text-nowrap bg-gradient-to-r from-rose-500 to-purple-400 bg-clip-text text-center font-mono text-lg font-bold uppercase tracking-widest text-transparent drop-shadow-[0_0_10px_rgba(244,64,96,0.8)] dark:from-cyan-400 dark:to-purple-400 dark:drop-shadow-[0_0_10px_rgba(121,168,246,0.8)] sm:text-xl md:text-2xl lg:text-3xl">
          {t("hero.subtitle")}
        </p>
      </div>
    </motion.section>
  )
}
