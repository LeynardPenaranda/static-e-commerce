import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./button";
import { Link } from "react-router-dom";

const ToogleSidebar = () => {
  return (
    <div className="block sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigate</SheetTitle>
            <SheetDescription></SheetDescription>
            <div className="flex flex-col gap-2">
              <Link to="/">Home</Link>
              <Link to="/items">Items</Link>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ToogleSidebar;
