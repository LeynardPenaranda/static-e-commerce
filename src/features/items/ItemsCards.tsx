import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { type Item } from "../../../types/index";
import RatingStars from "@/components/ratings-stars";
import { formatMoney } from "@/lib/utils";

const ItemsCards = ({ items }: { items: Item[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 place-items-center  h-screen overflow-y-auto">
      {items.map((item) => (
        <Card
          key={item.id}
          className="p-0 w-[95%] md:w-full lg:w-[320px] h-[25rem]"
        >
          <div className="flex items-center justify-center max-w-full overflow-hidden h-[15rem]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover rounded-t-md"
            />
          </div>
          <CardTitle className="text-center">{item.name}</CardTitle>
          <CardContent className="grid grid-cols-[1fr_auto] h-[6rem]">
            <div className="">
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <RatingStars value={item.rating} /> ({item.rating}k)
                </div>
                <h1 className="text-muted-foreground">{item.category}</h1>
              </div>
            </div>
            <div className=" p-2 min-w-[6rem] text-center">
              <p className="text-2xl break-words whitespace-normal">
                {formatMoney(item.price)}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ItemsCards;
