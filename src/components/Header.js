import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    // useSelector hook for accessing redux store or subscribing the store
    const cartItems = useSelector((store) => store.cart.items)



    return (
        <div className="flex justify-between shadow-lg mb-2 bg-white">
            <div className="logo-container flex items-center ml-4">

                <Link to="/"> <img className="w-20 py-4  mx-2" src={LOGO_URL} alt="" /></Link>
                <h1 className="text-orange-600 text-xl font-bold font-style: italic px-4">FreshBites..</h1>
            </div>

            <div className="flex items-center ">
                <ul className="flex p-4 m-4 ">
                    <li className="px-10 text-xl font-bold text-orange-600" >
                        <Link to='/'>
                            Home
                        </Link>
                    </li>

                    <li className="px-10 text-xl  font-bold text-orange-600" >
                        <Link to='/about'>
                            About
                        </Link>
                    </li>

                    <li className="px-10 text-xl  font-bold text-orange-600" >
                        <Link to='/cart'>
                            Cart
                            {cartItems.length > 0 &&
                                <span className="text-white bg-red-600 px-2  rounded-lg absolute top-8  ">{cartItems.length}</span>
                            }
                        </Link>
                    </li>

                    <li className="px-10">
                        <Link to="/login">
                            <button className=" px-2 text-xl text-orange-600 rounded-lg font-bold  ">
                                login
                            </button>
                        </Link>

                        <Link to="/signup">
                            <button className=" px-2 text-xl text-orange-600 rounded-lg font-bold  ">
                                SignUp
                            </button>
                        </Link>
                    </li>


                </ul>
            </div>

        </div>
    )
}
export default Header