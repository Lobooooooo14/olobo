import { Outlet } from "react-router-dom"

import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"

import Footer from "@/components/footer"
import Header, { Buttons, Navbar } from "@/components/header"
import SmoothScroll from "@/components/smooth-scroll"

export default function Root() {
  return (
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

      <SmoothScroll>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </SmoothScroll>
    </Sheet>
  )
}
