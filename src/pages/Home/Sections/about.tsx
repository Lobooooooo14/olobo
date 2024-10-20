import { useTranslation } from "react-i18next"
import Markdown from "react-markdown"

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

import { cn } from "@/lib/utils"
import { currentYearsOld } from "@/utils"

export default function About() {
  const { t } = useTranslation("pages/home")

  return (
    <section id="about">
      <div className="mb-6 flex w-full flex-col items-center">
        <h2>{t("about.title")}</h2>
        <Separator className="w-1/3" />
      </div>

      <div className="flex justify-center">
        <div className="grid w-full grid-cols-4 grid-rows-7 gap-[0.3rem] px-[0.3rem] sm:max-w-screen-sm sm:grid-rows-8 sm:gap-0 sm:px-0 md:max-w-screen-md lg:max-w-screen-lg">
          <div className="col-span-4 col-start-1 row-span-1 row-start-1 flex flex-col justify-center p-4 sm:col-span-2 sm:row-span-2">
            <h3 className="text-center sm:text-left">
              {t("about.begin.title")}
            </h3>
            <p className="text-center sm:text-left">
              <Markdown>
                {t("about.begin.description", {
                  age: currentYearsOld(new Date("2006-07-02"))
                })}
              </Markdown>
            </p>
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

          <div className="col-span-4 col-start-1 row-start-3 flex flex-col justify-center p-4 sm:col-span-2 sm:col-start-3 sm:row-span-2 sm:row-start-3 sm:items-end">
            <h3 className="text-center sm:text-left">
              {t("about.decision.title")}
            </h3>
            <p className="text-center sm:text-right">
              <Markdown>{t("about.decision.description")}</Markdown>
            </p>
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

          <div className="col-span-4 col-start-1 row-start-5 flex flex-col justify-center p-4 sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-6">
            <h3 className="text-center sm:text-left">
              {t("about.progression.title")}
            </h3>
            <p className="text-center sm:text-left">
              <Markdown>{t("about.progression.description")}</Markdown>
            </p>
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
      className={cn(
        "flex h-full min-h-12 w-full items-center justify-center rounded-lg p-4 sm:h-40 sm:w-40 sm:rounded-none md:h-48 md:w-48 lg:h-64 lg:w-64",
        className
      )}
      {...rest}
    >
      <_icon color={color} size={64} />
    </motion.div>
  )
}
