import { ArrowDownIcon } from "lucide-react"

import Header from "@/components/header"

export default function Hero() {
  return (
    <section className="flex flex-col h-screen">
      <Header />
      <div className="flex justify-center items-center h-full">
        <div className="absolute bottom-4">
          <ArrowDownIcon
            size={24}
            className="animate-bounce"
            color="hsl(var(--primary) / 0.8)"
          />
        </div>
        <div className="w-[90%] max-w-[800px] h-full max-h-[600px] flex justify-center items-center flex-col border-b border-r border-border/80 grid-effect">
          <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-primary/90 to-primary/60 text-5xl font-extrabold tracking-tight lg:text-6xl mb-2 text-center">
            Olá, eu sou o Lobo
          </h1>
          <p className="text-transparent bg-gradient-to-r bg-clip-text from-cyan-400 to-purple-400 text-md font-mono font-medium tracking-widest text-center">
            Desenvolvedor front-end
          </p>
        </div>
      </div>
    </section>
  )
}
