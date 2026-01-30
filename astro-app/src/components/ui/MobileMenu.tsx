import * as React from "react"
import { Button } from "./button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "./sheet"
import { Menu } from "lucide-react"

export default function MobileMenu() {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="p-2" aria-label="Open menu">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Snelle navigatie naar de belangrijkste pagina's</SheetDescription>
          </SheetHeader>

          <div className="grid gap-2">
            <a href="/" className="px-3 py-2 rounded" style={{ color: "var(--color-foreground)" }}>
              <Button variant="link">Home</Button>
            </a>
            <a href="/about" className="px-3 py-2 rounded" style={{ color: "var(--color-foreground)" }}>
              <Button variant="link">About</Button>
            </a>
            <a href="/blog" className="px-3 py-2 rounded" style={{ color: "var(--color-foreground)" }}>
              <Button variant="link">Blog</Button>
            </a>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
