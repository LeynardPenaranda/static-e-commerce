import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import ToogleSidebar from "./ui/toogle-sidebar";
const Header = () => {
    return (_jsxs("header", { className: "flex justify-between sm:justify-around border", children: [_jsxs("div", { className: "flex gap-5 items-center", children: [_jsx("div", { children: _jsx(Link, { to: "/", children: _jsx("img", { src: "/images/staticLogo.png", alt: "Static Logo", className: "w-12" }) }) }), _jsx(ToogleSidebar, {}), _jsxs("div", { className: "hidden sm:flex gap-5", children: [_jsx(Link, { to: "/", children: "Home" }), _jsx(Link, { to: "/items", children: "Items" })] })] }), _jsx("div", { className: "hidden items-center sm:flex w-2xs", children: _jsx(Input, { type: "search", placeholder: "Search items..." }) }), _jsxs("div", { className: "flex gap-5 items-center", children: [_jsx(Link, { to: "/cart", className: "px-5", children: _jsx(ShoppingCart, {}) }), _jsx("div", { className: "hidden sm:block", children: "Leynard" })] })] }));
};
export default Header;
