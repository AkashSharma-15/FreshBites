import { useEffect, useState } from "react"
import { MENU_API_URL } from "./constants"

const useRestaurantMenu = (resid) => {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchData()
    },[])

    // fetchdata
    const fetchData = async () => {
        const data = await fetch(MENU_API_URL + resid)
        const json = await data.json()
        setResInfo(json.data)
        console.log(json.data)


    }
    return resInfo
}

export default useRestaurantMenu
