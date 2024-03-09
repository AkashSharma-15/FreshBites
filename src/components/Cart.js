import ItemList from "./ItemList"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/Redux/cartSlice"
import { Link } from "react-router-dom"


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispath = useDispatch()
    const hanldeClear = () => {
        dispath(clearCart())
    }

    return (
        <div className="text-center m-4  p-4 shadow-xl min-h-screen">

            <div className="flex justify-center">
                <h1 className="text-2xl font-bold text-orange-600 mx-52">Cart</h1>

                {/* Add items and clear button  */}
                {cartItems.length === 0 ?
                    <Link to='/'
                        className="mx-8 p-2 rounded-lg font-bold text-white bg-orange-500 ">
                        Add Items
                    </Link>
                    :
                    <button className=" px-4 p-2 rounded-lg font-bold text-white bg-orange-500"
                        onClick={hanldeClear} >
                        Clear
                    </button>
                }

            </div>

            {/* cart items */}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems} />
            </div>
            {
                cartItems.length > 0 &&
                <div>
                    <Link to="/order">
                        <button className="px-4 p-2 rounded-lg font-bold text-white bg-orange-500">
                            Place Order
                        </button>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Cart
