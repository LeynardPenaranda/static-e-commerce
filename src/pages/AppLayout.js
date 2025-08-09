import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
    return (_jsxs("div", { className: "grid grid-rows-[50px_1fr_50px] min-h-screen", children: [_jsx(Header, {}), _jsx("main", { className: "order", children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
};
export default AppLayout;
