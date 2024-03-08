import { useContext, useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"
const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    const data = useContext(UserContext)
   

    return (
        <div className="flex justify-between shadow-lg mb-2 bg-white">
            <div className="logo-container flex items-center">
                <Link to="/"> <img className="w-20 py-4  mx-2" src={LOGO_URL} alt="" /></Link>
                <h1 className="text-orange-600 text-xl font-bold font-style: italic">FreshBites</h1>
            </div>


            <div className="flex items-center ">
                <ul className="flex p-4 m-4 ">
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

                    <button className=" border-2 border-orange-500 px-4 text-orange-600 rounded-lg font-bold hover:bg-orange-600 hover:text-white "
                        onClick={() => {
                            btnName === "login" ? setBtnName("logout") : setBtnName("login")
                        }}>
                        {btnName}
                    </button>

                    <li className="px-4  text-xl  font-bold text-orange-600" >
                        <Link to='/contact'>
                            {data.loggedInUser}
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Header