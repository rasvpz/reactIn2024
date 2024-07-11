import restaurants from "../utils/reData"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react"

const Body = () => {
  let [restaurantData, setRestaurantData] = useState(restaurants)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                  const filteredData = restaurants?.filter((res) => res?.info?.avgRating > 4 )
                  setRestaurantData(filteredData)
                }}>Top rated restaurant</button>
            </div>
            <div className="res-container">
            {restaurantData.map((restList) => (
                <RestaurantCard  key={restList.info.id} resData={restList} />
                ))}
            </div>
        </div>
    )
}
export default Body