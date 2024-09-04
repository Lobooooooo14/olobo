import { useTranslation } from "react-i18next"

import {
  SiArduinoHex,
  SiArduino,
  SiPython,
  SiPythonHex,
  SiJavascript,
  SiJavascriptHex,
  SiTypescript,
  SiTypescriptHex,
  SiReact,
  SiReactHex,
  SiVite,
  SiViteHex,
  SiHtml5,
  SiHtml5Hex,
  SiCss3,
  SiCss3Hex,
  SiSass,
  SiSassHex,
  SiTailwindcss,
  SiTailwindcssHex
} from "@icons-pack/react-simple-icons"
import { motion } from "framer-motion"
import { transparentize } from "polished"

import { Separator } from "@/components/ui/separator"

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-16">
      <div className="mb-6 flex w-full flex-col items-center">
        <h2 className="mb-2 mt-4 text-center text-4xl font-bold">
          {t("home.about.title")}
        </h2>
        <Separator className="w-1/3" />
      </div>
      <div className="flex justify-center">
        <div className="grid w-full grid-cols-4 grid-rows-7 gap-[0.3rem] px-[0.3rem] sm:max-w-screen-sm sm:grid-rows-8 sm:gap-0 sm:px-0 md:max-w-screen-md lg:max-w-screen-lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5 }
            }}
            className="col-span-4 col-start-1 row-span-1 row-start-1 flex flex-col justify-center p-4 sm:col-span-2 sm:row-span-2"
          >
            <h3 className="mb-4 text-center text-3xl font-bold tracking-tight text-primary sm:text-pretty sm:text-left">
              {t("home.about.begin.title")}
            </h3>
            <p className="text-center text-primary/80 sm:text-pretty sm:text-left">
              {t("home.about.begin.description")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { stiffness: 0 }
            }}
            className="grid-icon-box col-span-2 col-start-1 row-start-2 rounded-lg sm:col-span-1 sm:col-start-4 sm:row-start-1 sm:rounded-none"
            style={{ background: transparentize(0.92, SiArduinoHex) }}
          >
            <SiArduino color={SiArduinoHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { stiffness: 0 }
            }}
            className="grid-icon-box col-span-2 col-start-3 rounded-lg sm:col-span-1 sm:col-start-3 sm:row-start-2 sm:rounded-none"
            style={{ background: transparentize(0.92, SiPythonHex) }}
          >
            <SiPython color={SiPythonHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5 }
            }}
            className="col-span-4 col-start-1 row-start-3 flex flex-col justify-center p-4 sm:col-span-2 sm:col-start-3 sm:row-span-2 sm:row-start-3 sm:items-end"
          >
            <h3 className="mb-4 text-center text-3xl font-bold tracking-tight text-primary sm:text-pretty sm:text-left">
              {t("home.about.decision.title")}
            </h3>
            <p className="text-left text-primary/80 sm:text-pretty sm:text-right">
              {t("home.about.decision.description")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { stiffness: 0 }
            }}
            className="grid-icon-box col-start-1 row-start-4 rounded-lg sm:row-start-4 sm:rounded-none"
            style={{ background: transparentize(0.92, SiHtml5Hex) }}
          >
            <SiHtml5 color={SiHtml5Hex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { stiffness: 0 }
            }}
            className="grid-icon-box col-start-4 row-start-4 rounded-lg sm:col-start-2 sm:row-start-5 sm:rounded-none"
            style={{ background: transparentize(0.92, SiCss3Hex) }}
          >
            <SiCss3 color={SiCss3Hex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { stiffness: 0 }
            }}
            className="grid-icon-box col-span-2 col-start-2 row-start-4 rounded-lg sm:col-span-1 sm:col-start-1 sm:row-start-5 sm:rounded-none"
            style={{ background: transparentize(0.92, SiJavascriptHex) }}
          >
            <SiJavascript color={SiJavascriptHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5 }
            }}
            className="col-span-4 col-start-1 row-start-5 flex flex-col justify-center p-4 sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-6"
          >
            <h3 className="mb-4 text-center text-3xl font-bold tracking-tight text-primary sm:text-pretty sm:text-left">
              {t("home.about.progression.title")}
            </h3>
            <p className="text-primary/80 sm:text-pretty">
              {t("home.about.progression.description")}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { stiffness: 0 }
            }}
            className="grid-icon-box col-span-2 col-start-1 row-start-6 rounded-lg sm:col-span-1 sm:col-start-4 sm:row-start-6 sm:rounded-none"
            style={{ background: transparentize(0.92, SiTypescriptHex) }}
          >
            <SiTypescript color={SiTypescriptHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { stiffness: 0 }
            }}
            className="grid-icon-box col-span-2 col-start-3 row-start-6 rounded-lg sm:col-span-1 sm:col-start-3 sm:row-start-7 sm:rounded-none"
            style={{ background: transparentize(0.92, SiReactHex) }}
          >
            <SiReact color={SiReactHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { stiffness: 0 }
            }}
            className="grid-icon-box col-start-1 row-start-7 rounded-lg sm:col-start-1 sm:row-start-8 sm:rounded-none"
            style={{ background: transparentize(0.92, SiSassHex) }}
          >
            <SiSass color={SiSassHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { stiffness: 0 }
            }}
            className="grid-icon-box col-span-2 row-start-7 rounded-lg sm:col-span-2 sm:col-start-3 sm:row-start-8 sm:rounded-none"
            style={{ background: transparentize(0.92, SiViteHex) }}
          >
            <SiVite color={SiViteHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: { stiffness: 0 }
            }}
            className="grid-icon-box col-start-4 row-start-7 rounded-lg sm:col-start-4 sm:row-start-8 sm:rounded-none"
            style={{ background: transparentize(0.92, SiTailwindcssHex) }}
          >
            <SiTailwindcss color={SiTailwindcssHex} size={64} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
