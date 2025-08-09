import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (_jsx("footer", { className: "flex justify-around border", children: _jsxs("div", { children: ["\u00A9 ", currentYear, " static e-commerce"] }) }));
};
export default Footer;
