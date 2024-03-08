
import ItemList from "./ItemList"

// Accordion title component
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick = () => {
        setShowIndex()
    }

    return (
        <div>
            {/* Accordion header */}
            <div className="w-6/12 bg-orange-100 shadow-lg p-4 mx-auto my-4 ">

                <div className="flex justify-between cursor-pointer" onClick={handleClick}   >

                    <span className="font-bold text-lg " >
                        {data.title} [{data.itemCards.length}]
                    </span>
                    <span  >
                        <h1 className="text-xl font-bold   ">⬇</h1>
                    </span>

                </div>
                {/* accordion body hidden list */}
                {
                    showItems && <ItemList items={data.itemCards} />
                }
            </div>


        </div>
    )
}

export default RestaurantCategory
