import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getItems } from "@/lib/services/apiItems";
import { useLoaderData } from "react-router-dom";
import ItemsCards from "./ItemsCards";
const Items = () => {
    const items = useLoaderData();
    const safeItems = Array.isArray(items) ? items : [];
    console.log(safeItems);
    return (_jsxs("div", { className: "grid md:grid-cols-[300px_1fr]", children: [_jsx("div", { className: "hidden md:block", children: "filters" }), _jsxs("div", { children: [_jsx("div", { children: "Filters" }), _jsx(ItemsCards, { items: safeItems })] })] }));
};
export async function loader() {
    const response = await getItems();
    // If response is { items: [...] }, return response.items
    return Array.isArray(response) ? response : response.items ?? [];
}
export default Items;
