import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default function RestaurantMenu() {
  const { id } = useParams();
  const resMenu = useRestaurantMenu(id);

  return (
    <div>
      <h1>MENU</h1>
      <h2>Restaurant Name</h2>
      {resMenu && resMenu?.map((res) => {
        return (
          <ul>
            <li>{res.card.info.name}</li>
          </ul>
        );
      })}
    </div>
  );
}
