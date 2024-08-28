import Header, { Buttons, Navbar } from "@/components/header"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"

import About from "./About"
import Hero from "./Hero"

export default function Home() {
  return (
    <main>
      <Sheet>
        <SheetContent className="overflow-y-auto">
          <SheetHeader className="hidden">
            <SheetTitle />
            <SheetDescription />
          </SheetHeader>
          <Navbar mobile className="my-4" />

          <Separator />

          <Buttons className="mt-4 gap-1" />
        </SheetContent>
        <Header />
        <Hero />
        <About />
      </Sheet>
    </main>
  )
}
