import { cloudinaryImageURL } from "../utils/constants"

export default function RestaurantCard({resData}) {
   return (
    <div className="res-card">
        <img 
            src={`${cloudinaryImageURL}${resData?.info?.cloudinaryImageId}`}
            className="res-logo"   
        ></img>
        <h3>{resData?.info?.name}</h3>
        <h3>{resData?.info?.avgRating} . {resData?.info?.sla?.slaString}</h3>
        <h4>{resData?.info?.cuisines.toString()}</h4>
        <h4>{resData?.info?.locality}</h4>
    </div>
   ) 
}