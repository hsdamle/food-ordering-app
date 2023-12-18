import { useDispatch } from "react-redux";
import cartSlice from "../utils/cartSlice";

export default function RestaurantCategory({
  resCategory,
  showItems,
  setShowIndex,
}) {
  return (
    <div className="menu-div">
      <div className="menu-category">
        <h3 onClick={() => setShowIndex()}>{resCategory?.card?.card?.title}</h3>
      </div>
      {showItems ? (
        <SubMenu items={resCategory?.card?.card?.itemCards} />
      ) : null}
    </div>
  );
}

const SubMenu = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(cartSlice.actions.addItem(item));
  }

  return (
    <div className="items">
      <ul>
        {items &&
          items?.map((item) => {
            return (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name}{" "}
                <button onClick={() => handleAddItems(item)}>Add</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
