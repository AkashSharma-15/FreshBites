import { CDN_URL } from "../utils/constants"
const RestaurentCard = (props) => {



    const { resData } = props
    // all info of restauarnt
    const { name, cloudinaryImageId, avgRating, costForTwo, sla, cuisines } = resData?.info
    return (

        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-orange-100 hover:border-2 border-orange-400 " >

            <img className="rounded-lg h-52 w-[240px] " src={CDN_URL + cloudinaryImageId} alt="error" />

            <h3 className="font-bold py-3 text-lg" >{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString} minutes</h4>

        </div>
    )
}
export default RestaurentCard



// Higher order component
// input=> RestaurentCard  output=> promotedRestaurentCard
// export const promotedRestaurentCard = (RestaurentCard) => {
//     return (props) => {
//         return (
//             <div>
//                 <label>Promoted</label>
//                 <RestaurentCard {...props} />
//             </div>
//         )
//     }
// }
