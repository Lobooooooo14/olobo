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

export default function Root() {
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
        <Outlet />
        <Footer />
      </Sheet>
    </main>
  )
}
