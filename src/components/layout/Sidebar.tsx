import {
  CircleArrowOutUpRight,
  ClipboardCheck,
  House,
  LayoutDashboard,
  ShoppingBag,
  SquareKanban,
  Wallet,
} from "lucide-react";
import { Button } from "../ui/button";

export default function Sidebar() {
  return (
    <>
      <section className="h-screen flex justify-between flex-col bg-muted/40">
        <div>
          <div className="h-20 flex justify-center items-center">
            <LayoutDashboard fill="blue" color="blue" size={35} />
          </div>
          <div className="flex flex-col gap-8 justify-center items-center">
            <Button variant={"secondary"}>
              <House color="blue" />
            </Button>
            <Button variant={"ghost"}>
              <SquareKanban className="rotate-180" />
            </Button>
            <Button variant={"ghost"}>
              <ClipboardCheck />
            </Button>
            <Button variant={"ghost"}>
              <Wallet />
            </Button>
            <Button variant={"ghost"}>
              <ShoppingBag />
            </Button>
          </div>
        </div>
        <Button variant={"ghost"} className="mb-6">
          <CircleArrowOutUpRight className="rotate-45" />
        </Button>
      </section>
    </>
  );
}
