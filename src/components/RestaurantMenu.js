import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {

    const { resid } = useParams()

    const resInfo = useRestaurantMenu(resid)

    // Check if resInfo exists and has necessary properties
    if (resInfo === null) {
        return <Shimmer />;
    }

    // destructuring API data
    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    // menu items
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card
    

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>

            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -
                        ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu


// const fetchMenu = async () => {
//     const data = await fetch(MENU_API_URL + resid)
//     const json = await data.json()
//     setResInfo(json.data)
//     console.log("Restaurant menu")
//     console.log(json)
// }

