// accordion item lists below title
import { CDN_URL } from "../utils/constants"
const ItemList = ({ items }) => {

    return (
        <div>
            <div>
                {items.map((item) => (
                    <div key={item.card.info.id} className="p-2 m-2 border-orange-300 border-b-2  
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
                                <button className=" p-2 bg-white font-bold text-orange-600 rounded-lg shadow-lg  my-16  mx-8 border border-orange-500">
                                    Add+
                                </button>
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