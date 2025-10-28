import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

export function SheetDemo({ menuOptions }: { menuOptions: React.ReactNode }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="cursor-pointer" variant="outline"><Menu/></Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[300px] p-6">
        {/* Header */}
        <SheetHeader className="text-left">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        {/* Form */}
        {menuOptions}
        
        {/* Footer */}
       
      </SheetContent>
    </Sheet>
  )
}
