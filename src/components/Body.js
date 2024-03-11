import { useContext, useEffect, useState } from "react"
import RestaurentCard from "./RestaurentCard"
import Shimmer from "./Shimmer"
import { Link, json } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { CDN_URL } from "../utils/constants"
const Body = () => {

    // Actual list
    const [listOfRestaurants, setlistOfRestaurants] = useState([])

    // copy of list
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    // search input
    const [searchText, setSearchText] = useState("")

    // for upper heading 
    const [heading, setHeading] = useState("")

    // for upper images
    const [image, setImage] = useState(null)
    
    // API CALL
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()
        setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log("Body rendered", json?.data?.cards[0]?.card?.card?.header?.title)
        // console.log("Body rendered", CDN_URL + json?.data?.cards[0]?.card?.card?.imageGridCards?.info[0].imageId)
        setImage(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        setHeading(json?.data?.cards[0]?.card?.card?.header?.title)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const isOnline = useOnlineStatus()

    if (isOnline === false) {
        return (<h1>OOPS! looks like you are offline</h1>)
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body mx-20 ">

            {/* images and whats on your mind */}
            <div className="my-8">
                <h1 className="text-xl font-bold text-orange-600">Hey, {heading}</h1>

                {/* .image div */}
                <div className="flex mt-2 flex-wrap">
                    {
                        image.map((img) =>
                            <img className="w-24" key={img.id}
                                src={CDN_URL + img.imageId}></img>)
                    }
                </div>
            </div>


            {/* lower section below images from search and all */}

            <div className="filter flex">

                {/* search div */}
                <div className=" search m-4 p-4">

                    {/* search input */}
                    <input
                        type="text" className="border border-solid border-orange-400 hover:border-orange-600 rounded-lg p-1 "
                        value={searchText}
                        onChange={(e) => { setSearchText(e.target.value) }}
                    />
                    {/* serach button */}
                    <button className="px-4 py-2 bg-orange-200 m-4 rounded-xl fond-bold hover:border border-orange-500"
                        onClick={() => {

                            const filteredres = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                            setFilteredRestaurants(filteredres)
                        }}>
                        Search</button>
                </div>


                {/* top reated div */}
                <div className="topRated  p-4 flex items-center">
                    {/* top rated rest button */}
                    <button
                        className="filter-btn px-2 py-2  bg-orange-200 rounded-xl fond-bold hover:border border-orange-500"
                        onClick={() => {
                            let filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2)
                            setlistOfRestaurants(filteredList)
                        }}>
                        Top Rated Restaurants
                    </button>

                    {/* context  example
                    <input type="text" className="border border-black mx-4 p-2" value={loggedInUser}
                        onChange={(e) => setUserName(e.target.value)}
                    /> */}

                </div>
            </div>


            {/* data display of restaurants */}
            <div className="flex flex-wrap ">

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