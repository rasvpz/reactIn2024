import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([])

useEffect(() => {
  fetchData()
}, [])

// axiox or fetch goes below
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setRestaurantData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  // shimmer UI example for conditional rendering
    return ( restaurantData.length ===0 ? <Shimmer /> : 
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                  const filteredData = restaurantData?.filter((res) => res?.info?.avgRating > 4.3 )
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