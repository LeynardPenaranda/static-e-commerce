import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {} from "../../../types/index";
import RatingStars from "@/components/ratings-stars";
import { formatMoney } from "@/lib/utils";
const ItemsCards = ({ items }) => {
    return (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center  h-screen overflow-y-auto", children: items.map((item) => (_jsxs(Card, { className: "p-0 w-[95%] md:w-full lg:w-[320px] h-[25rem]", children: [_jsx("div", { className: "flex items-center justify-center max-w-full overflow-hidden h-[15rem]", children: _jsx("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover rounded-t-md" }) }), _jsx(CardTitle, { className: "text-center", children: item.name }), _jsxs(CardContent, { className: "grid grid-cols-[1fr_auto] h-[6rem]", children: [_jsx("div", { className: "", children: _jsxs("div", { className: "flex flex-col gap-2", children: [_jsxs("div", { className: "flex items-center", children: [_jsx(RatingStars, { value: item.rating }), " (", item.rating, "k)"] }), _jsx("h1", { className: "text-muted-foreground", children: item.category })] }) }), _jsx("div", { className: " p-2 min-w-[6rem] text-center", children: _jsx("p", { className: "text-2xl break-words whitespace-normal", children: formatMoney(item.price) }) })] })] }, item.id))) }));
};
export default ItemsCards;
