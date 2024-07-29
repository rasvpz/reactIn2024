import AccordionsItemLists from "./AccordionsItemLists";

const RestaurantCategory = (data) => {
    const downArrowhead = '\u25BC';
    return (
        <div>
          <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between">
            <span className="font-bold text-lg">
                {data?.data?.title} ({data?.data?.itemCards?.length})
            </span>
            <span>{downArrowhead}</span>
            </div>
            <AccordionsItemLists items = {data?.data?.itemCards}/>
          </div>
        </div>
    )
}

export default RestaurantCategory