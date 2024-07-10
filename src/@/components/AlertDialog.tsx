import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
  } from "./ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
  

export function AVATAR_AlertDialog()
{
    return (
        <>
            <AlertDialog>
  <AlertDialogTrigger>
  <Avatar>
    <AvatarImage src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yajJiY1A4VnBGMnc0cEl3ZWlpQVJGZTRNa2kifQ?width=80" />
    <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <div className="flex gap-10">
        <div className=" border-red-400">
                njnaste
        </div>
        <div className="grid gap-10">
            <h2 className="font-bold">Profile details</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quam minima necessitatibus recusandae impedit, qui laboriosam, repellat perspiciatis eveniet eos itaque quis non distinctio voluptas nemo accusamus quo perferendis obcaecati?
        </div>
      </div>
    </AlertDialogHeader>
    <AlertDialogFooter>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

        </>
    )
}