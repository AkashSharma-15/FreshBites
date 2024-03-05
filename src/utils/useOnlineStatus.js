import { useEffect, useState } from "react"

const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true)

    // check if online or not by event listener online
    // return bool T/F
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false)

        })

        window.addEventListener("online", () => {
            setOnlineStatus(true)
        })
    }, [])
    return onlineStatus
}

export default useOnlineStatus
