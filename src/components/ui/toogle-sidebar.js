import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./button";
import { Link } from "react-router-dom";
const ToogleSidebar = () => {
    return (_jsx("div", { className: "block sm:hidden", children: _jsxs(Sheet, { children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { variant: "outline", children: _jsx(Menu, { className: "h-4 w-4" }) }) }), _jsx(SheetContent, { side: "left", children: _jsxs(SheetHeader, { children: [_jsx(SheetTitle, { children: "Navigate" }), _jsx(SheetDescription, {}), _jsxs("div", { className: "flex flex-col gap-2", children: [_jsx(Link, { to: "/", children: "Home" }), _jsx(Link, { to: "/items", children: "Items" })] })] }) })] }) }));
};
export default ToogleSidebar;
