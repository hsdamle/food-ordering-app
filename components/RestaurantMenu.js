import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantMenuAPI } from "../utils/constants";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [resMenu, setResMenu] = useState([]);
  const fetchMenu = async () => {
    let data = await fetch(restaurantMenuAPI + `&restaurantId=${id}`);
    let resMenuData = await data.json();
    let menuList =
      resMenuData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card?.itemCards;
    setResMenu(menuList);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <div>
      <h1>MENU</h1>
      <h2>Restaurant Name</h2>
      {resMenu?.map((res) => {
        return (
          <ul>
            <li>{res.card.info.name}</li>
          </ul>
        );
      })}
    </div>
  );
}
