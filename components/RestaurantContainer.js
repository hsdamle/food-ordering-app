import { useState } from "react";
import { RestaurantData } from "../utils/RestaurantData";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantContainer() {
  const [resList, setResList] = useState(RestaurantData);

  const filterHighestrated = () => {
    const data = resList.filter(ele => {
        return ele.info.avgRating > 4.5
    });
    setResList(data);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => filterHighestrated()}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {resList.map((res) => {
          return <RestaurantCard key={res?.info?.id} resData={res} />;
        })}
      </div>
    </div>
  );
}
