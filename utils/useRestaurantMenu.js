import { useEffect, useState } from "react";
import { restaurantMenuAPI } from "./constants";

// Creating Custom Hook to fetch Restaurant Menu Data.
export default function useRestaurantMenu(id) {
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    let data = await fetch(restaurantMenuAPI + `&restaurantId=${id}`);
    let resMenuData = await data.json();
    let menuList =
      resMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards;
    setResMenu(menuList);
  };

  return resMenu;
}
