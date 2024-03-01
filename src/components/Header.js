import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>

            <div className="nav-items">
                <ul>
                    <li className="link"><Link to='/'>Home</Link></li>
                    <li className="link"><Link to='/about'>About</Link></li>
                    <li className="link"><Link to='/contact'>Contact Us</Link></li>
                    <li className="link"><Link to='/contact'>Cart</Link></li>

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