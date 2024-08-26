import { motion } from "framer-motion"

export default function Hero() {
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
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: 1.5,
                duration: 1
              }
            }}
            className="mb-2 text-pretty bg-black bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text text-center text-3xl font-extrabold tracking-tight text-transparent md:text-5xl lg:text-6xl"
          >
            Olá, eu sou o Lobo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100, letterSpacing: "0.5em" }}
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
            className="text-md text-nowrap bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-center font-mono font-semibold uppercase tracking-widest text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.2)]"
          >
            Desenvolvedor front-end
          </motion.p>
        </div>
      </div>
    </motion.section>
  )
}
