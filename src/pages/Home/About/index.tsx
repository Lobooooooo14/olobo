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

export default function About() {
  return (
    <section id="about" className="py-16">
      <h2 className="my-6 text-center text-4xl font-bold">Sobre</h2>
      <div className="flex justify-center">
        <div className="grid w-full grid-cols-4 grid-rows-7 gap-0 sm:max-w-screen-sm sm:grid-rows-8 md:max-w-screen-md lg:max-w-screen-lg">
          <div className="col-span-4 col-start-1 row-span-1 row-start-1 flex flex-col justify-center p-4 sm:col-span-2 sm:row-span-2">
            <h3 className="mb-4 text-center text-3xl font-bold tracking-tight text-primary sm:text-pretty sm:text-left">
              O início
            </h3>
            <p className="text-primary/80 sm:text-pretty">
              Tive meu primeiro contato com a programação em 2016, por meio do
              Arduino, lendo e-books gratuitos na internet. Pouco tempo depois,
              decidi aprender Python utilizando apenas um celular.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { stiffness: 0 } }}
            className="grid-icon-box col-span-2 col-start-1 row-start-2 sm:col-span-1 sm:col-start-4 sm:row-start-1"
            style={{ background: transparentize(0.92, SiArduinoHex) }}
          >
            <SiArduino color={SiArduinoHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { stiffness: 0 } }}
            className="grid-icon-box col-span-2 col-start-3 sm:col-span-1 sm:col-start-3 sm:row-start-2"
            style={{ background: transparentize(0.92, SiPythonHex) }}
          >
            <SiPython color={SiPythonHex} size={64} />
          </motion.div>
          <div className="col-span-4 col-start-1 row-start-3 flex flex-col justify-center p-4 sm:col-span-2 sm:col-start-3 sm:row-span-2 sm:row-start-3 sm:items-end">
            <h3 className="mb-4 text-center text-3xl font-bold tracking-tight text-primary sm:text-pretty sm:text-left">
              A decisão
            </h3>
            <p className="text-left text-primary/80 sm:text-pretty sm:text-right">
              Dediquei-me exclusivamente ao Python por um longo período, mas
              percebi que era o momento de expandir meus conhecimentos. Foi
              então que comecei a estudar HTML, CSS e JavaScript.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { stiffness: 0 } }}
            className="grid-icon-box col-start-1 row-start-4 sm:row-start-4"
            style={{ background: transparentize(0.92, SiHtml5Hex) }}
          >
            <SiHtml5 color={SiHtml5Hex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { stiffness: 0 } }}
            className="grid-icon-box col-start-4 row-start-4 sm:col-start-2 sm:row-start-5"
            style={{ background: transparentize(0.92, SiCss3Hex) }}
          >
            <SiCss3 color={SiCss3Hex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { stiffness: 0 } }}
            className="grid-icon-box col-span-2 col-start-2 row-start-4 sm:col-span-1 sm:col-start-1 sm:row-start-5"
            style={{ background: transparentize(0.92, SiJavascriptHex) }}
          >
            <SiJavascript color={SiJavascriptHex} size={64} />
          </motion.div>
          <div className="col-span-4 col-start-1 row-start-5 flex flex-col justify-center p-4 sm:col-span-2 sm:col-start-1 sm:row-span-2 sm:row-start-6">
            <h3 className="mb-4 text-center text-3xl font-bold tracking-tight text-primary sm:text-pretty sm:text-left">
              A progressão
            </h3>
            <p className="text-primary/80 sm:text-pretty">
              Desde então, continuei aprendendo, com foco principalmente no
              framework React, além de explorar outras tecnologias.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { stiffness: 0 } }}
            className="grid-icon-box col-span-2 col-start-1 row-start-6 sm:col-span-1 sm:col-start-4 sm:row-start-6"
            style={{ background: transparentize(0.92, SiTypescriptHex) }}
          >
            <SiTypescript color={SiTypescriptHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { stiffness: 0 } }}
            className="grid-icon-box col-span-2 col-start-3 row-start-6 sm:col-span-1 sm:col-start-3 sm:row-start-7"
            style={{ background: transparentize(0.92, SiReactHex) }}
          >
            <SiReact color={SiReactHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { stiffness: 0 } }}
            className="grid-icon-box col-start-1 row-start-7 sm:col-start-1 sm:row-start-8"
            style={{ background: transparentize(0.92, SiSassHex) }}
          >
            <SiSass color={SiSassHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { stiffness: 0 } }}
            className="grid-icon-box col-span-2 row-start-7 sm:col-span-2 sm:col-start-3 sm:row-start-8"
            style={{ background: transparentize(0.92, SiViteHex) }}
          >
            <SiVite color={SiViteHex} size={64} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { stiffness: 0 } }}
            className="grid-icon-box col-start-4 row-start-7 sm:col-start-4 sm:row-start-8"
            style={{ background: transparentize(0.92, SiTailwindcssHex) }}
          >
            <SiTailwindcss color={SiTailwindcssHex} size={64} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
