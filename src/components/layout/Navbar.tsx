import { Bell, LogOut, Mail, Search, Settings } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between w-full h-16 items-center p-2 px-4">
        <div className="relative">
          <span className="absolute top-2 left-2">
            <Search className="size-5" />
          </span>
          <Input type="text" placeholder="Search" className="w-72 pl-10 h-9" />
        </div>
        <div className="flex gap-3 items-center">
          <IconButton icon={<Mail className="size-5" />} />
          <IconButton icon={<Settings className="size-5" />} />
          <IconButton icon={<Bell className="size-5" />} />
          <AvatarDropdown />
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function IconButton({ icon }: { icon: any }) {
  return (
    <Button
      variant={"secondary"}
      size={"icon"}
      className="rounded-full h-8 w-8"
    >
      {icon}
    </Button>
  );
}

function AvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <img
          src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png"
          alt="User Avatar"
          className="size-12 rounded-full cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Bell className="mr-2 size-4" />
          <span>Notifications</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Mail className="mr-2 size-4" />
          <span>Messages</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 size-4" />
          <span>Setting</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogOut className="mr-2 size-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
