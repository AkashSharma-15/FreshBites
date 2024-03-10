import { CDN_URL } from "../utils/constants"
const RestaurentCard = (props) => {



    const { resData } = props
    // all info of restauarnt
    const { name, cloudinaryImageId, avgRating, costForTwo, sla, cuisines } = resData?.info
    return (

        <div className="res-card m-4 p-4 w-[250px] h-[440px] rounded-lg shadow-xl hover:border-2 border-orange-100 hover:shadow-2xl " >

            <img className="rounded-lg w-[240px] h-[200px] " src={CDN_URL + cloudinaryImageId} alt="error" />

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
