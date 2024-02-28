import { CDN_URL } from "../utils/constants"
const RestaurentCard = (props) => {
    const { resData } = props
    const { name, cloudinaryImageId, avgRating, costForTwo, deliveryTime, cuisines } = resData?.data
    return (
        <div className="res-card" >
            <img className="res-logo"
                src={CDN_URL + cloudinaryImageId}
                alt="error" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo / 100} for two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurentCard