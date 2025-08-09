import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./pages/AppLayout";
import Items, { loader as ItemLoader } from "./features/items/Items";
const router = createBrowserRouter([
    {
        element: _jsx(AppLayout, {}),
        children: [
            {
                path: "/",
                element: _jsx(Home, {}),
            },
            {
                path: "/items",
                element: _jsx(Items, {}),
                loader: ItemLoader,
            },
            {
                path: "/cart",
                element: _jsx(Cart, {}),
            },
            {
                path: "/order/new",
                element: _jsx(CreateOrder, {}),
            },
            {
                path: "/order/:orderId",
                element: _jsx(Order, {}),
            },
        ],
    },
]);
const App = () => {
    return _jsx(RouterProvider, { router: router });
};
export default App;
