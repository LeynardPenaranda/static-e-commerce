import { getItems } from "@/lib/services/apiItems";
import { useLoaderData } from "react-router-dom";
import ItemsCards from "./ItemsCards";

const Items = () => {
  const items = useLoaderData();
  const safeItems = Array.isArray(items) ? items : [];
  console.log(safeItems);
  return (
    <div className="grid md:grid-cols-[300px_1fr]">
      <div className="hidden md:block">filters</div>
      <div>
        <div>Filters</div>
        <ItemsCards items={safeItems} />
      </div>
    </div>
  );
};

export async function loader() {
  const response = await getItems();
  // If response is { items: [...] }, return response.items
  return Array.isArray(response) ? response : response.items ?? [];
}
export default Items;
