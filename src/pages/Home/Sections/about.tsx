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
  SiTailwindcssHex,
  IconType
} from "@icons-pack/react-simple-icons"
import { HTMLMotionProps, motion } from "framer-motion"
import { transparentize } from "polished"

import { Separator } from "@/components/ui/separator"

import { H2, H3, P } from "@/components/typography"

import { cn } from "@/lib/utils"

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-16">
      <div className="mb-6 flex w-full flex-col items-center">
        <H2>{t("home.about.title")}</H2>
        <Separator className="w-1/3" />
      </div>

      <div className="flex justify-center">
        <div className="grid w-full grid-cols-4 grid-rows-7 gap-[0.3rem] px-[0.3rem] sm:max-w-screen-sm sm:grid-rows-8 sm:gap-0 sm:px-0 md:max-w-screen-md lg:max-w-screen-lg">
          {/* Begin */}
          <div className="col-span-4 col-start-1 row-span-1 row-start-1 flex flex-col justify-center p-4 sm:col-span-2 sm:row-span-2">
            <H3 className="text-center sm:text-pretty sm:text-left">
              {t("home.about.begin.title")}
            </H3>
            <P className="text-center sm:text-pretty sm:text-left">
              {t("home.about.begin.description")}
            </P>
          </div>

          <IconBox
            _icon={SiArduino}
            color={SiArduinoHex}
            className="col-span-2 col-start-1 row-start-2 sm:col-span-1 sm:col-start-4 sm:row-start-1"
          />

          <IconBox
            _icon={SiPython}
            color={SiPythonHex}
            className="col-span-2 col-start-3 sm:col-span-1 sm:col-start-3 sm:row-start-2"
          />

          {/* Decision */}
          <div className="col-span-4 col-start-1 row-start-3 flex flex-col justify-center p-4 sm:col-span-2 sm:col-start-3 sm:row-span-2 sm:row-start-3 sm:items-end">
            <H3 className="text-center sm:text-pretty sm:text-left">
              {t("home.about.decision.title")}
            </H3>
            <P className="text-left sm:text-pretty sm:text-right">
              {t("home.about.decision.description")}
            </P>
          </div>

          <IconBox
            _icon={SiHtml5}
            color={SiHtml5Hex}
            className="col-start-1 row-start-4 sm:row-start-4"
          />

          <IconBox
            _icon={SiCss3}
            color={SiCss3Hex}
            className="col-start-4 row-start-4 sm:col-start-2 sm:row-start-5"
          />

          <IconBox
            _icon={SiJavascript}
            color={SiJavascriptHex}
            className="col-span-2 col-start-2 row-start-4 sm:col-span-1 sm:col-start-1 sm:row-start-5"
          />

          {/* Progression */}
          <div className="col-span-4 col-start-1 row-start-5 flex flex-col justify-center p-4 sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-6">
            <H3 className="text-center sm:text-pretty sm:text-left">
              {t("home.about.progression.title")}
            </H3>
            <P className="sm:text-pretty">
              {t("home.about.progression.description")}
            </P>
          </div>

          <IconBox
            _icon={SiTypescript}
            color={SiTypescriptHex}
            className="col-span-2 col-start-1 row-start-6 sm:col-span-1 sm:col-start-4 sm:row-start-6"
          />

          <IconBox
            _icon={SiReact}
            color={SiReactHex}
            className="col-span-2 col-start-3 row-start-6 sm:col-span-1 sm:col-start-3 sm:row-start-7"
          />

          <IconBox
            _icon={SiSass}
            color={SiSassHex}
            className="col-start-1 row-start-7 sm:col-start-1 sm:row-start-8"
          />

          <IconBox
            _icon={SiVite}
            color={SiViteHex}
            className="col-span-2 row-start-7 sm:col-span-2 sm:col-start-3 sm:row-start-8"
          />

          <IconBox
            _icon={SiTailwindcss}
            color={SiTailwindcssHex}
            className="col-start-4 row-start-7 sm:col-start-4 sm:row-start-8"
          />
        </div>
      </div>
    </section>
  )
}

function IconBox({
  _icon,
  color,
  className,
  ...rest
}: HTMLMotionProps<"div"> & { _icon: IconType; color: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: { stiffness: 0 }
      }}
      style={{ background: transparentize(0.92, color) }}
      className={cn("grid-icon-box rounded-lg sm:rounded-none", className)}
      {...rest}
    >
      <_icon color={color} size={64} />
    </motion.div>
  )
}
