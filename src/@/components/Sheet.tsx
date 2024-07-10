import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { FaHistory } from "react-icons/fa";

export function BtnSheet()
{

    return (
        <>
       <div>
         <Sheet>
        <SheetTrigger>
        <Button variant={'ghost'} className="text-[18px] gap-4">
            <FaHistory  className="mr-2 h-4 w-[20px] text-lime-400" /> Histórico
        </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle>Histórico</SheetTitle>
            <SheetDescription>
               
            </SheetDescription>
            </SheetHeader>
        </SheetContent>

        </Sheet>
       </div>

        </>
    )
}