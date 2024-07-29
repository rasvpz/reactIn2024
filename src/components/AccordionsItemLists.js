import {IMG_URL} from "../utils/constant";
const AccordionsItemLists = ({items}) => {
    return (
        <div>
        {items.map((item) => (
          <div className="mb-4 border-b-[1px] border-gray-200 flex justify-between items-start" key={item.card.info.id}>
            <div className="w-9/12">
              <span className="font-bold">{item?.card?.info?.name}</span>
              <p>
                <span className="font-bold mr-1">₹</span>
                {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}
              </p>
              <p className="mb-4 text-lg">{item?.card?.info?.description}<br /></p>
            </div>
            <div className="w-3/12">
            <div className="absolute">
                <button className="px-2 py-1 mx-16 rounded-lg bg-black shadow-lg text-white"> Add + </button>
            </div>
            <img src={IMG_URL + item?.card?.info?.imageId} className="w-full ml-4" alt={item?.card?.info?.name} />
            </div>
          </div>
        ))}
      </div>
      
    )
}
export default AccordionsItemLists