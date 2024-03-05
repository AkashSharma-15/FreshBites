import { useEffect, useState } from "react"
import RestaurentCard from "./RestaurentCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState([])
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState("")

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const isOnline = useOnlineStatus()

    if (isOnline === false) {
        return (<h1>OOPS! looks like you are offline</h1>)
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">

            <div className="filter">

                <div className="search">

                    <input
                        type="text" className="search-box"
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}
                    />
                    <button onClick={() => {

                        const filteredres = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setFilteredRestaurants(filteredres)
                    }}>
                        search</button>
                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2)
                        setlistOfRestaurants(filteredList)
                        console.log(filteredList)
                    }}>
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-container">
                {filteredRestaurants.map((restaurant) =>
                    <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>
                        <RestaurentCard resData={restaurant} />
                    </Link>
                )}

            </div>
        </div>
    )
}
export default Body