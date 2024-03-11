
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import ShimmerMenu from "./ShimmerMenu"


const RestaurantMenu = () => {

    const { resid } = useParams()

    const resInfo = useRestaurantMenu(resid)

    // index for showing accordion lists
    // const [showIndex, setShowIndex] = useState(0)

    // Check if resInfo exists and has necessary properties

    if (!resInfo || !resInfo.cards || !resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card) {
        return <ShimmerMenu />;
    }
    // destructuring API data

    const { name, cuisines, avgRating, totalRatingsString, areaName,
        aggregatedDiscountInfo, costForTwoMessage, veg, availability } = resInfo?.cards[0]?.card?.card?.info;
    console.log(resInfo?.cards[0]?.card?.card?.info)




    // menu items

    // const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card

    // filtering categories

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) =>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    // console.log('categories', categories)

    return (
        // above content of restaurent menu
        <div className=" my-8  ">
            <div className="w-full flex justify-center">
                <div className="w-6/12 restaurant-info my-8">
                    <div className="font-bold text-xl text-center">
                        {name}
                        <span className="mx-2">{veg ? "🟢" : "🅾️"}</span>
               
                        </div>

                    <p className="text-center text-sm text-zinc-600 mt-1">{avgRating}★ {totalRatingsString}</p>
                    <p className="text-center text-sm text-zinc-600">{cuisines.join(", ")}</p>
                    <p className="text-center text-sm text-zinc-600">{areaName}</p>
                    <p className="my-2 text-zinc-600">
                        ---------------------------------------------------------------------------------------------------------
                    </p>
                    <p className="text-center text-zinc-600 text-xl font-bold">{costForTwoMessage}</p>
                    <div className="flex justify-center my-4">
                        <p className="border-2 p-4 rounded-lg text-zinc-600 mr-4 cursor-pointer">{aggregatedDiscountInfo.descriptionList[0].meta}</p>
                        <p className="border-2 p-4 rounded-lg text-zinc-600 cursor-pointer">{aggregatedDiscountInfo.descriptionList[1].meta}</p>
                    </div>
                </div>
            </div>


            {/* categories accordion */}
            {
                categories.map((category) =>
                    <RestaurantCategory
                        data={category?.card?.card}
                        key={category?.card?.card?.title}
                    //showItems={index === showIndex ? true : false}
                    // setShowIndex={() => setShowIndex(index)}
                    />
                )
            }
        </div>
    )
}

export default RestaurantMenu

