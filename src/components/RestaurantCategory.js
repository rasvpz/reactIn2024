import { useState } from "react";
import AccordionsItemLists from "./AccordionsItemLists";

const RestaurantCategory = ({data,showItem, setShowIndex}) => {
    // const  [hideShow, setHideShow] = useState(showItem)

    const showHide = () => {
        setShowIndex()
    }

    const downArrowhead = '\u25BC';
    return (
        <div>
          <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={showHide}>
            <span className="font-bold text-lg">
                {data?.title} ({data?.itemCards?.length})
            </span>
            <span>{showItem ? downArrowhead : "^"}</span>
            </div>
            {showItem && <AccordionsItemLists items = {data?.itemCards} label={"Add +"}/>}
          </div>
        </div>
    )
}

export default RestaurantCategory