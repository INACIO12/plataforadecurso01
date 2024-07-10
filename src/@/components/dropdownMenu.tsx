import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { BtnSheet } from "./Sheet";

export function BTNDropdownMenu()
{

    return (
        <>
           <div >
           <DropdownMenu>
                <DropdownMenuTrigger>
                <Button variant={'outline'} className="bg-no text-white">
                        <GiHamburgerMenu className="text-2xl" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                   <div className="p-10 pt-4 bg-red">
                        <DropdownMenuLabel><BtnSheet /></DropdownMenuLabel>
                   </div>
                    
                </DropdownMenuContent>
            </DropdownMenu>
           </div>

        </>
    )
}