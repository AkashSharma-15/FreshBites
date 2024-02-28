import { useState } from "react"

import RestaurentCard from "./RestaurentCard"
import resList from "../utils/mockdata"


const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(resList)
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredList = resList.filter((res) => res.data.avgRating > 4)
                        setlistOfRestaurants(filteredList)
                    }}>
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {listOfRestaurants.map(restaurant =>
                    <RestaurentCard key={restaurant.data.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}
export default Body