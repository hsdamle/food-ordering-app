import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

export default function RestaurantMenu() {
  const { id } = useParams();
  const resMenu = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(0);

  return (
    <div>
      <h1>MENU</h1>
      <h2>Restaurant Name</h2>
      {resMenu &&
        resMenu?.map((res, index) => {
          return (
            <RestaurantCategory 
              key={res?.card?.card?.title} 
              resCategory={res}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
    </div>
  );
}                
