import { useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"


const RestaurantMenu = () => {

    const { resid } = useParams()

    const resInfo = useRestaurantMenu(resid)

    // index for showing accordion lists
    const [showIndex, setShowIndex] = useState(0)

    // Check if resInfo exists and has necessary properties

    if (!resInfo || !resInfo.cards || !resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card) {
        return <Shimmer />;
    }
    // destructuring API data

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    // menu items

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card

    // filtering categories

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    // console.log('categories', categories)

    return (
        <div className="text-center">
            <h1 className="font-bold text-xl my-6">{name}</h1>
            <p className="text-lg font-bold">{cuisines.join(", ")} - {costForTwoMessage} </p>

            {/* categories accordion */}
            {
                categories.map((category, index) =>
                    <RestaurantCategory
                        data={category?.card?.card}
                        key={category?.card?.card?.title}
                        showItems={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex(index)}
                    />
                )
            }
        </div>
    )
}

export default RestaurantMenu

