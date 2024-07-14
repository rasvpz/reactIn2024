import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchMe, setSearchMe] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantData(restaurants);
    setFilteredData(restaurants); // Set both original and filtered data
  };

  const handleSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearchMe(searchText);
    if (searchText) {
      const filtered = restaurantData.filter((res) => res?.info?.name.toLowerCase().includes(searchText));
      setFilteredData(filtered);
    } else {
      setFilteredData(restaurantData); // Reset to original data when search is cleared
    }
  };

  const handleFilter = () => {
    const avrageRatingData = restaurantData.filter((res) => res?.info?.avgRating > 3);
    setFilteredData(avrageRatingData);
  };

  return (
    filteredData.length === 0 ? <Shimmer /> : 
    <div className="body">
      <div className="filter">
        <div className="search">
          <input 
            type="text" 
            className="searchme" 
            value={searchMe} 
            onChange={handleSearch}
          />
        </div>
        <button className="filter-btn" onClick={handleFilter}>Top rated restaurant</button>
      </div>
      <div className="res-container">
        {filteredData.map((restList) => (
          <RestaurantCard key={restList.info.id} resData={restList} />
        ))}
      </div>
    </div>
  );
}

export default Body;
