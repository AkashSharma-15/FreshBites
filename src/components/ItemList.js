
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

                        {/* image div */}
                        <div className="w-3/12 p-4">
                            <div className="absolute">

                                {/* redux working through this  button initial ADD button */}
                                {
                                    cartItems.length === 0 &&
                                    <button className=" p-2 bg-white font-bold text-orange-600 rounded-lg shadow-lg  my-16  ml-8 border border-orange-500"
                                        onClick={() => handleAddCart(item)}
                                    >
                                        ADD
                                    </button>
                                }

                                {/* Plus button */}
                                {
                                    cartItems.length > 0 &&
                                    <button className=" p-2 bg-white font-bold text-orange-600 rounded-lg shadow-lg  my-16  ml-8 border border-orange-500"
                                        onClick={() => handleAddCart(item)}
                                    >
                                        +
                                    </button>
                                }

                                {/* number of items in cart */}

                                <span className="mx-1 text-xl font-bold">
                                    {cartItems.length > 0 && cartItems.length}
                                </span>

                                {/* remove item button */}
                                {
                                    cartItems.length > 0 &&
                                    <button className=" p-2 bg-white font-bold text-orange-600 rounded-lg shadow-lg   border border-orange-500 "
                                        onClick={() => handleRemoveCart(item)}
                                    >
                                        -
                                    </button>
                                }
                            </div>


                            <img className="w-full h-20" src={CDN_URL + item.card.info.imageId} alt="" />
                        </div>


                    </div>
                ))}
            </div>
        </div>
    )
}
export default ItemList