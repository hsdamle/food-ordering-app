import { RestaurantData } from "../utils/RestaurantData";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantContainer() {
  return (
    <div className="res-container">
      {RestaurantData.map((res) => {
        return <RestaurantCard resData={res} />;
      })}
    </div>
  );
}
