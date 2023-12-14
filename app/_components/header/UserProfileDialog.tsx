import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function UserProfileDialog({ session }: { session: any }) {
  return (
    <Dialog>
      <DialogTrigger className="w-full hover:bg-gray-100 cursor-pointer relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
        Profile
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="px-4 pt-2">{session?.user?.name}</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center justify-center py-3 gap-y-5"></div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
