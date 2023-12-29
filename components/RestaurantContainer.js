import { useEffect, useState } from "react";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { restaurantListAPI } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export default function RestaurantContainer() {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  // Creating a Higher Order Component - with Discount Label
  const RestaurantCardOffer = withDiscountLabel(RestaurantCard);

  const fetchData = async () => {
    const result = await fetch(restaurantListAPI);
    const apiData = await result.json();
    let resData = {};

    for (let ele of apiData?.data?.cards) {
      if (ele?.card?.card?.id === "top_brands_for_you")
        resData = ele?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    }
    setResList(resData);
    setFilteredList(resData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterHighestrated = () => {
    const data = resList.filter((ele) => {
      return ele?.info?.avgRating > 4.5;
    });
    setFilteredList(data);
  };

  const searchData = () => {
    let result = resList.filter((ele) =>
      ele?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredList(result);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            data-testid="searchInput"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />{" "}
          <button onClick={() => searchData()}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => filterHighestrated()}>
          Top Rated Restaurants
        </button>
      </div>
      {resList?.length > 0 ? (
        <div className="res-container"> 
          {filteredList?.map((res) => {
            return (
              <Link
                className="res-link"
                to={`/restaurant/${res?.info?.id}`}
                key={res?.info?.id}
              >
                {res?.info?.aggregatedDiscountInfoV3 &&
                Object.keys(res?.info?.aggregatedDiscountInfoV3).length > 0 ? (
                  <RestaurantCardOffer resData={res} />
                ) : (
                  <RestaurantCard resData={res} />
                )}
              </Link>
            );
          })}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
}
