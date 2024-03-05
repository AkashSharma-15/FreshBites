import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    const isOnline = useOnlineStatus()

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        Online Status {isOnline ? '✅' : '🔴'}
                    </li>
                    <li >
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li >
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact'>
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to='/grocery'>
                            Grocery
                        </Link>
                    </li>
                    <li >
                        <Link to='/contact'>
                            Cart
                        </Link>
                    </li>

                    <button className="login-btn" onClick={() => {
                        btnName === "login" ? setBtnName("logout") : setBtnName("login")
                    }}>
                        {btnName}</button>
                </ul>
            </div>

        </div>
    )
}
export default Header