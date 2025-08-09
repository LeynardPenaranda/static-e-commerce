const API_URL = "/api/items";
//get All the items from the api
export async function getItems() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }
  const data = await res.json();
  return data;
}
