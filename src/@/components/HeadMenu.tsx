import { AVATAR_AlertDialog } from "./AlertDialog";
import { BTNDropdownMenu } from "./dropdownMenu";

export function HeadMenu(){


    return (
        <>
            <div className="flex items-center justify-between ">
                <div>
                    <h1 className="text-3xl">KODAR</h1>
                </div>
                <div className="flex items-center gap-5">
                <AVATAR_AlertDialog />
                <BTNDropdownMenu />
                
                </div>
            </div>
        </>
    )

}