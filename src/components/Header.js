import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    const isOnline = useOnlineStatus()

    return (
        <div className="flex justify-between shadow-lg mb-2 bg-pink-100 sm:bg-yellow-100 lg:bg-white">
            <div className="logo-container flex items-center">
                <img className="w-20 py-4  mx-2" src={LOGO_URL} alt="" />
                <h1 className="text-orange-600 text-xl font-bold font-style: italic">FreshBites</h1>
            </div>


            <div className="flex items-center ">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4 text-xl font-bold text-orange-600">
                        Online Status {isOnline ? '✅' : '🔴'}
                    </li>
                    <li className="px-4 text-xl font-bold text-orange-600" >
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="px-4 text-xl  font-bold text-orange-600" >
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li className="px-4 text-xl  font-bold text-orange-600" >
                        <Link to='/contact'>
                            Contact Us
                        </Link>
                    </li>
                    <li className="px-4 text-xl  font-bold text-orange-600" >
                        <Link to='/grocery'>
                            Grocery
                        </Link>
                    </li>
                    <li className="px-4  text-xl  font-bold text-orange-600" >
                        <Link to='/contact'>
                            Cart
                        </Link>
                    </li>

                    <button className="login-btn px-4 bg-red-200 rounded-lg" onClick={() => {
                        btnName === "login" ? setBtnName("logout") : setBtnName("login")
                    }}>
                        {btnName}</button>
                </ul>
            </div>

        </div>
    )
}
export default Header