import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
export function formatMoney(amount, locale = "en-US", currency = "USD") {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(amount);
}
