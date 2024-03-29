
// accordion item lists below title
import { CDN_URL } from "../utils/constants"

import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "../utils/Redux/cartSlice"

const ItemList = ({ items }) => {


    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems.length)

    const dispatch = useDispatch()
    // add cart button
    const handleAddCart = (item) => {
        // dispatch an action
        dispatch(addItem(item))
    }

    // remove cart button
    const handleRemoveCart = (item) => {
        dispatch(removeItem(item))
    }

    // check whether cart empty or not
    const isInCart = (itemId) => {
        // some method will return true or false if any item exist
        return cartItems.some((item) => item.card.info.id === itemId)
    }
    return (
        <div>
            <div>
                {/*  Menu Accordion Body */}

                {items.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-orange-200 border-b-2  
                    text-left flex justify-between">

                        {/* info div */}
                        <div className="w-9/12">
                            <div className="py-2">
                                <span> {item.card.info.name}</span>
                                <span>-₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span>

                            </div>
                            <p className="text-xs text-zinc-600">{item.card.info.description}</p>
                        </div>


                        {/* cart button working */}
                        <div className="w-3/12 p-4">
                            <div className="absolute bg">
                                {/* redux working through this  button initial ADD button */}

                                {
                                    !isInCart(item.card.info.id) &&
                                    <button className=" p-2 bg-white font-bold text-orange-600 rounded-lg shadow-lg  my-16  ml-8 "
                                        onClick={() => handleAddCart(item)}
                                    >
                                        ADD
                                    </button>
                                }

                                {/* Plus button Quantity value and minus button*/}
                                {
                                    isInCart(item.card.info.id) &&
                                    <div className=" bg-white rounded-lg shadow-lg  my-16 mx-6">
                                        <button className="p-2 bg-transparent text-orange-600 rounded-full focus:outline-none"
                                            onClick={() => handleRemoveCart(item)}
                                        >
                                            -
                                        </button>

                                        <span className="mx-2 text-xl font-bold text-orange-600">
                                            {cartItems.find((cartItem) => cartItem.card.info.id === item.card.info.id)?.quantity || 0}
                                        </span>

                                        <button className="p-2 bg-transparent text-orange-600 rounded-full focus:outline-none"
                                            onClick={() => handleAddCart(item)}
                                        >
                                            +
                                        </button>
                                    </div>


                                }
                            </div>

                            {/* image div */}
                            <img className="w-full h-20" src={CDN_URL + item.card.info.imageId} alt="" />
                        </div>


                    </div>
                ))}
            </div>
        </div>
    )
}
export default ItemList